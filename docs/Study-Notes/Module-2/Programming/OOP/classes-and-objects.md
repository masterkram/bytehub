# Classes and Objects

::: theorem OOP

A programming Paradigm (of the imperative family) based on the concept of objects.

:::

+ Abstracts real-world objects into Classes.
+ Objects have state (properties, attributes)
+ Objects have behavior (methods, commands)

**Advantages:**
+ Increase code reuse
+ Separation of concerns - Modularity.

::: theorem Separation of concerns - Modularity
a design principle for separating a computer program into distinct sections such that each section addresses a separate concern
+ OOP supports this principle
+ MVC is an architectural pattern that aims to follow SoC
:::

### Classes vs Object

+ a Class is extensible code for creating objects (a blueprint for an object)
+ Object is an instance of a class. (built according to a class)

+ In OOP a program is a collection of objects that interact with each other.
+ Each object is an *instance* of a class.

+ Objects contain state and behavior

**properties represent the state of an object:**

```java
class Box {
    String label;
    int length;
    int height;
    int width;
    Person owner;
}
```

::: tip Good Practice

only the object itself should be able to change it's state.
To be able to for example add business logic to the setting and getting.
+ properties should be private.
+ getters should be public.
+ setters should be public.

:::

```java
class Box {
    private String label;
    private int length;
    private int height;
    private int width;
    private Person owner;

    // a setter
    public void setOwner(Person newOwner) {
        this.owner = newOwner;
    }

    // a getter
    public Person getOwner() {
        return this.owner;
    }
}
```

## Constructors

Constructors create a new instance of the class.

In the following example there are two different constructors that initialize the properties of the `Box` class differently.

```java
class Box {
    String label;
    int length;
    int height;
    int width;
    Person owner;

    public Box() {
        this.label = "Empty";
    }

    public Box(String label, Person owner) {
        this.label = label;
        this.owner = owner;
    }
}
```

+ Java creates a default constructor.
+ Destructors are not needed in java because it has a garbage collector.

## Terminology
+ *properties* == *attributes* == *fields*
+ Methods are *declared* then *invoked*
+ *Parameters* (declaration) are also called *arguments* (invoctaion)
+ Methods have a *return type* or are void.
+ Classes live in a *package*

## Access Modifiers

| Modifier  | Same Class  | Subclass  | Package  | Rest of the world |
| - | - | - | - | - |
| public | yes | yes | yes | yes | yes |
| private | yes |   |   |   |   |
| protected | yes | yes |   |   |   |
| none | yes | yes | yes |   |   |

## Static variables
A static variable or field is shared by all instances of the class.
The class is the 'owner' of the variable instead of the object.

static methods can be called without creating an instance of the class and they may only access static fields.

## Final

+ Fields can be final
    + may not be modified (after object construction)
+ Methods can be final
    + subclasses may not override the method.
+ a Class can be final
    + the class cannot be extended.

## Primitive vs Reference
primitive and reference types are stored in two different ways.

+ Primitive types: store the value of the variable
+ Reference types: store a pointer to the instance (or null)
+ Two different variables may point to the same object (aliasing)
+ when comparing an object use `.equals(other)`

## Javadoc

javadoc is a special type of comment used to document a class.
It can be placed at the beginning of the class and before each method.

A javadoc comment looks similar to a multi-line comment but it has an extra asterisk at the beginning.

Important tags
+ `@author` (who is the author of this class or method)
+ `@param` (what does each parameter of the method mean)
+ `@return` (what does the method return)
+ `@throws` (what exceptions can the method throw)
+ `@requires` (preconditions of the method)
+ `@ensures` (postconditions of the method)

+ **precondition**: Usually a precondition is a statement about the parameters of the method that is guaranteed to be true. If the preconditions are not met usually a method will throw an Exception to alert that a parameter was wrong for example.

+ **postcondition**: what is guaranteed to happen if the method is run and the preconditions are met.

### Example:
```java
    /**
     * this method gives the result of a division.
     * @author Mark Bruderer
     * @param dividend the number that is being divided.
     * @param divisor the number the dividend is being divided by.
     * @throws java.lang.ArithmeticException this exception will be thrown when the divisor is equal to 0.
     * @requires divisor to not equal 0.
     * @ensures returns the quotient of the division of divided by divisor.
     * @return the quotient of the integer division of dividend by divisor.
     */
    public static int divide(int dividend, int divisor) {
        if (divisor == 0) {
            throw new java.lang.ArithmeticException();
        }
        return dividend / divisor;
    }
```