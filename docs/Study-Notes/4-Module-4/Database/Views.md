# Views

::: theorem View
A View is a virtual table based on the result-set of an SQL statement.
A view contains rows and columns, just like a
real table. The fields in a view are fields from one or more real tables in the database.
:::

## Defining Views

```sql
-- Creating a view
CREATE VIEW GreatWork(studnr, coursecode) AS 
    SELECT studnr, coursecode
    FROM grades
    WHERE grade > 9;

-- Selecting from a view
SELECT DISTINCT G.coursecode
FROM Student S, GreatWork G
WHERE S.studnr = G.studnr;
```

In this case using a view is equivalent to
a query substitution.

## Materialized views.

::: theorem Materialized View
A Materialized view contains query results. This is stored for faster querying, but it will only be updated if refreshed with `REFRESH MATERIALIZED VIEW`.
:::

```sql
-- Create a materialized view
CREATE MATERIALIZED VIEW GreatWork (studnr, coursecode) AS
SELECT studnr, coursecode
FROM grades
WHERE grade > 9;

-- get new results for the table
REFRESH MATERIALIZED VIEW GreatWork;
```

<p class="contributor">Initial notes contributed by Jurre</p>