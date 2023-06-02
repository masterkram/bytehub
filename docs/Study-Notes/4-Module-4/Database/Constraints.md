# Constraints

::: theorem Constraint
A constraint is a named check in SQL. They can be defined buy some are built in. e.g `UNIQUE`, `NOT NULL`, `REFERENCES`. Constraints prevent users or software from corrupting data in the db.
:::

Arbitrary checks can be defined with the `CHECK` keyword. For example a named constraint looks like this:

`CONSTRAINT valid_discount CHECK(price > discounted_price)`

In the case of `REFERENCES`, 3 modes can be set:
+ **RESTRICT**: Prevents changes to a row with a reference.
+ **SET NULL**: will set row with rerference to NULL on changes.
+ **CASCADE**: will remove row with reference on changes.