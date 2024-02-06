# Counting

## Inclusion-Exclusion:

`Sums:`

$|A \cup B| = |A| + |B| - |A \cap B|$
$|A \cup B \cup C| = |A| + |B| + |C| − |A \cap B| − |A \cap C| − |B \cap C| + |A \cap B \cap C|$

## Permutations with repetition:
>Order does not matter
>
>You can select the same over and over.

choosing r of something that has n different types, the permutations are:
$n * n * \dots \text{(r times)}$
or
$n^r$

for example choosing 10 letters in order (r) from 26 possible letters (n):

$n^r = 26^{10}$

## Permutations without repetition:
>Order matters
>
>No duplicates,  we have to reduce the number of available choices each time.

notation: *P(n)*

a permutation if n distinct elements is an ordering of the n elements There are n * n - 1 * 2 * 1 = n! permutations of n.

## r-Permutations:
>Order matters
>
>No duplicates, we have to reduce the number of available choices each time.
>
>You only want to select r things (Not all n)

an r-permutation if n distinct elements is an ordering of r out of n elements where 0 < r < n the number P(n, r)
of r-permutations of n elements is

n * (n - 1) * ... * (n - r + 1) = $\frac{n!}{(n-r)!}$

## Combinations:
>Selection order does not matter
>
>No duplicates, you can only select an option once.

Notation: *C(n, r)*

$C(n, r) = \binom{n}{r} = \frac{P(n, r)}{r!} = \frac{n!}{r! * (n - r)!}$

Useful formulas:

$\binom{n}{0} = \binom{n}{n} = 0$

$\binom{n}{r} = \binom{n}{n-r}$

$\binom{n + 1}{r} = \binom{n}{r-1} + \binom{n}{r}$

## Binomial coefficient:
+ *Find the coefficient for xy*
+ *Pass x, y to the equation and*


## Sources:
https://www.mathsisfun.com/combinatorics/combinations-permutations.html