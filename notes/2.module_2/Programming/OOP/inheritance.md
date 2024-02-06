# Interfaces and Inheritance Subtyping

::: info Inheritance
Inheritance is a mechanism where you derive a class from another
class for a hierarchy of classes that share a set of attributes and
methods.
:::

## Benefits of Inheritance
Inheritance minimizes the amount of duplicate code in software by sharing common code amongst classes:
When the same code exists in two classes, The common code can be added to a superclass that the two classes inherit from.
This also makes software easier to maintain since when a change is necessary
it only has to be applied in one class instead of two.

Inheritance can also make application code more flexible to change because classes that inherit from a common superclass can be used interchangeably.

## Class Hierarchy

### Example

```plantuml
Item <|-- Ammo
Item <|-- Weapon
Item <|-- Key
Item <|-- Potion
Item <|-- Cookie
Weapon <|-- FireArm
Weapon <|-- MagicWeapon
```

If the game code uses variables of type
`Item`, say, for keeping an `Inventory`, then
it is easy to add more types of “Items”
later on, without changing the code for
the Inventory.

Because classes that inherit from
`Item` can be used interchangeably with `Item`.

### JavaFX Class Hierarchy

```plantuml
Node <|-- Shape3D
Node <|-- Parent
Node <|-- Shape
Parent <|-- Region
Region <|-- Pane
Region <|-- Control
```

Libraries like JavaFX contain many classes.
Typically, the “base code” is shared:
held in common base classes like `Node`, or
`Shape`.
For example
+ A `Node` has a `location`, `rotation`, `scale`
+ A `Shape` is `filled` or not `filled`
As a result of this class hierarchy all classes
have a `location`, `rotation` and `scale`
since they extend `Node`.

## Inheritance

### Syntax
```java
// Extends Syntax
class MountainBike extends Bicycle {
    // new fields and methods for MountainBike.
    // MountainBike is the subclass
    // Bicycle is the superclass.
}
```

Diagram for the entire structure:
```plantuml
Bicycle <|-- MountainBike
Bicycle <|-- RoadBike
Bicycle <|-- TandemBike
```

### Extending Classes

When extending from a class you can access the fields and methods
of that class and override methods to change their implementation.

When writing the code for a superclass, you can control whether 
the classes that extend the superclass will be able to access it's methods 
and fields:

+ methods of the child class cannot access `private` fields/methods of the parent class.
+ If a method of the superclass you are writing should not be overridden
you can mark it as `final`.
+ If the class should not be extended at all you can mark the entire class as `final`.

If there are two fields with the same name in a subclass and superclass you can
differentiate the two with `this.fieldName` and `super.fieldName` respectively.

If there are two methods with the same signature in a subclass and superclass, the
method in the subclass is **overriding** the method in the superclass which means that
you are giving the method a different implementation from the superclass. You can access
both implementations in the subclass with `this.methodName()` and `super.methodName()` respectively.

+ `this` for the current object and `super` for fields/methods of the parent class
+ `super()` in the constructor invokes the constructor of the parent class.

#### Inheritance Example

```java
// Inheritance Example
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
        super(place); // calls the constructor of the superclass: Item
        this.door = door; // sets a value for door.
    }

    @Override
    public boolean isPortable() {
        return true; // overriding a method of a superclass to have a different result.
    }

    public boolean opens(Door door) {
        return this.door.equals(door);
    }
}
```

### Polymorphism

::: info Polymorphism
Polymorphism is an OOP feature that allows sub-classes to have methods of the same name (of the same superclass) but with a **different implementation**.
:::

#### Example

```java
// Polymorphism Example
class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound"); // original implementation.
  }
}

class Pig extends Animal {
  @Override
  public void animalSound() {
    System.out.println("The pig says: wee wee"); // different implementation for Pig
  }
}

class Dog extends Animal {
  @Override
  public void animalSound() {
    System.out.println("The dog says: bow wow"); // different implementation for Dog.
  }
}
```

### Overloading vs Overriding

**Overloading** (also called static polymorphism)
+ Methods in a class with the same name but different signature
(different number or type of parameters)
+ Use sparingly, and only if confusion is unlikely

**Overriding** (also called dynamic polymorphism)
+ Methods of a subclass with the same signature of a method of the
parent class
+ Use `@Override` tags in front of overriding method (not when
overloading)
+ Improves maintainability: fewer mistakes! Good practice

### Constructors

Method without a return type, with the same name as the class that creates a new object of the class.
+ Constructors can be overloaded but are not inherited
+ All classes have a constructor
+ When omitted, the class has an implicit (default) empty-argument constructor
+ Every constructor calls another constructor
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
        this(); // calls empty constructor.
        move(x, y);
    }
}

public class Point3D extends Point2D {
    public Point3D() {
        // empty
    }

    public Point3D(int x, int y, int z) {
        super(x, y); // calls Point2D constructor
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

+ `abstract` methods must be in an `abstract` class.
+ `abstract` classes are “incomplete”/“partial” and typically contain “base”
functionality
+ Subclasses must either implement the `abstract` methods or also be `abstract`
+ You cannot instantiate an `abstract` class but an `abstract` class has a constructor

### Interfaces
An `interface` is a special type: only has specification, no implementation.

+ All variables are `public final static`
+ Methods in interfaces do not have a body, unless they are marked with `default`.
+ Classes can `extend` one class
and `implement` multiple interfaces
+ Interfaces can `extend` multiple interfaces

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

implemented methods have the same signature(method names, result, parameter types) and visibility

implementation has additional methods, fields and constructor.

#### Java Data-structures implementation

Java has no native list data structures, only arrays. The `Collections` library includes many useful data structures including `Lists`.
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

For implementing an interface a dotted arrow
is drawn instead of the solid arrow for extending.
```plantuml
interface Item
Item : Room getPlace()
Item : boolean isPortable()

Key : Room place
Key : Door door
Key : Room getPlace()
Key : boolean isPortable()
Key : boolean opens(Door door)

Item <|.- Key
```

## Combining Interfaces And Inheritance

Since interfaces extend from each other
the correct notation in uml is a solid
arrow from the subinterface to the superinterface.

```plantuml
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
```


## Multiple Inheritance

+ In many programming languages, a class can extend multiple classes (ex. C++)
+ This leads to the *diamond problem*:

```plantuml
Mammal : speak()
Human : speak()
Wolf : speak()

Mammal <|-- Human
Mammal <|-- Wolf
Wolf <|-- Werewolf
Human <|-- Werewolf
```

In the `Werewolf` class the `speak()` method is ambiguous.


## Inheritance vs Interface.

| Feature | Interface | Class | abstract Class| 
| ------- | --------- | ----- | ------------- |
| method implementation necessary | no | yes | no if abstract method.|
| method implementation possible | limited; with default. | yes | yes |
| non-final fields | no | yes | yes |
| private/protected members | no | yes | yes |

Options for extending/implenting:
+ **Classes** can implement *multiple* interfaces
+ Extending interfaces can be combined with extending one class.

Purpose of abstract classes vs interfaces:
+ Abstract classes are a **basis for subclasses with shared behaviour**
+ **Interfaces are specifications**, describing the behavior an implementing class will have.

## Inheritance vs Composition

Also called the OOP *composite reuse principle*.
::: info composite reuse principle
is the principle that classes should achieve polymorphic behavior and code reuse
by their composition (by containing instances of other classes
that implement the desired functionality) rather than inheritance
from a base or parent class. (Wikipedia)
:::

| Composition | Inheritance |
| ----------- | ----------- |
| rely on other object(s) to provide (some) functionality |  inherit fields and methods from another class |
| Composition is often more appropriate | Use when there is a clear parent-child relationship of concepts (is-a relationship) |
| Use when only using parts of the functionality of another class (has-a or uses-a relationship) | Use to alter the behavior of a class |
| | Use when you want to reuse the entire interface of the superclass | 

## Object Class

All classes are derived from the base class `Object`.
All classes inherit its methods:

```java
public boolean equals(Object o) // check for “equality”
public int hashCode() // compute unique representation.
public String toString() // create a String representation
```

+ These methods have a default implementation.
+ Often it is a good idea to override these inherited methods
+ The default `toString()` method returns a String that represents the internal reference to the instance: `SomeObjectClassname@hashcodenumber`.

## Types

Reference types (Objects) carry a subtyping relation: one type can be a subtype of another.

Subtyping is a partial order (meaning reflexive and transitive)
+ **Reflexive**: every type is a subtype of itself: `A` is a subtype of `A`
+ **Transitive**: if `A` is a subtype of `B` and `B` is a subtype of `C`, then `A` is a subtype of `C`.
+ if `S` is a subtype of `T`, then we use `S` when `T` is expected (Whenever a value of a given type is expected, a subtype can be used)

## Subtyping in Java
In each of these cases the class `B` is a subtype of `A`. 
And therefore `B` can be used when `A` is expected.

### class `B` implements `A`
`implements` keyword should be used.

```plantuml
interface A
A <|-- B
```

### class `B` extends `A`
`extends` keyword should be used.

```plantuml
A <|-- B
```

### interface `B` extends `A`
`extends` keyword should be used.

```plantuml
interface A
interface B
A <|-- B
```


## Static vs Dynamic Type Of an Expression
**Static type**: that which the compiler can infer during “compile-time”, Also called declared type.

The Java compiler will not do (potentially complicated) *type inferencing*: it will treat variables as `Type` when they are declared as `Type` even if at runtime it will contain a different type.

**Dynamic type**: that which the value actually has during “run-time”, Also called actual type or run-time type.

+ The dynamic type is always a subtype of the static type
+ What the compiler considers correct is based on the static type.

### Dynamic Type Test
How to find out the dynamic type of an expression expr during *run time*?
+ Type test: `instanceof Type`
+ This yields true if the dynamic type of an expression is a subtype of `Type`
+ `null instanceof Type` is always `false`.

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
How to tell the compiler the actual type of an expression expr?
To be able to call methods that are not available for the super type.

Type cast: `(Type) expr` changes the static type to `Type`

+ Only correct if dynamic type of expr is a subtype of Type
+ You cannot change the dynamic type of an expression
::: warning Watch the parentheses
+ `((Key) i1).opens(door)` is correct: `((Key) i1)` has type “Key”.
+ `(Key) i1.opens(door)` is wrong: tries to cast the result from the method.
:::

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