use askama::Template;
use serde::de::DeserializeSeed;
use std::{
    backtrace::Backtrace, cmp::Reverse, ffi::OsStr, fmt, fs, io::Read, path::Path, range::Range,
};

const BLOG_DIR_PATH: &str = "./content/blog";
const BACKGROUND_SCRIPT: &str = include_str!("../static/background.js");
const STYLESHEET: &str = include_str!("../static/styles.css");

fn main() {
    if let Err(err) = generate() {
        eprintln!("{err}");
        std::process::exit(1);
    }
}

fn generate() -> Result {
    let blog = fs::read_dir(BLOG_DIR_PATH).map_err(ErrorReport::context("Reading blog dir"))?;

    let mut metadata = MetadataCollection::default();
    let mut html_content = String::with_capacity(1024);

    for entry in blog {
        let entry = entry.map_err(ErrorReport::context("Reading blog entry"))?;
        let file_path = entry.path();

        if file_path.extension() != Some(OsStr::new("typ")) {
            continue;
        }

        if file_path.file_name() == Some(OsStr::new("lib.typ")) {
            continue;
        }

        compile_typst(&file_path)?;

        let mut html_file_path = file_path;
        html_file_path.set_extension("html");

        extract_metadata(&html_file_path, &mut metadata, &mut html_content)?;

        generate_blog_post_html(&metadata, metadata.blog.last().unwrap(), &html_content)?;
    }

    generate_index_html(&metadata)?;
    generate_about_html()?;
    fs::write("public/background.js", BACKGROUND_SCRIPT).context("Writing background script")?;
    fs::write("public/styles.css", STYLESHEET).context("Writing stylesheet")?;

    Ok(())
}

fn generate_about_html() -> Result {
    #[derive(askama::Template)]
    #[template(path = "about.html")]
    struct AboutTemplate;

    let mut target =
        std::fs::File::create("public/about.html").context("Opening about target file")?;

    AboutTemplate
        .write_into(&mut target)
        .context("Rendering about template")?;

    Ok(())
}

fn generate_index_html(metadata: &MetadataCollection) -> Result {
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
        std::fs::File::create("public/index.html").context("Opening index target file")?;

    IndexTemplate { posts }
        .write_into(&mut target)
        .context("Rendering index template")?;

    Ok(())
}

fn generate_blog_post_html(
    metadata: &MetadataCollection,
    blog_metadata: &BlogMetadata,
    html_content: &str,
) -> Result {
    #[derive(askama::Template)]
    #[template(path = "post.html")]
    struct PostTemplate<'a> {
        title: &'a str,
        content: &'a str,
    }

    let mut target = {
        let mut target_path = std::path::Path::new("public").join(&metadata[blog_metadata.slug]);
        target_path.set_extension("html");

        std::fs::File::create(target_path).context("Opening HTML blog post target file")?
    };

    PostTemplate {
        title: &metadata[blog_metadata.title],
        content: html_content,
    }
    .write_into(&mut target)
    .context("Rendering blog post template")?;

    Ok(())
}

fn extract_metadata(
    html_file_path: &Path,
    metadata: &mut MetadataCollection,
    content: &mut String,
) -> Result<()> {
    use html5gum::emitters::callback::{CallbackEmitter, CallbackEvent};

    {
        content.clear();
        let mut file = std::fs::File::open(html_file_path).context("Opening HTML file path")?;
        file.read_to_string(content).context("Reading HTML file")?;
    }

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

fn compile_typst(file_path: &Path) -> Result {
    let mut cmd = std::process::Command::new("typst");

    cmd.args(["compile", "--format=html", "--features=html"])
        .arg(file_path);

    let mut child = cmd
        .spawn()
        .map_err(ErrorReport::context("Spawning typst"))?;

    child.wait().map_err(ErrorReport::context(
        "Waiting for child typst process to exit",
    ))?;

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
        &self.strings_buf[string_id.0]
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

                while let Some(key) = map.next_key::<&str>()? {
                    match key {
                        "title" => title = Some(map.next_value_seed(StringVisitor(self.0))?),
                        "date" => date = Some(map.next_value()?),
                        "slug" => slug = Some(map.next_value_seed(StringVisitor(self.0))?),
                        "draft" => draft = Some(map.next_value()?),
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
            StringId((start..start + string.len()).into())
        };

        self.strings_buf.push_str(string);

        string_id
    }
}

#[derive(Clone, Debug, Copy)]
struct StringId(Range<usize>);

struct BlogMetadata {
    title: StringId,
    date: Date,
    slug: StringId,
    draft: bool,
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
