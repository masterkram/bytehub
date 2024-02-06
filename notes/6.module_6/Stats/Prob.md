# Prob Summary

## Distributions

Either `discrete` or `continuous` or mixed.

:::info Discrete Distributions
given with the probability function $P(X = x)$, where $\sum_xP(X = x) = 1$.
$$\mu = E(X) = \sum_xx \cdot P(X=x)$$
$$\sigma^2 = var(X) = E(X - \mu)^2, \sigma = \sqrt{var(X)}$$
:::

:::info Continuous Distributions
Continuous distributions are given are given by the density function f(x),
such that $P(a \lt x \lt b) = \int_{a}^{b}f(x)dx$

$$\mu = E(X) = \int_{-\infty}^{+\infty} x \cdot f(x)$$
$$var(X) = E(X^2) - (EX)^2 \text{(while } E(X^2) = \int_{-\infty}^{+\infty}x^2 f(x)dx$$
:::


### Discrete Distributions
:::info Poisson Distribution
x counts the number of "rare events"
in an area and/or period, with expectation $\mu$

$$P(X = x) = \frac{\mu^x}{x!}e^{-\mu}$$

$$E(X) = var(X) = \mu$$
:::

:::info Hypergeometric Distribution
n draws without replacement from R red and N-R white balls;
X = # of red balls.

$$P(X = x) = \frac{{R \choose x}{N-R \choose n-x}}{{N \choose R}}$$
:::

:::info Binomial Distribution
applies to situations where we count the number of successes in n Bernoulli trials
with success rate p:
X = # of successes

$$P(X = x) = {n \choose x}p^x(1-p)^{n-x}$$

$$E(X) = np$$
$$var(X) = np(1-p)$$
:::

:::info Normal approx of the binomial Distribution
with the $N(np, np(1-p))-dist$
if $n \ge 25,\, np \ge 5 \text{ and } n(1-p) \ge 5$

Don't forget the continuity correction.
:::

### Continuous Distributions

:::info Uniform Distribution
Model for random numbers drawn from an interval,
Especially (0, 1).

$$U ~ U(a, b)$$
$$f(x) = \frac{1}{b-a}, a \le x \le b$$
$$E(X) = \frac{a+b}{2}$$
$$var(X) = \frac{(b-a)^2}{12}$$
:::

:::info Exponential Distribution
Model for waiting times, inter-arrival times and lifetimes

$$U ~ Exp(\lambda)$$
$$f(x) = \lambda e^{\lambda x}, x \ge 0$$
$$E(X) = \frac{1}{\lambda}$$
$$var(X) = \frac{1}{\lambda^2}$$
$$P(X \gt x) = e^{-\lambda x}$$
:::

:::info Normal Distribution
Model for “natural quantities” variables in nature, economy, etc.

$$X ~ N(\mu, \sigma^2$$
$$E(X) = \mu$$
$$var(X) = \sigma^2$$
$$Z = \frac{X-\mu}{\sigma} ~ N(0, 1)$$
:::
