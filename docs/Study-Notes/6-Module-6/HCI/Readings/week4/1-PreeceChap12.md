# Design, Prototyping and Construction

+ The product emerges iteratively through repeated design-evaluation-redesign cycles.
+ prototypes facilitate the process.

There are two main parts of design:
+ conceptual design.
+ concrete desgin.

## Prototyping

+ Users can't tell you what they want, but when using a prototype that can say what they dislike.

:::theorem Prototype
A *prototype* is a manifestation of a design that allows stakeholders to interact with it and to explore it's suitability.

+ It is limited: usually focused on one product characteristic while de-emphasizing other characteristics.
+ A prototype does not have to fit a form: can be paper-based, or wooden block to complex software.
:::

:::tip Why Prototype ?
+ Useful to discuss ideas with stakeholders.
    + Allows more effective communication.
+ The activity of building prototypes encourages reflection about the design.
+ Support in choosing between design alternatives.
    + can help test technical feasibility.
    + can clarify vague requirements.
:::

Prototypes can be distinguished into:
+ Product Prototypes
+ Service Prototypes
    + Interactions with people play a part in this type of prototype.

### Low-Fi Prototyping

:::theorem Lo-Fi Prototype
A *low-fidelity prototype* does not look much like the final product or provide the same functionality.
Low fidelity prototypes are useful because they tend to be **simple, cheap and quick** to produce.
They are also flexible (due to low cost) and encourage exploration and modification.
:::

#### Storyboarding

*Storyboarding* is an example of low-fi prototyping.
it consists of a series of sketches or scenes showing how a user can perform a task using an interactive device.

#### Sketching

low-fi prototyping often relies on hand-drawn sketches.
These sketches can be done as a part of storyboarding or drawing by hand the interface that is being designed.

#### Index Cards
Using index cards (small cardboard pieces) is another technique to prototype interaction.
Each card represents one element of the interaction. The card can be for example: a screen, or just an icon, menu or dialog exchange. In user evaluations, the user can step through the cards  pretending to perform the task using the cards.

#### Wizard of Oz
+ For software based prototypes

A user interacts with the software prototype, and the response from the software is simulated by a human operator.

For example:
1. tester enters input `"Is the earth flat?"`
2. hidden human operator manually shows on screen `"NO"`

this technique is used for AI based products.

### Hi-Fi Prototypes

:::theorem Hi-Fi Prototypes
A *hi-fi prototype* looks more like the final product and usually involves more functionality than a low-fi prototype. There is a continuum between low to high fi. It is common for prototypes to evolve through various stages of fidelity.
:::

Hi-fi prototypes can be developed for software in particular following *Opportunistic System Development* which aims to use as much existing open-source software or development kits, to reduce time and costs.

+ a prototype should be built with key-issues in mind. Because the questions that any prototype can answer are limited.

two common properties that are traded off against each other are:
+ functionality depth:
    + aka: vertical prototyping
    + lots of detail for few functions
+ functionality breadth:
    + aka: horizontal prototyping
    + lots of functions without much detail

There are two techniques to go from prototype to product:
+ evolutionary prototyping:
    + prototype becomes the product itself
    + advantage: speed to market
    + disadvantage: technical debt must be solved. (unless good engineering)
+ throwaway prototyping
    + prototype is thrown away.
    + learnings are used to make the product from scratch.
    + advantage: may lead to good engineering.
    + disadvantage: slower and expensive.


## Construction

Building Prototypes:
+ use resources such as APIs, SDKs to support development.