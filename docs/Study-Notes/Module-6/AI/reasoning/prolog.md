# Prolog

New Programming Paradigm: Logical Programming. :dancer:

Components:
+ Knowledge Base: specified by programmer. Logical statements.
+ Inference Engine: Given. Derives new knowledge from the knowledge base.


## Horn Clauses

Logical statements in Prolog are restricted to *horn clauses*.

:::theorem Horn Clause
A disjunction (or) of literals with at most 1 positive literal.

For example: $\neg p \vee \neg q \vee r$.

This is equivalent to a conjunction of atoms as the antecedent and a single atom as the conclusion.
:::


Two types of statements:
+ Facts: horn clauses consisting of a single positive literal
    + ex: p, q
+ Rules: horn clauses with one positive literal and one or more negative literals.
    + ex: $\neg p \vee \neg q \vee r$
    + in rule form $(p \wedge q) \implies r$


:::tip Syntax
+ All statements end with a dot `.`
+ Implication ($\impliedby$) is represented with `:-`
+ Conjunction denoted as comma `,`

Example:
$(p \wedge q) \implies r \equiv r \impliedby (p \wedge q)$
Denoted as: `r :- p, q.`
:::

```prolog
% knowledge base
a :- b,c.
b :- d.
d.
c.
```

prompt:
`?- a.`

output:
`true.`