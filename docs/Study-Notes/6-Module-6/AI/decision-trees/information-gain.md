# Information Gain

It is based on the entropy of a dataset

![informationGainFormula](../../img/informationGainFormula.png)

The process follows:
1. We choose the attribute
2. For each value of the attribute we calculate the entropy and multiply by the propability of apperaring this value in the dataset.
3. We repeat the step 2 for all the values of the attribute.
4. When we did the computation for all the values, we sum it up and substract it from the entropy of the whole dataset (which is measured by taking the entropy of the Class/Label)
5. We should select the attribute that maximizes the information gain

Example provided below:

![informationGainExample](../../img/informationGainExample.png)