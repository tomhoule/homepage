+++
title = "Logical Foundations, Calculus, updates on learning (with) theorem provers"
date = "2021-09-30"
slug = "agda-reflection-nat-solver"
tags = ["maths", "agda", "tactics", "metaprogramming"]
draft = true
description = """
Understanding reflection tactics in Agda by building a simpler, less generic,
less powerful version of the standard library ring solver.
"""
+++

- Paper: [Proving Equalities in a Commutative Ring Done Right in Coq](http://www.cs.ru.nl/~freek/courses/tt-2014/read/10.1.1.61.3041.pdf)
- [MonoidSolver.agda](https://github.com/agda/agda-stdlib/blob/master/src/Tactic/MonoidSolver.agda)
in the Agda stdlib.
- [The ring
solver](https://github.com/agda/agda-stdlib/blob/master/src/Tactic/RingSolver.agda)
in the agda stdlib)

Cubical Agda: TODO LINK

Lean mathlib: TODO LINK

TODO: example of what the ring solver does.

Since I am learning this, the idea of this post is to replicate the idea of the
ring solver, but in the simpler, less generic setting of natural number
expressions with addition and multiplication. It should make the mechanism of
reflexive tactics more apparent.

The stdlib/cubical Agda ring solvers are well organized, but the generics and
use of symbols make them a bit hard to get into. Nothing that can't be solved by
careful reading of the source code and the paper, but an introduction to proofs
by reflection tactics can be presented in a more beginner-friendly way.

The general idea is, from the reflected goal, build a “scaffold” that will prove
the equality by transitivity:

```
the left-hand side expression
    = what it evaluates to under variable assignment
        = its normal form
        = the normal form of the right-hand side expression
    = what the right-hand side expression evaluates to under the same variable assignment
= the right-hand side expression (by reflexivity)
```

...

`eval (toExpr n) == n` needs to be correct, but can't be expressed in Agda (or
Coq, or Lean, as far as I know). This corresponds to the first and last
equalities in our sketch above. In other words, the expression your macro
constructs from the goal has to be _definitionally equal_ (think `refl`) to the
left-hand side / right-hand side of the equality you want to prove.

