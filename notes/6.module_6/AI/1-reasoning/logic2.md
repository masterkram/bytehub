# Predicate Logic

Knowledge is represented by predicates, variables, quantifiers and logical connectives.

::: tip Examples
$\forall x Adult(x) \implies Age(x) > 17$
$\forall x Human(x) \implies \exists y Human(y) \wedge Mother(y, x)$

modelling with mother as a function (returns a value) instead of as a predicate (truth value)
$\forall x Human(x) \implies \exists y Human(y) \wedge Mother(x) = y$
:::

## Models

Models contain objects and relations among them.
+ constant symbols refer to **objects**
+ predicate symbols refer to **relations**
+ function symbols refer to **functional relations**

An atomic sentence `predicate(term1, ... termn` is true iff the objects referred to by `term1 ... termn`
are in the relation referred to by `predicate`.

## Quantifiers
$\forall x P(x)$ is true in the model m iff P is true in model m for every instantiation of x.

$\exists x P(x)$ is true in the model m iff P is true in m for at least one instantiation of x.

## Unification

A ***unifier** is a substitution that makes to literals equal.

:::tip Example
$Knows(John, x)$
is not the same as $Know(John, Jane)$
but it can be made the same if we substitute `x = Jane`.
Notation: $\{x / Jane\}$
:::

Unification is possible if:
1. T1 and T2 are the same constant.
2. T1 is a variable and T2 is any type of term, and T1 is instantiated to T2 (and vice-versa)
3. T1 and T2 complex terms and
    + have the same functor and arity
    + all their arguments unify
    + thee variable instantiations are compatible.

:::tip Example
$Knows(John, x), Knows(y, Jane)$
unifier: `{x/Jane, y/John}`

Unified Literal: `Knows(John, Jane)`

$Loves(x, S(x)), Loves(John, z)$
set x to John `{x/John, z/S(john)}`

Unified Literal: `Loves(John, S(John))`
:::

:::info Most General Unifier
A unifier for which it holds that every other unifier is an extension.
:::

:::tip Example
$Knows(John, x), Knows(y, z)$
+ a unifier `{x/Mary, y/John, z/Mary}` yields the literal `Knows(John, Mary)`
+ but this is not hte most general unifier we did not have to commit to substitute x and z with mary.
+ mgu: `{x/z, y/John}` with unified literal thus `Knows(John, z)`
:::

**occurs check**: check whether a variable occurs as argument of a function with which it has to be unified.

## Reasoning

info proving: applying rules to derive a proof $KB \models \alpha$ without model checking.

### Logical Inference

1. Transform to CNF
2. Unification
3. Resolution

#### Transforming to CNF
1. Replace all $A \iff B$ with conjunction $(A \implies B) \wedge (B \implies A)$
2. Replace $A \implies B$ with $\neg A \vee B$
3. Move negation signs inwards starting from the outside until every negation sign is directly in front of a literal.
4. Remove quantifiers.
5. obtain CNF by changing or with and (de morgan's law)


##### Removing quantifiers
existentially ($\exists$) quantified variables are replaced with constants of functions (**skolemisation**)
such that every remaining variable is universally quantified $\forall$. Then universal quantifiers can be dropped
because formulas become implicitly universally quantified.

Simple skolemisation: $\exists x P(x)$
introduce constant S. replace with $P(S)$

problem if the variable is a function of another, for example $\forall x Human(x) \implies \exists y Loves(x, y)$
y is a function of x, so we use a *skolem function*: $\forall x Human(x) \implies Loves(x, S(x)$


Resolution rule can be applied when
$Unify (l_i, \neg m_j) = \emptyset$

::: tip Example
$\frac{Grandparent(G, John) \vee Happy(John), \not Grandparent(x, y)}{Happy(John)}$

unification: `{x/G, y/John}`
:::