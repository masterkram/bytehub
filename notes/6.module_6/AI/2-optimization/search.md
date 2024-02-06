# Search

## Path Finding :round_pushpin:
+ `Search space`: set of all reachable states from the initial state.
+ `Search tree or graph`: possible action sequences from the initial state.
+ `Search strategy`: the process of how nodes are traversed.

Evaluation measures:
+ `time complexity`
+ `space complexity`
+ `completeness`: does it find a solution if there is one.
+ `optimality`: does it find the optimal solution.


## Search Strategies :evergreen_tree:

### Breadth first search

+ Layer by layer
+ Data Structure: Fist In First Out (Queue)

```mermaid
graph TD;
a -->|1| b;
a -->|2| c;
b -->|3| d;
b -->|4| e;
e -->|7| h;
c -->|5| f;
c -->|6| g;
```

```java
/**
    * Breadth first search performed in a iterative approach
    * @param adj - adjacency list for given graph
    * @param visited - array marking nodes that were already visited or not
    * @param source - source node to start traversal from
    */
public static void bfs(ArrayList<ArrayList<Integer>> adj, boolean[] visited, int source) {
    Queue<Integer> que = new LinkedList<>(); // data structure used for bfs
    que.add(source); // add starting vertex to queue
    visited[source] = true; // mark starting vertex as being visited

    while (!que.isEmpty()) {
        int v = que.poll();

        for (Integer u : adj.get(v)) {
            if (!visited[u]) {
                que.add(u);
                visited[u] = true;
            }
        }
    }
}
```

### Depth first search

+ Deepest node is expanded.
+ Data Structure: Last in First Out (Stack)

```mermaid
graph TD;
a -->|1| b;
a -->|5| c;
b -->|2| d;
b -->|3| e;
e -->|4| h;
c -->|6| f;
c -->|7| g;
```


```java
/**
    * Depth first search performed in a iterative approach
    * @param adj - adjacency list for given graph
    * @param visited - array marking nodes that were already visited or not      
    * @param source - source node to start traversal from
    */
public static void dfs(ArrayList<ArrayList<Integer>> adj, boolean[] visited, int source) {
    Stack<Integer> stack = new Stack<>();
    stack.push(source); // push starting vertex to stack
    visited[source] = true; // mark starting vertex as visited

    while (!stack.isEmpty()) {
        int v = stack.pop();

        for (Integer u : adj.get(v)) {
            if (!visited[u]) {
                stack.push(u);
                visited[u] = true;
            }
        }
    }
}
```

### Tree Search vs Graph Search

| term | Action space | Execution | closed list | search strategy |
| ---- | ------------ | --------- | ----------- | --------------- |
| Tree Search | Graph or Tree | Search tree | no | BFS or DFS |
| Graph Search | Graph or Tree | Search tree | yes | BFS or DFS |

+ The difference between tree search and graph search is the use of a *closed list*

when the `action space` is tree-shaped, no loops occur so we can use tree search. However
if the graph is not a tree (loops in some way) we need to check if nodes were already visited
by means of a `closed list` or `explored set`.

### Uninformed (blind) Search Strategies

class of search strategies that have no information about states beyond the one provided in the problem definition, (starting point and goal).
can only generate successors and distinguish a goal state from a non-goal state.

Examples that belong to this class:
+ BFS
+ DFS 
+ Depth limited search
+ Iterative deepening search
+ Uniform cost search

## A* Search

Searches for an optimal path in a 'efficient' manner.

### Informed Search Strategies

Uses knowledge beyond the problem spec, to select the nodes that are the most promising.
`heuristic` = selection function (for nodes).

more efficient than uninformed search strategies.

Examples that belong to this class:
+ Greedy best-first search
+ A* Search
+ Recursive best-first search
+ Simplified memory bounded A*

Best first search approach:
+ Instance of tree/graph algorithms
+ The nodes are selected based on an `evaluation function` $f(n)$
+ The node with the lowest cost is expanded first.
+ Most *best-first search* algorithms use a `heuristic function` $h(n)$
    + h(n): **estimated** cost of the cheapest path from the state at node n to a goal state.
    + heuristic function can be based on the context / knowledge of the problem domain.

:::info A* Search
Evaluates the node by combining the cost to reach the node n from the start state, denoted g(n), and the estimated cost to get from the node n to the goal denoted h(n),
+ `f(n) = g(n) + h(n)`
+ f(n): estimated cost of the cheapest solution through n
+ choose the next node that has the smallest f(n)

```mermaid
graph LR;
A(Start Node) -->|"g(n)"| B(n) -.->|"h(n)"|G(Goal Node);
A -->|"f(n)"| G
```
:::


## Sources:
+ [alemoraru's algorithms pages :raised_hands:](https://alemoraru.github.io/algorithms)
