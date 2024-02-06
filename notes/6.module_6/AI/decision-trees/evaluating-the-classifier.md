# Performance

How to assess this?
+ Split data in train and test set
+ Build model on train set and evaluate the performance on test set

_Accuracy_ = Correctly Classified Examples/Total Examples  

_Precision_ = TP/TP+FP  

_Recall_ = TP/TP+FN  



|  --    | Cancer (Actual) | Not Cancer (Actual) | 
 |---- | ------------ | --------- | 
 | Cancer (Predicted )| 50 | 50 |
 | Not Cancer (Predicted)| 100 | 800 |

----

So in our example:

Accuracy = 50 + 800 / 50 + 50 + 100 + 800  

Precision = 50/ 50 + 50  

Recall = 50/ 50 + 100