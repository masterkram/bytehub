# Basic Networking

## Uniform Resource Identifiers and Locators

::: info URI
*Uniform Resource Identifier*

A URI is an identifier of a specific resource.
Like a page, or book, or a document.

It **identifies** a resource **unambiguously**

example: `ISBN 0-486-27557-4`
:::

::: info URN
*Uniform Resource Name*

URI defined to *name* a resource.
a URN is also a URI.

example: `urn:isbn:0-486-27557-4`
:::

::: info URL
*Uniform Resource Locator*

Reference to a web resource that specifies its location on a computer network and a mechanism for retrieving this resource.

A URL is also a URI.
A URL is special type of identifier that also tells you how to access it, such as HTTPs, FTP

example: `https://www.google.com`
:::

### URI/URL Syntax

`scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]`

+ scheme: defines a kind of uri (http, https, ...)
+ host: host name (e.g bytehub.nl) or IPv4/IPv6 address (e.g., 192.168.0.1)
+ port: 16-bit number that points to a communication endpoint (e.g., 8080)
+ path: separated relative path on host (e.g, directory/file)
+ query: usually contains user input to display a resource in a custom way.
+ fragment: a subsection of a document


### Java URI/URL

```plantuml
class java.net.URI {
    + URI(uri: String)
    + String getScheme()
    + String getHost()
    + URL toURL()
}

class java.net.URL {
    + URL(uri: String)
    + String getScheme()
    + String getHost()
    + String getFile()
    + InpuStream openStream()
    + URI toURI()
}
```

### Example: Reading a URL

```java
public class WebCat {
    public static void main(String[] args) {
        for (String arg : args) {
            try (BufferedReader br = new BufferedReader(new InputStreamReader(new URL(arg).openStream()))) {
                String line;
                while ((line = br.readLine()) != null) {
                    System.out.println(line);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

review [module1 networks](/Study-Notes/Module-1/Introduction-To-CS/OS-&-CN/CN.html) for information on networks.


## Java IP addressing

+ `InetAddress` encapsulates an IP address
    + Supports *name lookup* (convert host name to IP address)
    + and *reverse lookup* (convert address to host-name)
    + has a factory method `getByName` which supports domain or ip.

## Sockets
A socket is a common abstraction of the transport layer in either TCP or UDP.

A socket provides communication between a Client and a Server, a Server can create a socket at a port, if this port is available on the internet a client can connect with the address of the server followed by the port number.

+ Server *listens* with a socket on a port for connections.
+ Client tries to *connect* with the socket.

+ Java classes
    + `Socket`
    + `ServerSocket` (TCP)
    + `DatagramSocket` (UDP)


## ServerSocket
Listens to a fixed port for incoming connections.
    + creates a connection on a port for each incoming request.
    + provides a Socket object for each created connection.

the constructor is `ServerSocket(int port)`. If 0 is passed as port then a free port is chosen.

`Socket accept()`
+ blocks, waiting for a client's attempt to establish a connecton.
+ returns a `Socket` if the attempt is successful.

`void close()`
+ like for streams, deallocates resources.
+ Threads waiting on `accept()` calls throw a `SocketException`.

`InetAddress getInetAddress()`
+ Returns the local IP-address of this `ServerSocket`.

`int getLocalPort()`
+ returns the port on which this `ServerSocket` listens.

## Socket
+ provides access to `TCP/IP` streams
    + BI-directional communication between sender and receiver.
+ `Socket(String remoteHost, int port)`
    + Constructor, starts a connection with the remote host at a port.
+ `InputStream getInputStream()`
    + Allows data from the other party to be received
+ `OutputStream getOutputStream()`
    + Allows data to be sent to the other party

### Date Server Example
don't get exited this is not a romantic date...
jokes aside this is a simple server that sends the current date to clients that connect.
the server listens on port 32007.
Important: This server deals with one client at a time.
other clients have to wait until the `sendDate` method closes the client before another client can be accepted.

```java
public class DateServer {
    public static final int LISTENING_PORT = 32007;

    public static void main(String[] args) {
        ServerSocket listener;
        Socket connections;
        try {
            listener = new ServerSocket(LISTENING_PORT);
            System.out.printf("Server listening on port: %d", LISTENING_PORT);
            while (true) {
                connection = listener.accept();
                sendDate(connection)
            }
        } catch (Exception e) {
            System.out.println("Server has shutdown");
            return;
        }
    }

    private void sendDate(Socket client) {
        try {
            System.out.printf("Connection from %s", client.getInetAddress().toString());
            Date now = new Date();
            PrintWriter outgoing = new PrintWriter(client.getOutputStream());
            outgoing.println(now.toString());
            outgoing.flush();
            client.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### Date Client Example
```java
public class DateClient {
    public class final int LISTENING_PORT = 32007

    public static void main(String[] args) {
        String hostName;
        Socket connection;
        BufferedReader incoming;

        if (args.length > 0) {
            hostname = args[0];
        } else {
            hostname = localhost;
        }

        try {
            connection = new Socket(hostName, LISTENING_PORT);
            incoming = new BufferedReader(new InputStreamReader(connection.getInputStream());
            String lineFromServer = incoming.readLine();
            if (lineFromServer == null) {
                throw new IOException("no data!");
            }
            System.out.println(lineFromServer);
            incoming.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```