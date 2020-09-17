# Information Managment
full name = *information systems managment*

## What is information mangment ?
+ managment process
+ IT systems that help to deal with data

## 3-Tier Architecture 
+ Presentation Layer
+ Application Layer
+ Database Layer

Steps of design:
1. Conceptual Design
2. Logical Design
3. Physical Design

Requirements:
+ Specification Documents
+ Use Cases
+ Business Models

```mermaid
graph TD;
Requirements --> Application_Behavior;
Requirements --> Database;
Requirements --> User_Interface;
Requirements --> Architecture;
Application_Behavior --> Application_Deployment/Testing;
Database --> Application_Deployment/Testing;
User_Interface --> Application_Deployment/Testing;
Architecture --> Application_Deployment/Testing;
```

Types of models:
+ Requirements Models (BMC)
+ Process models (BPMN)
+ Data models (class diagrams, ER diagrams)
+ Architecture models 
+ Interface Models