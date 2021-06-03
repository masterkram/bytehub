# Indices

::: theorem Index
An index provides faster queries but slower updates. Queries take `O(log n)` instead of `O(n)`. Several types of indices are available, b-trees are one implementation available in postgres.
:::

::: tip DBMS has you covered
The DBMS automatically determines if an index helps in speeding up a query, otherwise it is not used.
:::

## Behind the hood.

```sql
CREATE TABLE airport (
    code CHAR[3] PRIMARY KEY,
    city TEXT,
    country TEXT
);
```

Behind the hood this query implicitly creates an index for the primary key.
`CREATE UNIQUE INDEX airport_pkey ON airport USING btree(code);`

## Using Indices

Queries are performed as usual:
```sql
SELECT city, country FROM airport WHERE code = 'AMS';
```

```sql
CREATE TABLE flight (
    fromcode CHAR[3] REFERENCES airport(code),
    tocode CHAR[3] REFERENCES airport(code),
    day DATE,
    flightcode CHAR[6],
    PRIMARY KEY (day, flightcode)
);
```

<p class="contributor">Initial Notes contributed by Jurre </p>