# Lists

+ Lists are finite
+ Have a length (= number of elements), which can be 0 (“empty list)
+ Lists define a sequence.
+ Elements in a list are in a certain order.
+ Elements are numbered (indexed).
+ Elements start at 0.
+ Elements are from the same (reference) type (or subtype).

The list interface defines the concept of a List and has 
the requirements for a List.

## Generics
+ Generics were introduced in Java 5 to allow an interface
or class to have an element type as a 'parameter'.
+ replaced by ‘argument type’ when object of the class is
created
+ `List<E>` interface (E is a ‘type parameter’) allows us to use the
same list implementations for lists of objects of different types
+ `List<Student>`, `List<Room>`, `List<Date>`, etc.

### Generics Examples:

#### List Types
```java
List<String> v = new ArrayList<String>();
```

#### Class Definition
```java
public class Entry<KeyType, ValueType> {

    private final KeyType key;
    private final ValueType value;

    public Entry(KeyType key, ValueType value) {
        this.key = key;
        this.value = value;
    }

    public KeyType getKey() {
        return key;
    }

    public ValueType getValue() {
        return value;
    }

    public String toString() {
        return "(" + key + ", " + value + ")";
    }

}
```

## List\<E\> Implementations
@startuml
interface List<E: Class>
abstract class AbstractList<E: Class> implements List
class ArrayList<E: Class> extends AbstractList
class Vector<E: Class> extends AbstractList
abstract class AbstractSequentialList<E: Class> extends AbstractList
class LinkedList<E: Class> extends AbstractSequentialList
class Stack<E: Class> extends Vector
@enduml

### Basic Usage

```java
List<Integer> values = new ArrayList<Integer>();
List<Room> rooms = new ArrayList<Room>();
// Read values from a list
int i = values.get(3); // copy 4th value of values to i
Room r = rooms.get(2); // copy 3th reference of rooms to r
// Modify values from a list
values.set(3, i); // copy i to 4th position of values
rooms.set(2, r); // copy reference r to 3th position of rooms
```

[see javadoc for List](https://docs.oracle.com/en/java/javase/11/docs/api/)

## Iterator
```java
List<Student> list;

// shortcut:
for (Student s : list) {
    System.out.println(s);
}

// equivalent to:
Iterator<Student> it = list.iterator();
while (it.hasNext()) {
    Student s = it.next();
    System.out.println(s);
}
```

## Summary
Arrays in Java are similar to arrays in other programming
languages, but need to be declared and created before use
+ Arrays are handy only when memory allocation does not
change (static lists) and cumbersome otherwise (dynamic lists)
+ `List<E>` interface defines the methods that can be called on
generic lists (can be used with different types)
+ To be used, `List<E>` must be instantiated with a type for E and
refer to a list implementation (`ArrayList<E>`, `LinkedList<E>`,
`Vector<E>`, etc.)