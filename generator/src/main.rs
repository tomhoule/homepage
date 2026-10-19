use askama::Template;
use serde::de::DeserializeSeed;
use std::{
    backtrace::Backtrace, cmp::Reverse, collections::HashSet, ffi::OsStr, fmt, fs, path::Path,
    process::Stdio,
};

const BACKGROUND_SCRIPT: &str = include_str!("../static/background.js");
const BLOG_DIR_PATH: &str = "./content/blog";
const STYLESHEET: &str = include_str!("../static/styles.css");
const SITE_URL: &str = "https://tomhoule.com";
// Feed item identifiers must remain stable when the canonical hostname changes.
const RSS_GUID_BASE: &str = "https://www.tomhoule.com";

fn main() {
    let output = std::env::args_os()
        .nth(1)
        .unwrap_or_else(|| "public".into());
    if let Err(err) = generate(Path::new(&output)) {
        eprintln!("{err}");
        std::process::exit(1);
    }
}

fn generate(output: &Path) -> Result {
    let blog = fs::read_dir(BLOG_DIR_PATH).map_err(ErrorReport::context("Reading blog dir"))?;

    let mut metadata = MetadataCollection::default();
    let mut html_content = String::with_capacity(1024);
    let mut rss_posts = Vec::new();

    for entry in blog {
        let entry = entry.map_err(ErrorReport::context("Reading blog entry"))?;
        let file_path = entry.path();

        if file_path.extension() != Some(OsStr::new("typ")) {
            continue;
        }

        if file_path.file_name() == Some(OsStr::new("lib.typ")) {
            continue;
        }

        compile_typst(&file_path, &mut html_content)?;
        extract_metadata(&mut metadata, &mut html_content)?;

        let blog_metadata = metadata.blog.last().unwrap();

        if blog_metadata.draft {
            continue;
        }

        rss_posts.push(RssPost {
            title: metadata[blog_metadata.title].to_owned(),
            slug: metadata[blog_metadata.slug].to_owned(),
            pub_date: blog_metadata.date.rss_date(),
            content: html_content.clone(),
            date: blog_metadata.date,
        });
    }

    validate_paths(&metadata)?;
    fs::create_dir_all(output).context("Creating output directory")?;
    copy_static(Path::new("static"), output)?;
    for (post, content) in metadata
        .blog
        .iter()
        .filter(|post| !post.draft)
        .zip(&rss_posts)
    {
        generate_blog_post_html(output, &metadata, post, &content.content)?;
    }
    generate_aliases(output, &metadata)?;
    generate_index_html(output, &metadata)?;
    generate_sitemap(output, &metadata)?;
    generate_rss(output, &mut rss_posts)?;

    fs::write(output.join("background.js"), BACKGROUND_SCRIPT)
        .context("Writing background script")?;
    fs::write(output.join("styles.css"), STYLESHEET).context("Writing stylesheet")?;

    Ok(())
}

fn copy_static(source: &Path, destination: &Path) -> Result {
    for entry in fs::read_dir(source).context("Reading static directory")? {
        let entry = entry.context("Reading static entry")?;
        let file_type = entry.file_type().context("Reading static entry type")?;
        let target = destination.join(entry.file_name());
        if file_type.is_dir() {
            fs::create_dir_all(&target).context("Creating static directory")?;
            copy_static(&entry.path(), &target)?;
        } else if file_type.is_file() {
            fs::copy(entry.path(), target).context("Copying static asset")?;
        } else {
            return Err(ErrorReport::new("Unsupported static asset type"));
        }
    }
    Ok(())
}

fn generate_index_html(output: &Path, metadata: &MetadataCollection) -> Result {
    #[derive(askama::Template)]
    #[template(path = "index.html")]
    struct IndexTemplate<'a> {
        posts: Vec<IndexPost<'a>>,
    }

    struct IndexPost<'a> {
        title: &'a str,
        date: Date,
        slug: &'a str,
    }

    let mut blog_posts = metadata
        .blog
        .iter()
        .filter(|post| !post.draft)
        .collect::<Vec<_>>();
    blog_posts.sort_unstable_by_key(|post| Reverse(post.date));

    let posts = blog_posts
        .into_iter()
        .map(|post| IndexPost {
            title: &metadata[post.title],
            date: post.date,
            slug: &metadata[post.slug],
        })
        .collect();

    let mut target =
        std::fs::File::create(output.join("index.html")).context("Opening index target file")?;

    IndexTemplate { posts }
        .write_into(&mut target)
        .context("Rendering index template")?;

    Ok(())
}

fn generate_sitemap(output: &Path, metadata: &MetadataCollection) -> Result {
    #[derive(askama::Template)]
    #[template(path = "sitemap.xml")]
    struct SitemapTemplate<'a> {
        posts: Vec<&'a str>,
    }

    let mut posts: Vec<&str> = metadata
        .blog
        .iter()
        .filter(|post| !post.draft)
        .map(|post| &metadata[post.slug])
        .collect();
    posts.sort_unstable();
    let mut target =
        fs::File::create(output.join("sitemap.xml")).context("Opening sitemap target file")?;
    SitemapTemplate { posts }
        .write_into(&mut target)
        .context("Rendering sitemap")?;

    Ok(())
}

struct RssPost {
    title: String,
    slug: String,
    pub_date: String,
    content: String,
    date: Date,
}

fn generate_rss(output: &Path, posts: &mut [RssPost]) -> Result {
    #[derive(askama::Template)]
    #[template(path = "rss.xml")]
    struct RssTemplate<'a> {
        posts: &'a [RssPost],
        feed_url: &'a str,
        channel_title: &'a str,
        last_build_date: Option<&'a str>,
    }

    posts.sort_unstable_by(|a, b| b.date.cmp(&a.date).then_with(|| a.slug.cmp(&b.slug)));
    let last_build_date = posts.first().map(|post| post.pub_date.as_str());

    fs::create_dir_all(output.join("blog")).context("Creating blog feed directory")?;
    for (path, channel_title) in [
        ("index.xml", "Tom Houlé's homepage"),
        (
            "blog/index.xml",
            "Latest posts on Tom Houlé's homepage",
        ),
    ] {
        let feed_url = format!("{SITE_URL}/{path}");
        let mut target = fs::File::create(output.join(path)).context("Opening RSS target file")?;
        RssTemplate {
            posts,
            feed_url: &feed_url,
            channel_title,
            last_build_date,
        }
        .write_into(&mut target)
        .context("Rendering RSS feed")?;
    }
    Ok(())
}

fn generate_blog_post_html(
    output: &Path,
    metadata: &MetadataCollection,
    blog_metadata: &BlogMetadata,
    html_content: &str,
) -> Result {
    #[derive(askama::Template)]
    #[template(path = "post.html")]
    struct PostTemplate<'a> {
        title: &'a str,
        slug: &'a str,
        date: Date,
        content: &'a str,
    }

    let target_path = output.join(&metadata[blog_metadata.slug]);
    std::fs::create_dir_all(&target_path).context("Creating blog post directory")?;
    let mut target = std::fs::File::create(target_path.join("index.html"))
        .context("Opening HTML blog post target file")?;

    PostTemplate {
        title: &metadata[blog_metadata.title],
        slug: &metadata[blog_metadata.slug],
        date: blog_metadata.date,
        content: html_content,
    }
    .write_into(&mut target)
    .context("Rendering blog post template")?;

    Ok(())
}

fn generate_aliases(output: &Path, metadata: &MetadataCollection) -> Result {
    #[derive(askama::Template)]
    #[template(path = "alias.html")]
    struct AliasTemplate<'a> {
        canonical_url: &'a str,
    }

    let published = metadata.blog.iter().filter(|post| !post.draft);
    let mut aliases = Vec::new();
    for post in published {
        let canonical_url = format!("{SITE_URL}/{}/", &metadata[post.slug]);
        for alias in &post.aliases {
            let path = alias.trim_start_matches('/').trim_end_matches('/');
            aliases.push((path.to_owned(), canonical_url.clone()));
        }
    }
    aliases.push(("blog".to_owned(), format!("{SITE_URL}/")));
    for (path, canonical_url) in aliases {
        let directory = output.join(path);
        fs::create_dir_all(&directory).context("Creating blog post alias directory")?;
        let mut target = fs::File::create(directory.join("index.html"))
            .context("Opening blog post alias target file")?;
        AliasTemplate {
            canonical_url: &canonical_url,
        }
        .write_into(&mut target)
        .context("Rendering blog post alias")?;
    }
    Ok(())
}

fn validate_paths(metadata: &MetadataCollection) -> Result {
    let published = metadata.blog.iter().filter(|post| !post.draft);
    let mut paths = HashSet::new();
    paths.insert(String::new()); // The homepage is already generated.
    paths.insert("blog".to_owned()); // The former blog index redirects to the homepage.
    for post in published.clone() {
        let slug = &metadata[post.slug];
        if !valid_page_path(slug) || !paths.insert(slug.to_owned()) {
            return Err(ErrorReport::new("Invalid or duplicate blog post slug"));
        }
    }

    for post in published {
        for alias in &post.aliases {
            let Some(path) = alias.strip_prefix('/').and_then(|s| s.strip_suffix('/')) else {
                return Err(ErrorReport::new("Alias must be an absolute directory URL"));
            };
            if !valid_page_path(path) || !paths.insert(path.to_owned()) {
                return Err(ErrorReport::new("Invalid or duplicate blog post alias"));
            }
        }
    }
    Ok(())
}

fn valid_page_path(path: &str) -> bool {
    !path.is_empty()
        && path.split('/').all(|part| {
            !part.is_empty()
                && part != "."
                && part != ".."
                && part
                    .bytes()
                    .all(|b| b.is_ascii_alphanumeric() || b == b'-' || b == b'_')
        })
}

#[cfg(test)]
mod tests {
    use super::{BlogMetadata, Date, MetadataCollection, valid_page_path, validate_paths};

    #[test]
    fn only_safe_directory_paths_are_accepted() {
        assert!(valid_page_path("2018/graphql-client-talk"));
        assert!(valid_page_path("graphql-client-talk"));
        for path in [
            "",
            "/absolute",
            "trailing/",
            "a//b",
            ".",
            "../outside",
            "a/../b",
            "a.html",
        ] {
            assert!(!valid_page_path(path), "{path}");
        }
    }

    #[test]
    fn published_paths_are_checked_before_writing_output() {
        let mut metadata = MetadataCollection::default();
        let title = metadata.insert_str("Post");
        let slug = metadata.insert_str("../outside");
        metadata.blog.push(BlogMetadata {
            title,
            date: Date {
                year: 2026,
                month: 1,
                day: 1,
            },
            slug,
            draft: false,
            aliases: Vec::new(),
        });
        assert!(validate_paths(&metadata).is_err());

        let safe_slug = metadata.insert_str("safe-post");
        metadata.blog[0].slug = safe_slug;
        metadata.blog[0].aliases.push("/safe-post/".to_owned());
        assert!(validate_paths(&metadata).is_err());
    }

    #[test]
    fn rss_dates_have_rfc_822_weekdays() {
        assert_eq!(
            Date {
                year: 2026,
                month: 1,
                day: 6
            }
            .rss_date(),
            "Tue, 06 Jan 2026 00:00:00 +0000"
        );
        assert_eq!(
            Date {
                year: 2024,
                month: 2,
                day: 29
            }
            .rss_date(),
            "Thu, 29 Feb 2024 00:00:00 +0000"
        );
    }
}

fn extract_metadata(metadata: &mut MetadataCollection, content: &mut String) -> Result<()> {
    use html5gum::emitters::callback::{CallbackEmitter, CallbackEvent};

    let mut body_start = None;
    let mut body_end = None;

    let mut in_meta = false;
    let mut attribute_name: &[u8] = b"";
    let mut in_blog_post = false;
    let mut meta_content = None;

    let result = {
        let emitter = CallbackEmitter::<_, _, usize>::new({
            let body_start = &mut body_start;
            let body_end = &mut body_end;

            move |event: CallbackEvent<'_>, span: html5gum::Span<usize>| -> Option<Result> {
                match event {
                    CallbackEvent::OpenStartTag { name } if name == b"meta" => {
                        in_meta = true;
                    }
                    CallbackEvent::AttributeName { name } if in_meta => match name {
                        b"itemprop" => attribute_name = b"itemprop",
                        b"content" => attribute_name = b"content",
                        _ => (),
                    },
                    CallbackEvent::AttributeValue { value } => match attribute_name {
                        b"itemprop" if value == b"blog-post-metadata" => in_blog_post = true,
                        b"content" => meta_content = Some(value.to_owned()),
                        _ => (),
                    },
                    CallbackEvent::CloseStartTag { self_closing: _ } if in_meta => {
                        if let Some(content_attr_value) = meta_content.take()
                            && in_blog_post
                        {
                            in_meta = false;
                            in_blog_post = false;
                            *body_start = Some(span.end);

                            let mut deserializer =
                                serde_json::de::Deserializer::from_slice(&content_attr_value);

                            return Some(
                                DeserializeMetadata(metadata)
                                    .deserialize(&mut deserializer)
                                    .context("Deserializing metadata"),
                            );
                        } else {
                            in_meta = false;
                            in_blog_post = false;
                        }
                    }
                    CallbackEvent::EndTag { name } if name == b"body" => {
                        *body_end = Some(span.start);
                    }
                    _ => (),
                };

                None
            }
        });

        let mut tokenizer = html5gum::Tokenizer::new_with_emitter(content.as_str(), emitter);

        if let Some(Ok(result)) = tokenizer.next() {
            assert!(tokenizer.next().is_none());

            result
        } else {
            Err(ErrorReport::new("Failed to locate metadata"))
        }
    };

    if let Some((start, end)) = body_start.zip(body_end) {
        content.truncate(end);
        content.drain(..start);
    } else {
        return Err(ErrorReport::new("Failed to locate body"));
    };

    result
}

type Result<T = (), E = ErrorReport> = std::result::Result<T, E>;

struct ErrorReport {
    source: Option<Box<dyn std::error::Error>>,
    context: &'static str,
    backtrace: Backtrace,
}

impl fmt::Debug for ErrorReport {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("ErrorReport")
            .field("source", &self.source)
            .field("context", &self.context)
            .field("backtrace", &self.backtrace)
            .finish()
    }
}

impl fmt::Display for ErrorReport {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        if let Some(source) = self.source.as_ref() {
            fmt::Display::fmt(source, f)?;
            f.write_str("\nContext: ")?;
        }

        f.write_str(self.context)?;
        f.write_str("\nBacktrace:\n")?;
        fmt::Display::fmt(&self.backtrace, f)?;

        Ok(())
    }
}

impl ErrorReport {
    pub(crate) fn new(context: &'static str) -> Self {
        Self {
            source: None,
            context,
            backtrace: Backtrace::force_capture(),
        }
    }
    pub(crate) fn context<E>(context: &'static str) -> impl FnOnce(E) -> ErrorReport
    where
        E: std::error::Error + 'static,
    {
        move |err| ErrorReport {
            source: Some(err.into()),
            context,
            backtrace: Backtrace::force_capture(),
        }
    }
}

trait ResultExt {
    type Ok;
    fn context(self, context: &'static str) -> Result<Self::Ok>;
}

impl<T, E> ResultExt for Result<T, E>
where
    E: std::error::Error + 'static,
{
    type Ok = T;
    fn context(self, context: &'static str) -> Result<T> {
        self.map_err(ErrorReport::context(context))
    }
}

fn compile_typst(file_path: &Path, html: &mut String) -> Result {
    let mut cmd = std::process::Command::new("typst");

    cmd.args(["compile", "--format=html", "--features=html"])
        .arg(file_path)
        .arg("-")
        .stderr(Stdio::inherit());

    let output = cmd.output().context("Running typst")?;
    if !output.status.success() {
        return Err(ErrorReport::new("Typst compilation failed"));
    }
    *html = String::from_utf8(output.stdout).context("Decoding Typst HTML")?;

    Ok(())
}

#[derive(Default)]
struct MetadataCollection {
    blog: Vec<BlogMetadata>,
    strings_buf: String,
}

impl std::ops::Index<StringId> for MetadataCollection {
    type Output = str;

    fn index(&self, string_id: StringId) -> &Self::Output {
        &self.strings_buf[string_id.start..string_id.end]
    }
}

struct DeserializeMetadata<'a>(&'a mut MetadataCollection);

impl<'de> DeserializeSeed<'de> for DeserializeMetadata<'_> {
    type Value = ();

    fn deserialize<D>(self, deserializer: D) -> std::prelude::v1::Result<Self::Value, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        struct BlogMetadataVisitor<'de>(&'de mut MetadataCollection);

        impl<'de, 'a> serde::de::Visitor<'de> for BlogMetadataVisitor<'a> {
            type Value = BlogMetadata;

            fn visit_map<A>(self, mut map: A) -> std::prelude::v1::Result<Self::Value, A::Error>
            where
                A: serde::de::MapAccess<'de>,
            {
                let mut title = None;
                let mut date = None;
                let mut slug = None;
                let mut draft = None;
                let mut aliases = None;

                while let Some(key) = map.next_key::<&str>()? {
                    match key {
                        "title" => title = Some(map.next_value_seed(StringVisitor(self.0))?),
                        "date" => date = Some(map.next_value()?),
                        "slug" => slug = Some(map.next_value_seed(StringVisitor(self.0))?),
                        "draft" => draft = Some(map.next_value()?),
                        "aliases" => aliases = Some(map.next_value()?),
                        _ => {
                            // Ignore unknown fields
                            map.next_value::<serde_json::Value>()?;
                        }
                    }
                }

                let Some((((title, date), slug), draft)) = title.zip(date).zip(slug).zip(draft)
                else {
                    return Err(serde::de::Error::custom("missing required fields"));
                };

                Ok(BlogMetadata {
                    title,
                    date,
                    slug,
                    draft,
                    aliases: aliases.unwrap_or_default(),
                })
            }

            fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
                formatter.write_str("a blog metadata object")
            }
        }

        struct StringVisitor<'a>(&'a mut MetadataCollection);

        impl<'de, 'a> serde::de::DeserializeSeed<'de> for StringVisitor<'a> {
            type Value = StringId;

            fn deserialize<D>(
                self,
                deserializer: D,
            ) -> std::prelude::v1::Result<Self::Value, D::Error>
            where
                D: serde::Deserializer<'de>,
            {
                deserializer.deserialize_str(self)
            }
        }

        impl<'de, 'a> serde::de::Visitor<'de> for StringVisitor<'a> {
            type Value = StringId;

            fn visit_borrowed_str<E>(self, v: &'de str) -> Result<Self::Value, E>
            where
                E: serde::de::Error,
            {
                let id = self.0.insert_str(v);
                Ok(id)
            }

            fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
                formatter.write_str("a string")
            }
        }

        let metadata = deserializer.deserialize_struct(
            std::any::type_name::<BlogMetadata>(),
            &[],
            BlogMetadataVisitor(self.0),
        )?;

        self.0.blog.push(metadata);

        Ok(())
    }
}

impl MetadataCollection {
    fn insert_str(&mut self, string: &str) -> StringId {
        let string_id = {
            let start = self.strings_buf.len();
            StringId {
                start,
                end: start + string.len(),
            }
        };

        self.strings_buf.push_str(string);

        string_id
    }
}

#[derive(Clone, Debug, Copy)]
struct StringId {
    start: usize,
    end: usize,
}

struct BlogMetadata {
    title: StringId,
    date: Date,
    slug: StringId,
    draft: bool,
    aliases: Vec<String>,
}

#[derive(Clone, Copy, Eq, Ord, PartialEq, PartialOrd)]
struct Date {
    year: u16,
    month: u8,
    day: u8,
}

impl fmt::Display for Date {
    fn fmt(&self, formatter: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            formatter,
            "{:04}-{:02}-{:02}",
            self.year, self.month, self.day
        )
    }
}

impl Date {
    fn rss_date(self) -> String {
        // Gregorian weekday (Sunday = 0).
        const MONTH_OFFSETS: [i32; 12] = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        const WEEKDAYS: [&str; 7] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const MONTHS: [&str; 12] = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ];
        let mut year = i32::from(self.year);
        if self.month < 3 {
            year -= 1;
        }
        let weekday = (year + year / 4 - year / 100
            + year / 400
            + MONTH_OFFSETS[usize::from(self.month - 1)]
            + i32::from(self.day))
        .rem_euclid(7) as usize;
        format!(
            "{}, {:02} {} {:04} 00:00:00 +0000",
            WEEKDAYS[weekday],
            self.day,
            MONTHS[usize::from(self.month - 1)],
            self.year
        )
    }
}

impl<'de> serde::de::Deserialize<'de> for Date {
    fn deserialize<D>(deserializer: D) -> std::prelude::v1::Result<Self, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        struct Visitor;

        impl<'de> serde::de::Visitor<'de> for Visitor {
            type Value = Date;

            fn visit_str<E>(self, v: &str) -> std::prelude::v1::Result<Self::Value, E>
            where
                E: serde::de::Error,
            {
                let mut parts = v.split('-');

                let year = parts
                    .next()
                    .and_then(|s| s.parse().ok())
                    .ok_or(E::custom("expected year"))?;

                let month = parts
                    .next()
                    .and_then(|s| s.trim_start_matches('0').parse().ok())
                    .ok_or(E::custom("expected month"))?;

                let day = parts
                    .next()
                    .and_then(|s| s.trim_start_matches('0').parse().ok())
                    .ok_or(E::custom("expected day"))?;

                if parts.next().is_some() {
                    return Err(E::custom("unexpected extra part"));
                }

                Ok(Date { year, month, day })
            }

            fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
                formatter.write_str("a date string")
            }
        }

        deserializer.deserialize_str(Visitor)
    }
}

const _: () = {
    assert!(std::mem::size_of::<Date>() == 4);
};
