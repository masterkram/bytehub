# Conditional probability and independence

## Conditional probability

Conditional probability is the probability of one event occurring with some relationship to one or more other events.

::: theorem Definition conditional probablity
When $A$ and $B$ are events and $P(B)$ > 0, then we define:

$$
\boldsymbol{P}(\boldsymbol{A} \mid \boldsymbol{B})=\frac{\boldsymbol{P}(\boldsymbol{A} \boldsymbol{B})}{\boldsymbol{P}(\boldsymbol{B})}$$

as the (conditional) probability of $A$ under condition of $B$ (or: the (conditional) probability of $A$ given $B$).
:::

The following Multiplication rule follows:
::: tip Muliplication Rule
Independent Events
$P(X \cap Y)=P(X) \cdot P(Y)$

Dependent Events
$P(X \cap Y)=P(Y) \cdot P(X \mid Y)$
:::

## Law of total probability and Bayes' rule

The law of total probability states that If $\left\{S_{i}\right\}$ is a partition of $S$ such that $P\left(S_{i}\right)>0$ for all $i$, then for each event $A$ we have:

$$\boldsymbol{P}(\boldsymbol{A})=P\left(A \mid S_{1}\right) \cdot P\left(S_{1}\right)+P\left(A \mid S_{2}\right) \cdot P\left(S_{2}\right)+\cdots=\sum_{i} \boldsymbol{P}\left(\boldsymbol{A} \mid \boldsymbol{S}_{i}\right) \cdot \boldsymbol{P}\left(\boldsymbol{S}_{i}\right)$$

::: theorem Bayes' Theorem
$P(X \mid Y)=\frac{P(X \cap Y)}{P(Y)}$
:::

Note that the Bayes' theorem can be used in combination with the multiplication rules for example with dependent events:

$$P(X \cap Y)=P(Y) P(X \mid Y)$$

$$\frac{P(X \cap Y)}{P(Y)}=\frac{P(Y) P(X \mid Y)}{P(Y)}$$

## Independence of events and random variables

::: theorem Independence
The events 𝐴 and 𝐵 are **independent** when:
$\boldsymbol{P}(\boldsymbol{A} \boldsymbol{B})=\boldsymbol{P}(\boldsymbol{A}) \cdot \boldsymbol{P}(\boldsymbol{B})$
:::

::: theorem Bernoulli trials
A series of experiments is called Bernoulli experiments or trials if

1. each experiment has two possible outcomes, often denoted with
   'Success' and 'Failure',
2. the experiments are independent and
3. the probability of success is the same for each experiment.

From this follows the **Binomial formula**
If $X$ is the number of successes in $n$ Bernoulli experiments with success probability
$p$, then:
$\boldsymbol{P}(\boldsymbol{X}=\boldsymbol{k})={\boldsymbol{n} \choose \boldsymbol{k}} \boldsymbol{p}^{k}(\mathbf{1}-\boldsymbol{p})^{n-k}$, where $k=0,1,2, \ldots, n$

If we conduct Bernoulli trials with success probability $p$ until a success occurs and $X$ is the number of required trials, then:

$$\boldsymbol{P}(\boldsymbol{X}=\boldsymbol{k})=(\mathbf{1}-\boldsymbol{p})^{k-1} \boldsymbol{p}, \text { where } k=1,2,3, \ldots$$

:::

Remember that $$p^{k}(1-p)^{n-k}$$ is the probability that the first $k$ trials are successful and the last $n$ − $k$ are
failures and ${n \choose k}$ the number of possible orders of $k$ successes and $n$ − $k$ failures.
