# Converting a Class Diagram to Database Schema

A class diagram is a way to model the information to be stored in a database.
Used in this module instead of ERDs.

## Introduction Example

**Case Description:**

+ For each student, the attributes name, address, and student number are known.
+ Students can be member of a sports club. In each case is known: the name of the club, the kind of sport, and the start date of membership.

**Class Diagram**

```plantuml
class Student {
    - s_no: pk
    - name
    - address
}

class Club {
    - name: pk
    - sport
}

class Membership {
    - start_date
}

Student "0..*" -- "1..*" Club
(Student, Club) . Membership
```

**Example Tables**

**Membership**
| s_no | c_name | Started |
| ---- | ------ | ------- |
| 423  | DIOK   | 01-09-18|
| 502  | Ludica | 12-10-17|
| 502  | EMOS   | 16-03-18|
| 467  | Sparta | 01-09-16|
| 467  | DIOK   | 20-03-15|

**Student**
| s_no | name | address |
| ---- | ---- | ------- |
| 415  | Peter Black | Matenweg 163 |
| 423  | John Brown | Calslaan 204 |
| 502  | Bill Green | Witbreuksweg 8 |
| 467  | Sarah White | Matenweg 163 |

**Club**
| name | sport |
| ---- | ----- |
| DIOK | Badminton |
| Ludica | Tennis |
| EMOS | Football |
| Sparta | Football |


**Defining a Schema for a table**

Different notations are possible to define
a schema.

In an SQL syntax:
```sql
CREATE TABLE Person (
    p_key INTEGER,
    surname TEXT NOT NULL,
    first_name TEXT NOT NULL,
    address TEXT,
    birth_date DATE NOT NULL,
    PRIMARY KEY (p_key));
)
```

In a Shorthand Notation:
```
Person(p_key PK, surname NOT NULL,
    first_name NOT NULL, address,
    birth_date NOT NULL);
```

::: tip General Relation Notation:
(Relation == Table)

`RelationName(attribute1 CONSTRAINT, attribute2 CONSTRAINT, ...)`

It is also possible to add constraints after the attributes: like primary and foreign keys.

`RelationName(attributes, CONSTRAINT)`

Primary Key Notation:
`PK(attribute(s))`
Foreign Key Notation:
`FK(attribute) REF table[(attribute)]`
:::

## Class Notation

You can add `PK` in the class
diagram to indicate the primary key.

```plantuml
class Movie {
    title: PK
    year: PK
    length
    genre
}
```

This class can be made into the
schema:

`Movie(title, year, length, genre, PK(title, year));`

with the **composite key** `(title, year)`.
Nearly every time database developers instead choose to add an arbitrary key that is an integer starting at 1 which automatically increments each time a row is added to the table. Like in this example:

```plantuml
class Person {
    surname
    first_name
    address
    birth_date
}
```

Schema for this class:

`Person(p_key PK, surname, first_name, address,birth_date);`

Here `p_key` is a new attribute that is introduced
to the table to serve as the primary key.

## Instructions per Association:

### One-to-one
Here we have a diagram where
an **Employee** has one **EntryPass** and
an **EntryPass** has one **Employee**.

```plantuml
class Employee {
    employee_no: PK
    name
    birth_date
}

class EntryPass {
    pass_no: PK
    valid_until
}

Employee "1" - "1" EntryPass: has pass
```

In theory any two classes that
are associated one to one could be merged
into a single class and a single database table.
But usually we create two tables to respect 
the decision to model them as two different classes.

Details:
+ We add the constraint `CHECK employee_no IN SELECT employee_no FROM EntryPass` to **Employee** make sure that every
employee has an **EntryPass**.

+ Add the constraint `UNIQUE(employee_no)` to **EntryPass** to make sure employees only have one **EntryPass**.

Schema:

```
Employee(employee_no,
name,
birth_date,
PK(employee_no),
CHECK employee_no IN SELECT employee_no FROM EntryPass);

EntryPass(pass_no,
employee_no NOT NULL,
valid_until,
PK(pass_no)
FK (employee_no) REF Employee,
UNIQUE(employee_no));
```

### One-to-many

Here a **Lecturer** is responsible for many **Courses**
and a **Course** is taken charge by one **Lecturer**.

```plantuml
class Lecturer {
    employee_no: PK
    surname
    first_name
    office
    tel_no
}

class Course {
    course_code: PK
    year: PK
    name
}

Lecturer "1" - "*" Course: responsible for
```

Details:
+ In this case we can put a foreign key in **Course** that references **Lecturer** because there is only 1 lecturer that is responsible for the course.

schema:

```
Lecturer(employee_no PK,
surname,
first_name,
office,
tel_no);

Course(course_code,
year,
name,
responsible NOT NULL,
PK(course_code, year)
FK(responsible) REF Lecturer (employee_no));
```

### Many-to-many

We have the class diagram of
an Employee class that can work for
multiple departments, and departments
can have multiple employees working for them.

```plantuml
class Employee {
    employee_no: PK
    name
    tel_no
    percentage
}

class Department {
    name: PK
    location
}

Employee "*" - "*" Department: works for
```

Details:

+ Create three tables: one for the **Employee** entity, one for the **Department** entity and a table for the **works for association**.
+ The **works for association** has two foreign keys that reference **Employee** and **Department**
+ You can JOIN these three tables to obtain all the information on which departments employees work at and vice versa.


Schema:

```
Employee(employee_no,
    name,
    tel_no,
    percentage,
    PK (employee_no));

Department(name,
    location,
    PK (name));

Works_for(employee_no,
    dept_name,
    PK (employee_no, dept_name),
    FK(employee_no) REF Employee,
    FK(dept_name) REF Department(name));
```

Now we have a `Works_for` table that stores
a key to an employee and the key of the department to which the employee is associated.

### Association Class
For an association class we can move the attributes of the association class to the 
table of the association.

```plantuml
class Employee {
    employee_no: PK
    name
    tel_no
    percentage
}

class Department {
    name: PK
    location
}

class Contract {
    start_date
}

Employee "*" - "*" Department
(Employee, Department) . Contract
```

The schema would look like this:

```diff
Employee(employee_no,
    name,
    tel_no,
    percentage,
    PK (employee_no));

Department(name,
    location,
    PK (name));

Works_for(employee_no,
    dept_name,
+   start_date
    PK (employee_no, dept_name),
    FK(employee_no) REF Employee,
    FK(dept_name) REF Department(name));
```

### * — 1..*

In this diagram we have an **Phone** that belongs to many **Employees** and at least one 
**Phone** should be stored for an **Employee** but it is possible to store many.

```plantuml
class Employee {
    employee_no: PK
    name
}

class Phone {
    tel_no: PK
    description
}

Employee "*" - "1..*" Phone: has phone
```

Details:

+ `CHECK` constraint that ensures that every employee has at least one phone number.

```
Employee(employee_no,
name,
birth_date,
PK(employee_no),
CHECK(employee_no IN(SELECT employee_no FROM Has_phone)));

Phone(tel_no,
description,
PK(tel_no));

HasPhone(employee_no,
tel_no,
PK(employee_no, tel_no),
FK (employee_no) REF Employee,
FK(tel_no) REF Phone,
```

### * - 0..1

In this diagram we have an **Employee** that
is a Personal advisor for a **Customer**. A **Customer** can have 0 or 1 advisor. and an **Employee** can be an advisor for many **Clients**.

```plantuml
class Employee {
    employee_no: PK
    name
    tel_no
    percentage
}

class Customer {
    pass_no: PK
    valid_until
}

Employee "*" - "0..1" Customer: personal advisor
```

Details:

+ The FK `personal_advisor` can be `NULL` allowing the customer to have no advisor.

Schema:

```
Employee(employee_no,
name,
birth_date
PK(employee_no)
);

Customer(customer_no,
name,
address,
personal_advisor,
PK(customer_no)
FK personal_advisor REF Employee(employee_no)
);
```


### 0..1 — 1
In this diagram we have an **Employee** that can
have no **EntryPass** but at most 1 **EntryPass**.

```plantuml
class Employee {
    employee_no: PK
    name
    tel_no
    percentage
}

class EntryPass {
    pass_no: PK
    valid_until
}

Employee "1" - "0..1" EntryPass: has pass
```


Details:
+ `UNIQUE` constraint enforces that an employee cannot have more than one entry pass.

Schema:

```
Employee(employee_no,
name,
birth_date,
PK (employee_no));

Entry_pass(pass_no,
employee_no NOT NULL,
valid_until,
PK(pass_no)
FK (employee_no) REF Employee,
UNIQUE(employee_no));
```

### Composition
In this diagram we have an **AnnualReview** entity which is how an **Employee** performed a certain year. An **AnnualReview** does not make sense if the employee it refers to does not exist in the database therefore it is represented as a *Composition* relationship.

```plantuml
class Employee {
    employee_no: PK
    name
    birth_date
    SSN
}

class AnnualReview {
    r_key: PK
    date
    performance
    text
}

Employee *- "*" AnnualReview: < review of
```

Details:
+ `employee_no` FK of Annual Review has the constraint `NOT_NULL` to make sure that the employee cannot be deleted without first deleting all Annual Reviews of the employee.
+ `ON DELETE CASCADE` can be used to delete these dependent records.

Schema:

```
Employee(employee_no,
name,
birth_date,
SSN,
PK(employee_no));

Annual_review(r_key,
date,
performance,
text,
employee_no NOT NULL,
PK(r_key),
FK(employee_no) REF Employee));
```

### Generalization

**Summary**

| Case | Solution |
| ---- | -------- |
| General | Separate table for each class |
|  Covering Generalization | Tables only for subclasses |
| Disjoint Generalizations | Table only for the superclass |
| For Disjoint + Covering | All options are possible |

#### Separate table for each class

This diagram represents the classes: **Person**,
**StaffMember** and **Student**. There is no indication if the generalization is covering, or disjoint. This means that:
+ A person can exist in the database without being a StaffMember or a Student (for example could be a guest lecturer).
+ A person can be both a StaffMember and Student at the same time (for example a TA).

```plantuml
class Person {
    person_id: PK
    surname
    first_name
}

class StaffMember {
    office
    tel_no
    SSN
}

class Student {
    program
    date_enrolled
}

circle _
Person <|-- _
_ -- StaffMember
_ -- Student
```

Details:
+ All classes become tables.

Schema:

```
Person(person_id,
surname,
first_name, 
person_type PK(person_id));

Staff_member(employee_no,
office,
tel_no,
SSN,
PK(employee_no),
FK(employee_no) REF Person(person_id));

Student(student_no,
program,
data_enrolled,
PK(student_no),
FK(student_no) REF Person(person_id));
```

::: tip Example Tables
**Person**
| person_no | surname | first_name |
| --------- | ------- | ---------- |
| 7234901   | Stevens | Stuart     |
| 9000132   | Jones   | Jacob      |
| 1712389   | Black   | Peter      |
| 1054789   | White   | Sarah      |

**Staff Member**
| employee_no | office | tel_no | SSN |
| ----------- | ------ | ------ | --- |
| 234901      | AB240  | 2889   | 132845961 |
| 1054789     | NULL   | 06-50112325 | 314533201 |

**Student**
| student_no | program | date_enrolled |
| ---------- | ------- | ------------- |
| 1712389    | TCS     | 2018-09-01    |
| 1054789    | M-BIT   | 2016-05-11    |

:::

#### Tables only for subclasses

In this diagram the generalization is covering
meaning that:
+ All Persons must be a subclass. (i.e guest lecturers are no longer allowed.)
+ Persons can still be StaffMembers and Students at the same time.


```plantuml
class Person {
    person_id: PK
    surname
    first_name
}

class StaffMember {
    office
    tel_no
    SSN
}

class Student {
    program
    date_enrolled
}

circle c
Person <|-- c
c -- StaffMember
c -- Student
```

Details:
+ Tables only are created for the subclasses of the generalization.

Schema:

```
Staff_member(person_no,
surname,
first_name,
office,
tel_no,
SSN,
PK(person_no));

Student(person_no,
surname,
first_name,
program,
date_enrolled,
PK(person_no));
```

::: tip Example Tables

| person_no | surname | first_name | office | tel_no | SSN |
| --------- | ------- | ---------- | ------ | ------ | --- |
| 7234901 | Smith | Simon | AB240 |2889132845961 |
| 6520184 | Thompson | Theresa | H3072 |3843206358413 |
| 1054789 | White | Sarah | NULL | 06-50112325 | 284376518 |


| person_no | surname | first_name | program | date_enrolled |
| --------- | ------- | ---------- | ------- | ------------- |
| 1712389 | Black | Peter | TCS | 2018-09-01 |
| 1054789 | White| Sarah | M-BIT | 2016-05-11 |
:::

#### Table only for the superclass

In this diagram the generalization is disjoint and covering. Meaning:
+ All Paintings must be a subclass: owned or loan.
+ Paintings can only be of one subclass.

```plantuml
class Painting {
    artist: PK
    title
    year
    ownership
}

class Owned {
    estimated_value
}

class Loan {
    owner
}

circle dc
Painting <|-- dc
dc -- Owned
dc -- Loan
```

Details:
+ Only one table is created for the generalization.
+ Values that are for another class are left as `NULL`.

Schema:

```
Painting(p_key,
artist,
title,
year,
ownership,
estimated_value,
owner,
PK(p_key));
```

::: tip Example Table
| p_key | artist | title | year | ownership | estimated_value | owner |
| ----- | ------ | ----- | ---- | --------- | --------------- | ----- |
| 1535 | Claude Monet | Cliffs near Pourville | 1889 | owned | 2.000.000 | NULL |
| 2037 | Pieter Brueghel | Winter landscape | NULL | owned | 1.500.000 | NULL |
| 6124 | Wang Cheng yun | Don’t forget about me | 1959 | loan | NULL | No Hero Foundation |
:::

## General Example

```plantuml
class A {
    - a1: pk
    - a2
}

class C {
    - c1: pk
    - c2: pk
    - c3
}

class B {
    - b1
    - b2
}

class R {
    - r1
}

A - C
A <|-- B
B "0..*" -- "1..*" C
(B, C) . R
```

```
A(a1, a2,
    PK(a1),
    CHECK (a1 IN (SELECT a1 FROM S)));

B(a1, b1, b2,
    PK(a1),
    FK(a1) REF A(a1));

C (c1, c2, c3, r1,
    a1 NOT NULL, 
    PK(c1, c2),
    FK(a1) REF B(a1));

S (a1, c1, c2,
    PK(a1, c1, c2),
    FK(a1) REF A(a1),
    FK(c1,c2) REF C(c1,c2));
```