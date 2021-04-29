# REST

::: theorem REST
(**RE**presentational **S**tate **T**ransfer) is an architectural style of invoking services over the internet.
:::

::: tip Architectural Style
Set of design rules that identify the kinds
of components and connectors that may be used to compose a system.
:::

Defined in the PhD thesis of Roy Fielding.

## Rest Principles

### 1. Stateless client-server architecture.
+ request messages are self-contained(self-descriptive)
+ All necessary information for invoking a service is in the request message.
+ The server does not need to store information on the interaction in a session, since all information needed to perform the request is in the communication.

### 2. Resources Identified with URIs
+ A resource, can be a set of entities, a document an image etc.
+ In REST a resource can be identified by a URI.
+ Example: `/users` would be the resource, set of all user entities.

URI syntax:
`scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]`

### 3. State Representation
+ The client and server have a mutual understanding of the meaning of data since there is no formal way to describe web service interfaces.
+ Web service clients and servers (providers) choose a (state) representation to exchange application content
+ Client and provider must have a mutual understanding of the meaning of data in order to interoperate(syntactical interoperability)
+ The most popular state representations are XML and JSON, which are indicated with MIME types application/xml(text/xml) and application/json, respectively


### 4. Small set of actions
+ Use of a smallglobally defined set of remote methods that describe the actions to be performed on the resource
+ Create-Read-Update-Delete (CRUD) actions
+ When implemented on top of HTTP, these actions are mapped on HTTP methods

## REST URI Design Guidelines
Use Names:
`/profiles/{profileName}`

Expose relationships in the URI:
`/messages/{messageId}/comments/{commentId}`

Different URIs for *instances* and *collections*:
`/messages/2` Retrieve message with id: 2
`/messages` Retrieve all messages

Filtering options:
Use query parameters to specify: offsets, limits, ordering and filter.
`/messages?offset=30&limit=10`
`/messages?year=2004`

## Mapping of HTTP Methods and CRUD actions
| REST action | HTTP method |
| ----------- | ----------- |
| Create      | POST        |
| Read        | GET         |
| Update      | PUT         |
| Delete      | DELETE      |

## State Representation
Different representations can be used for the information exchanged with a REST service.
The most popular representations are **XML** and **JSON**. (JavaScript Object Notation).

::: tip XML
Markup language used to represent data structures.
Intuitive but verbose.

Snippet:
```xml
<message>
    <id>10</id>
    <contents>Hello world</contents>
    <created>2014-06-01T18:06:36.902</created>
    <author>koushik</author>
</message>
```
:::

::: tip JSON
Simplified format to represent data structures
Quite popular nowadays less verbose fits well with JavaScript.

Snippet:
```json
{
    "id": "10",
    "contents":"Helloworld",
    "created":"2014-06-01T18:06:36.902",
    "author": "koushik"
}
```
:::

## RESTFUL API

::: theorem REST API
A REST API Is an an application programming interface that conforms to the constraints of the REST architectural style.

An API is a description of the methods and formats accepted \/ provided by a service.

An API is necessary to allow the clients to
create messages that can be understood and
processed by the server, and the servers to
create messages that can be understood by the
client
:::

Useful tool for documenting and testing APIs:
+ [swagger](https://swagger.io/)
+ [postman](https://www.postman.com/)
+ `curl` command line tool

