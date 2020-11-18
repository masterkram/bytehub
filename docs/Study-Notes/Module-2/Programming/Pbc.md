# Programming by Contract

## Class Specifications
For each class and each method
the program designer must specify the conditions for objects of this class to work properly.

+ `Preconditions`: conditions which should hold before a method is called.
+ `Postcondtions`: conditions that should hold oce a method has worked correctly.
+ `Invariants`: What conditions must always hold in an object of a class.
+ If a caller respects preconditions then method implementation guarantees postconditions.

[link to javadoc tags](./OOP.html#javadoc)


## Precondition
+ Defined using method pararmeters and or object conditions that can be described using public methods.
+ Caller must ensure the preconditions.
+ Method implementation can assume that preconditions are met.

## Postcondition
+ responsibility of the implementer.

## Class Invariants
+ A class invariant is defined in the scope of a class.
+ General meaning: a property that always holds for any instance of the class.

+ Alternative usage scenarios:
    1. Private: refer to the internal state of the object.
    2. Public: serve as documentation.

+ Properties that hold for every internally reachable state of an object.

+ Preconditions, postconditions and invariants are boolean conditions.

## Programming By Contract
+ If a caller respects preconditons, then the method implementation guarantees postconditions.
+ Class invariant shows that implementation ensures postconditions.

## Contract Options
1. Trust Client
    + Client respects preconditions
    + no precautions necessary.
    + justified when client and class are developed by the same person or team.
2. Generate error message:
    + Client will not always respect preconditions
    + When this happens the program should stop in a controlled manner.
    + Implementations checks preconditions.
    + assert *precondition*: stop of precondition not met.
    + Useful to make sure internal invariants always hold.
    + Applicable to larger programs.
3. Defensive Programming
    + Client will make mistakes.
    + Program should not fail.
    + Implementation checks all preconditions, and if a precondition is not respected tale a appropreiate emergenvy actions 
    + useful for critical applications.
4. Check or Verify.
    + Automatically insery precondition and postcondition checks.
    + construct formal proof that
        + preconditions hold.
        + postconditions hold.
        + invariants are maintained.