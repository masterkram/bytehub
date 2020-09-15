# Information Managment
*information systems managment*

## What is information mangment ?
+ managment process
+ IT systems that help to deal with data

## 3-Tier Architecture 
+ Presentation Layer
+ Application Layer
+ Database Layer

Models

Conceptual Design
Logical Design
Physical Design

Requirements:
+ Specification Documents
+ Use Cases
+ Business Models

```mermaid
Requirements --> Application_Behavior
Requirements --> Database
Requirements --> User_Interface
Requirements --> Architecture
Application_Deployment/Testing
```

+ Requirements Models (BMC)
+ Process models (BPMN)
+ Data models (class diagrams, ER diagrams)
+ Architecture models 
+ Interface Models

### Business model
*A business model describes the rationale of how nan organization creates, delivers, and captures value, in economic, social or cultural or other contexts.*

#### Key Words:
+ Activity
+ Structure
+ Sequence
+ Beginning
+ Input
+ Output
+ Beginning
+ End
+ Time
+ Customera
+ Result

Modelling:
+ BMC
+ 3EM

### Business processes
*a specific ordering of activities that has recevies an input and produces output that is of value to a customer*

Modelling:
+ informal models: textual descriptions / free form diagrams
+ formal models: BPMN, EPC, BuissDesigner


+ Knowing how the business works
+ explicit
    + Analysis
    + Optimization
    + Better managment
+ Identify automatization possibilities

## BPMN

| Flow Objects | Connecting Object | Swimlanes | Artifacts |
| ---------- | --------------- | -------  | -------  |
| Events | Sequence Flow | Pool | Data Object |
| Activities | Message Flow | Lanes | Text Annotations |
| Gateways | Association | | Group |