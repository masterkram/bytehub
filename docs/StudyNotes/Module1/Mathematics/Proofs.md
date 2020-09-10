# Proofs

## How to prove a statement ?

1. Determine what is given and what you can assume about the problem. Determine
what you must show or find.

2. Write down the mathematical definitions of what you have to show, and the definitions of concepts you may use.

3. Before starting the formal proof, look at the problem and see if the statement is reasonable. Things that might help here are making a picture, trying an example, or
discussing the problem with others. If you think the statement is not true, you can try to find a counterexample. If you find it you are done.

4. If it is not clear why the statement is true, browse through related theorems and examples to see if they have something to do with what you are given or what you need to show. This might give you an idea for a proof.

5. As soon as you have the feeling the statement is true,
analyze why that is the case. A proof often exists of several steps which lead from the givens to the desired result.
Write down these consecutive steps. This is the step in which you actually write
the proof. It is of the utmost importance that you carefully explain all steps you take. A proof that is only clear to yourself is useless.

6. Now that you have written down everything there is, take some distance and see if
it is a good argument.

## Proof Templates:

### Induction

**THEOREM:** $\text{For every} \, n \in N,\,$ `S(n):` *(...)* 

**PROOF:** By mathematical induction.
    
<ins>Basis Step:</ins> S(1) asserts that *(...)*

which is true because *(...)*

<ins>Inductive Step:</ins>

Assume for an arbitrary $k \in N$, S(k) is true, i.e.: *(...)* `Induction Hypothesis (substitute k for n)`

We will now show that S(k+1) is also true, i.e.: *(...)* `state	what must be proved (substitute	k+1	for	n)`

Proof of inductive step: *(...)*

<ins>Conclusion:</ins>
We thus have that S(1) is true and $\forall k \in N, S(k) \implies S(k + 1)$, so by the principle of mathematical induction, it follows that S(n) is true for all natural numbers n.
$\square$

## Sources
+ Harry Aarts, Ed Brinksma, Jan Willem Polderman, Gerhard Post, Marc Uetz, Marjan van der Velde (2018) Introduction to Mathematics
+ Micro-lectures wk2
+ [villanova-induction-template-pdf](http://www.csc.villanova.edu/~map/1300/s18/mathinduction.pdf)