# Networking and Multithreading

## Blocking and IO
A program that reads data from an input stream, waits (blocks) until the data becomes available, or returns immediately if data was sent before. for example
on a Scanner's `next()` call your program will start and
wait until you have entered a string into your console.

Programs can also block when performing output operations. This happens when there is a bottleneck, i.e., the program is trying to send data faster than it can be transmitted.

## Blocking and Multithreading
If a program blocks it can only be unblocked when the event it is waiting for happens.

If the program needs to be reactive, for example, to the user interface, we need multiple concurrent threads so that some threads can be blocked while others keep on working.

::: tip Best Practice
For servers that handle multiple clients, create a thread
for each connection.
:::

## Thread Pool
Instead of creating threads on demand,
you can create a pool of threads beforehand and 
allocate an available thread to a connection when necessary.

This has the advantages of:
+ avoiding the thread creation overhead.
+ limit the number of threads that can be created. (therefore avoiding depleting resources)

