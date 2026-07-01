#import "lib.typ": blog-meta

#blog-meta(
  title: "Readings in 2023 — early June edition",
  date: "2023-06-06",
  slug: "2023-06-readings",
  draft: false,
  tags: ("readings",),
  aliases: ("/2023/2023-06-readings/",),
)

I haven't been good at doing these lists and collecting what I read recently,
let's try to come back to it.

== Nix

- #link("https://jackson.dev/post/nix-reasonable-defaults/")[Nix: Reasonable Default
  Configs], down to earth
  config options for the nix tool.
- #link("https://github.com/nix-community/dream2nix/")[dream2nix] is a structured,
  systematic effort to build the infrastructure for the management of
  language-specific dependencies (think npm, pip, cargo dependencies) in nix
  derivations. The state of the art is that each ecosystem has its own tools
  (npmlock2nix, crane, ...), some of them integrated in nixpkgs, many not. The
  dream2nix project is making really good strides in defining a common API
  (based on modules, ideas like drv-parts and flake-parts) and reusable
  components like fetchers, a language-agnostic lock format, etc. The new (v1)
  API is very very early stage, but it's there in the main repo now, I want to
  play more with it and maybe build on top of it soon.
- #link("https://github.com/hercules-ci/flake-parts/")[flake-parts] to standardize the
  glue in flake-based projects using the tried and true NixOS module system.
  Implemented at Prisma. Big fan.
- #link("https://github.com/DavHau/drv-parts")[drv-parts] does the same for
  derivations. It is definitely more intrusive, and that made me skeptical at
  first, but after thinking about the problem and trying out drv-parts, I'm now
  convinced this is going in the right direction. drv-parts is a concrete
  implementation, but the ideas have been talked about by Eelco and are being
  actively investigated in the #link("https://github.com/nixpkgs-architecture/pkgs-modules")[pkgs-module working
  group].

== Databases

- #link("https://jack-vanlightly.com/blog/2023/5/15/kafka-vs-redpanda-performance-do-the-claims-add-up")[Kafka vs Redpanda Performance - Do the claims add
  up?].
  Good database benchmarking inspiration.
- #link("https://jbaker.io/2022/05/09/project-loom-for-distributed-systems/")[Project Loom for Distributed Systems]
  Worth reading even if you are already familiar with the FoundationDB testing
  story and Jepsen. It puts things into more perspective. A few links.
  (#link("https://www.scylladb.com/product/technology/scylla-testing/")[ScyllaDB testing] in particular,
  and Will Wilson's FoundationDB talk:
  #link("https://www.youtube.com/watch?v=4fFDFbi3toc")[video]). Good points about benchmarking.

== Permacomputing

- #link("https://permacomputing.net/")[Permacomputing itself], continuing on the
  gemini readings from previous posts. Fun, cute. Potentially good environment
  for fun projects.
- #link("https://100r.co/site/uxn.html")[Uxn] — reminds me of WASM4 but more general,
  sounds potentially like a lot of fun.

== Books

- Dan Lieberman, Exercised and History of the Human Body. Strongly recommend.

== Misc

- Learned about #link("https://webfinger.net/")[webfinger] from
  #link("https://blog.maartenballiauw.be/post/2022/11/05/mastodon-own-donain-without-hosting-server.html")[this post]
