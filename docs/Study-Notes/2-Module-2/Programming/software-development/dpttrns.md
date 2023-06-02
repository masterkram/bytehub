# Design Patterns

Design patterns arise as a way to
deal with a often encountered problem.
So a proven solution to the problem is created,
this solution can now be reused during the development
of software that encounters the same problem.

## Observer Pattern
You can use the observer design pattern, when in a system, multiple entities are interested in any possible update to some particular second entity object.

Classes:
+ `Subject`: class where something happens (i.e., a change)
+ `Observer`: class that should react to the change.

The `Subject` does not know its `Observers`

Also known as *publish/subscribe* or *notification service*.

@startuml
abstract class Subject {
    + addObserver(Observer)
    + deleteObserver(Observer)
    + notify()
}

abstract class Observer {
    + update()
}

Subject -- "0..*" Observer

class ConcreteSubject extends Subject
class ConcreteObserver extends Observer

note right of Subject::notify
update() is called for observers.
end note
@enduml

In java `Listeners` are available.

### Observer Pattern Example
With listeners.

@startuml
class NewsAgency {
    - news: String
    + addPropertyChangeListener()
    + removePropertyChangeListener()
    + setNews()
}

class PropertyChangeSupport {
    + getPropertyChangeListeners()
    + addPropertyChangeListeners()
    + firePropertyChange()
}

NewsAgency "1" <-- PropertyChangeSupport

interface PropertyChangeListener {
    + propertyChange(PropertyChangeEvent e)
}

PropertyChangeSupport "0..n" <-- PropertyChangeListener

class NewsChannel implements PropertyChangeListener
@enduml

## Model - View - Controller (MVC) Pattern
`MVC` is a popular way of organizing your code.

The idea behind `MVC` is to separate your code into sections, with different purposes. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.

`MVC` is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner.

::: theorem Model
Model objects are the *domain* of the application.
model objects are the main components of a system.
:::

::: theorem View
View classes are the classes that interact directly
with the user. This is the part of your code that makes
your app look nice It can be for example a gui (graphical user interface) or a cli (command line interface)

view objects can use the `Observer` pattern to
listen to changes to the model.
:::

::: theorem Controller
Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.
:::



## Sources
+ [codecademy](codecademy.com/articles/mvc)