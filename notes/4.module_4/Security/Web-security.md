# Web Security 

## OWASP top 10 security risks

[official page](https://owasp.org/www-project-top-ten/)

1. Injection
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities
5. Broken Access Control
6. Security Misconfiguration
7. Cross-Site Scripting
8. Insecure Deserialization
9. Using Components With Known Vulnerabilities
10. Insufficient Logging and Monitoring.

## Cross Site Scripting (XSS)

::: info Cross Site Scripting
Cross site scripting is a form of code injection.
The attacker tricks the server into including a malicious script
with it's response to a user.
:::

### Javascript details.
Javascript code can:
+ Alter the DOM.
+ Track Events
+ Issue HTTP requests and read responses.
+ Maintain persistent connections.
+ Read and set cookies.

Browsers implement *same-origin-policy* (SOP),
only scripts that are received from the web page's origin have access to the page's elements.

### Example
```php
// an image is shown based on the parameter img_id
echo "<img src='" . $_GET['img_id'] ."'>";
// if a user enters www.exmaple.com/view.php?img_id=1.jpg
// the string gets evaluated to:
"<img src='1.jpg'>"

// if a user enters www.example.com/view.php?img_id='><script>alert('xss');</script>
// the string gets evaluated to:
"<img src=''><script>alert('xss');</script>'>"
```

### Exploitation
Using XSS an attacker can:
+ Fully hijack a session.
    + by stealing the victim's cookie session token.
+ Manipulate the current session.
    + Use js to send requests in the victim's session context.
+ Launch Browser exploit.
    + i.e gain code execution on the victim's machine.
    + if the victim has extra features enabled for the website this is possible.

### Types of Cross Site Scripting
+ Injection via Server side
    + **Reflected** (non-persistent): when user supplied data
    is reflected back at them but not stored persistently in the app database.
    + **Stored** (persistent): when user supplied data is stored persistently
    in the app database and outputted to some user.
+ Injection via Client side
    + DOM based: Injection is in the client side presentation logic, never touches server.

#### Reflected XSS
::: info Reflected XSS
A reflected Cross Site Scripting attack occurs when user-supplied content
(for example parameters in HTTP requests) is reflected back at the user.
:::

```plantuml
actor attacker as Attacker
actor victim as Victim

Attacker -> Victim: gives victim the url containing malicious script.

Victim -> Server: performs the request containing script.
Victim <-- Server: the script is reflected
Victim --> Attacker: the session is hijacked by the attacker.
```

**Exploitation Complication**
Attacker needs to trick victim into visiting crafted URL.

**Attacker Solutions**
+ Use encoding (e.g URL-encoding) to obfuscate.
+ embed the url in other html content.

#### Stored XSS
::: info Stored XSS
A Stored XSS attack occurs when user supplied content is stored persistently,
and outputted at a later stage.
:::

```plantuml
actor attacker as Attacker
actor victim as Victim
participant server as Server
database database as Database

Attacker -> Server: inputs script into a request that is sent to the server.
Server --> Database: Stores script.
Victim --> Server: Makes request.
Database --> Server: Reads script.
Victim <-- Server: the script is sent to the victim.
Victim --> Attacker: gains access.
```

::: warning XSS
+ Developer side problems
    + Web apps trust user input too much.
    + XSS is not considered serious.
    + There is no easy fix.
+ User side problems
    + Users only look at domain, not full url.
    + Users Trust servers too much.
+ General problems
    + javascript has become very powerful.
    + dynamic content is now ubiquitous.
:::

::: tip Preventing XSS
+ **Never trust user input, always sanitize**
+ **There is no quick fix for XSS, only careful programming**

+ User input should be stripped to bare minimum.
    + whitelist allowed characters (phone number only needs digits and few other characters)
+ Filter both input and output of data touched by the user.
+ Be aware of context sensitiveness of data.

+ Use libraries of standard frameworks.
+ Provide templating engines with some built-in filtering.
```php
if ($this->security->xss_clean($file, TRUE) === FALSE)
{ 
    // file failed the xss test.
}
```
+ Provide explicit XSS filtering and general sanitization functions.
```php
$filename = $this->security->sanitize_filename($this->input->post('filename'));
```
:::

## Cross Site Request Forgery
::: info Cross Site Request Forgery
Is an exploit where unauthorized commands are submitted from a user that the web app trusts.
:::

### Example
An attacker crafts a link that executes an action, assumes that the victim is logged in, then sends link to execute the action.

```html
<!-- Malicious Link -->
<a href="http://www.bank.com/transfer.php?amount=1000&receiver=attacker">Click Here For Free Stuff!</a>
```

```plantuml
actor attacker as Attacker
actor victim as Victim

Attacker -> Victim: malicious link.
Victim --> Service: Makes malicious request as Victim.
note right: This can be a bank, email etc..
```

## SQL Injection

::: info SQL Injection
SQL injection occurs when user input is improperly sanitized and
ends up interpreted as code.
:::

Unauthorized SQL execution can compromise:
+ Authentication: login bypassing
+ Confidentiality: database leaks
+ Integrity: modification of database records

### Login Bypass


#### Example 1
```java
String sqlQuery = "SELECT user, pass FROM users WHERE (user = '" + admin + "') AND (pass ='" + password + "')";
```
This statement selects the user that matches the password and user.
When there is no match no records are returned.

If we provide as input:
+ `username = ' OR '0' = '0`
+ `password = ' OR '0' = '0`

We get the query:
`"SELECT user, pass FROM users WHERE (user = '' OR '0' = '0') AND (pass = '' OR '0' = '0')`;

This selects all users, because condition is always true.
Applications tend to take the first row and create a session for it.

#### Example 2
```java
String sqlQuery = "SELECT user, pass FROM users WHERE user = '" + username + "' AND pass = '" HASH(password) + "'";
```

If we provide as input:
+ `username = ' OR 0 = 0 -- -`
+ `password = anything`

we get the query:
```sql
SELECT user, pass FROM users WHERE user = '' OR 0=0 -- -' AND pass = 'anything'
```

### DB Dump

#### Example

```java
String query = "SELECT * FROM categories WHERE cat = " + param + ";";
```

1. an invalid parameter is provided `cat=1'` creating an error message which **reveals information that helps the attacker.**
2. the number of columns selected can be found
by inserting an `ORDER BY {number}` where the number references the index of the column, work your way up until you have an error.

the http request would look like:
`/api/products/?cat=-1 OR 1=1 ORDER BY 12`

the created query would look like this
`SELECT * FROM categories WHERE cat=-1 OR 1=1 ORDER BY 12`

3. the usage of the query results on the page, can be determined by crafting a query which makes the original query return the empty set in `UNION` with the set of our choice (must match the amount of columns).

`SELECT * FROM categories WHERE cat =-1 UNION SELECT 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12`

the actual numbers will be displayed on the page.

Now an attacker can retrieve arbitrary database content.
+ db layout. using `information_schema`
+ credentials, customer data, medical records, credit card.
+ output various columns in one field with `group_concat()` in mysql, `array_agg()` in postgres.

::: tip Preventing SQL Injection
two mechanisms for prevention (in order of preference)
1. Prepared statements.
2. Input sanitization.
:::

### Input Sanitization.
User input can be *sanitized* before being processed:
+ Blacklisting Filter
    + disallow suspicious input like `-- - SELECT UNION`
    + tends to be easy to bypass.
+ Whitelisting Filter (preferred)
    + for example only alphanumeric + limited symbols.
    + can be too strict which disallows input.
    + can be too lax and be bypassed.

#### Example
```php
// removes certain SQL keywords from input.
$input = replace($input, ["SELECT", "UNION"], "");
```

### Prepared Statements
Prepared statements allow programmers to specify query semantics.
+ distinguish code from data through type-based parameterization.
+ attacker can now no longer change the intent of a query.

```java
String query = "SELECT * FROM users WHERE user = ? AND pass =?";

java.sql.PreparedStatement stmt = connection.prepareStatent(query);
stmt.setString(1, username);
stmt.setInt(2, password);
stmt.executeQuery();
```

::: warning no-sql injection
When using NoSQL databases such as MongoDB, Redis, Neo4j etc..
Injection attacks are still possible.
:::

::: tip summary SQLi
+ cause: mixing code and data
+ exploit: manipulating program data flow.
+ impact: compromised authentication, confidentiality, integrity.
+ prevention: prepared statements.
:::

## Command Injection
Many languages have functions to execute shell commands. which allows for interaction with the host system via shell.

user input can be passed into these system calls.

special shell characters:
```sh
; # command separator.
| # pipe
& # redirection
\ # escape
```
can be used to break the semantic context of command line.
Gives the attacker arbitrary command execution privileges.

::: tip prevention
+ avoid (user input) source-sink relationship.
+ apply sanitization.
+ 
:::

## Authentication and Session Management