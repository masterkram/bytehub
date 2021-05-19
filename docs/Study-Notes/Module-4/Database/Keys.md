# Keys
+ A key uniquely identifies a tuple(row) in a table.
+ Sometimes one attribute or a small set of attributes forms a (natural) key.
+ Sometimes an extra key is needed to guarantee uniqueness.

::: tip Key Basic Idea
+ Let R be a relational schema.
+ Let X, Y be sets of attributes.

If X is a key of R then all attributes of R are functionally dependent on X.

In other words:
+ If X is a key of the relational schema $R(XY)$ then $X -> XY$
:::

## Superkeys
::: theorem Superkey
+ Let be a relational schema.
+ Let X, Y be sets of attributes.

X is a superkey of R if **all** attributes of R are functionally dependent
on X.

X is a **superkey** of R if $X -> XY$
:::

::: details show table
| ssn | name | birth_date | astrological_sign |
| --- | ---- | ---------- | ----------------- |
| 115565789 | Alice Anderson |1987-04-15 | Aries |
| 136729221 | Bill Brown |1973-05-02 | Taurus |
| 262823054 | Bill Brown | 1998-03-21 | Aries |
| 228923541 | Chris Carpenter | 1992-07-17 | Leo |
:::

::: tip Examples:
+ (SSN) is a superkey.
+ (SSN, astrological_sign) is a superkey.
+ (name) is not a superkey.
:::

## Candidate Keys
::: theorem Candidate Key
**A candidate key is a minimal superkey**

+ A **candidate key** of a relation R is a **superkey** which has no proper subset that is also a superkey.

In other words, you cannot remove one of the attributes in a candidate key while maintaining uniqueness.
:::

### Examples:
::: details show table
| ssn | name | birth_date | astrological_sign |
| --- | ---- | ---------- | ----------------- |
| 115565789 | Alice Anderson |1987-04-15 | Aries |
| 136729221 | Bill Brown |1973-05-02 | Taurus |
| 262823054 | Bill Brown | 1998-03-21 | Aries |
| 228923541 | Chris Carpenter | 1992-07-17 | Leo |
:::

::: tip Examples:
+ (SSN) is a candidate key.
+ (SSN, birth_date) is not a candidate key.
:::


*Movie(title, year, length, genre)*

::: details show table
| title | year | length | genre |
| ----- | ---- | ------ | ----- |
| Gone With the Wind | 1939 | 231 | drama |
| Star Wars | 1977 | 124 | sciFi | 
| Heaven can wait | 1943 | 112 | comedy |
| Heaven can wait | 1978 | 101 | comedy |
:::

this relation has two candidate keys:
+ (title, year)
+ (title, length)

functional dependencies for Movie:
+ $title \, year -> length$
+ $title \, year -> genre$
+ $title \, length -> year$
+ $title \, length -> genre$

shorthand:
+ $title \, year -> length genre$
+ $title \, length -> year genre$

### How to determine candidate keys.
1. start with the *trivial superkey* (the set of all attributes).
2. Eliminate attributes which are functionally dependant on other attributes in the set.
3. stop once no more attributes can be eliminated.

may result in different keys for different attributes chosen in step 2.

#### Example:

::: details show table
| S | N | B | A |
| --- | ---- | ---------- | ----------------- |
| 115565789 | Alice Anderson |1987-04-15 | Aries |
| 136729221 | Bill Brown |1973-05-02 | Taurus |
| 262823054 | Bill Brown | 1998-03-21 | Aries |
| 228923541 | Chris Carpenter | 1992-07-17 | Leo |
:::

::: tip Example
+ FDs: $S -> N, \, S -> B, \, B -> A$

1. take the set of all attributes: `SNBA`.
2. eliminate attributes.
    + $S -> B$ so we can eliminate B: `SNA`
    + $S -> N$ so we can eliminate N: `SA`
    + $S -> B, B -> A$ based on *transitivity* we can eliminate A: `S`

we cannot eliminate any more attributes from the key because there is only one attribute left.
S is a superkey and the only candidate key.

Dependencies explained in words:
+ the ssn determines the date of birth.
+ the date of birth determines the astrological sign
+ thus the ssn determines the astrological sign.
:::

To make this process better we can compute the **closure** of the set of FDs.

## Primary Keys

Only one candidate key is designated as primary key.