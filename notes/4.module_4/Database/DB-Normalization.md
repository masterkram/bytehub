# Database Normalization

Also Read [Keys](./Keys.md) :key:

::: info Database normalization
The process of
restructuring a a relational database in accordance with a series of normal forms in order to reduce data redundancy and improve data integrity.
:::

Normalization prevents anomalies:
+ Update anomaly
+ Insertion anomaly
+ Deletion anomaly

## Functional Dependency

::: info Functional Dependency
+ Let **R(..., A, ..., B, ...)** be a relational schema.
+ There is a **functional dependency** between **A** and **B** denoted $A -> B$ in R if for any instance of R, tuples with the same value for **A** have the same value for **B**.
:::

In other words the value of **B** follows from the value of **A**.

Examples:
+ $birth\_date -> astrological\_sign$: the astrological sign (B) will always be the same for the same values of birth_date (A)
+ $ssn -> name$: since the ssn is unique (A) it will agree with name (B)
+ on the other hand ssn (B) does not functionally depend on birth_date (A) because there can be multiple people born on the same date (and they would have a different B).

Functional Dependencies For Sets:
::: info Functional Dependency
+ Let R be a relational schema.
+ Let X, Y be sets of attributes.
+ There is a **functional dependency** between **X** and **Y** denoted $X -> Y$
in R if for any instance of R, tuples with the same values for X also have the same values for Y.
:::

In other words the values of **Y** follow from the values of **X**

### Rewrite Rules for FDs

::: tip Rewrite Rules
1. $XY -> X$ (reflexivity)
2. $\text{If } X -> Y \text{ then } XZ -> YZ$ (augmentation)
3. $\text{If } X -> Y \text{ and } Y -> Z \text{ then } X -> Z$ (transitivity)
4. $\text{If } X -> Y \text{ and } YW -> Z \text{ then } XW -> Z$
5. $\text{If } X -> Y \text{ and } X -> Z \text{ then } X -> YZ$
6. $\text{If } X -> YZ \text{ then } X -> Y \text{ and } X -> Z$
:::

Rules 1-3 are known as `Armstrong's Axioms.`
Rules 4-6 are convenient rules derived from Armstrong's Axioms.

### Closure

::: info Closure
For a set of functional dependencies $\mathscr{F}$, it's closure $\mathscr{F}^+$ is the set of all functional dependencies that can be logically implied by $\mathscr{F}$
:::

#### Algorithms

##### Naive Algorithm
Compute the closure by applying rewrite rules until no more FDs can be derived.

##### Smarter Algorithm
+ If we have $A -> B$ can we find some $Y$ such that $Y -> A$ ? Then from $Y -> A, A -> B$ we derive $Y -> B$.

##### Example

::: tip Example
Given: $ABC -> E, \, CD -> B, \, E -> D$ Which new FD's can we derive ?

+ Applying $E -> D$ to $CD -> B$ yields $CE -> B$ ($CE -> CD -> B$)
+ Applying $ABC -> E$ to $E -> D$ yields $ABC -> D$
+ Applying $CD -> B to ABC -> E yields ACD -> E$

Written Formally:

Let,
$$\mathscr{F} = \{ABC -> E, CD -> B, E -> D\}$$ be the set of FDs for a relation *R(A, B, C, D, E)*

The closure of this set :
$$\mathscr{F}^+ = \{ABC -> DE, ACD -> E, CD -> B, CE -> B, E -> D\}$$
:::

::: tip Notation
+ Discard trivial FDs (like $ABC -> A$)
+ Consider only FDs with a single attribute as the right hand side.
+ If FDs have identical left-hand sides, combine them as a shorthand notation.
(i.e. $ABC -> DE$ for $ABC -> D, \, ABC -> E$)
:::

::: details show table
| S | N | B | A |
| --- | ---- | ---------- | ----------------- |
| 115565789 | Alice Anderson |1987-04-15 | Aries |
| 136729221 | Bill Brown |1973-05-02 | Taurus |
| 262823054 | Bill Brown | 1998-03-21 | Aries |
| 228923541 | Chris Carpenter | 1992-07-17 | Leo |
:::

::: tip Example
$$\mathscr{F} = \{S -> NB, B -> A\}$$
+ we can add $S -> A \text{ from } S -> B, \, B -> A$
$$\mathscr{F}^+ = \{S -> NBA, B -> A\}$$
:::

#### Closure of a set of attributes

$X^+ = X \cup \{\text{all attributes that are functionally dependent on X}\}$

For example:
$$\mathscr{F} = \{course -> responsible, responsible -> office \, tel\_no, tel\_no -> office\}$$

+ $\{responsible\}^+ = \{responsible \, office \, tel\_no\}$
+ $\{course\}^+ = \{course \, responsible \, office \, tel\_no\}$
+ $\{office\}^+ = \{office\}$
+ $\{tel\_no\}^+ = {office \, tel\_no}$

## Normal Forms

### 1NF
::: info 1NF
All attributes have *atomic* values: each attribute contains a single value.
:::

This normal form is enforced by default by the way we construct database schemas: consequence of the principle that attributes in a class diagram cannot have set values.

### 2NF

::: info 2NF
+ The relation is in 1NF
There is no non-prime attribute that is functionally dependent on a proper subset of a candidate key.

non-prime attribute: an attribute that is not part of any candidate key.

In other words all non-key attributes are fully dependent on the primary key.
:::

#### Example

::: details Not 2NF <Badge type="warn" text="Not Normalized"/> 
| course | teacher | office |
| ------ | ------- | ------ |
| Database Theory | Rebecca Roberts | AB 183 |
| Database Theory | Stuart Stevens | AB 240 |
| Database Theory | Theresa Thompson | H 3072 |
| Advanced Programming | Stuart Stevens | AB 240 |
| Advanced Programming | William Walters | H 3122 |

+ Functional dependency: $teacher -> office$
+ One candidate key: course teacher
+ Not in 2NF because: office depends on part of the candidate key. (teacher)
:::

::: details 2NF <Badge text="Normalized"/> 
| course | teacher |
| ------ | ------- |
| Database Theory | Rebecca Roberts |
| Database Theory | Stuart Stevens |
| Database Theory | Theresa Thompson |
| Advanced Programming | Stuart Stevens |
| Advanced Programming | William Walters |

| teacher | office |
| ------- | ------ |
| Rebecca Roberts | AB 183 |
| Stuart Stevens | AB 240 |
| Theresa Thompson | H 3072 |
| William Walters | H 3122 |
+ Functional dependencies:
$$\{course -> responsible \, responsible -> office\}$$
+ One candidate key: `course`.
:::


### 3NF

::: info 3NF
+ The relation is in 2NF
+ No non-prime attribute is *transitively dependent* on a superkey

transitive dependency: $X -> \text{ and } Y -> Z$ then Z is transitivley dependent on X.
:::

#### Example:
::: details not 3NF <Badge type="warn" text="Not Normalized"/> 
| course | responsible | office |
| ------ | ------- | ------- |
| Database Theory | Rebecca Roberts | AB 183 |
| Advanced Programming | William Walters | AB 240 |
| Operation Systems | William Walters | AB 240 |
| Artificial Intelligence | Phil Petersen | PT 5120 |
| Discrete Mathematics | Naomi Nilsson | H 2403 |

+ Functional dependencies:
$$\{course -> responsible \, responsible -> office\}$$
+ Transitive dependency: $course -> office$

A non-prime attribute `office` is transitively dependent on the superkey course, therfore the relation is not in 3NF.
:::

::: details 3NF <Badge text="Normalized"/>
| course | responsible |
| ------ | ----------- |
| Database Theory | Rebecca Roberts |
| Advanced Programming | William Walters |
| Operation Systems | William Walters | 
| Artificial Intelligence | Phil Petersen |
| Discrete Mathematics | Naomi Nilsson |

| responsible | office |
| ----------- | ------ |
| Rebecca Roberts | AB 183 |
| William Walters | H 3122 |
| Phil Petersen   | PT 5120|
| Naomi Nilsson   | H 2403 |
:::


### BCNF (Boyce-Codd Normal Form)

::: info BCNF
If $X -> Y$ is a functional dependecy of R, then either $X -> Y$ is a trivial dependency (i.e $Y \subseteq X$) or X is a superkey of R.

or:

A relation is in BCNF if the left-hand side of every nontrivial FD is a superkey.
:::

#### BCNF decomposition algorithm
The BCNF decomposition algorithm serves allows us to make a relational schema satisfy BCNF.

::: info algorithm
+ Let R be a relational schema.
FD X -> Y be a violation of the BCNF constraint
    + compute $X^+$
    + $R_1 = X^+$
    + $R_2 = X \cup \{all attributes not in X^\}$
    + Compute FDs for $R_1$ and $R_2$
+ If $R_1$ or $R_2$ not in BCNF, apply the same rules.

The decomposition is **losless**, i.e. an instance of R can be reconstructed from instances of $R_1$ and $R_2$.
:::

### Decomposition Properites

1. elimination of anomalies
2. recoverability of information (losslessness)
3. Preservation of dependencies

+ `BCNF` guarantees 1,2
+ `3NF` guarantees 2,3

## Multivalued Dependencies

::: info MVD
+ Let R(XYZ) be a relational schema
+ Let X, Y, Z be sets of attributes
(a mvd only exists when there are at least three attributes.)

$X \twoheadrightarrow Y$ if for any instance of R the following holds:
+ If $xy_1z_1 \text{ in R and } xy_2z_2 \text{ in R}$
+ Then also $xy_1z_2 \text{ in R and } xy_2z_1 \text{ in R}$

$\twoheadrightarrow$ is called a multivalued dependency.
:::

::: details Example
Kindergarten has a database with parents, their tel numbers and their children. This is their table:

| parent | tel_no | child |
| Alice Anderson| 053-4332567| Tom |
| Alice Anderson | 06-10547732 | Tom |
| Alice Anderson | 053-4332567 | Bram |
| Alice Anderson | 06-10547732 | Bram |
| Bob Anderson | 053-4332567 | Tom |
| Bob Anderson | 053-4332567 | Bram
| Deborah Davids | 074-2662359 | Harry |
| Deborah Davids | 06-18809372 | Harry |

this table is in BCNF because it has no functional dependencies.

But if a new child would be born we would have to add to add a new row to the table for each tel_no of that parent. :grimacing:

There are two multivalued dependencies in this relation: $\{parent\} \twoheadrightarrow \{tel_no\} \text{ and } \{parent\} \twoheadrightarrow \{child\}$
:::

::: tip MVD Properties
Let *R(XYZ)* be a relation:
1. If $X \twoheadrightarrow Y \text{ then } X \twoheadrightarrow Z$
2. If $X -> Y \text{ then } X \twoheadrightarrow Y$
:::

### Fourth normal form

::: info 4NF
If $X \twoheadrightarrow Y$ a functional dependency of R, then either X \twoheadrightarrow Y is a trivial MVD (i.e. $Y \subseteq X$) or X is a superkey of R.
:::

::: details Example
| parent | tel_no | child |
| Alice Anderson| 053-4332567| Tom |
| Alice Anderson | 06-10547732 | Tom |
| Alice Anderson | 053-4332567 | Bram |
| Alice Anderson | 06-10547732 | Bram |
| Bob Anderson | 053-4332567 | Tom |
| Bob Anderson | 053-4332567 | Bram
| Deborah Davids | 074-2662359 | Harry |
| Deborah Davids | 06-18809372 | Harry |

MVDs:
+ $\{parent\} \twoheadrightarrow \{tel_no\}$
+ $\{parent\} \twoheadrightarrow \{child\}$
Candidate key:
+ (parent, tel_no, child)

Decomposition:

| parent | tel_no |
| ------ | ------ |
| Alice Anderson | 053-4332567 |
| Alice Anderson | 06-10547732 |
| Bob Anderson | 053-4332567 |
| Bob Anderson | 053-4332567 |
| Deborah Davids | 074-2662359 |
| Deborah Davids | 06-18809372 |

| parent | child |
| ------ | ----- |
| Alice Anderson | Tom |
| Alice Anderson | Bram|
| Bob Anderson   | Tom |
| Bob Anderson   | Bram|
| Deborah Davids | Harry|
:::