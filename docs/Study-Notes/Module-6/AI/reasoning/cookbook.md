# Logic Cookbook

*This page contains syntax for propositional logic and definitions of commonly used terms* :ramen: :notebook_with_decorative_cover:

## Propositional Logic

+ Disjunction == or == $\vee$ 
+ Conjunction == and == $\wedge$
+ Negation == not == $\neg$

+ atomic sentences (atoms): `p`, `q`, `juice`
+ complex sentence: constructed from atomic sentences + logical connectives.
+ proposition == sentence.
+ compound proposition == complex sentence.
+ logical connectives:
    + and $\wedge$
    + or $\vee$
    + if $\implies$
    + if and only if $\iff$
+ literals: $p, q, \neg q$ (positive and negative atoms).
+ Modus ponens: the rule of logic which states that if a conditional statement ($p \implies q$) is accepted, and the antecedent ($p$) holds, then the consequent ($q$) may be inferred.


### Equivalence

+ $(\alpha \wedge \beta) \equiv (\beta \wedge \alpha)$ commutativity
+ " " same for $\vee$.
+ $((\alpha \wedge \beta) \wedge \iota) \equiv (\beta \wedge \alpha \wedge \iota)$ associativity
+ " " same for $\vee$
+ $\neg(\neg \alpha) \equiv \alpha$ double-negation elimination
+ $\alpha \implies \beta \equiv \neg \beta \implies \neg \alpha$ contraposition.
+ $\alpha \implies \beta \equiv \neg \alpha \vee \beta$ implication elimination.
+ $\alpha \iff \beta \equiv (\alpha \implies \beta) \wedge (\beta \implies \alpha)$ biconditional elimination.
+ $\neg(\alpha \wedge \beta) \equiv \neg \alpha \vee \neg \beta$ de morgan's law
+ $\neg(\alpha \vee \beta) \equiv \neg \alpha \wedge \neg \beta$ de morgan's law

## Predicate Logic

+ **Constants**: People, objects
    + e.g: John, Mary, 2, UT, AI
+ **Predicates**: Describe relations.
    + e.g: Parent, Daughter, Neighbor, >, Student, Takes, Smart
+ **Functions**: Takes input, Returns a value
    + e.g: Sqrt, Mother, Father, Teacher
+ **Variables**: 
    + e.g x, y, z
+ **Connectives**
    + $\wedge, \vee, \neg, \implies, \iff$
+ **Equality**
    + =
+ **Quantifiers**
    + for all $\forall$
    + exists $\exists$

**Predicate Logic Atomic Sentence**:
+ $predicate(term_1, ..., term_n)$
+ $term_1 = term_2$

A `Term` can be:
+ function(term, ..., term)
+ constant
+ variable.

### Quantifier Equivalence
+ $\forall x \neg P \equiv \neg \exists x P$
+ $\neg \forall x P \equiv \exists \neg P$
+ $\forall x P \equiv \neg \exists x \neg P$
+ $\exists x P \equiv \neg \forall x \neg P$