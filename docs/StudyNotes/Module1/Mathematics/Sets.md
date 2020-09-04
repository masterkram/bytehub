# Sets

sets are the basic building blocks of mathematics.

### Definition:

*A set is a well defined unordered collection of distinct elements.*

### Examples:

+ $\{1, 3, 6\}$
a set of numbers

+ $\{Jan, Pier, Tjoris, Corneel\}$
a set of guys with beards

+ $\{\{1, 3, 6\}, \{Jan, Pier, Tjoris, Corneel\}\}$
a nested set

+ $\{1, 2, 3,\dots\}$
a infinite set

---

+ $\{1, 3, 6, 6\} = \{1, 3, 6\}$
**Distinct property**

+ $\{1, 3, 6\} = \{1, 6, 3\}$
**Unordered property**

+ $\text{collection of good soccer clubs} \ne set$
**Not well defined**

### Notation:

+ List of all elements:  
$\{1, 2, 3, 4, 5, 6, 7, 8, 9\}$

+ Pattern:  
$\{1, 2, ... , 9\}$

+ Properties:  
$\{\,n \mid n \text{ is whole number with } 1 \leq n \leq 9 \,\}$

## Set Relations

A set consist of elements.

Being an element or not relates an object to a set.

+ 1 is an element of the set $\{1, 3, 6\}$
    + $1 \in \{1, 3, 6\}$

+ 2 is **not** an element of the set $\{1, 3, 6\}$
    + $2 \notin \{1, 3, 6\}$


### Subsets:

#### Definition Subset:
$A \subseteq B \text{ when every element a } \in A \text{ is also an element of B. (if a }\in A\text{, then } a \in B)$

+ $\{1, 3\}$ is a subset of $\{1, 3, 6\}$
    + $\{1, 3\} \subseteq \{1, 3, 6\}$

+ $\{1, 3\}$ is a proper subset of $\{1, 3, 6\}$
    + $\{1, 3\} \subset \{1, 3, 6\}$

$\{1, 3, 6\}$ is a subset of itself but not a proper subset of itself.

#### Definition Proper Subset:
$A \subset B \text{ and } A \ne B$

#### Definition Set Equality:
$A = B \, \text{ when } \, A \subseteq B \, \text{ and } \, B \subseteq A$

#### Example:

Is $\{a, b\}\, \text{ a subset of } \, \{b, \{a, b\}\}$ ?

+ $\{a, b\} \nsubseteq \{a, \{a, b\}\}$
+ $\{a, b\} \in \{a, \{a, b\}\}$