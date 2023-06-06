+++
title = "Leaning into Spivak's Calculus"
date = "2020-11-14"
description = """
Learnings and impressions from solving the problems of the first chapter of Spivak's Calculus with the Lean theorem prover
"""
slug = "leaning-into-calculus-chapter-1"
tags = ["maths", "spivak-calculus", "lean"]
aliases = [
    "/leaning-into-calculus-chapter-1/"
]
+++

This post contains three updates at different points in time on formalizing
chapter 1 of Michael Spivak's _Calculus_ book and its problems in [Lean](https://leanprover-community.github.io/).

You can find the proofs [on GitHub](https://github.com/tomhoule/spivak-calculus/).

---

## Just starting

> On n’écrit qu’à la pointe de son savoir, à cette pointe extrême qui sépare
> notre savoir et notre ignorance, et qui fait passer l’un dans l’autre. C’est
> seulement de cette façon qu’on est déterminé à écrire.
>
> ([_Différence et
> répétition_](https://en.wikipedia.org/wiki/Difference_and_Repetition), towards
> the beginning)

They say the right time to write about something is while learning. I just got
through [_Theorem proving in
Lean_](https://leanprover.github.io/theorem_proving_in_lean/) — tons of fun,
warmly recommended — and now feels like the time to see what I can do with it.

I have Michael Spivak's
[_Calculus_](https://www.goodreads.com/book/show/328645.Calculus), third
edition, lying around at home. It should be accessible with a bit of help from
the internet, so this is what I will attempt to go through. I expect nearly all
of the book's content to be new to me.

What I want to validate is that for someone reasonably familiar with programming
who wants to learn more mathematics, it is possible to learn by writing proofs
and solving problems from regular maths textbooks with existing tools, and in
particular the Lean theorem prover. **The hard part should be the mathematics,
not handling the theorem prover**.

I have the feeling this would be the best way for me to learn, since I lack the
confidence in my hand-written proofs, and I know by experience that I make a lot
of mistakes. On paper, these mistakes end up derailing the proof, but they
wouldn't have serious consequences if every step was checked by a computer: I
can just correct them.

I will frequently refer to
[mathlib](https://github.com/leanprover-community/mathlib), the Lean community's
library of formalized theorems. It contains basic facts and structures you do
not want to build again when writing your own proofs, as well as extremely
useful tactics like [`linarith`](https://leanprover-community.github.io/mathlib_docs/tactics.html#linarith).

### First chapter

The first chapter is titled _Basic properties of numbers_. Its purpose is to
reformulate and condense facts that the reader supposedly already knows.

Twelve properties are treated. Four properties of addition:

1. Associativity: _a_ + (_b_ + _c_) = (_a_ + _b_) + _c_
2. Zero as the identity element: _a_ + 0 = 0 + _a_ = _a_
3. Addition of opposites: _a_ + (-_a_) = (-_a_) + _a_ = 0
4. Commutativity: _a_ + _b_ = _b_ + _a_

By now, subtraction is already defined, and two small proofs already carried
out. I used the standard library's `int` module for the time being, but
I suspect we'll have to switch to mathlib's real number module or something
else, after I read a bit more about it.

The next properties are about multiplication:

5. Associativity: _a_ · (_b_ · _c_) = (_a_ · _b_) · _c_
6. One as the identity element: _a_ · 1 = 1 · _a_ = _a_
7. Multiplication of inverses:
 ∀ _a_, _a_ ≠ 0 → ∃ _a⁻¹_, _a_ · _a⁻¹_ = _a⁻¹_ · _a_ = 1
8. Commutativity: _a_ · _b_ = _b_ · _a_

Division is then defined in terms of multiplication. The part of property 7
about _a_ ≠ 0 explains why division by zero doesn't work (it has no meaningful
inverse).

At this point, I feel an itch to generalize this beyond integers. We're going to
need at least real numbers, I figure. I start browsing Wikipedia:
[groups](https://en.wikipedia.org/wiki/Group_(mathematics)) aren't what we want
(numbers under addition are a group, but not multiplication because it lacks
invertibility). Next stop is
[multiplication](https://en.wikipedia.org/wiki/Multiplication#Multiplication_of_different_kinds_of_numbers),
which points me to the page on the [construction of real
numbers](https://en.wikipedia.org/wiki/Construction_of_the_real_numbers#Construction_from_Cauchy_sequences),
where I learn about [ordered
fields](https://en.wikipedia.org/wiki/Field_(mathematics)). This is apparently
what we want, and mathlib [apparently supports
them](https://leanprover-community.github.io/mathlib-overview.html).

I hope this attitude of digging just as deep as I need to in order to make
progress is going to work out.

After a little while digging into how to import mathlib (combination of using
the right lean version in `leanpkg.toml`, learning the existence of `import`
statements, and the right `leanpkg` invocations — _Note added later: use
`leanproject` instead if you want to avoid compiling mathlib, it is very
time-consuming_), I realize working with fields won't let you use convenient
numeric notations. I try real numbers — appropriately located at
`data.real.basic` in mathlib — only to realize that reflexivity doesn't work for
things as simple as `5 - 3 = 2`. Looking at the source for the `data.real.basic`
module, it seems like many definitions are non-computable. It makes sense,
because real numbers aren't the floats we know and love, π isn't some
approximation but really π, and we can't compute that exactly. I don't know whether Lean
can "specialize" computable instances automatically, and detect that even though
`5` and `3` are real numbers in this context, `5 - 3` is computable. I'd have to
know more about representations of reals to know if it's a temporary limitation
in mathlib or something deeper. So I go with rational numbers for the examples
involving reflexivity. `α` is a field, rational numbers are a field, so it works
out nicely.

The consequences of the properties of multiplication give rise to two nice
examples we can prove in Lean:

```lean
example : (a ≠ 0) → (a * b = a * c) → b = c :=
assume hnzero h,
    calc
        b   = 1 * b : by rw one_mul
        ... = (a⁻¹ * a) * b : by rw [inverse_mul α a hnzero]
        ... = a⁻¹ * (a * b) : by rw [mul_assoc']
        ... = a⁻¹ * (a * c) : by rw [h]
        ... = c : by rw [mul_assoc', inverse_mul α a hnzero, one_mul]

example : a ≠ 0 → (a * b = 0) → (a = 0 ∨ b = 0) :=
assume hnzero h,
or.inr $ calc
    b = 1 * b : by rw one_mul b
    ... = (a⁻¹ * a) * b : by rw [inverse_mul α a hnzero]
    ... = a⁻¹ * (a * b) : by rw [mul_assoc']
    ... = a⁻¹ * 0 : by rw h
    ... = 0 : by rw mul_zero
```

I started by adding `decidable α` instance on top of `field α` to get
`a = 0 ∨ ¬(a = 0)` for the second example. It felt like it should be possible to
prove it without, but it seemed like even mathlib uses `classical` (see
`mul_eq_zero'` in `group_with_zero.lean`, and `division_ring.to_domain` in
`field.lean`). Then I noticed the book relies on `a ≠ 0` and added the hypothesis.

9. Distributivity: _a_ · (_b_ + _c_) = (_a_ · _b_) + (_a_ · _c_)

For the next proof, I needed a proof of `0 ≠ 2`, which I got to from `0 < 2`,
which required changing the instance of `field α` to `linear_ordered_field α`.
That seems reasonable.

Writing down the proof also made it clearer that the part that needs
distributivity is `a + a = 2 * a`:

```lean
def add_self_eq_two_mul : a + a = 2 * a :=
calc
    a + a   = (a * 1) + a : by rw mul_one'
        ... = (a * 1) + (a * 1) : by rw mul_one'
        ... = a * (1 + 1) : by rw [←mul_distrib']
        ... = a * 2 : by refl
        ... = 2 * a : by rw mul_comm'
```

`-a` can also be called an additive inverse. Interesting.

..._ellipsis_...

---

## Two weeks later

I continued going through the chapter step by step, and now getting started on
the problems.

- Some patterns like "divide both sides of the equation by the same amount" do
  not translate easily to Lean. I had to learn to "summon" values, adding zero,
  then opposite, or multiplying by one, then inverse.
- Represent sequences with inductively defined functions (gizmo).
- A lot of function names to memorize
- I somehow find some facts easier to grasp through induction rules:
    - `choose k n = choose k-1 n-1 + choose k n-1`
    - `n! = n * (n-1)!`
- I had to figure out big operators and how to use finite sets (`finset`)
- For problem 4, I had to figure out casts and
  `rwa`, `simpa`. Do the computable parts with integers, then cast to reals to
  work with square roots. Computations with real numbers were a pain at first,
  since they are not computable: you need to cast to something computable, like
  rational numbers, to make any progress. *Note added later: this was all solved when I learned
  about the [`norm_num`](https://leanprover-community.github.io/mathlib_docs/tactics.html#norm_num) and [`norm_cast`](https://leanprover-community.github.io/mathlib_docs/tactics.html#norm_cast) tactics*.
- [library_search](https://leanprover-community.github.io/mathlib_docs/tactics.html#library_search),
  [squeeze_simp](https://leanprover-community.github.io/mathlib_docs/tactics.html#squeeze_simp%20/%20squeeze_simpa%20/%20squeeze_dsimp%20/%20squeeze_scope)
  are big time-savers and enormously helpful in discovering more of mathlib. One
  pattern that works really well when you are looking for the right theorems to
  invoke for the next step in your proof, is to write it in the most general way
  possible in an example or a helper function, and try `library_search` on that.
- Try `#lint` — it's quaint.

I'll stop here now, and focus on solving the problems without worrying about
whether this will make a good blog post.

---

## A few months later

Let's follow up on the experience report, where I wrote down my impressions as I
just started working on the problems from Michael Spivak's
[_Calculus_](https://www.goodreads.com/book/show/328645.Calculus) (3rd ed.) with
the Lean theorem prover.

A few months later, [I finished writing Lean proofs for all the problems in chapter 1](https://github.com/tomhoule/spivak-calculus/).

After the expected period of familiarization with Lean and
mathlib, what I hoped for is what happened: **at this point, for the problems I
am solving, the hard part is the maths, not the theorem prover**.

### Writing down the problems

Some problems took some thinking to translate from natural language into Lean.
Stating the problem precisely is part of the proof effort.

Take problem 24 (c):

> Let `s(a_{1},...,a_{k})` be some sum formed from `a_{1},...,a_{k}`. Show that
> s(a_1,...,a_k) = a_1 + ... + a_k

The "some sum" part is open to interpretation. It could mean different ordering
of the terms, or different precedence. I went with precedence, and wrote the
following proof:

```lean
-- For any list of lists of sums, show that the sum of the list_sum's is equal
-- to the list_sum of the concatenated lists. This shows the order of
-- additions does not matter.
def part_c : ∀ (sums : list (list ℝ)), list_sum (list.join sums) = sums.foldl running_list_sum 0
| [] := rfl
| (head::tail) := by {
    let consed := list.cons head tail,
    have ih : list_sum (list.join tail) = tail.foldl running_list_sum 0, from part_c tail,
    have left : list_sum (list.join consed) = list_sum head + list_sum (list.join tail), from (
        calc
        list_sum (list.join (head::tail)) = list_sum (head ++ list.join tail) : rfl
        ... = list_sum head + list_sum (list.join tail) : (part_b head (list.join tail)).symm
    ),
    have right : consed.foldl running_list_sum 0 = list_sum head + tail.foldl running_list_sum 0, from (
      calc
      consed.foldl running_list_sum 0 = tail.foldl running_list_sum (0 + list_sum head) : rfl
      ... = tail.foldl running_list_sum (list_sum head) : by rw [zero_add]
      ... = list_sum head + tail.foldl running_list_sum 0 : foldl_running_list_assoc tail (list_sum head)
    ),
    rw [<-ih] at right,
    exact eq.trans left (eq.symm right)
}
```

Helper functions have been omitted. See the source repository for the full proof.

One of the tougher examples came up towards the beginning, in part (v) of problem 1:

> (v) x^n - y^n = (x - y) (x^{n-1} + x^{n-2}y + … + xy^{n-2} + y^{n-1})

This required figuring things out about `choose` that belong in chapter 2, how
to express sums with a variable number of terms — the `algebra.big_operators`
module in mathlib —, and also how to use a recursive dependently typed function to
express the middle terms.

Another example of this were problems of the form _"Find all numbers x for
which"_, like problem 11. I did not realize at first that what was really meant,
was proofs of the form `abs (x+3) < 2 ↔ x < -1 ∧ x > -5`.

### General advice

- The [Lean community Zulip chat server](https://leanprover.zulipchat.com/) is
  extremely valuable.
   - For discovering new approaches by much more experienced users.
   - To read the experienced user's advice to other new users.
   - For more high-level discussions, for example how the Lean community put an
     emphasis on working in the same classical framework as most maths
     practitioners, instead of computable proofs like Coq.
   - ...
- Getting familiar with the structure of mathlib and the available modules is
  important. Don't be afraid to read the source. Exploring tactics you don't
  know always pays off. I stumbled on tactics that improve ergonomics a lot like
  `rcases`, `rintros` and `refine` quite late.
- Use concrete types if you do not care about generality. I solved the problems
  for fields at the beginning, but after discovering `norm_num`, proving with ℝ
  parameters turned out easier.

## Conclusion

As already stated above, there was a learning curve, but at this point, the
hard part is the mathematics and coming up with the right proof strategies, not
formalizing them in Lean. There is a price in terms of productivity and
effort to these machine-checked proofs, and I am sure someone confident with
pen-and-paper proofs can go through the problems much faster, and use patterns
that would not work in a theorem prover, like visual proofs. But for me, this is
the right workflow.

I will continue using Lean to learn more mathematics, it is really a joy. Now on
to chapter 2.
