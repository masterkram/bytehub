# Activity Diagram
An Activity Diagram or `AD` Models behavior.

### Example
@startuml
|Customer|
start
:Get book from the shelf;
:Give book to employee;
|#CornflowerBlue|Library Employee|
:Register loan;
:Give book to customer;
|Customer|
:Return book;
|Library Employee|
:Register return;
:Store book;
stop
@enduml

### Purpose of an AD
+ An AD contains a coherent series of activities.
+ In an AD we include those activities that are relevant for system to be designed
+ Activities are carried out by actors. An actor can be a person but also components of software systems.

### What is modeled with and AD

+ ADs offer a general notation to describe steps in any 
organized process, like
    + Workflow in a company
    + Steps in an algorithm
+ We use ADs to model processes in the real world, in order to derive functional requirements.
    + e.g Business process that needs software support.

### Elements of an AD

+ Activities: (use imperative verbs)
+ Swimlanes: Labeled with the actor that does the activityl
+ Control flow: arrows indicating order.
+ Start symbol: **only one per diagram**
+ Stop symbol: multiple stop symbols are possible.

### Branch and Merge
+ A **branch** means that there are multiple paths to follow, one of these is executed. The conditions determine which.
+ Paths of a branch come together at a **merge**
+ Represented by a rotated square.
+ can be two or more paths branching or merging.

Example:

@startuml
|Administration|
start
:Register claim entry;
|Assesor|
:Assess claim;
|Administration|
if () then (Claim approved)
  :Pay out;
else (Claim rejected)
  :Send rejection letter;
endif
stop
@enduml

### Fork and Rejoin
+ A **fork** means that there are multiple paths to follow, all are executed in an undetermined order.
+ The different paths of a fork come together in a **rejoin**
+ Represented by a black bar.
+ can be two or more paths forked or rejoined.

@startuml
|Administration|
start
:Register claim entry;
|Assesor|
:Assess claim;
|Administration|
if () then (Claim approved)
  fork
    :Send letter;
  fork again
    :Pay out;
  end fork
else (Claim rejected)
  :Send rejection letter;
endif
stop
@enduml

### Loops

@startuml
|Student Pair|
start
repeat
    :Draw diagram;
|TA|
:Check diagram;
repeat while () is (diagram not ok)
->diagram ok;
:sign off;
stop
@enduml

### Normal Flow Of Events
+ Exceptions to the norm are **not** included in the diagram.
    + For example a book loss is not modeled.

For this class add an activity if it's in the case description.

In real life you need to determine if an activity is an exception or if it is normal.
