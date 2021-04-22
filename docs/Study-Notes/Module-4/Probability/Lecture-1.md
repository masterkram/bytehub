# Lecture 1

## Experiment and sample space
::: theorem Sample Space
The set $S$ of all possible outcomes of an experiment.
:::

::: theorem Event
An event $A$ is a subset of the sample space $S: A \subset S$.
:::

::: theorem Mutually Exclusive
+ A and B are mutually exclusive (or disjoint) events if $A \cap B = \emptyset$

+ The events: $A_1, A_2,...A_n$ are called mutually exclusive (or disjoint) if:
$$A_i \cap A_j = \emptyset$$
for every possible combination of (i, j)
for which $i \neq j$
:::

#### Notation:
+ $\{A_i\}$ is a sequence of events.
+ The Intersection of the sequence is written as $\bigcap^n_{i=1}A_i$
    + If infinite $\bigcap^{\infty}_{i=1}A_i$
    + $\bigcap_i A_i$ is the event that occurs if each of the events Ai occurs.
+ The Union of these sequence is written as $\bigcup^n_{i=1}A_i$
    + If infinite $\bigcup^{\infty}_{i=1}A_i$
    + $\bigcup_i A_i$ is the event that occurs if at least one of the events Ai occurs.

::: theorem Partition
The sequence of events $\{A_i\}$ is a partition of the event B if the events Ai are mutually exclusive and $B = \bigcup_iA_i$
:::

::: tip Properties of combinations of events
+ $A \cap (B \cup C) = (A \cap B) \cup (B \cap C)$
+ $A \cup (B \cap C) = (A \cup B) \cap (B \cup C)$
+ $A \cup B = A \cup (\overline{A} \cap B)$
+ $B = (A \cap B) \cup (\overline{A} \cap B)$
+ $\overline{A \cup B} = \overline{A} \cap \overline{B}$
+ $\overline{A \cap B} = \overline{A} \cup \overline{B}$
:::

## Symmetric Probability Spaces
::: theorem Probability P of event A
$0 \leq P(A) \leq 1,  \forall A: A \subset S$
$$P(A) = \frac{\text{times A occurred}}{\text{possible outcomes}}$$
:::

::: theorem Symmetric Probability Space
If S is a finite sample space of an experiment and the probabilities P(A) of events A are defined according to Laplace's definition (outcomes are equally likely) the pair (S, P) is called a symmetric probability space.
:::

The definition of Laplace applies when during
an experiment an element is chosen arbitrarily or at random from a finite sample space.

::: tip Properties of a symmetric probability space
+ $P(A) \geq 0, \forall A$
+ $P(S) = 1$
+ $A \subset B, then, P(A) \leq P(B)$
+ $P(\overline{A}) = 1 - P(A)$
+ If $A_1, A_2, ... A_n$ are mutually exclusive then $P(\bigcap^n_{i=1}A_i) = \sum_{n=1}^{n}P(A_i)$
:::

## Probabilistic experiments

::: theorem Definition
An experiment is probabilistic or stochastic if you cannot know the outcome of the experiment ahead of time. E.g.: A diceroll or a toss of a coin.
:::

## Relative frequency and the empirical law of large numbers

::: theorem Definition
Assume that we have an experiment with sample
space S which we can repeat arbitrarily often.
If the event A occurred n(A) times in total with n repetitions, then we can define:

$$f_n(A) = \frac{n(A)}{n}$$
As the relative frequency (or frequency quotient) of A in n repetitions.
:::

## Kolmogorov's Axioms

::: theorem Definition
Consider an experiment with a random non-empty sample space S. A function P which assigns a real number P(A) to every event $A \subset S$,
is called a probability or probability measure on S if:
1. $P(A) \geq 0$ for every event A
2. $P(S) = 1$
3. For every countable sequence of mutually exclusive events $A_1, A_2,...,A_n \, P(\bigcap_i A_i) = \sum_i P(A_i)$
:::

::: theorem Probability Space
When S is a sample space and P is the probability on S then we call the pair (S, P) a probability space.
:::

::: tip Properties
+ $P(\emptyset) = 0$
+ $P(\overline{A}) = 1 - P(A)$
+ For two events A and B with $A \subset B$ we have $P(A) \leq P(B)$
+ For two events A and B (not necessarily mutually exclusive): $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
:::