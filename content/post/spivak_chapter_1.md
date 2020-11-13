+++
title = "Leaning into Spivak's Calculus"
date = "2020-11-13"
description = "Learnings and impressions from solving the problems of Spivak's Calculus chapter 1, basic properties of numbers in Lean"
slug = "spivak-calculus-basic-properties-of-numbers-retrospective"
tags = ["maths", "spivak-calculus", "lean"]
draft = false
+++

This is a follow up to [a first post](/intro/), where I wrote down my
impressions as I just started working on the problems from Michael Spivak's
[_Calculus_](https://www.goodreads.com/book/show/328645.Calculus) (3rd ed.) with the Lean theorem prover.

A few months later, [I finished writing Lean proofs for all the problems in chapter 1](https://github.com/tomhoule/spivak-calculus/).

After the expected period of familiarization with Lean and
mathlib, what I hoped for is what happened: **at this point, for the problems I
am solving, the hard part is the maths, not the theorem prover**.

## Writing down the problems

Some problems took some thinking to translate from natural language into Lean.

Take problem 24 (c):

> Let `s(a_{1},...,a_{k})` be some sum formed from `a_{1},...,a_{k}`. Show that
> $$s(a_{1},...,a_{k}) = a_{1} + ... + a_{k}$$

The "some sum" part is open to interpretation. It could mean different ordering
of the terms, or different precedence. I went with precedence, and wrote the
following proof

```lean
-- For any list of lists of sums, show that the sum of the list_sum's is equal
-- to the list_sum of the concatenated lists. This shows the precedent of
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

(Helper functions have been omitted. See the source repository for the full proof.)

One of the tougher examples came up towards the beginning, in part (v) of problem 1:

> (v) $$ x^{n} - y^{n} = (x - y) (x^{n-1} + x^{n-2}y + ... + xy^{n-2} +
> y^{n-1})$$

This required figuring things out about `choose` that belong in chapter 2, and
also how to use a recursive dependent function type to express the middle
terms.

Another example of this were problems of the form _"Find all numbers x for
which"_, like problem 11. I did not realize at first that what was really meant,
was proofs of the form `abs (x+3) < 2 ↔ x < -1 ∧ x > -5`.

## General advice

- The Lean community Zulip chat server is extremely valuable.
- Getting familiar with the mathlib structure and the available modules is
  important. Don't be afraid to read the source. Exploring tactics you don't
  know always pays off. I stumbled on tactics that improve ergonomics a lot like
  `rcases`, `rintros` and `refine` quite late.
- Use concrete types if you do not care about generality. I did the
  exercises for fields at the beginning, but after discovering `norm_num`,
  proving with ℝ parameters turned out easier.
