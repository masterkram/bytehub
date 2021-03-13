# Introduction to Business Process Management

To understand businesses and organise business activities in a meaningful way need to understand the underlying processes, we do this by looking at Business processes and modeling them.
Business Intellegence (**BI**) is used to do things better based on an understanding of the business. **BI** acquires information on the operation of a company to support decision making.

## Business process

A business process (**BP**) is a set of activities performed in a certain order to realize a buiness goal (it describes how a company operates).

::: tip BP properties

- roles (responsibilities)
- inputs which are the resources required for a process activity
- outputs are results of process activities
- pre/post-conditions which are true statements before and after a process activity is implemented.
  :::

A **BP** may involve one or multiple departments or different organisations but may also interact with other organisations BPs. A BP might be part of the industry value chain which creates value for customers but we restrict a BP to (part of) a single business organization

## Business process management

Business processes are organizational assets that determine the effectiveness and efficiency of organizations. Business processes are intangible, difficult to recognize and observe. We can translate business process to explicit representations, so called **business process models** of which two kinds exits:

- Business process diagrams (we mostly look at this one)
- Linear text models

Once business processes are defined they become process models. Process models can be communicated, interpreted and analyzed and are the basis for maintaining or improving the operation for achieving the business goal.

**BPM** supports the business process lifecycle

- Design cycle: iterative cycle consisting of modelling and analysis for improving the business process definition
- Engineering cycle: iterative cycle for improving the business process implementation in the organization

<img src="./process-lifecycle.jpg" />

## Business process management systems

Business processes can be enacted manually but automating has large benefits.
A Business process management system (**BPMS**) is a software system that coordinates enactment of business processes driven by explicit process schema (there is a BP model in this system which is followed).

- Business process model vs executable process models (workflow)
- Separation of process logic and application logic

BPMS is also called a Process Aware information system
-explicit representation fo the process

BPMS automates business processes by coordinating the execution of business process instances. It depends on the organisation if which depearments actually work with the business processes.

## Identification and representation

Business processes are an abstract representation of the real world, it has to contain important details which matter (the scope).
Activities, input, output and relationships are important things to identify.

Several languages are available for modeling: Event-driven process chains (EPCs), Workflow Nets, Well Structured Marking Nets and BPMN.
The distinguishing factors between these are differences in expressiveness and operational semantics. We use BPMN.

### BPMN

Basic elements

<img src="./bpmn-basic.jpg" />

Input and output of activities

<img src="./bpmn-inout.jpg" />

Basic gateways

<img src="./bpmn-gate.jpg" />
