+++
title = "Logical Foundations, Calculus, updates on learning (with) theorem provers"
date = "2021-04-02"
slug = "logical-foundations-impressions"
tags = ["maths", "software-foundations", "lean", "coq"]
draft = false
description = """
Impressions from spending a few more months doing Calculus exercises in Lean 3, the Logical Foundations book, and thoughts about learning maths with theorem provers.
"""
aliases = [
    "/logical-foundations-impressions/"
]
+++

I just finished _Logical Foundations_, the first part of the [_Software
Foundations_](https://softwarefoundations.cis.upenn.edu/) series. Since [last
time on this blog](/leaning-into-calculus-chapter-1/), I also completed chapter
2 of [_Calculus_](https://www.goodreads.com/book/show/328645.Calculus), with the
exercises (most of them) done in Lean 3.

This post is a loose collection of impressions and learnings from a few more
months spent working with theorem provers on my spare time.

## Logical Foundations

First, _Logical Foundations_ is just great. I picked it up to learn Coq mainly,
and as the natural path to the exciting _Programming Language Foundations_. As a
way to learn Coq, it exceeded my expectations: the book strives to build up a
first-hand, concrete understanding of all the tactics and proof techniques. The
exercises are all justified and many gave me better insight into certain types
of proofs. This book works for its purpose: it will give you a working knowledge
of the tool.

It's not only brilliant as a Coq book, it's good learning material for proof
assistants in general. It filled gaps in my understanding of Lean-relevant
concepts (Lean and Coq have many, many similarities), like the `generalize
dependent` tactic. The long chapter on inductive propositions was the best part,
looking at inductive propositions from multiple angles, and building up solid
intuitions and awareness of their strengths and quirks. I got better at formal
proofs from reading this book.

## Contrasting experiences with Lean and Coq

With about 9 months worth of doing math textbook exercises in Lean 3, and the
book + a lot of random reading on the Coq side, first impressions are starting
to form.

The discussions between Coq people and Lean people can get somewhat
[heated](https://github.com/coq/coq/issues/10871). The two systems are competing
for mind share, and while Coq is by far the more established of the two, Lean
has been growing rapidly. There is mainstream appeal to be gained from (1)
having a more "modern" (read: familiar to software people) workflow in VSCode,
and (2) embracing classical logic, excluded middle, extensionality axioms.

To someone wondering whether they should invest their efforts into Lean or Coq,
I'd advise to learn both. Coq has a much older, richer ecosystem, and a distinct
flavour from Lean, so that even if you prefer Lean for this or that reason,
there is a lot to learn in the Coq world. The experience of writing Lean, with
its vscode-centric workflow, feels more like working with a regular programming
language. Coq has its own idiosyncratic tools — I've been using CoqIDE (there is
also [VSCoq](https://github.com/coq-community/vscoq)) — which are good, but they
definitely made me step out of my tooling comfort zone. Overall, both proof
assitants are based on the calculus of constructions with a term level language,
tactics, dependent types with a universe hierarchy, etc. so there is more in
common than one might think.

Both Zulip instances ([1](https://leanprover.zulipchat.com/),
[2](https://coq.zulipchat.com/)) are worth following. The leanprover one is more
active, and has more math-related discussions.

The idiosyncratic vs standard (in a software dev sense) environments, and the
strong emphasis on constructive vs more classical logic make for different
feels. Proofs relying mainly on reflection are more idiomatic in Coq, and
reading _Logical Foundations_ exposes you to that. I think I like it.

To take a concrete example, my outside impression before learning Coq was that
program extraction was more a curiosity than something practical you would want
to reach for. Having seen what evaluation inside Coq can do, that feeling got
completely reversed. Constructive proofs and executable functional code are
_convincing_ in a way that is hard to express.

## Toughts on theorem provers as a learning tool

Since [last time](/leaning-into-calculus-chapter-1/), I got more comfortable
with mechanised proofs. There is no question that they are very versatile and
great to have at hand's reach when you need them. What I do not believe anymore
is that they are the best environment to do the exercises in a math or computer
science book that was not written with them in mind. For two reasons mainly:

- Some proof patterns you can carry on with pen and paper are not completly
  rigorous, and you need a more advanced concepts to work out a proof in Lean
  than you would for the proof the author of the exercise had in mind. The concepts can be scaffolded differently in a book and in mathlib. For example, the first chapter of _Calculus_ deals with general properties of "numbers": you can do proofs on numbers with the given list of properties on paper, but in Lean you have to pick a concrete type (or a type class) where these apply.

- More importantly, as of now, in most cases, mechanised proofs are significantly more work
  than pen-and-paper. If you want to make progress at a reasonable pace, you can't be formalising everything.

What I found invaluable in doing math exercises in Lean, is the confidence building. The tool gives you quick feedback, and you end up having a pretty good feel for when you forget cases or take a step that isn't justified.

I never trusted my informal proofs before formalising — now I do, to a certain
extent. Often, when you are confident enough, a proof _outline_ is all you need
for understanding. The proof assistant helps you build up that confidence that
you *can* fill in the details. When in doubt, you can still formalize.

## What's next

I am going to keep working through _Calculus_, mechanising proofs only when
necessary for understanding. [_Programming Language
Foundations_](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
to continue learning Coq. After that, the literature on separation logic in
general and [Iris](https://iris-project.org/) is on the list — maybe not on top
anymore by the time I get there.
