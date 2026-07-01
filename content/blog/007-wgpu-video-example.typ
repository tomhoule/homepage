#import "lib.typ": blog-meta

#blog-meta(
  title: "A tiny wgpu app rendering directly to a video file",
  date: "2021-12-11",
  slug: "wgpu-minimal-video-rendering-example",
  draft: false,
  tags: ("rust", "wgpu"),
  aliases: ("/2021/wgpu-minimal-video-rendering-example/",),
)

I had free time yesterday, so I continued my efforts to find a better creative
coding setup. What came out of it is #link("https://github.com/tomhoule/wgpu-minimal-video-rendering-example")[the tomhoule/wgpu-minimal-video-rendering-example GitHub repo].

I like how working on this feels: with `mold`, iteration time is pretty fast
(recompilation + rendering and encoding in a < 5 seconds on my old laptop),
and the artifacts are easy to share. It feels solid.

If you're interested in this, just have a look at the repo. There is a bit more
content in the README.
