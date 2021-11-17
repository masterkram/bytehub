# Descriptive Statistics

`descriptive statistics` = summarize observed data and present it graphically.

## Types of data
| Data | Description |
| ---- | ----------- |
| Nominal Data | Categories no ordering or direction |
| Ordinal Data | ordered categories (rankings, order) |
| Interval Data | Differences between measurements but no true zero |
| Ratio Data | Differences between measurements, true zero exists |

## Graphs

### Dot Diagram

A line of numbers on which the observations are presented as dots equal observations are stacked.

### Histogram

`frequency` = the count.

+ choose a distribution in intervals: not too many nor too many few observations per interval.
+ count the number of observations in each interval, the frequency or determine the $relative frequency = \frac{frequency}{n}$
+ Build a rectangle above each interval and choose as height either the frequency or the relative frequency.

### Bar Graph

+ for bar graphs the variable has to be quantitative and discrete.

## Measures of Center

+ `Mean`: arithmetic average $\bar{x} = \frac{1}{n}\sum_{i=1}^nx_i$
+ `Median`: the middle observation, the observations are arranged from small to large. if n is even then compute the mean of the middle observations.
+ `Mode`: the most frequently occurring observation.

### Percentiles and quartiles

+ The median m is also the 50th percentile: about 50% of the observations is smaller than 50% and 50% is greater than the median m.
+ The quartiles Q1, m and Q3 are the 25th, 50th and 75th percentiles they split the observations in 4 roughly equal quarters.

### Box-Plot

The box plot graphs the 5-number summary of the observations
+ quartiles (Q1, m, Q3)
+ smallest observation.
+ largest observation.


## Measures of Variability

+ Range: the range r = largest - smallest observation
+ The inter-quartile range $IQR = Q_3 - Q_1$
+ Variance: sample variance: $s^2 = \frac{1}{n-1}\sum_{i=1}^n(x_i - \bar{x})^2$

sample variance != population variance

+ resistant for outliers: median, IQR
+ non outlier resistant: $\bar{x}$, $s$, $x^2$

Chebyshev's rule: $P(|X - \mu_x| \ge c) \le \frac{var(x)}{c^2}$

## The empirical rule

ony valid for bell shaped histograms

| Interval | Empirical rule | General |
| -------- | -------------- | ------- |
| $\bar{x} - s, \bar{x} + s$ | `68%` | $\le 0\%$ |
| $\bar{x} - 2s, \bar{x} + 2s$ | `95%` | $\le 0\%$ |
| $\bar{x} - 3s, \bar{x} + 3s$ | `99.7%` | $\le 89\%$ |


## The z-scores

For samples with mean $\bar{x}$ and standard deviations s:

the z-score of an observation x is $\frac{x-\bar{x}}{s}$

+ Measure for deviation from the mean: "the number of standard deviations smaller or greater than the mean"

For populations with mean $\mu$ and standard deviation $\sigma$
The z-score of an observation or value x is $\frac{x-\mu}{\sigma}$