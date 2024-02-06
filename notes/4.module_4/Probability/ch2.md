# Ch2: Combinatorial Probability

## Key concepts

::: info Definitions

- Permutation: arrangement in some order
- Ordered versus unordered samples: In ordered samples, the order of the elements in the sample matters; e.g., digits in a phone number, or the letters in a word. In unordered samples the order of the elements is irrelevant; e.g., elements in a subset, or lottery numbers.
- Samples with replacement versus samples without replacement: In the first case, repetition of the same element is allowed (e.g., numbers in a license plate); in the second, repetition not allowed (as in a lottery drawing—once a number has been drawn, it cannot be drawn again).

:::

::: tip Formula's
- Number of **permutations** of n objects: n!
- Number of **ordered** samples of size r, **with** replacement, from n objects: $n^r$
- Number of **ordered** samples of size r, **without** replacement, from n objects:
  $$n(n-1) \cdots(n-r+1)=\frac{n !}{(n-r) !}={ }_{n} P_{r}$$
- Number of **unordered** samples of size r, **without** replacement, from a set of n objects
  (= number of subsets of size r from a set of n elements) (**combinations**):
  $${n \choose x} = \frac{{ }_{n} P_{r}}{r !}=\frac{n !}{r !(n-r) !}=\frac{n(n-1) \ldots(n-r+1)}{r !}$$
- Number of **subsets** of a set of n elements: $2^n$
:::

## Binomial coefficients

::: info Definition
For n = 1, 2, . . . and k = 0, 1, . . . , n,

$${n \choose x}=\frac{n !}{k !(n-k) !} =\frac{n(n-1) \ldots(n-k+1)}{k !}$$
:::

::: tip Combinatorial Interpretations
${n \choose k}$ represents: 
1. the number of ways to select k objects out of n given objects (in the sense of
unordered samples without replacement);
2. the number of k-element subsets of an n-element set;
3. the number of n-letter HT sequences with exactly k H’s and n − k T’s.
:::

## Rules and properties

::: info The product rule

If an experiment consists of performing k partial experiments and the $i^{th}$ partial experiment has $n_i$ possible outcomes $(i = 1, … k)$, no matter what the results of the partial experiments are, then $n_1 \times n_2 \times \dots \times n_k$ outcomes of the total experiment are possible.
:::

::: info The permutation rule

The number of orders or permutations (variations) in which k different things can be arranged is $k!$

:::

::: info Properties
When $A_1, A_2, \dots , A_k$ are **mutually exclusive** events, then:

$$N\left(\prod_{i=1}^{k} A_{i}\right)=\sum_{i=1}^{k} N\left(A_{i}\right)$$
:::

::: warning Hypergeometric formula
If we draw n times, at random and without replacement, from a set of $N$ balls, consisting
of $R$ red and $N$ - $R$ white balls, the probability of event $A_k$, that we draw $k$ red (and $n$ - $k$
white) balls, is given by:
$$P(A_k) = \frac{{R \choose k}{{N - R} \choose {n - k}}}{{N \choose n}}$$
:::
