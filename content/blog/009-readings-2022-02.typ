#import "lib.typ": blog-meta

#blog-meta(
  title: "February 2022 readings",
  date: "2022-02-25",
  slug: "2022-02-readings",
  draft: false,
  tags: ("readings", "gemini", "zig", "dod"),
  aliases: ("/2022/2022-02-readings/",),
)

A bit more than a month and a half elapsed since #link("/2021/2021-12-readings/")[last
post]. I haven't been very diligent in writing here,
so there are a bunch of things I read and watched that didn't make it in this
post.

=== General computer things

- #link("https://lucumr.pocoo.org/2022/1/30/unsafe-rust/")[Uninitialized Memory: Unsafe Rust is Too
  Hard], by Armin Ronacher.

  This is a feeling I share. Zig is proposing some genuinely new ideas there.
  Alignment is easier to work with
  (#link("https://ziglang.org/documentation/master/#divExact")[`@divExact`]). Niches,
  etc. There is a lot to say about finding the right amount of static analysis,
  and making dynamic checks tunable. Nothing replaces knowing what your code
  does in practice. Knowing what is in memory, and where is also
  non-negotiable.

- Read the #link("https://www.jsonrpc.org/specification")[JSON-RPC 2.0 spec]
  end-to-end. It's surprisingly small. I like this.

- #link("http://curtclifton.net/papers/MoseleyMarks06a.pdf")[Out of the Tar Pit], by Moseley and Marks, 2006.
  - Complexity is defined as _what prevents understanding_ the system. Our
    understanding of our systems has two major sources: testing (in the
    broadest sense) and informal reasoning. Informal reasoning is always there,
    always used. It's most prudent to use both testing and reasoning.
  - One large source of complexity is mutable state: "have you tried turning it
    off and on again?"
  - Control flow between statements vs. relationships between data.
  - In most contemporary systems, complexity increases more than linearly with
    size.
  - Simplicity is hard... *Power corrupts*. The authors argue that increased
    power, like manual memory management, will inevitably lead to abuses of
    that power. I disagree that the power sits at the level of _what the
    language allows_, it's _what the system allows_ — if you take into account
    managing laziness and knowing your runtime in Haskell for example, you end
    up with something _more complex_ in that regard, than an equivalent
    imperative program without garbage collection.
  - OOP has difficulty of representing _multi-object constraints_. Quote from Baker 93:

    #quote(block: true)[
      In a sense, object identity can be considered to be a rejection of
      the "relational algebra" view of the world in which two objects
      can only be distinguished through differing attributes.
    ]

  - The paper then loses itself in comparisons of ideal vs real world,
    accidental and essential complexity.
  - It then comes to the interesting part: the relevance of the relational model
    outside of databases. Data independence, relations,
    access path independence, etc.
  - The last part of the paper presents how the authors propose to combine the
    functional and relational models — FRP (functional relational programming).

- #link("https://dataorienteddesign.com/dodbook/")[The Data Oriented Design book].

  Less stuff in memory, neatly organized in arrays, no pointers.

  The chapter on optimization is a really well-constructed, well-argued
  framework on when and how to optimize.

  The book is worth a read for at least three reasons:

  - It makes the connection between data-oriented design and techniques from
    the database world very clear.
  - It is chock full with small bits of wisdom and techniques you might not have thought of.
  - It structures practices and information many of us knew, but hadn't organized quite as well.
  - Because of that last point, it is also a good introductory resource to data oriented design.

- #link("https://floooh.github.io/2018/06/17/handles-vs-pointers.html")[Handles are the better pointers]

  General idea that is well known to Rust programmers. Twists, and ideas for
  encoding _more_ in the handles.

=== Zig

Two talks:

- #link("https://www.youtube.com/watch?v=Gv2I7qTux7g")[The road to Zig 1.0] by Andrew
  Kelley — would recommend as an entry point to Zig, the why and the how.
- #link("https://www.youtube.com/watch?v=vHWiDx_l4V0")[What's a Memory Allocator
  Anyway?] by Benjamin Feng. Good
  high level refresher, would recommend if you want to introduce someone to the
  topic.

As mentioned higher up on this page, I think Zig has a bunch of genuinely good
ideas (tweakable runtime checks, build ergonomics, etc.). If it pans out, it is
going to be a large scale experiment on staged compilation — is it a viable
medium for reuse and abstraction, as an alternative to more advanced type
systems?

=== Gemini

- #link("https://andregarzia.com/2022/01/gemini-is-a-little-gem.html")[Gemini Is A Little Gem], by Andre Garzia.
- #link("https://gemini.circumlunar.space/docs/specification.gmi")[The Gemini spec]
  and related documents.

Impressions: need to give it more of a try, but seems limiting (no math?). A
bit too much novelty for novelty's sake. The web may be broken, but at least
it's backward compatible. Blogs like this one can still exist.

=== Databases

- #link("https://fosdem.org/2022/schedule/event/relational_model_dev/")[FOSDEM talk by Shlomi
  Noach] on new
  schema migration features in a Vitess context

  #link("http://bofh.nikhef.nl/events/FOSDEM/2022/D.mysql/relational_model_dev.webm")[Video]

  After minute 10, there's a good summary of "why down migrations are not a
  great idea" (matches our reasoning).

  This is good background on what PlanetScale migrations are built on.

- #link("https://blog.koehntopp.info/2022/02/16/databases-how-large-is-too-large.html")[Databases: How large is too large?] by Kristian Köhntopp.

  Just delightful short post on good practical limits for database instance
  sizes given current hardware.
