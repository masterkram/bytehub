# Transactions

::: theorem Transaction
A transaction is a logical unit of work.
It works as follows:
+ A transaction is started
+ Queries and Updates are performed.
+ Transaction is committed or aborted.
If the transaction is committed the changes are finalized in the database, if it is aborted the database is restored to it's state when the transaction was started.
:::

## Transactions in JDBC
Default in JDBC is to commit after every statement, every statment is a separate transaction.

to commit a transaction with multiple statements:

```java
con.setAutoCommit(false);
// execute statements
con.commit();
// or
con.rollback();
```

## Transactions in SQL

```sql
BEGIN TRANSACTION;
-- execute statements
COMMIT;
-- or
ROLLBACK;
```

::: tip ACID
DBMS guarantee that transactions:
+ are Atomic: either all effects or none.
+ maintain Consistency: leaves db in correct state.
+ are Isolated: a transaction cannot be influenced by other transactions that are running at the same time.
+ are Durable: once the db declares a transaction finished, it's effects will not get lost.
:::

## Schedule of transactions

### Notation

| Transaction 1 | Transaction 2 | Operation |
| ------------- | ------------- | --------- |
| a: = read account A | | $r_1(A)$ |
| b: = read account B | | $r_1(B)$ |
| | a: = read account A | $r_2(A)$ |
| out a-200 into account A | | $w_1(A)$ |
| | b:= read account B | $r_2(B)$ |
| | out a+500 into account A | $w_2(A)$ |
| | put b-500 into account B | $w_2(B)$ |
| put b+200 into account B | | $w_1(B)$ |

can be written as a **Schedule:** $r_1(A)r_1(B)r_2(A)w_1(A)r_2(B)w_2(A)w_2(B)w_1(B)c_1c_2$

+ $r_1(A)$: transaction 1 reads the field A.
+ $c_1$: transaction 1 is commited.

## Interleaving

The goal of a dbms regarding transaction handling is to:
+ guarantee ACID
+ perform interleaving (for performace and concurrency)

the key is to determine which schedules guarantee isolation.

## Transaction operations.

### Serial schedules

::: theorem serial schedule
A serial schedule for two transactions T1 and T2, can be either running the entire T1 first then the entire T2. or running the complete T2 and then T1.

This type of schedule is always correct and guarantees *Isolation*.

Any other schedule should be *equivalent* with a serial schedule.
:::

**Commutative Operations:**
+ $W_1(A) -> W_2(B)$: different data items.
+ $R_1(A) -> R_2(B)$: both are reads.

**Conflicting Operations:**
+ $R_1(A) -> W_2(A)$
+ $W_1(A) -> R_2(A)$
+ $W_1(A) -> W_2(A)$