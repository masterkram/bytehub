# Variables

+ A way to refer to an unknown value
+ Variable is a name for
storage space of a value
+ Variables are typed → only accept values of certain type
+ Variables must be declared before being used
+ Variables can change their value through an assignment
+ At runtime, variables are stored in memory

```java
int count; // declaration
count = 10; // assignment
```

## Values

### Primitive types

| name | bytes | bits | range |
| ---- | ----- | ---- | ----- |
| byte |   1   |   8  | `-127 to +127` |
| short | 2    | 16   |  `-32 768 to +32 767.`     |
| int  |   4    |  32    | `-2 147 483 648 to +2 147 483 647`    |
| long | 8     | 64 | `-9 223 372 036 854 775 808 to +9 223 372 036 854 775 807` |
| float | 4 | 32 | up to $10^{38}$ |
| double | 8 | 64 | up to $10^{308}$ |
| char | 2 | 16 | a single character |
| boolean | 0  | 1 | true or false |


### Expressions

```java
int duration = 3215; // declaration + assignment
int sec = duration % 60; // modulo
int min = duration / 60; // integer division
min = min - 60 * hr; // re-assignment
boolean isOK = (duration == sec + 60 * (min + 60*hr)); // boolean

String done = "done!"; // String assignment
```

### Booleans

*true* and *false* are values of type boolean

+ Operators
    + v1 `&&` v2 (and)
    + v1 `||` v2 (or)
    + `!`v (not)
+ Conditional evaluation of && and `||` (lazy evaluation)
+ With `&` and `|` both sides are evaluated

## Subroutines

Sequence of instructions could get long or may contain repetition
• Structuring and reusability have motivated subroutines
→ pieces of code that can be ‘called’ in a certain program
• Execution flow moves to subroutine and returns possibly with result
Example
• Method Math.sqrt(x) can be used to calculate the square root of x
• No need to know how Math.sqrt(x) is implemented (black box)
• Others: System.out.print(text), System.out.println(text)

## Strings

String is a pre-defined Java class to represent pieces of text
+ Example: String advice = "Seize the day!";
+ Some functions:
+ int s1.length(): returns length of s1
+ boolean s1.equals(s2): returns true if s1 and s2 are the same String
+ char s1.charAt(n): returns char value in position n (first position 0!)
+ Concatenate Strings: "Hello " + "World" same as "Hello World" 

## Print guide

```java
System.out.print(text) // prints text to standard output
System.out.println(text) // prints text followed by line feed
System.out.printf(format, args) // prints args according to format

System.out.printf("Formatted string: %8d %.3f %c %s", x , y, c, s)
/* prints an int left padded with 8 spaces, a floating point number with 3 
digits after the comma, a character and a string

Ex: Formatted string:       10 3.210 T test
*/
```

## Constants

+ Declared with `final`
+ Purpose: Understandability
and maintainability
+ use caps by convention.

```java
public static final int FAVORITE_NUMBER = 3.14;
```

::: tip
Use `enum` to define a list of constants.

```java
enum ChessPiece { ROOK, KNIGHT, BISHOP }
```
:::

::: theorem Summary
+ Java is a strongly typed language.
    + a variable can only hold a particular *type* of data.
    + the compiler will give a syntax error if this rule is violated.

+ Variables refer to positions in memory.

+ Strings are special java pre-defined objects (String class)

+ Subroutines or methods, provide reusability
:::

## Sources:
+ Eck Chapter1