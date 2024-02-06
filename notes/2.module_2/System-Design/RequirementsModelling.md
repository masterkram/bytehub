# Requirements Modelling

## Use case diagram:

```plantuml
left to right direction
actor Referee as r
note left of r : an Actor.
package "Handling offences" {
  usecase "Enter Offence" as UC1
  usecase "Decide Punishment" as UC2
  note bottom of UC1 : a Use Case
}
actor "Disciplinary Commitee" as d
r --> UC1
d --> UC2
```

### Features:
+ Top-level description of system functionality
+ Understandable by non-IT.

### Components:
+ Actors
+ Use Cases
  + Described as imperative sentences.
  + Linked to a single actor.

### Extensions

#### Inclusion

+ include executing A always includes B

```plantuml
left to right direction
usecase A
usecase B
A .> B: <<include>>
```

---
Example:

```plantuml
left to right direction
actor "Campaign Manager" as c
usecase "Assign staff to work on a campaign" as UC1
usecase "Find campaign" as UC2
c --> UC1
UC1 .> UC2: <<extend>>
```

#### Extension

+ Executing A could include B

```plantuml
left to right direction
usecase A as "A
--
B"
usecase B
B .> A: <<extend>>
```

---
Example:

```plantuml
left to right direction
actor "Campaign Manager" as c
usecase UC1 as "Check campaign
budget.
--
Extension points
Summary print"
usecase "Print campaign summary" as UC2
note "Condition {print option selected}" as N2
c --> UC1
UC2 .. N2
N2 .> UC1: <<extend>>
```

### Generalization

```plantuml

left to right direction
actor Staff
actor "Campaign Manager" as CM

package "Advert Preparation" {
  usecase "Browse concept notes" as UC1
  usecase "Create concept note" as UC2
}

Staff --> UC1
CM --> UC2
Staff <|-- CM

```

+ Every campaign manager is a staff member
+ Not every staff member is a campaign manager.

#### Guidelines
+ *include* and *extend* are used to indicate that executing one system function is / can be part of executing another system function.

+ *include* and *extend* are not used to describe casual relations between use cases.

+ Casual relations should be part of a process model (activity diagram) not a functional model (use case diagram).

+ A use case describes one (set of) interactions with the system, in a limited time frame

## Use Case Model

A use case model extends a use case diagram to:
+ show that the requirements are met by
the proposed use cases.
+ correctly interpret the diagram.

### Components
+ Glossary
+ Requirements list
+ Actor list
+ Use case diagram
+ Use case descriptions (short)
+ Use case descriptions (extended)

### Glossary

| Term | Description |
| ---- | ----------- |
|  |  |

### Requirements list

| Nr | Requirement | Use cases |
| -- | ----------- | --------- |
|    |             |           |

### Actor list

| Actor | Description |
| ----- | ----------- |
|       |             |

### Use case diagram
[see example above](#use-case-diagram)

### Use case descriptions (short)

| Use case | Description |
| -------- | ----------- |
|          |             |

### Use case description (extended)

Use case description: x
| Actor Action | System Response |
| ------------ | --------------- |
| 1            | 2               |
