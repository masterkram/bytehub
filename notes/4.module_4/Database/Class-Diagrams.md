# Class Diagrams

See the UML class diagram syntax summarized [here](../../Module-2/System-Design/ClassDiagram.md).

## New Class Diagram Extensions

### N-ary associations

::: info N-ary associations
A n-ary association indicates that three (or
more) objects are associated with each other.

The association is meaningless if one of the objects is missing.
:::

```plantuml
<> diamond
Class1 "m..n" - "name" diamond
diamond - "k..l" Class2
diamond -- "i..j" Class3
```

How to understand the multiplicity of Class3:
*If two objects which are instantiations of classes 1 and 2 are associated with each other, the pair of these objects is a associated with i..k objects of class 3.*

#### Examples:

```plantuml
<> diamond
Course "1" - "name" diamond
diamond - "1..*" TimeSlot
diamond -- "1..*" Room
```

+ If a room has been allocated for a given time slot, then it is for exactly one course. 
+ If a given course has been scheduled for a given time slot one or more rooms have been allocated
+ If a given course is associated with a given room, one or more time slots have been allocated for this course for this room.

**Example with association class :alarm_clock:**

```plantuml
<> diamond
Course "1" - diamond
diamond - "1..*" TimeSlot
diamond -- "1..*" Room
diamond .. RoomAllocation
```

**The classic marriage example :bride_with_veil:**

```plantuml
class Marriage {
    start: Date
    end: Date
}
<> diamond
Man "1" - "married" diamond
diamond - "1" Woman
diamond -- "1" Marriage
```

+ One man can be married to one woman.
+ The Same Objects of Man and woman cannot remarry.


### Composition

::: info Composition
Officially called "composite aggregation".
A **composed object** is an object made
out of one or more other objects.

Properties:
+ An object that takes part in a composition is 
associated with a single **composed object**(cannot be part of two objects)
+ If the **composed object** is deleted, its parts
also are deleted.
:::

#### Notation:

```plantuml
Bicycle *-- FramePart
```

### Aggregation

::: info Aggregation
UML also defines aggregation that can be used
to indicate that an object is aggregated from
different parts.
:::

#### Notation:
```plantuml
Bicycle o-- Wheel
```

Composition and Aggregation both 
indicate that an object is made out of multiple
parts. But in an aggregation implies that the parts can exist independently of the **Composite object**.

In the bicycle example :bicyclist: the frame of the bicycle cannot exist without the bicycle. But the wheels can be removed and swapped to another bike.

::: tip in short
1. A "owns" B = Composition : B has no meaning or purpose in the system without A
2. A "uses" B = Aggregation : B exists independently (conceptually) from A
:::

## Extended Generalization

This notation only applies when a superclass has more than one subclass. Thanks to this
notation we can model how objects occur in the system.

| Letters | Stands For | Meaning |
| ------ | ---------- |------- |
| c      | Covering   | Each object of the superclass belongs to (at least one) subclass |
| dc     | Disjoint Covering | Each object of the superclass belongs to at least 1 and at most 1 subclass |
| d      | Disjoint | An object can belong to at most one subclass |
| (Empty) | Not Covering and not disjoint | There can be objects that do not belong to any subclass and there can be objects that belong to different subclasses at the same time |

**Covering Example :beers:**
```plantuml
class Bar
circle c
Bar <|-- c
c -- StudentBar
c -- BeachBar

note right of Bar
  Every bar must be a student bar 
  or a beach bar (or <u>both</u> <sup><i>yeaahh!</i></sup>) So we can note
  this as a covering generalization.
end note
```

**Disjoint Covering Example :mortar_board:**
```plantuml
class Student
circle dc
Student <|-- dc
dc -- PostGrad
dc -- UnderGrad

note right of Student
  Every student is either an undergrad
  or a graduate student (not both), so we can
  make this a disjoint covering generalization.
end note
```


**Disjoint Example :large_blue_circle:**
```plantuml
class Shape
circle d
Shape <|-- d
d -- Circle
d -- Square

note right of Shape
    A shape can exist without
    being of the type circle or square.
    A circle cannot also be a square and a
    square cannot also be a circle.
    So this is a disjoint generalization.
end note
```

**Not covering and not disjoint Example :books:**

```plantuml
class UniversityMember
circle _
UniversityMember <|-- _
_ -- Staff
_ -- Student

note right of UniversityMember
  A uni member is not necessarily a student 
  or staff, they can be a member of a council
  for example. 
end note
```

**Car Example :car:**

```plantuml
class MeansOfTransport
circle d
MeansOfTransport <|-- d
d -- Car
d -- Bicycle
circle cd
Car <|-- cd
cd -- PrivateCar
cd -- CompanyCar
circle cd_
CompanyCar <|-- cd_
cd_ -- CarLeasedByCompany
cd_ -- CarOwnedByCompany

note right of MeansOfTransport
    A car cannot be a bike and vice versa.
    A means of transport does not have to be
    a car or bike.
end note
note left of Car
    A car has to be either
    a company car or a private car.
    a private car cannot be a company car
    by definition.
end note
note right of CompanyCar
    A company car has to be either
    leased by the company or owned by the company. 
    These classes have no overlap
    by definition.
end note
```