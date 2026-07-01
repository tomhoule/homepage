#import "lib.typ": blog-meta

#blog-meta(
  title: "December 2021 readings",
  date: "2021-12-31",
  slug: "2021-12-readings",
  draft: false,
  tags: ("readings",),
  aliases: ("/2021/2021-12-readings/",),
)

I am starting an experiment: just document interesting things I read as a list
from time to time. It's already the twelvth, vacations are coming up, and I
already did a lot of reading I haven't documented, so I expect this month's
list to be pretty short.

=== Graphics

- A blog post, #link("https://sagejenson.com/physarum")[Physarum, by Sage Jenson] — slime mold
  population generation, pretty cool looking.
- Re-read #link("https://sotrh.github.io/learn-wgpu/")[learn wgpu]. Good tutorial!

=== Databases & Distributed Systems

- #link("https://queue.acm.org/detail.cfm?id=3480470")[Don't Get Stuck in the "Con" Game, by Pat
  Helland]. Deconstruction of the
  notion of consistency and eventual consistency. Proposes more well defined
  notion to know what we talk about when we talk about consistency. A
  potentially useful toolbox for reasoning and exposition.

=== Formal Methods

- #link("https://docs.google.com/document/d/1KlHeawNg4UDzvNLByv7RxYTGTVLBGIdfg8532pfuJKU/edit#heading=h.fugu5ki75pe3")[Rust verification tools (2021), by Alastair
  Reid].
  Alastair Reid's updated list of automated verification tools for Rust. I've
  been interested for a long time, so not many projects were new, but I learned
  about #link("https://crates.io/crates/shuttle")[shuttle], #link("https://arxiv.org/abs/1903.00982")[the Oxide
  paper],
  #link("https://hacspec.github.io/")[hacspec], #link("https://seahorn.github.io/")[SeaHorn] and
  #link("https://github.com/hopv/rust-horn")[rust-horn] from this. The #link("https://alastairreid.github.io/automatic-rust-verification-tools-2021/")[companion blog
  post]
  has interesting sections on the respective weaknesses of abstract
  interpretation, bounded model checkers, dynamic symbolic execution and
  instrumented interpreters like miri.

=== Math

- #link("https://arxiv.org/pdf/math/0411418.pdf")[How real are real numbers? by Gregory Chaitin
  (2004)]. A very approachable,
  condensed, well exposed high level view of some problematic features of the
  real numbers, in particular from an intuitionistic perspective (Borel's).
  First from a principle perspective, then linked to a formal perspective with
  the later emergence of computer science. Good read.

=== General blog posts / opinions

- #link("https://ollef.github.io/blog/posts/query-based-compilers.html")[Query-based
  compilers].
  The author draws connections between query-based compilers (examples:
  rust-analyzer, typescript) and the #link("https://www.cambridge.org/core/services/aop-cambridge-core/content/view/097CE52C750E69BD16B78C318754C7A4/S0956796820000088a.pdf/build-systems-a-la-carte-theory-and-practice.pdf")[Build-systems à la
  carte]
  paper. My personal impression is that there's an analogy here with nix as
  well.
