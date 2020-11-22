# Class Diagram

A class diagram is used to describe:
+ what the objects that should be stored in the system are.
+ how these objects are structured.
+ how these objects relate to each other.

@startuml

Employee : name: String
Employee : initials: String
Employee : SSN: String
Employee : salary scale: Integer
Employee : hours/week: Integer
Employee "*" - "*" Department : works_in
Employee "*" - "1" Address : lives_at

Department : name: String
Address : street: String
Address : number: String
Address : postal_code: String

@enduml