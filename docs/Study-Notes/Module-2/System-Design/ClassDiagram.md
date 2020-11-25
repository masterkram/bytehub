# Class Diagram

A class diagram is used to describe:
+ what the objects that should be stored in the system are.
+ how these objects are structured.
+ how these objects relate to each other.

### Example
*class diagram for a company's administration*
@startuml

Employee : name: String
Employee : initials: String
Employee : SSN: String
Employee : salary scale: Integer
Employee : hours/week: Integer
Employee "*" -down- "*" Department : works_in
Employee "*" - "1" Address : lives_at

Department : name: String
Address : street: String
Address : number: String
Address : postal_code: String

@enduml

#### Components:
+ Relationships:
    + between 2 classes
    + aka association,
    + is shown with a solid line.
    + Associations may have a name.
+ Multiplicities:
    + quantifies the relationships between classes.
    + for example: in the previous diagram an employee can have one address. and an address can have many employees living in it.
    + drawn at the end of the associations.

## Notation

### Class
@startuml
Class : attribute1: dataType
Class : attribute2: dataType
@enduml

+ A class has zero or more attributes
+ For every attribute a standard data type can be specified.
+ Standard data types:
    + Integer
    + Date
    + Real
    + Time
    + Boolean
    + Money
    + String

### Association
@startuml
Class1 "n..m" - "k..i" Class2 : association
@enduml
+ n..m, k..i are the multiplicities.
+ the association can also be directional represented with arrows.

There can be multiple associations between classes:
@startuml
Employee : attribute1: dataType
Department : attribute2: dataType
Employee "*" - "1" Department : works_in
Employee "*" - "*" Department : works_on_projects_for
@enduml

#### Multiplicities:
+ many: `*`
+ zero to many: `0..*`
+ one to many: `1..*`
+ only one: `1`
+ only two: `2`
+ 1 to 3: `1..3`

#### Roles
A role name can be used rather than an association name,
if a class has a specific role in the association.
@startuml
Doctor "responsible_doctor" --- "*" Treatment
Treatment "*" - "1" Patient : receives
@enduml

#### Reflexive association
Used to model an entity having a relationship to itself.
For example a manager .

@startuml
Employee "*" - "0..1" Employee : < has_manager
@enduml

## Class Diagram as a model of the physical world.

+ View: Focus is on data (not functions)
+ Representation: the subject
+ Simplified: only the data that should be in the system.