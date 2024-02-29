# Clean and Rectify

## Constraint Violations

main problem in cleaning, is that we know that there is a problem, but it is ambigous where the fault lies, when a dependency is violated.

::: info 📐 **Minimal Repair**
minimal change to the database that removes the constraint violations.
:::

::: info 👆🏻 Consistent Query Answering
is a method to obtain all query answers that are invariant to any possible way of restoring consistency by performing minimal repairs.
:::

### Transform Query

$Students(x,y)$

```sql
SELECT * FROM Students;
```

$Students(x,y) \land \neg\exists(Students(x,z)\land z \ne y)$

```sql
SELECT *
FROM Students
WHERE NOT EXISTS (
	SELECT * FROM Students s2
	WHERE s1.Snum = s2.Snum AND s1.Name != s2.Name
)
```

## Logic

```prolog
parent(leo, paul)
parent(paul, john)

ancestor(A,B) <- parent(A,B)
ancestor(A,B) <- parent(A,C), ancestor(C,B).
```

ancestor(A,B)?

**produces:**

ancestor(leo, paul)

ancestor(paul, john)

ancestor(leo, john)

::: info 👆🏻 **Answer-set program**
Declarative program that specifies all possible repairs (executable specification)
:::

- Define new table contents
    - Students_(X,Y,A) ← Students(X,Y)
- with annotations A being
    - **t**: repair by insertion of the tuple in the new table
    - **f**: repair by deletion of the tuple in the new table
    - **t***: tuple was in the original table or inserted in the repair process.
    - **t****: tuple belongs to final contents of the table.

### Active Integrity Constraints

Instead of reasoning about possible repairs, one can also ask the user to specify the inteded repair

### Virtual Data Integration

Unified view of data in multiple sources through mediator

- define global schema
- define mappings between global and source schemas
- queries on global schema automatically rewritten to execute on source schemas.
- use CQA or repair approach to deal with incosistencies between sources.

**Example**

StuPSY

| Snum | Name |
| --- | --- |
| 101 | John Bell |
| 104 | Clair Stevens |
| 107 | Pat Norton |

StuCS

| Snum | Name | Admission |
| --- | --- | --- |
| 104 | Alex Pelt | 2011 |
| 121 | Ana jones | 2012 |
| 137 | Lisa Reeves | 2012 |

**Local as View**

reconstruct original data from the global view

Global Schema:

StuUniv(StuNum, StuName, Adm, Dept)

Mappings

- StuPs(x,y) ← StuUniv(x,y,z, “Psychology”)
- StuCS(x,y,z) ← StuUniv(x,y,z, “Computer Science”)

**Querying**

Querying based on CQA

Examples:

- Q3(x): exists y, exists z, exists w StuUniv(x,y,z,w)
- answer ⇒ \{101, 104, 107, 121, \}
- Q4(x,z): exists y, exists w StuUniv(x,y,z,w)
- answer ⇒ \{(101, 2011), (121, 2012), (137, 2012)\}
- (because there is a constraint admission not null)

**missing values**

What to do with *NULL values*

Let the system invent a possible value.

Invent a value that satisfies the functional dependencies.

$StuPsy(x,y) \leftarrow StuUniv(x,y,z, "Psychology") F_1(x,y,z)$

 $StuCS(x,y,z) \leftarrow StuUniv(x,y,z, "ComputerScience") dom(X)$

$F_1(x,y,z) \leftarrow StuPsy(x,y), dom(z), choice((x,y),z)$

domain: all possible rooms

choice: funcional dependencies room is not reserved and number of people > 10.

**global constraints**

We would like to impose snum is globally unique

- it is unique in both deps but not globally
- repair by deletion ?
- insertions ?
- invent new globally unique ids?

## Cleaning Duplicates

### Clustering

Result of matching is a set of matching record pairs.

- Equality is transitive, so we cluster by transitive closure.

Resolution of possible partitions:

1. let a human determine which one it is.
2. ranking the most probable one.
3. probabillistic databases

### How to handle merge inconsistencies

We detected a duplicate:

how to merge the records?

- determine an ID
- any foreign keys in other tables refering to this id need updating
- determine value for other attributes
    - choose most likely value
    - or combination formula
    - example: sales on product ⇒ SUM(sales)

Goal ⇒ one record with one value for each attribute.

## Anomaly Detection

Cleaning outliers:

- delete points / records (may cause bias)
- correct points in some way
- many other methods exist

Autoencoders ⇒ define when to trust the reconstructed record more than the original threshold.

## Data Imputation (cleaning missing data)

![Screenshot 2022-10-13 at 17.56.06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0aba39ef-00b6-4db5-b920-c7b73df92f56/Screenshot_2022-10-13_at_17.56.06.png)

- Database has a sample only not population.

**Combining different data sets**

Gettting data from two different databases.

![Screenshot 2022-10-13 at 18.30.33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/426fde8b-f9a3-4959-9b75-b1e1116d53a3/Screenshot_2022-10-13_at_18.30.33.png)

![Screenshot 2022-10-13 at 18.37.48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03709630-9633-402d-87b4-4d82f6defcc4/Screenshot_2022-10-13_at_18.37.48.png)

*Two sources can be combined if you know that the ids are correct.*

### Strategies for handling missing data

- Prevention
- Simple methods
    - **listwise deletion**: if some attr is missing, delete the row.
    - **pairwise deletion**: still use row for calculations where only the non-missing attr are needed.
    - **mean substitution**: if missing (X) then X:= mean(X)
    - **Indicator method**: add var R:=(if missing X then 1 else 0) for ML
    - **attribute deletion**: exclude attr with too many missings
    - **LOCF**: Last observation carries forward (time series)
    

All simple methods make strong and unrealistic assumptions, for example:

- list/pair-wise assume MCAR, otherwise bias
- mean substitution underestimates variance and distribution is injured.
- LOCF overstimates precision; biased point estimates

### Single Imputation or Regression Imputation

- For attribute that has missings train regression model to predict it using the other attributes.
- Then use this model’s prediction for the values of the attribute that are missing.

**Advanced Version:**

1. Train Multiple models:
2. Train models on the data.
3. check the best accuracy of the models.