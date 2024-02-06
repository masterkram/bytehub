# Stream IO

Streams are used to exchange data
between end user, file systems, networks
other programs etc.
+ data can be binary: `Stream` classes.
+ data can be characters: `Reader/Writer` classes

Extra functionality can be wrapped around stream classes for example
+ Buffer, data handing, etc.

## Input Stream

### Hierarchy

```plantuml
abstract class InputStream {
    + read(): int
    + close()
}

class FileInputStream extends InputStream
class PipedInputStream extends InputStream
class FilterInputStream extends InputStream
class BufferedInputStream extends FilterInputStream

interface DataInput {
    readChar()
    readInt()
}
class DataInputStream extends FilterInputStream implements DataInput

FilterInputStream --> InputStream
```

```java
abstract class InputStream implements AutoCloseable {
    public abstract int read() throws IOException {}

    public void close() throws IOException {}
}
```

### Example

```java
String text = "";
boolean b = true;
double salary = 0.0;
DataInputStream datIn = null;

try {
    InputStream in = new FileInputStream("data.dat");
    InputStream bufIn = new BufferedInputStream(in);
    text = datIn.readUTF();
    b = datIn.readBoolean();
    salary = datIn.readDouble();
} catch(IOException e) {
    e.printStackTrace();
} finally {
    try {
        datIn.close();
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

Compact version:
```java
String text = "";
boolean b = true;
double salary = 0.0;

try (DataInputStream datIn = new DataInputStream(new BufferedInputStream(new FileInputStream ("data.dat")))) {
    text = datIn.readUTF();
    b = datIn.readBoolean();
    salary = datIn.readDouble();
} catch (IOException e) {
    e.printStackTrace();
}
```

## Reader

### Hierarchy

```plantuml
abstract class Reader {
    + read(): int
    + close()
}

class FileReader extends Reader
class StringReader extends Reader
class PipedReader extends Reader
class BufferedReader extends Reader
BufferedReader --> Reader
class InputStreamReader extends Reader
class InputStream
InputStreamReader --> InputStream
```

### Example

```java
abstract class Reader implements AutoCloseable {
// Reads a single character, as an integer
// in the range 0 to 65535,
// or -1 if the end of the stream has been reached
public int read() throws IOException { ... }
...
// Closes the stream
public abstract void close() throws IOException { ... }
}
```

### Example

```java
String text = "";
boolean b = true;
double salary = 0.0;

try (BufferedReader bufIn = new BufferedReader(new FileReader("data.txt"))) {
    text = bufIn.readLine();
    b = Boolean.parseBoolean(bufIn.readLine());
    salary = Double.parseDouble(bufIn.readLine());
} catch (IOException e) {
    e.preintStackTrace();
}
```

## Output Stream

### Hirearchy

```plantuml
abstract class OutputStream
class FileOutputStream extends OutputStream
class PipedOutputStream extends OutputStream
class FilterOutputStream extends OutputStream
class BufferedOutputStream extends FilterOutputStream
class PrintStream extends FilterOutputStream {
    + print()
    + println()
}
interface DataOutput
class DataOutputStream extends FilterOutputStream implements DataOutput
```

### Example

```java
DataOutputStream dos;

try {
    dos = new DataOutputStream(new BufferedOutputStream(new FileOutputStream("data.dat")));
} catch (FileNotFoundException e) {
    System.out.println("data.dat file not created")
    return;
}

try {
    dos.writeUTF("Hello world");
    dos.writeBoolean(true);
    dos.writeDouble(3.21);
    dos.close();
} catch (IOException e) {
    System.out.println("Error writing to data.dat");
    return;
}
```

## Writer

### Hierarchy

```plantuml
abstract class Writer
class FileWriter extends Writer
class StringWriter extends Writer
class PipedWriter extends Writer
class OutputStreamWriter extends Writer
class PrintWriter extends Writer {
    + print()
    + println()
}
class BufferedWriter extends Writer
BufferedWriter -- Writer
class OutputStream
OutputStream -- OutputStreamWriter
```

### Example

```java
PrintWriter pw;
BufferedReader br;

try {
    pw = new PrintWriter (
        new BufferedWriter (
            new FileWriter("data.txt")));
} catch (IOException e) {
    System.out.println("data.txt not created");
}

pw.println("Hello World");
pw.println(false);
pw.println(42);
pw.close();
```

## Object IO
reading and writing entire objects.

Objects should be made **serializable**
by implementing the interface Serializable.

Java can read and write all values of object's
fields with methods:

`Object readObject()`
`void writeObject(Object)`

### Example

```java
public class Student implements java.io.Serializable {
    private String name;
    private String number;

    public static main(String[] args) {
        Student s1 = null;

        try (ObjectOutputStream oos = new ObjectOutputStream("student.obj")) {
            oos.writeObject(new student("John Doe", "123432"));
        } catch (IOException) {
            e.printStackTrace();
        }

        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("student.obj"))) {
            s1 = (Student) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

## Text Input / Output

Standard Output:
+ Static constant `System.out` of type `PrintStream`.
+ Methods: print, println, printf

Standard Input
+ Static constant `System.in` of type `InputStream`
+ Input should not only be read, but also interpreted.
 

### Scanner Example

```java
Scanner input = new Scanner(System.in);
while (input.hasNextLine()) {
    String line = input.nextLine();
    doSomething(line);
}
input.close();
```