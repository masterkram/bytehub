# Sequence Diagrams

Models the interaction of a solution.
Is made using a class and use case diagrams.

### Example: Lending Books

#### Simplified
This example shows the interaction of the Librarian *actor* with the system.
In this example only one book is lent to a customer.
@startuml
actor Librarian
LendBooks -> Librarian : displayInputField
Librarian -> LendBooks : scanLibraryPass
LendBooks -> Customer : getCustomer
LendBooks -> Library : displayCustomer
Librarian -> LendBooks : scanBookCode
LendBooks -> BookCopy : getBook
create Loan
LendBooks --> Loan : createLoan
Loan -> BookCopy : addLoan
Loan -> Customer : addLoan
LendBooks -> Librarian : displayLoan
@enduml

#### Multiple books
In the next diagram a loop is introduced, this allows
the diagram to show that a process repeats.

@startuml
actor Librarian
LendBooks -> Librarian : displayInputField
Librarian -> LendBooks : scanLibraryPass
LendBooks -> Customer : getCustomer
LendBooks -> Library : displayCustomer
loop forall books that the customer hands over
    Librarian -> LendBooks : scanBookCode
    LendBooks -> BookCopy : getBook
    create Loan
    LendBooks --> Loan : createLoan
    Loan -> BookCopy : addLoan
    Loan -> Customer : addLoan
    LendBooks -> Librarian : displayLoan
end
Librarian -> LendBooks : finish
LendBooks --> Librarian : confirm
@enduml

## Execution of a use case
Sequence diagrams describe how a use case is executed.

Elements of a sequence diagram:
+ Actor
+ Control Object
+ Data Objects
+ Various types of messages
+ Control structures

## Heuristic: Two parts of a sequence diagram
1. Step-by-step description of the interaction between the user and the system. (between the user and the control object, mediated by the user interface)
2. Actions to create/read/update/delete objects in the system.

## Elements of a Sequence Diagram
A sequence diagram describes interactions between objects
+ `Actor object`
+ `Control object`
+ `lifeline`: vertical dotted line
+ `activation`: period during which the object is active (vertical bar)

## Interaction operators
Interaction operators are control structures.
denoted by a box with the operator at the top left.

A Interaction operator can have an interaction constraint which indicates when
a part of the box is executed.
+ a constraint is denoted in brackets: `[condition]`

| Interaction operator | Use |
| -------------------- | --- |
| loop | Repeat until the interaction constraint for the loop is no longer true |
| alt | Alternative behaviors, depending on condition(s) |
| opt | Will only execute if the interaction constraint is true |
| ref | Refers to an interaction fragment described in a different diagram |

## Alternative Behavior (if/else)
Using the `alt` operator we can define alternative behavior:
And using the `ref` operator we can make *reference* another diagram that
describes this part in more detail like a *zoom in*.

### Example

@startuml
actor CampanignManager
CampanignManager -> Client : getName
CampanignManager -> Client : listCampaigns
ref over Client, Campaign : List client campaigns
ref over CampanignManager, Client, Campaign : Get campaign budget
CampanignManager -> Campaign : addCostedAdvert
LendBooks -> Library : displayCustomer
alt totalCost <= Budget
    create newAd
    Campaign -> newAd : Advert
else else
    create newRequest
    Campaign -> newRequest
    end
@enduml