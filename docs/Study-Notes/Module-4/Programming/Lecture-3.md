# Java REST Implementation.

There are two RESTful web service standards in java:
+ JAX-RS
+ JAX-WS

[Jersey](https://eclipse-ee4j.github.io/jersey/) is an implementation of the JAX-RS standard.

With Jersey a REST web service is deployed in a web server such as Tomcat.
Jersey and other REST implementations have a strong use of java annotations.

## Java Annotations

::: theorem annotations
General purpose annotations (also known as metadata) allow java
code to be *decorated* (*annotated*).

The *annotations* can then be used by libraries and frameworks.
:::

### Syntax to declare annotations

+ Done in it's own file.
```java
/**
Allows a programmer to indicate that a method
needs to be enhanced.
*/
public @interface RequestForEnhancement{
    int id();
    String synopsis();
    String engineer() default"[unassigned]";
    String date() default"[unimplemented]";
}
```

### Syntax to annotate code

```java
public class Boat {

    @RequestForEnhancement(
        id = 286872,
        synopsis = "Implement sailing in rivers",
        engineer = "masterkram",
        date = ”22 May 2021"
    )
    public static void travel sail() {}
```

### Built in Annotations

+ `@Deprecated`: Indicates that this element
should not be used (because it will disappear in the future).
+ `@SuppressWarnings`: Tells the compiler that warnings should not be shown.
+ `@Override`: Indicates that a method overrides an existing implementation.

## JAX-RS and Jersey

### Deployment

```xml
<servlet>
    <servlet-name>javax.ws.rs.core.Application</servlet-name>
</servlet>
<servlet-mapping>
    <servlet-name>javax.ws.rs.core.Application</servlet-name>
    <url-pattern>/api/*</url-pattern>
</servlet-mapping>
```

+ How to match an HTTP request target to
a URI to the proper methods of a proper object.
+ How to interpret the data representation used in this HTTP request in order to extract the necessary information.
+ How to represent the data in the HTTP response in a way that can be understood by the client.

### Root Resource Class

A root resource class relates a *class* to a *root path*. This means that all URIs
that start with `/api/hello/` will be handled by this class:

The requests are handled by methods in this class.

```java
import javax.ws.rs.Path;

@Path("/hello")
public class Hello {

}
```

### Resource Methods

Resource methods relate a a method of a resource
class to an HTTP method. They can be annotated with `@GET`, `@POST`... to match the Http method of the request. You can specify a MIME type with the `@Produces` annotation to match the Accept header.

```java
@GET
@Produces(MediaType.TEXT_PLAIN)
public String sayPlainTextHello() {
    return "Hello Jersey";
}

@GET
@Produces(MediaType.APPLICATION_JSON)
public String sayJsonHello() {
    return "{ \"hello\": \"Hello Jersey\"}";
}
```

### Jersey Operation Overview

@startuml
REST_Client -> App_Server: http request
App_Server --> Jersey_Servlet_Container: http request

Jersey_Servlet_Container -> Instance_of_Root_Resource_Class: http request
Jersey_Servlet_Container <-- Instance_of_Root_Resource_Class: http request
App_Server <-- Jersey_Servlet_Container: http request
REST_Client <-- App_Server: http request
@enduml

### JAXB

::: theorem JAXB
Java Architecture for Xml Binding is a standard that provides a fast and convenient way to write objects into XML *marshalling* and to read XML into Objects *un-marshalling*.
:::

#### Usage:
Annotate the root class for an XML schema with
`@XmlRootElement`.

::: warning Bean
An annotated class must be a java bean.
A Java Bean is a *standard*. With the requirements:
+ All properties are privaspecificte.
+ There is a public no-argument constructor.
+ Implements Serializable.
:::

```java
@XmlRootElement
public class Todo {
    private String summary;
    private String description;

    public String getSummary() { return summary }

    public void setSummary(String summary) { this.summary = summary; }
}
```

We define a resource root class to access the model.

```java
@Path("/todo")
public class TodoResource {
    // This method is called if XML or JSON encoding is requested
    @GET
    @Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Todo getXML() {
        Todo todo = newTodo();
        todo.setSummary("This is my first todo");
        todo.setDescription("This is my first todo");
        return todo;
    }
```

### Object Creation

Two options:
1. Client sends the information to create the object and id is determined by the server 'factory pattern'.

2. Agreement between the client and server beforehand on the id mechanism.
    + objects may be overriden and destroyed.
    + object ids can be generated based on another unique identification mechanism to avoid unintended destruction.

## CRUD restful service example

@startuml
class TodosResource
class TodoResource
class TodoDao << Singleton >>
class Todo

TodosResource - TodoResource
TodosResource -- TodoDao
TodoResource -- TodoDao
TodoDao - Todo
@enduml

+ `Todo`: XML root class, like in the JAXB-based example
+ `TodoDao`: Data access object, which is a *singleton* that contains the list of instances of the Todoclass known to the server
+ `TodosResource`: resource root class for the collection of Todos, used to get a count of the todos, get the whole list of Todos and create a (new) Todo(with POST)
+ `TodoResource`: implements the methods to read, update and delete an individual Todo, by processing the GET, PUT and DELETE HTTP methods for a specific Todo

## Annotations for methods.

+ Use the `@Path` annotation on top of a method to specify
a relative path that will call this method.
+ Use the `@Path` annotation above a method with a variable name in brackets `{myVar}` to access it as a path parameter.

```java
@GET
@Produces("text/xml")
@Path("/{username}")
public String getUser(@PathParam("username") String username)
```

In order to inject (pass) path values, HTTP request headers, parameters... you can use the `@Context` annotation.

```java
@PUT
@Path("{version}")
public void put(@PathParam("version") int version, @Context HttpHeaders headers, byte[] in) {}
```