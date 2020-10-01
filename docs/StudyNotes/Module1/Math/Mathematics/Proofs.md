# Proofs

## Proof Templates:
the fancy english/structure you have to write to get
the full points

In all cases it is good to write the theorem before starting the proof.

*italic* text is supposed to be filled in or replaced in the actual proof.

---

### Counterexample:
The statement is false for n = *value goes here*

*(show why it is false for n = value)*

---

### Proof by cases:
Make sure that the cases put together form the entire set you are trying to prove the proposition for.

**THEOREM:** $\text{For every} \, n \in R,\,$ `S(n):` *(...)* 

**Proof:** By cases
we distinguish *two* cases

<ins>Case one:</ins> *(...)*

<ins>Case two:</ins> *(...)*

In both cases we proved S(x), since for each $x \in R$
we have either *case one* or *case two* we proved that S(x) holds for all $x \in R$
$\square$

---

### Direct proof:

**THEOREM:** $\text{For every} \, n \in N,\,$ `S(n):` *(...)* 

**Proof:** take an arbitrary integer x such that x *fufills conditions* 
$\square$

---

### Proof by contradiction:

**THEOREM:** P -> Q

**Proof:**
Assume, for the sake of contradiction *P* is true but *Q* is false.

*(...)*

Since we have a contradiction, it must be that *Q* is true.

$\square$

---

### Proof by Induction:

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

---

## Sources
+ Harry Aarts, Ed Brinksma, Jan Willem Polderman, Gerhard Post, Marc Uetz, Marjan van der Velde (2018) Introduction to Mathematics
+ Micro-lectures wk2
+ [villanova-induction-template-pdf](http://www.csc.villanova.edu/~map/1300/s18/mathinduction.pdf)