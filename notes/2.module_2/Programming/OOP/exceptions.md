# Exceptions

An exception is an event that occurs during the
execution of code which disrupts the normal flow of instructions.

Here are some examples of code that can will exceptions:

```java
int a = 4;
String s = "s";
Collection<Integer> c = new Collection<>();

int i = Integer.parse(s); // NumberFormatException, because s is not an int
List<Integer> l = (List<Integer>) c; // ClassCastException
```

`NumberFormatException`, `ClassCastException`, `NullPointerException` are all classes.




## Handling Exceptions
+ Surround code that can generate exceptions with a `try` block.
+ Define `catch` block to handle the exception.
+ Multiple `catch` blocks can be used to separate
exception handling depending on the type of exception.

If an exception occurs program execution will 
jump immediately to the catch-block and nothing else will be executed in the try.

## Types of Exceptions

### Checked Exceptions
Exceptions that **must be caught** (unlike RuntimeException) are called **checked** exceptions. These exceptions are checked at compile time. If some code within a method throws a **checked** exception, then the method must either handle the exception or it must specify the exception using *throws* keyword.

#### Example
This code will not compile because the FileReader constructor can throw a `FileNotFoundException`. And because `readLine()` can throw a `IOException`.
```java
String name = System.console().readLine();
BufferedReader r = new BufferedReader(new FileReader(name));
System.out.println("First line: " + r.readLine());
```
### Unchecked Exceptions
The exceptions that are not checked at compiled time are **unchecked exceptions**.
In this case the compiler does not enforce handling or specifying the exception. 
In Java exceptions under `Error` and `RuntimeException` classes are unchecked exceptions, everything else under `Throwable` is checked.

#### Example
this code compiles, but during runtime it causes an `ArithmeticException`.
because `ArithmeticException` extends from `RuntimeException`.

```java
class Main { 
   public static void main(String args[]) { 
      int x = 0; 
      int y = 10; 
      int z = y/x;
  } 
} 
```

The guideline for defining your own exceptions as either checked or unchecked is:
*If a client can reasonably be expected to recover from an exception, make it a checked exception. If a client cannot do anything to recover from the exception, make it an unchecked exception*

## Exceptions Hierarchy

```plantuml
class Throwable {
    + getMessage(): String
    + printStackTrace()
}
class Error extends Throwable
class Exception extends Throwable
class RuntimeException extends Exception

note right of Throwable : Supertype of system-defined\nor user-defined exceptions.\n(checked)
note left of Exception : Supertype of everything\nthat can be thrown.\n(checked)
note bottom of Error : Supertype of system errors,\ntypically not repairable.\n(unchecked)
note bottom of RuntimeException : Supertype of\nall runtime exceptions.\n(unchecked)
```

## Passing Up Exceptions
Instead of catching an exception it can be passed up.
Add `throws` clause to a method declaration.
The exception must then be dealt with by the user of the method you created.

```java
public static String getLine() throws IOException {
    String name = System.console().readLine("Enter filename: ");
    BufferedReader r = new BufferedReader(new FileReader(name));
    return r.readLine();
}
```

## Throwing Exceptions
to throw an exception use the `throw` keyword follow by the exception.

```java
void setWord(String old, String newWord) throws Exception {
    if (!testWord(old)) {
        throw new Exception("Old password wrong");
    }
    if (!acceptable(newWord)) {
        throw new Exception("New password not acceptable");
    }
    setWord(newWord);
}
```

## Defining Exceptions
You can define your own exceptions by extending `Exception`.
This gives the advantage of better readability and maintainability.

```java
public class PasswordException extends Exception {
    public PasswordException(String message) {
        super(message);
    }
}

void setWord(String old, String newWord) throws PasswordException {
    if (!testWord(old)) {
        throw new PasswordException("Old password wrong");
    }
    if (!acceptable(newWord)) {
        throw new PasswordException("New password not acceptable");
    }
    setWord(newWord);
}
```

## Closing of Resources
Some resources need to be closed after they are used, for example
network connections and IO based objects.
+ not closing them creates the risk of resource leaks.
+ for example, a file may not be renamed or deleted while open.

Normally the jvm garbage collector does the job of removing 
objects without references.

## Finally statement
After a try catch block a finally block can be added.
the code contained in this block will always be executed.
It is meant for closing network connections or streams.

## Try with Resources
There is a special syntax in java called
*try with resources* which automatically closes objects that are created.

```java
String name = System.console().readLine("Enter filename: ");
try (BufferedReader r = new BufferedReader(new FileReader(name))) {
    System.out.println("First line: " + r.readLine());
} catch (IOException e) {
    System.console().printf("File %s has a problem%n", name);
}
```

This requires that the object in question extends `AutoCloseable`.
After the `try` block `close()` will be called on all declared objects. (in the example `BufferedReader` and `FileReader`)

## Bad Practices

::: danger Throwing instances of Exception.
Define and use proper subclasses (for maintainability)
:::

::: danger Do not catch Exception
Too generic, also catches unexpected ones (RuntimeExceptions).
Catch the most specific exceptions.
:::

## Sources
+ [geeks for geeks exceptions](https://www.geeksforgeeks.org/checked-vs-unchecked-exceptions-in-java/)