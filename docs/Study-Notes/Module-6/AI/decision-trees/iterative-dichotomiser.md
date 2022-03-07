# Iterative Dichotomiser

The algorithm goes as follows:
1. Find the attribute/feature that provides the highest information gain
2. Create a node using the feature (provides the highest information gain)
3. Sort out the examples to the corresponding split
4. If all data points belong to the same class, create a leaf node (represent the outcome)
5. If all data point have differenct classes, recurse.  


![iterativeDichotomiser](../../img/iterativeDichotomiser.png)