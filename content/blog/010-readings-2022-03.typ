#import "lib.typ": blog-meta

#blog-meta(
  title: "March 2022 readings",
  date: "2022-03-31",
  slug: "2022-03-readings",
  draft: false,
  tags: ("readings", "databases", "zig"),
  aliases: ("/2022/2022-03-readings/",),
)

Slow month, from the readings angle. But there's been some side project
movement I hope will result in something publishable and at least one blog
post.

== General Programming

- Re-watched #link("https://github.com/prisma/prisma/issues/12351")["Performance Matters" by Emery Berger], strange loop 2019. Two tools to keep in mind for next time profiling:

  + STABILIZER tool to minimize the effect of memory layout on performance
  + Causal profiling

- #link("http://embed.cs.utah.edu/creduce/")[C-Reduce], paper and slides. Cool!

== Databases

- #link("https://db.in.tum.de/~leis/papers/ART.pdf")[The Adaptive Radix Tree: ARTful Indexing for Main-Memory Databases] by Leis, Kemper and Neumann.
    I want to follow up with the more recent Height-Optimized Trie paper
    (#link("https://15721.courses.cs.cmu.edu/spring2020/papers/07-oltpindexes2/p521-binna.pdf")[also co-authored by Leis]), which has super promising benchmarks.
- #link("https://15721.courses.cs.cmu.edu/spring2020/papers/08-storage/p2393-athanassoulis.pdf")[Optimal Column Layout for Hybrid Workloads (VLDB 2019)] by Athanassoulis, Bøgh and Idreos.
    Good introduction but I will need to read more on the topic, column-stores
    and in general the OLAP database design space is something I'd like to
    explore more.

    From the references, #link("https://stratos.seas.harvard.edu/files/IKM_SIGMOD07.pdf")[Updating a cracked database] looks fascinating.
- #link("https://15721.courses.cs.cmu.edu/spring2020/papers/10-recovery/p2143-antonopoulos.pdf")[Constant Time Recovery in Azure SQL Database] from Pavlo course

== Zig

- #link("https://mitchellh.com/zig")[Mitchell Hashimoto's zig guides]
    - ...and his #link("https://github.com/ziglang/zig/issues/11288")[proposal for an improved test setup for the zig
      compiler]. Exemplary issue
      writing, and matches the problem and solution space that we've been
      encountering at Prisma for the schema language tooling. Same conclusions
      on the types and shape of tests for the bulk of the parser, formatter, etc.
