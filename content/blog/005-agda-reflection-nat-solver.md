+++
title = "Basics of reflection solving in Agda"
date = "2021-09-30"
slug = "agda-reflection-nat-solver"
tags = ["maths", "agda", "tactics", "metaprogramming"]
draft = true
description = """
Understanding reflection tactics in Agda by building a simpler, less generic,
less powerful version of the standard library ring solver.
"""
+++

If you want to prove that two sums of integers are equal, for example `a + (b + c) +
d` and `b + (a + d) + c` in Agda, Coq or Lean, you can do so directly by
repeated use of the commutativity and associativity of integer addition:

```
TODO
```

_or_, you can use a tactic:

```
TODO
```

What people prefer writing in practice should be clear at this point.

TODO: We used a tactic. Tactics = reflection, metaprogramming. you would think the tactic produces the same
proof. But no.

To understand how the tactic works, you can turn to the source code directly or
papers like Grégoire and Mahboubi's _Proving Equalities in a Commutative Ring Done Right in
Coq_ (which I'll refer to as "the paper" here). But they are not the most approachable material: they deal
with rings in their full scope and generality, and they try to be optimal. If you are not
already familiar with Horner forms, that's another thing to learn. We can do
much simpler if we are only trying to understand the basic mechanism used by the
tactic. This is what this post will try to show.

<!-- The stdlib/cubical Agda ring solvers are well organized, but the generics and
use of symbols make them a bit hard to get into. Nothing that can't be solved by
careful reading of the source code and the paper, but an introduction to proofs
by reflection tactics can be presented in a more beginner-friendly way. -->

Since I am learning this, the idea of this post is to replicate the idea of the
ring solver, but in the simpler, less generic setting of natural number
expressions with addition and multiplication. It should make the mechanism of
reflexive tactics more apparent.

### High level sketch of the generated proof

The general idea is, from the reflected goal, build a “scaffold” that will prove
the equality by transitivity:

```
the left-hand side expression
    = what it evaluates to under variable assignment
        = its normal form
        = the normal form of the right-hand side expression
    = what the right-hand side expression evaluates to under the same variable assignment
= the right-hand side expression
```

The two ends of the chain of equalities are already known: `a + (b + c) + d` and
`b + (a + d) + c` in our first example. The steps in the middle need
explanation. In particular, the first and last step cross from the "literal"
world to the tactic-generated code, where confusion can easily install itself.

Therefore, the first step we will have to take in the tactic code will be to construct a
representation of the original expressions we want to prove. The constructed
expressions must correspond so closely to the source-level expressions that they
can be determined to be equal by reflection.

To write this in pseudo-code:

```
a + (b + c) + d = &lt;a constructed representation of the same thing&gt;
           ...  = &lt;a constructed representation of the right-hand side&gt;
           ...  = b + (a + d) + c
```

Where the first and last equalities can be proved by reflexivity.

This is already a difficulty: there is a jump from the term world to the tactic
world. That first step must be correct, but we cannot prove it so. What we
would need to prove correct can't be expressed in Agda (or Coq, or Lean, as far
as I know). If it isn't correct, the proof will not work and you will get a type
error: correctness isn't affected, but you don't have the generated proof you
wanted.

Let's gloss over what that representation is for now, and explain the middle
steps in our sketch. We have representations of the two expressions we want to
prove equal: since we assume they are sums of the same terms, we can prove that
the reordering of the terms in the expression doesn't matter, and that they can
be reduced to a _normal form_. We can prove that the expressions are equal to
their normal forms.

The normal form for our sums of integers could be something like:

```
a + (b + (c + d))
```

In other words: reorder the terms alphabetically (that takes care of
commutativity), and always associate to the right (associativity).

In our Agda code, we'll use a sorted `Vec` of terms represented by their DeBruijn
indices, since it will be more concise and easier to manipulate.

In our example, the normal form for `b + (a + d) + c` will be `[1, 2, 3, 4]`, or
less trivially `(c + a) + b + c` would have a normal form of `[1, 2, 3, 3]`
(once `a`, once `b`, twice `c`).

If we wanted to handle constants next to our variables (e.g. `a + 3`), we could
change our normal form to a pair of our Vec of DeBruijn index and the sum of all
the constants as a single integer.

If the two original sides of the equation are indeed
equal, their normal forms should be the same, and therefore definitionally equal
(`refl`).

To summarize, a proof of `a + (b + c) + d = b + (a + d) + c` takes the following
steps, all by transitivity:

- `a + (b + c) + d = a constructed abstract expression that we evaluate with a, b, c and d`
- The abstract expression is equal to its normal form (theorem)
- "Concidentally", it's the same as the normal form of `b +
(a + d) + c`, so they are equal by reflexivity.
- Which is equal to the representation of `b + (a + d) + c` that we evaluate
with `a`, `b`, `c` and `d`. (by the same theorem)
- Which is equal to `b + (a + d) + c` (by reflexivity)

Now let's make this precise.

### The representations we will use in the tactic code

- The raw reflected terms
- The direct translation of the raw reflected terms into an expression that can
be evaluated.
- The normal form of the expression

The normal form should be the same for any two expressions we want to prove
equal. Care will be required in the choice of data structure there, to ensure
that (1) it is actually a normal form, and (2) it can be produced from a raw
expression efficiently. The Grégoire and Mahboubi paper's important contribution
is to propose a good, fast representation for rings in general.

## References

- Benjamin Grégoire and Assia Mahboubi, [_Proving Equalities in a Commutative Ring Done Right in
Coq_](http://www.cs.ru.nl/~freek/courses/tt-2014/read/10.1.1.61.3041.pdf)
- [MonoidSolver.agda](https://github.com/agda/agda-stdlib/blob/master/src/Tactic/MonoidSolver.agda)
in the Agda stdlib.
- [The ring
solver](https://github.com/agda/agda-stdlib/blob/master/src/Tactic/RingSolver.agda)
in the Agda stdlib
- [Cubical Agda's ring solver](https://github.com/agda/cubical/tree/9b6524aae37342b2d00db7510fa2e7faeb147bf6/Cubical/Algebra/RingSolver)
- [tactic.ring](https://leanprover-community.github.io/mathlib_docs/tactic/ring.html)
in Lean's mathlib.
