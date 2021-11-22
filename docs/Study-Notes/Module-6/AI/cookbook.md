# Logic Cookbook

*This page contains syntax for propositional logic and definitions of commonly used terms* :ramen: :notebook_with_decorative_cover:

## Propositional Logic Terms

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
+ Modus ponens: he rule of logic which states that if a conditional statement ($p \implies q$) is accepted, and the antecedent ($p$) holds, then the consequent ($q$) may be inferred.


## Equivalence

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