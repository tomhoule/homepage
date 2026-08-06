// Typed frontmatter → HTML <head><meta> tags.
#let blog-meta(
  title: none,
  date: none,
  slug: none,
  draft: none,
  tags: none,
  aliases: (),
) = {
  assert(title != none, message: "title is required")
  assert(date != none, message: "date is required")
  assert(slug != none, message: "slug is required")
  assert(draft != none, message: "draft is required")
  assert(tags != none, message: "tags is required")
  assert(type(title) == str, message: "title must be a string")
  assert(type(date) == str, message: "date must be a string")
  assert(type(slug) == str, message: "slug must be a string")
  assert(type(draft) == bool, message: "draft must be a boolean")
  assert(type(tags) == array, message: "tags must be an array")
  assert(type(aliases) == array, message: "aliases must be an array")
  
  html.meta(itemprop: "blog-post-metadata", content: json.encode(
    (
      title: title,
      slug: slug,
      date: date,
      draft: draft,
      tags: tags,
      aliases: aliases,
    ),
    pretty: false,
  ))
}

// Responsive 16:9 YouTube embed.
#let youtube(id) = {
  html.elem("div", attrs: (style: "position:relative;padding-bottom:56.25%;height:0;overflow:hidden"), html.elem(
    "iframe",
    attrs: (
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
      loading: "eager",
      referrerpolicy: "strict-origin-when-cross-origin",
      src: "https://www.youtube.com/embed/"
        + id
        + "?autoplay=0&amp;controls=1&amp;end=0&amp;loop=0&amp;mute=0&amp;start=0",
      style: "position:absolute;top:0;left:0;width:100%;height:100%;border:0",
      title: "YouTube video",
    ),
    [],
  ))
}
