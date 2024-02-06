# Prolog

New Programming Paradigm: Logical Programming. :dancer:

Components:
+ Knowledge Base: specified by programmer. Logical statements.
+ Inference Engine: Given. Derives new knowledge from the knowledge base.


## Horn Clauses

Logical statements in Prolog are restricted to *horn clauses*.

:::info Horn Clause
A disjunction (or) of literals with at most 1 positive literal.

For example: $\neg p \vee \neg q \vee r$.

This is equivalent to a conjunction of atoms as the antecedent and a single atom as the conclusion.
:::


## Forward Chaining

Apply modus ponens to see what can be derived from a set of rules and atomic propositions.

:::tip Example

**Knowledge Base**:
$b \wedge c \implies a$
$d \implies b$
$d$
$c$

**Forward Chaining**:
$b$ (d, is true and d implies b.)
$a$ (b and c are true which implies a.)
:::


## Backward Chaining
Starting from the goal and reason backwards.
Used In Prolog !

:::tip Example
**Knowledge Base**:
$a \impliedby b \wedge c$
$b \impliedby d$
$d$
$c$

**Backward Chaining**
1. a. (a is the goal, what we want to prove)
2. a is true if b and c are true.
3. d implies b
4. d is true and c is true.
5. done.
:::

Backwards Chaining is based on the resolution rule:

:::tip Example
**Knowledge Base**
$a \vee \neg b \vee \neg c$
$b \vee \neg d$
$d$
$c$

**Resolution**
$\neg a$ add the negation of the goal we want to prove to the knowledge base.
$\neg b \vee \neg c$ a and negation of a cancel out.
$\neg d \vee \neg c$ b and negation of b cancel out.
$\neg c$ d and negation of d cancel out
empty clause, c and negation of c cancel out.
:::


## Prolog Syntax
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