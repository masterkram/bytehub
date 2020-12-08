# Collections

## Collection Hierarchy
The `java.util` library contains several useful
data-structures based on math concepts:

+ Implements `Collection`:
    + List: a sequence. [see implementations](./List-Implementations)
    + Set: *mathematical concept of a set*.
+ Does not implement `Collection`
    + Map: *mathematical concept of a function*.

@startuml
interface Collection<E: Class>
interface List<E: Class> extends Collection
interface Set<E: Class> extends Collection
class HashSet<E: Class> implements Set
interface SortedSet<E: Class> extends Set
class TreeSet<E: Class> implements SortedSet
interface Map<E: Class>
class HashMap<E: Class> implements Map
interface SortedMap<E: Class> extends Map
class TreeMap<E: Class> implements SortedMap
@enduml


## Set
::: theorem Set
A set has:
+ no duplicates.
+ no indexing.
+ no ordering.
:::

`HashSet` is the preferred implementation.

`TreeSet` is an alternative implementation for a `SortedSet`.

`TreeSet` sorts the elements with a binary tree so the element class
must implement the `Comparable` interface.

[sets in math](/Study-Notes/Module-1/Math/Mathematics/Sets)


## Comparable

```java
// Element class implements comparable
public class Student implements Comparable<Student>{
    // Student must implement the compareTo Method.
    @Override
    public int compareTo(Student o) {
        /*
        * the return value should be 0 if this and o are equal.
        * the return value should be negative if this is lesser than o.
        * the return value should be positive if this is greater than o.
        * here we use the student number to sort students.
        */
        return nr.compareTo(o.getNr());
    }
}

```

## Iterator
All collection classes have an iterator
+ `Collection<E>` has a method `iterator()` that returns an `Iterator<E>`

Main Iterator methods
+ `boolean hasNext()`: returns true if iteration has more elements
+ `E next()` : returns next element in the iteration
+ `void remove()`
    + Removes last element returned by this Iterator
    + Can be called only once per call to `next()`

### Iterator Usage:

```java
// standard iterator usage.
Iterator<Student> i = slist.iterator(); // get the iterator from slist.
// iterate through the list and print a student.
while (i.hasNext()) {
    Student s = i.next();
    System.out.printf("Nr: %s, name: %s%n", s.getNr(), s.getName());
}

// equivalent to, simplified for loop. (uses an iterator under the hood)
for (Student s: slist) {
    System.out.printf("Nr: %s, name: %s%n", s.getNr(), s.getName());
}

// sometimes an iterator is necessary if the list should be modified.
// for example deleting an element from the list.
public static void removeInvalidNr(Collection<Student> scoll)
{
    Iterator<Student> i = scoll.iterator();
    while (i.hasNext()) {
        if (!i.next().getNr().matches("s[0-9]*")) {
            i.remove(); // Do not use scoll.remove(i)
        }
    }
}
```

## Maps
::: theorem Map
`Map<K, V>` implements mathematical concept of a function.
It *Maps*: Keys to Values.
For each key, there is at most one corresponding value.
+ Each key is unique and mapped to one value
+ Same value may appear multiple times
:::

+ `HashMap` is the preferred implementation
+ `TreeMap` is a sorted map

### Map Methods

```java
get(K key) // returns value associated with key (could be null)
put(K key, V value) // associates key with value
remove(K key) // removes mapping for key
containsKey(K key) // true if the key is used in the Map
containsValue(V value) // true if value is associated with some key

keySet() // returns a Set containing all keys used by this Map
values() // returns all values associated with at least one key in this Map(returns a Collection)
entrySet() // returns Set that contains the mappings of this Map
```

<img src="./map.png" />

```java
// gets the student with the best grade
Student best(Map<Student,Integer> grades) {
    Student result = null;
    int best = 0;
    for (Map.Entry<Student,Integer> e: grades.entrySet()) {
        Integer g = e.getValue();
        if (g > best) {
            result = e.getKey();
            best = g;
        }
    }
    return result;
}

// calculates the average grade
double avg(Map<Student,Integer> grades) {
    int sum = 0;
    for (Integer c: grades.values()) {
        sum += c;
    }
    return (double)sum / grades.size();
}
```

## Hashing
::: theorem Hashing
Hashing is calculating pseudo-random numbers, called hash codes, and
assigning them to Objects. Then Objects are stored using their hash codes.
When a hash code of an Object is known the element can be found almost
in a constant amount of time contrary to storing Objects in a long list.
:::

+ Purpose: fast way to find information

### Typical Implementation

+ Uses a (fixed) number of **buckets**
+ Each bucket contains a **linked list**
+ Method `hashCode()` relates an object to a bucket
+ `equals()` can be used to compare elements in the same bucket
+ **Collision**: two different objects have same hash code
+ Efficient hash functions avoid too many collisions
+ Hash codes should be distinct in as many bits as possible

### Bucket

<img src="./bucket.png" />

## Java Hash Code

+ Each class has a method `int hashCode()`
+ To use `HashSet`, override `hashCode()` as well as `equals(Object)`
+ *Equality of objects implies equality of hash codes.*
+ If `o1.equals(o2)` then `o1.hashCode() == o2.hashCode()`
+ Programmer’s responsibility to ensure this, otherwise `HashSet` methods
like `add` and `contains` fail unpredictably


## Type Parameters

All generic method declarations have a type parameter section delimited by angle brackets that precedes the method's return type ( `<E>` in the next example).

Each type parameter section contains one or more type parameters separated by commas.

The type parameters can be used to declare the return type and act as placeholders for the types of the arguments passed to the generic method, which are known as actual type arguments.

```java
public static <E> List<E> sort(List<E> list) {
//...
}
```

There may be times when you'll want to restrict the kinds of types that are allowed to be passed to a type parameter. For example, a method that operates on numbers might only want to accept instances of Number or its subclasses. This is what bounded type parameters are for.

To declare a bounded type parameter, list the type parameter's name, followed by the extends keyword, followed by its upper bound.

```java
public static <E extends Comparable<E>> List<E> sort(List<E> list)
{
//...
}
```

## Polymorphism And Lists

```java
// A list is an object
Object o = new ArrayList<Student>();
// a list of Students can be assigned to a list of Objects.
List<Object> list = new ArrayList<Student>();
new ArrayList<Student> instanceof ArrayList<Object> // false
// you can't do this List<Student> bad = new ArrayList<Object>();
```
Workaround: use type parameter wildcard `?`