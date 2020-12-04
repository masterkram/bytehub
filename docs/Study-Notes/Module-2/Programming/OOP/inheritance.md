# Interfaces and Inheritance Subtyping

::: theorem Inheritance
Inheritance is a mechanism where you derive a class from another
class for a hierarchy of classes that share a set of attributes and
methods.
:::

## Class Hierarchy

### Example

@startuml
Item <|-- Ammo
Item <|-- Weapon
Item <|-- Key
Item <|-- Potion
Item <|-- Cookie
Weapon <|-- FireArm
Weapon <|-- MagicWeapon
@enduml

If the game code uses variables of type
`Item`, say, for keeping an Inventory, then
it is easy to add more types of “Items”
later on, without changing the code for
the Inventory

### JavaFX Class Hierarchy

@startuml
Node <|-- Shape3D
Node <|-- Parent
Node <|-- Shape
Parent <|-- Region
Region <|-- Pane
Region <|-- Control
@enduml

Libraries like JavaFX contain many classes.
Typically, a lot of the “base code” is shared:
put in common base classes like `Node`, or
`Shape`.
For example
+ A Node has a location, rotation, scale
+ A Shape is filled or not filled

## Inheritance

### Example
```java
class MountainBike extends Bicycle {
    // new fields and methods for MountainBike.
    // MountainBike is the subclass
    // Bicycle is the superclass.
}
```


@startuml
Bicycle <|-- MountainBike
Bicycle <|-- RoadBike
Bicycle <|-- TandemBike
@enduml

### Extending Classes
members = methods and fields.

+ methods of the child class can access `public`/`protected` members of the parent
class.
+ methods of the child class cannot access private members of the parent class.
+ variables of the child class hide variables with the same name of the parent
class.
+ methods of the child class override methods with the same signature of the
parent class.
+ use `this` for the current object and `super` for members of the parent class
+ use `super()` in the constructor to invoke the constructor of the parent class.

#### Inheritance Example

```java
public class Item {
    private Room place;

    public Item(Room place) {
        this.place = place;
    }

    public Room getPlace() {
        return this.place;
    }

    public boolean isPortable() {
        return false;
    }
}

public class Key extends Item {
    private Door door;

    public Key(Room place, Door door) {
        super(place);
        this.door = door;
    }

    @Override
    public boolean isPortable() {
        return true;
    }

    public boolean opens(Door door) {
        return this.door.equals(door);
    }
}
```

### Polymorphism

::: theorem Polymorphism
Polymorphism is an OOP feature that allows two or more
distinct (sub) classes to have methods of the same name (of the
same superclass) but with a **different implementation**.
:::

For example consider the classes `Parent`, `Child1` and `Child2` let's say
`Child1` and `Child2` extend `Parent`. A variable of type `Parent` can be assigned to objects of `Child1` or `Child2` and the methods of `Parent` can be used even though the actual method implementation will differ based on if the actual object is an instance of `Child1` or `Child2`.

### Overloading vs Overriding

+ **Overloading** (also called static polymorphism)
+ Methods in a class with the same name but different signature
(actually: just different number or type of parameters)
+ Use sparingly, and only if confusion is unlikely
+ **Overriding** (also called dynamic polymorphism)
+ Methods of a subclass with the same signature of a method of the
parent class
+ Use `@Override` tags in front of overriding method (not when
overloading)
+ Improves maintainability: fewer mistakes! Good practice

### Contracts for overriding methods

+ Contract in supertype: general, weak enough to allow overriding
```java
public interface ClosedFigure {
/*@ ensures \result > 0; */
public int circumference();
}
```
+ Specialized contract in subtype: specific, concrete & stronger
+ The same or weakened precondition
+ The same or strengthened postcondition
```java
public class Circle implements ClosedFigure {
/*@ ensures \result == 2 * Math.PI * radius(); */
public int circumference() { ... }
}
```
+ Contract of original method is respected
+ Calling circumference on a ClosedFigure will meet expectations

### Constructors

Method without a return type, with the same name as the class
+ Constructors can be overloaded but are not inherited
+ All classes have a constructor
+ When omitted, the class has an implicit (default) empty-argument constructor
+ Every constructor calls another constructor
+ First line: super(args); or this(args); (don’t use new or constructor name!)
+ When omitted, implicitly calls super() (most frequent case)
+ Only valid if superclass has a constructor without parameters!

::: tip Good practices
+ Constructor initializes all fields that need a non-default value
+ Constructor does not perform extensive computation
:::

#### Example

```java
public class Point2D {
    protected Point2D() {
        // empty
    }

    public Point2D(int x, int y) {
        this();
        move(x, y);
    }
}

public class Point3D extends Point2D {
    public Point3D() {
        // empty
    }

    public Point3D(int x, int y, int z) {
        super(x, y);
        this.z = z;
    }
}
```


## Abstract Methods And Classes

An abstract method is a method without a body
```java
public abstract class SomeAbstractClass {
    public abstract void doSomething(int someNumber);
    protected abstract double computeSomething(int numberOne, double numberTwo);
}
```

+ Abstract methods must be in an abstract class.
+ Abstract classes are “incomplete”/“partial” and typically contain “base”
functionality
+ Subclasses must either implement the abstract methods or also be abstract
+ You cannot instantiate an abstract class but an abstract class has a constructor

### Interfaces
An interface is a special type: only specification, no
implementation
+ All variables are public final static
+ All methods are public abstract
+ Classes can extend one class
and implement multiple interfaces
+ Interfaces can extend multiple interfaces

#### Syntax

```java
interface MyInterface {
public static int myInt = 0;
/**
* Specification 1 ...
*/
public void myMethod1(); // <-- a semicolon instead of the method body
/**
* Specification 2 ...
*/
public int myMethod2(int i, int j);
}
```

#### Implementation Example

```java
interface Item {
    Room getPlace();
    boolean isPortable();
}

public class Key implements Item {
    private Room place;
    private Door door;
    public Key(Door door) {
        this.door = door;
    }
    public Room getPlace() {
        return place;
    }
    public boolean isPortable() {
        return true;
    }
    public boolean opens(Door door) {
        return this.door.equals(door);
    }
}
```

implemented methods have
same signature (method
names, result, parameter
types) and visibility

implementation has
additional methods,
fields and constructor

#### Java Datastructures implementation

+ Java has no native list data structures, only arrays
+ The `Collections` library includes many useful data structures
including Lists
+ All list types have a common interface `List`
+ `List` defines many methods. Some of them are:

```java
interface List {
    boolean add(Object e);
    boolean remove(Object e);
    boolean contains(Object e);
    Object get(int index);
    Object set(int index, Object e);
    Object remove(int index);
    int size();
}
```

## UML Notation

@startuml
interface Item
Item : Room getPlace()
Item : boolean isPortable()

Key : Room place
Key : Door door
Key : Room getPlace()
Key : boolean isPortable()
Key : boolean opens(Door door)

Item <|.- Key
@enduml

## Combining Interfaces And Inheritance

@startuml
interface Item
note right: super interface.
Item : + Room getPlace()
Item : + boolean isPortable()

interface Weapon
note right: sub-interface.
Weapon : + int getForce()

Item <|-- Weapon

Weapon <|.- MagicWeapon
Weapon : Room place
Weapon : int free
Weapon : boolean used
Weapon : int getForce()
Weapon : Room getPlace()
Weapon : boolean isPortable()
Weapon : void use()
@enduml


## Multiple Inheritance

+ In many programming languages, a class can extend multiple classes (ex. C++)
+ This leads to the famous diamond problem:

@startuml
Mammal : speak()
Human : speak()
Wolf : speak()

Mammal <|-- Human
Mammal <|-- Wolf
Wolf <|-- Werewolf
Human <|-- Werewolf
@enduml

In werewolf class the `speak()` method is ambiguous.


## Inheritance vs Interfaces

+ In **interfaces** no *default* implementation of methods necessary.
+ **Classes** can implement *multiple* interfaces
+ Extending interfaces can be combined with extending one class.
+ Default methods are inherited from each interface
+ More reuse of methods (default methods in interfaces are
limited)
+ Classes and abstract classes can have non-final fields
+ Classes can have protected and private members
+ Abstract classes are a “basis for subclasses with shared
behaviour”
+ **Interfaces are specifications**, describing the behavior an
implementing class will have

## Inheritance vs Composition

+ Also called the OOP composite reuse principle
+ Classes should achieve polymorphic behavior and code reuse
by their composition (by containing instances of other classes
that implement the desired functionality) rather than inheritance
from a base or parent class. (Wikipedia)

Inheritance: inherit fields and methods from another class • Use when there is a clear parent-child relationship of concepts (is-a relationship)
+ Use to alter the behavior of a class
+ Use when you want to reuse the entire interface of the superclass
• Composition: rely on other object(s) to provide (some)
functionality
+ Composition is often more appropriate
+ Use when only using parts of the functionality of another class (has-a or uses-a relationship)
+ Both are fundamental in object-oriented programming!

## Object Class

All classes are derived from the base class `Object`.
All classes inherit its methods:

```java
public boolean equals(Object o) // check for “equality”
public int hashCode() // compute unique representation (next week)
public String toString() // create a String representation
```

+ These methods have a default implementation.
+ Often it is a good idea to override these inherited methods
+ The default `toString()` method returns a String that represents the internal reference to the instance: “SomeObjectClassname@hashcodenumber”.

## Types

Java has two kinds of data types
+ Primitive types (int, boolean, double, etc.)
+ Reference types (classes and interfaces, for example String, List, etc)
+ Reference types carry a subtyping relation
+ One type can be a subtype of another (fundamental concept)
• Subtyping is a partial order (meaning reflexive and transitive)
• Reflexive: every type is a subtype of itself: A is a subtype of A
• Transitive: if A is a subtype of B and B is a subtype of C, then A is a subtype of C
• Subtyping in programming language theory: substitutability
• if S is a subtype of T, then we can safely use S when T is expected
• (Whenever a value of a given type is expected, a subtype can be used)

## Subtyping in Java

### class `B` implements `A`

@startuml
interface A
A <|-- B
@enduml

### class `B` extends `A`

@startuml
A <|-- B
@enduml

### interface `B` extends `A`

@startuml
interface A
interface B
A <|-- B
@enduml


## Static vs Dynamic Type Of an Expression
Static type: that which the compiler can infer during “compile-time”
+ Also called declared type
+ i1 has static type Item (that’s how it was declared)
+ The Java compiler will not do (potentially complicated) type inferencing: if you
declare i1 to be an “Item”, it will be treated as an “Item”, even when “everyone can
see” that it actually will contain a “Key” at run time.
+ Dynamic type: that which the value actually has during “run-time”
+ Also called actual type or run-time type
+ i1 has dynamic type Key (because k1 was assigned to it)
+ At some other point, i1 may have dynamic type Item.
+ The dynamic type is always a subtype of the static type
+ What the compiler considers correct is based on the static type.

### Dynamic Type Test
How to find out the dynamic type of an expression expr during “run time”?
+ Type test: expr `instanceof Type`
+ This yields true if the dynamic type of expr is a subtype of `Type`
+ `null instanceof Type` is always “false”.

```java
Key k1 = new Key();
Item i1 = k1;
Item i2 = new FireArm();
Item i3 = null;
System.out.println(k1 instanceof Key); // true
System.out.println(k1 instanceof Item); // true
System.out.println(i1 instanceof Key); // true
System.out.println(i1 instanceof Item); // true
System.out.println(i2 instanceof Key); // false
System.out.println(i2 instanceof Item); // true
System.out.println(i3 instanceof Item); // false
```

### Casting
+ How to tell the compiler the actual type of an expression expr?
+ Why would you even want that? Because you can then call appropriate methods on it, that are
not available for the super type.
+ How? Type cast: `(Type)` expr changes the static type to `Type`
+ Only correct if dynamic type of expr is a subtype of Type
+ You cannot change the dynamic type of an expression
+ Watch the parentheses
+ `((Key) i1).opens(door)` is correct: `((Key) i1)` has type “Key”.
+ `(Key) i1.opens(door)` is wrong: tries to cast the result from the method.

#### Example

```java
public class Player {
private Item item;
// other code
/** Tests if item is a Key. */
public boolean hasKey() {
return item instanceof Key;
}
/** Returns the item if it is a key, otherwise null. */
public Key getKey() {
return item instanceof Key ? (Key) item : null;
}
/** Fires the firearm, if item is a firearm. */
public boolean fire() {
return item instanceof FireArm && ((FireArm) item).fire();
}
}
```