# XAI for Deep Learning

Input output mapping is beyond human perception.

- many layers of multiplication.
- millions of weights
- multiple non-linear transformations

- The main idea
    
    The methods visualize features and concepts learned by a neural network, explain individual predictions and simplify neural networks
    

Most model agnostic methods such as local models or partial dependence plots are applicable.

Why special XAI methods are needed for deep learning:

- Neural networks learn features and concepts in their hidden layers and we need special tools to uncover them.
- The gradient can be utilized to implement interpretation methods that are more computationally efficient than model-agnostic methods that look at the model “from the outside”

*For example for computer vision:*

1. the first convolutional layers learn features such as edges and simple textures.
2. Later convolutional layers learn features such as more complex textures and patterns.
3. The last convolutional layers learn features such as objects or parts of objects.
4. the fuly connected layers learn learn to connect the activations from the high-level features to the individual classes to be predicted.

## Adverserial Features

- These are the features that distort learning, typically reducing the ability to generalize the black box.
- We see that for a human there is no noticable difference, but to a machine learning model, the two images have difference of night and day.
- By producing a dataset with adverserial features added to different degrees, the model is more robust to live data with adverserial features, making the model’s model more consistent and interpretable.

## Augmentation

Varying the input images through a series of transformations.

- rotations
- translations

etc…

- widely used
- should not be done in random fashion
- enlarge the dataset and learning is more robust

## Occlusions

These are structured alterations added to an element to block a specific area, i.e change the pixel values to 0.

By adding occlusions in the specific parts of the images, and seeing the difference in the output, we can explain how the model works!

![Screenshot 2022-10-20 at 21.28.53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/204edc77-ea79-4e90-a7f9-296d118030f2/Screenshot_2022-10-20_at_21.28.53.png)

## Neural Networks

<aside>
🗂️ The universality theorem assures us that shallow neural networks are universal approximators of any continous function.
⇒ the problem (NP-hard) is to find the exact values of weights to obtain such an approximation.

</aside>

Simple NN: Input layer, one hidden layer and output layer.

## Pixel Attribution (Saliency Maps)

Pixel attribution methods highlight the pixels that were relevant for a certain image classification by a neural network

- occlusion or perturbation based
- gradient based

Indicate which parts of an image capture the attention of the person who looks at them; in our case, the observer is replaced that is examining them.

$$
Sensibility = \frac{\Delta Output}{\Delta Input}
$$

## Class Activation Map

Class activation maps helps us understand which regions of an image affect the output of a convolutional neural network.

Based on a heatmap that highlights the pixels of the image that push a model to associate a certain class, a certain lablel, to the image.

CAM procedure:

- remove the last fully connected layers
- apply a global average pooling to the last convolutional layer
- train the weights from the reduced layer to the classes

- the dimensions of the last convolution layer are (width and height) are same as the original image.
- The linear combination allows us to have the final visualisation
- Drawback
    - change the structure of the network and retraining it
    - it can only be used by applying it only starting from a convolutional layer and therefore is not applicable in all architectures.
    

## Gradient Class Activation Map

An evolution of the CAM is teh Grad-CAM

Grad-CAM does not retrain the network

Grad-CAM’s explanations can suffer from gradient problems

## DeepShap

- decomposes the prediction of a single pixel neural network
- done by carrying out the backpropagation of the contribution of all neurons in the network for each input feature
- DeepLift compares the activation of each neuron with its reference activation and evalutates the importance of each contribution, starting from this difference
- This is similar to shapely values where the input features are the players in the coalitions, the activation of each neuron is their payment and we are trying to find how to split the contributionb to the output of the model between the input features.