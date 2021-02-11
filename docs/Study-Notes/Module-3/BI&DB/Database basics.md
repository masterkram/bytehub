# Database introduction and design

## File-based system and Database system

In a system we store data to get information out of it, we define it as:
::: tip Data vs Information
Data:

- No contextual meaning (just number and text)
- Individual unit of information
- Raw facts of things

Information

- Data with exact meaning
- Processed data and organized text
- Is knowledge about a particular subject
  :::

Data can be stored in a file, a file is an object on a computer that stores data or a resource on the computer for recording data.

We can store data and display information in two main ways:

- File-Based System
- Database System
  <img src= "./file-based_vs_database.png"/>

### File-Based System

In a **File-Based System** data is stored in files which each has its specific format. It has several programmes which also define and manage their own data.

::: theorem File-Based System
A collection of application programs that perform services for the end users (such as production or sales)
:::

Problems with this traditional approach for storing data are:
::: warning Limitations

- Data redundancy: is the repetition or superfluity of data
- Data inconsistency: matching of data must be done between files (data could be changed in one place but not updated in the other place)

* Program data dependency: the close relationship between data stored in files and the software programs that update and maintain those files
* Lack of flexibility/fixed queries
* Poor data security: the data stored in the flat files can be easily accessible
* Limited data sharing
  :::

### Database System

Instead of a file based system a database system could be used. It serves many applications by centralizing data and controlling redundant data.
::: theorem Database System

- Organized collection of related data (dataset is centralized in database)
- Shared collection of related data
- Models a particular real-world system in the computer in the form of data.
- A collection of data arranged for ease and speed of search and retrieval.

:::

A database environment consists of 4 main components:

- Hardware
- Data
- Users
- Software

#### Hardware

A database server runs on a computer, just like it’s clients so it has processors, hard disks etc.

#### Data

A database environment contains two types of data:
::: tip

- Operational data
- System catalog (contains the information about the database objects)
  :::
  Operational data is for example data on an employee like name and salary.
  The system catalog stores:
- Names, types, and sizes of data items;
- Names of relationships;
- Integrity constraints on the data;
- Names of authorized users who have access to the data;
- External, conceptual, and internal schemas and the mappings between the schemas

#### Users

::: theorem Users

- Database Administrator (DBA): Designs & manages the database system
- Database Designer user: writes the database software itself
  +Application developer: writes software to allow end users to interface with the database system
- End user: uses the database system to achieve some goal
  :::

#### Software

::: theorem Software

- management system (DBMS): MySQL, Oracle etc.
- Operations system
- Application programs: computer program that a user can interact with the database (java, c++ C# etc.)
  :::

## DataBase Management System (DBMS)

A DBMS is a software system that enables users to define, create, maintain, and control access to the database. It consists of software that organizes the storage of data and Interfaces between applications and physical data files.

A DBMS is divided into multiple Database Management System Facilities.

- Data definition language (DDL).
- Data manipulation language (DML).
- Data control language (DCL).

<img src= ./dmsf.png/>

DBMS has multiple advantages like:

- data consistency
- sharing of data
- improved data integrity
- improved security

But also disadvantages like:

- Complexity
- Size
- Cost of DBMS
- Cost of conversion
- Performance
- Greater impact of a failure

## Three-level ANSI-SPARC Architecture

### ANSI-SPARC Architecture

ANSI stands for American National Standards Institute while SPARC stands for
Standards Planning and Requirements Committee. An ANSI-SPARC architecture is an abstract design standard for a Database Management System (DBMS).

### Three-level Architecture

A database architecture can be divided into three levels:

- External level: For database users
- Conceptual level: For database designers and administrators
- Internal level: For systems designers

## External level

This level is the users’view of the database. It describes the parts of the database that are relevant to a particular user like an Application programmer or end-user (also excludes irrelevant data as well as data which the user isn't authorized to access). This means that only data which is of interst to a particular user is displayed. There can be mutiple diffrent external views of a database. It's also the highest level of abstraction of the database.

## Conceptual level

This level is the community view of the database. It provides both the mapping and desiderd independence. The indentification of the important entities, relationships and attrubitues belongs on this level as it describes what data is stored and the relationships among the data. It should be complete and accurate representation of an organization’s data requirements.

### Conceptual Data base design

::: theorem Steps for design

- Identify entity types.
- Identify and associate attributes with entity.
- Identify the relationship among entities.
- Determine attribute domains.
- Determine candidate, primary, and alternate key attributes.
- Check model for redundancy.
- Review the conceptual data model with user.
- Integrity constraints.
  :::

**Logical level**
_To convert the conceptual representation to the logical structure of the database_

The objective of logical database design methodlolgy is to interpret the conceptual data model into a logical data model and then authorize this model to check whether it is structurally correct and able to support the required transactions or not. A logical design is the process of defining a system's data requirements and grouping elements into logical units.

A logical database design (logical data model):

- Validates realtions using normalization
- Checks intergriy constraints
- Reviews logical data models with the user
- Derives realtions for logical data models (RDBMS) (like name of relation, simple list of attributes, primery key etc.)

Normalization is:

- A technique used to test the correctness of a logical data model.
- A method to remove all anomalies (from insertion, modification and deletion).
- A database schema design technique, by which an existing schema is modified to minimize redundancy and dependency of data.

There are mutiple levels of normalization like First Normal Form (1NF), Second Normal Form (2NF) etc.

## Internal level

The internal level describes how the data is stored in the database.It deals with physical storage of data structure of records on disk. So it's a Physical representation of the database on the computer. In this level it's decided how the database is arranged on direct-access storage devices and how the logical structure is to be physically implemented.

### Physical database design

- Translate logical data model for target DBMS.
- Design general constraints.
- Analyze transactions.
- Design security mechanisms.
- Design base relations.
- Design representation of derived data.
