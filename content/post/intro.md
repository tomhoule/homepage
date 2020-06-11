+++
title = "Spivak's Calculus — basic properties of numbers (1/??)"
date = "2020-05-31"
description = "Spivak's Calculus, basic properties of numbers"
slug = "spivak-calculus-basic-properties-of-numbers"
tags = ["maths", "spivak-calculus"]
draft = false
+++

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

I have Michael Spivak's _Calculus_, third edition, lying around at home. It
should be accessible with a bit of help from the internet, so this is what
I will attempt to go through. I expect nearly all of the book's content to be
new to me.

---

The first chapter is titled _Basic properties of numbers_. Its purpose is to
reformulate and condense facts that the reader supposedly already knows.

Twelve properties are treated. Four properties of addition:

1. Associativity: $$ a + (b + c) = (a + b) + c $$
2. Zero as the identity element: $$ a + 0 = 0 + a = a $$
3. Addition of opposites: $$ a + (-a) = (-a) + a = 0 $$
4. Commutativity: $$ a + b = b + a $$

By now, subtraction is already defined, and two small proofs already carried
out. I used the standard library's `int` module for the time being, but
I suspect we'll have to switch to mathlib's real number module or something
else, after I read a bit more about it.

The next properties are about multiplication:

5. Associativity: $$ a \cdot (b \cdot c) = (a \cdot b) \cdot c $$
6. One as the identity element: $$ a \cdot 1 = 1 \cdot a = a $$
7. Multiplication of inverses:
$$ \forall a, a ≠ 0 \to \exists a^{-1}, a \cdot a^{-1} = a^{-1} \cdot a = 1 $$
8. Commutativity: $$ a \cdot b = b \cdot a $$

Division is then defined in terms of multiplication. The part of property 7
about _a_ ≠ 0 explains why division by zero doesn't work (it has no meaningful
inverse).

At this point, I feel an itch to generalize this beyond integers (we're going to
need at least real numbers, I figure). I start browsing Wikipedia:
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

I hope this attitude of digging just as deep as I need in order to make progress
is going to work out.

After a little while digging into how to import mathlib (combination of using
the right lean version in `leanpkg.toml`, learning the existence of `import`
statements, and the right `leanpkg` invocations), I realize working with fields
won't let you use convenient numeric notations. I try real numbers —
appropriately located at `data.real.basic` in mathlib — only to realize that
reflexivity doesn't work for things as simple as `5 - 3 = 2`. Looking at the
source for the `data.real.basic` module, it seems like many definitions are
non-computable. It makes sense, because real numbers aren't the floats we know
and love, π isn't some approximation but really π, and we can't compute that. I
don't know whether Lean can "specialize" computable instances automatically, and
detect that even though `5` and `3` are real numbers in this context, `5 - 3` is
computable. I'd have to know more about representations of reals to know if it's
a temporary limitation in mathlib or something deeper. So I go with rational
numbers for the examples involving reflexivity. `α` is a field, rational numbers
are a field, so it works out nicely.

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

9. Distributivity: $$ a \cdot (b + c) = (a \cdot b) + (a \cdot c) $$

For the [next proof](TODO), I needed a proof of `0 ≠ 2`, which I got to from
`0 < 2`, which required changing the instance of `field α` to
`linear_ordered_field α`. That seems reasonable.

Writing down the proof also made it clearer that the part that needs
distributivity is `a + a = 2 * a`:

```lean
def add_self_is_mul_two : a + a = 2 * a :=
calc
    a + a   = (a * 1) + a : by rw mul_one'
        ... = (a * 1) + (a * 1) : by rw mul_one'
        ... = a * (1 + 1) : by rw [←mul_distrib']
        ... = a *  2 : by refl
        ... = 2 * a : by rw mul_comm'
```

`-a` can also be called an additive inverse. Interesting.

..._ellipsis_...

---

### 2 weeks later

I continued going through the chapter step by step, and now starting the
problems.

- Some patterns like "divide both sides of the equation bu the same amount" do
  not translate well to lean. I had to learn to "summon" values, adding zero,
  then opposite, or multiplying by one, then inverse.
- Represent sequences with inductively defined functions (gizmo).
- A lot of function names to memorize
- TODO: issue on computable real numbers
