# Discrete random variables

## Random variable

A random variable is called **discrete** if it can take only a finite or countably infinite number of values. The **range** $S_x$ of a random variable is the set of all possible realizations (values) $X(s)$. A random variable is **discrete** if the range is denumerable.
::: tip Range
The range of a variable (not neccesarily random) can be:

- Finite
- Countably infinite
- Not countably infinite
  :::

## The probability function of a discrete random variable

If $x$ is a discrete random variable we'll call the function that assigns a probablilty $P(X=x)$ to each $x$ which is an elemant of $S_x$ the probab lity function of $X$. The sum of all the probablities from this function equal 1.

::: theorem Properties Probability function

- $\boldsymbol{P}(\boldsymbol{X}=\boldsymbol{x}) \geq \mathbf{0} \text { for } x \in S_{X}$
- $\sum_{x \in S_{X}} \boldsymbol{P}(\boldsymbol{X}=\boldsymbol{x})=\mathbf{1}$
  :::

The above also means that a function which statisfies both properties is a probablity function.

The probablities $$P(X \in B)$$ for each $$B \subset S_{X}$$ are, all together, called the **(probability) distribution** of the random variable $X$. If all probablities are equal we would say that $X$ has a **homogenous** distribution.

::: theorem Geometric series
$$\sum\_{k=0}^{\infty} x^{k}=\frac{1}{1-x}$$

:::

## The expectation of a discrete random variable

The **expectation** or **expected value $E(X)$** of a discrete random variable 𝑋 is given by:

$$\boldsymbol{E}(\boldsymbol{X})=\sum_{x \in S_{X}} x \boldsymbol{P}(\boldsymbol{X}=\boldsymbol{x})$$

provided that this summation absolute convergent is (that is: $$\sum_{x \in S_{X}}|x| \cdot P(X=x)<\infty$$).

::: tip
Expectation $E(X)$ is the average or mean value of $X$
:::

If this the summation converges (absolutely) then the expected value exists, if the summations doesn't converge (absolutely) then the expected value doesn't exist.

| letter | description |
| ------ | ----------- |
| ${\mu}$ | (greek letter m, for mean) sometimes is used instead of $E(X)$. $E(X)$ is often referred to as the sample or population mean|
| $\bar{x}$ | standing for sample mean and ${\mu}$ for population mean. |

## Functions of a discrete random variable; variance

Building further on the expectation we can define multiple imporant properties:

::: theorem Functions
If $X$ is a discrete random variable and $g$ a (real) function, then:

$$\boldsymbol{E}(\boldsymbol{g}(\boldsymbol{X}))=\sum_{x \in S_{X}} \boldsymbol{g}(\boldsymbol{x}) \boldsymbol{P}(\boldsymbol{X}=\boldsymbol{x})$$

So if **$Y$ is a linear function of $X$**, that is $Y = aX + b$ for any real constants $a,b \in \mathbb{R}$ then we have:

$$E(a X+b) =\sum_{x \in S_{X}}(a x+b) \cdot P(X=x)$$
$$=\sum_{x \in S_{X}} a x \cdot P(X=x)+\sum_{x \in S_{X}} b \cdot P(X=x)$$
$$=a \cdot \sum_{x \in S_{X}} x \cdot P(X=x)+b \cdot \sum_{x \in S_{X}} P(X=x)$$
$$=a \cdot E(X)+b \cdot 1$$

:::

The average can be considered a **measure for the center** of a distribution $X$ while the median is the value $M$ such that $$P(X \leq M) \geq 50 \% \text { and } P(X \geq M) \geq 50 \%$$. This however tells us nothing about the magnitude of the differences in the values of $X$. These differences a measured in a different way:

::: theorem Variance and standard deviation

| Notation | Name | Definition |
| -------- | ---- | ---------- |
| $\boldsymbol{var(X)}$ |The variance of $X$ | $\operatorname{var}(\boldsymbol{X})=\boldsymbol{E}\left(\boldsymbol{X}-\boldsymbol{\mu}_{X}\right)^{2}$ |
| $\boldsymbol{\sigma_{X}}$ | The **standard deviation** of $X$ | is the square root of the variance: $\boldsymbol{\sigma_{X}=\sqrt{\operatorname{var}(X)}}$|
:::

::: tip Properties of variance and standard deviation

- $\operatorname{var}(X) \geq 0 \text { and } \sigma_{X} \geq 0$
- $\operatorname{var}(X)=E\left(X^{2}\right)-\mu_{X}^{2}$ (the computational formula)
- if $var(X) > 0$, so if $X$ is not degenerate, we have $E\left(X^{2}\right)>(E X)^{2}$
- $\operatorname{var}(a X+b)=a^{2} \cdot \operatorname{var}(X)$ and $\sigma_{a X+b}=|a| \cdot \sigma_{X}$

:::

### Chebysshev's inequality and the Empirical rule

::: theorem Formula
For any real number $c>0$, we have: $P\left(\left|X-\mu_{X}\right| \geq c\right) \leq \frac{\operatorname{var}(X)}{c^{2}}$

Valid for **any** random variable $X$ and gives us an **upper bound of the probability** of values **outside the interval** $\left(\boldsymbol{\mu}_{X}-\boldsymbol{c}, \boldsymbol{\mu}_{X}+\boldsymbol{c}\right)$
:::

In essence Chebyshev's inequality guarantees that, for a wide class of probability distributions, no more than a certain fraction of values can be more than a certain distance from the mean. Using the inequality and standard deviation a standard interval can be build: $\left(\mu_{X}-k \cdot \sigma_{X}, \mu_{X}+k \cdot \sigma_{X}\right)$ and the upper bound of probability of
observing values outside this interval is $\frac{\operatorname{var}(X)}{c^{2}}=\frac{\operatorname{var}(X)}{k^{2} \sigma_{X}^{2}}=\frac{1}{k^{2}}$.

::: theorem Empircal rule
If the graph of the distribution of 𝑋 shows a bell shape, then the approximately probabilities
for 𝑋 having a value within the interval

- $(\mu-\sigma, \mu+\sigma)$ is 68%
- $(\mu-2 \sigma, \mu+2 \sigma)$ is 95%
- $(\mu-3 \sigma, \mu+3 \sigma)$ is 99.7%
  :::

Chebyshev's rule is valid for any distribution, but the so called Empirical Rule is only valid
for distributions that are (approximately) symmetric and bell (hill) shaped.

## The binomial, hypergeometric, geometric and Poisson distribution

### The Binomial distribution

::: theorem Definition
$X$ is binomially distributed with parameters $n$ and $p$, for all
$n = 1, 2, … $ and $p \in[0,1]$, if the probability function of $X$ is given by:
$\boldsymbol{P}(\boldsymbol{X}=\boldsymbol{k})={n \choose k}) \boldsymbol{p}^{k}(\mathbf{1}-\boldsymbol{p})^{n-k}$, where $k=0,1,2, \ldots, n$

Short notations: $X$ is $B(n,p)$-distributed, or: $X \sim B(n, p)$
:::

One can apply the binomial distribution as a probability model of real life situations,
whenever there is a series of 𝑛 similar experiments for which the conditions of Bernoulli trials
hold, i.e.:

- A phenomenon occurs (or does not occur) at a fixed success rate $p$ (or failure rate $1 − p$)
- Independence of the trials.

If $X$ is $B(n,p)$-distributed, then expected value and variance are given by:
$\boldsymbol{E}(\boldsymbol{X})=\boldsymbol{n} \boldsymbol{p}$ and $\operatorname{var}(\boldsymbol{X})=\boldsymbol{n} \boldsymbol{p}(\mathbf{1}-\boldsymbol{p})$

::: tip Special values of n and p, the parameters of the B(n,p)-distribution

- If $\boldsymbol{p}=\mathbf{1}$ ("success guaranteed"), then $P(X=n)=1$ and $E(X)=n: X$ has a degenerate distribution in $n$. Similarly, if $p=0$, then $P(X=0)=1$ and $E(X)=0$.
- If $\boldsymbol{n}=\mathbf{1}$, that is, if only one trial is conducted (one shot on the basket, the quality of one product is assessed, etc.), $X$ is said to have an **alternative distribution with success probability** $\boldsymbol{p}$, which is a $B(1, p)$ -distribution.

It follows that:
$P(X=1) = p$, and, $P(X=0)= 1-p$

so:

$E(X)=\sum_{x} x P(X=x)=1 \cdot p+0 \cdot(1-p)=p$

And:

$\quad E\left(X^{2}\right)=\sum_{x} x^{2} P(X=x)=1^{2} \cdot p+0^{2} \cdot(1-p)=p$

We find:

$\operatorname{var}(X)=E\left(X^{2}\right)-(E X)^{2}=p(1-p)$,

the variance of a $B(1, p)$ -distribution.
:::

### The Hypergeometric distribution

::: theorem Definition
$X$ is hypergeometricly distributed (with parameters $N$, $R$ and $n$) if:

$$P(A_k) = \frac{{R \choose k}{{N - R} \choose {n - k}}}{{N \choose n}}$$

:::

If the probability function of the random variable $X$ can be given by the hypergeometric
formula, $X$ is said to have a hypergeometric distribution. We can apply this distribution
whenever we consider a number of **random draws without replacement** from a so called
**dichotomous** population: consisting of elements which do or do not have a specific property.

Random draws from a dichotomous population lead to the hypergeometric distribution of the
number of “successes” if we draw without replacement, but on the other hand, if the draws are
with replacement, we can use the binomial distribution: in that case the draws should be
independent.

::: tip Other properties
For relatively large $R$ and $N - R$ and relatively small $n$ the hypergeometric distribution with parameters $N$, $R$ and $n$ can be approximated by a $$B\left(n, \frac{R}{N}\right)-\text { distribution }$$.

Note that the variances of the hypergeometric and binomial distributions under these
conditions are almost equal: $n p(1-p) \cdot \frac{N-n}{N-1} \approx n p(1-p)$.

A (quite strict) rule of thumb for approximating by the binomial distribution is $N>5 n^{2}$.
:::

### The Geometric distribution

::: theorem Definition
$X$ has a geometric distribution with parameter $p \in(0,1]$, if:

$\boldsymbol{P}(\boldsymbol{X}=\boldsymbol{k})=(\mathbf{1}-\boldsymbol{p})^{k-1} \boldsymbol{p}$, where $k=1,2, \ldots$

:::

If $p = 1$ the distribution is degenerate: $P(X = 1) = 1$. Using the properties of the geometric series (which you can find in the appendix “Mathematical Techniques” of Probability Theory for Engineers, see canvas) the following can be proven:

$$\boldsymbol{E}(\boldsymbol{X})=\frac{1}{\boldsymbol{p}} \quad \text { en } \quad \operatorname{var}(\boldsymbol{X})=\frac{\mathbf{1}-\boldsymbol{p}}{\boldsymbol{p}^{2}}$$

The following formula is convenient whenever we have to compute a summation of geometric probabilities:

$$\boldsymbol{P}(\boldsymbol{X}>\boldsymbol{k})=(\mathbf{1}-\boldsymbol{p})^{k}$$

The reasoning is as follows: the probability that we need more than $k$ trials to score a success equals the probability that we are not successful in the first $k$ trials.

### The Poisson distribution

::: theorem Definition
$X$ has a Poisson distribution with parameter $\mu > 0$ if

$$\boldsymbol{P}(\boldsymbol{X}=\boldsymbol{k})=\frac{\boldsymbol{\mu}^{k} \boldsymbol{e}^{-\mu}}{\boldsymbol{k} !}, \quad \text { for } k=0,1,2 \ldots$$

This is a probability function: all probabilities are at least 0 and the sum of all probabilities is 1.
:::

Poisson probabilities are given in (cumulative) probability tables for $$ P(X \leq c)$$

::: tip Other properties
If $X$ has a $B(n,p)$-distribution with “large $n$ and small $p$”, then $X$ has approximately a Poisson distribution with parameter $\mu=n p$.

A rule of thumb for applying this approximation is:
$$n>25 \text { and } n p<10 \text { or } n(1-p)<10$$

These approximations are also applicable in case of "large $n$ and large $p$ "(p close to 1) ", because we noticed before that if the number of successes $X$ is $B(n, p)$ with $p$ close to 1, then the number of failures, $n-X$, is $B(n, 1-p)$, with $1-p$ close to 0.
:::

<img src="../img/common_distributions.png" />