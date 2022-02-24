<div style="text-align: left;">
    <p>
        Ok  it's been a while, I know. Maybe I'll write an article about this
        too. But continuing this process of discovery and documentation,
        today's topic is something that maybe not every developer pays attention
        when writing the code. Maybe because we have so many thing to worry
        about or just because it doesn't have enough emphasis as other subjects.
    </p>
    <p>
        Anyways, this last few months I've been focusing on exploring more about
        Object Oriented Programming. Found this topic super relevant
        for the simple fact that maybe some principles from the paradigm, are violated.
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's topic
        is about what kind of relationship your objects should have or being more direct
        <b>Should you use inheritance, composition or aggregation? And what is association</b>
    </p>
    <h3>Before we continue, a quick review of OOP</h3>
    <p>
        As always, I'd like to start reviewing the paradigm. An Object Oriented Program
        is very simple, the execution is a relationship of relating objects. Each object
        represents a entity on our program. This entity posesses behaviors and a state.
    </p>
    <img src="#" alt="OBJECT ENTITY">
    <p>
        These entities are created from templates of code called <b>classes</b>.
        In other words, a class describes what behaviors (methods/functions/procedures)
        and what set of variables will represent the object's state. Every entity
        should have only one purpose. Meaning that every entity acts like if it was
        a completely isolated program. A program generally requires some kind of data
        to fully accomplish it's job. Object entities are not different. For instance,
        maybe you have a Video Object. A video contains duration time, format, maybe a name
        and a specific var for marking the current frame of this video.
        Those variables are part of the object's state.
    </p>
    <img src="#" alt="VIDEO OBJECT">
    <p>
        Objects communicate with each other by sending messages/by
        calling each other's behaviors, directly or by having a mediator.
        For instance in our example a MediaPlayer Object
        could reproduce a video and use one of it's behaviors, like video.next_frame()
        to retrieve the next frame to be shown.
    </p>
    <p>
        This type of relationship is relatively simple. One object is client of another one
        by using it's public interfaces. Principles like encapsulation and abstraction
        makes it easier to create a relationship where the client is not attached to the
        objects implementation and state, worrying only about the public interface's signature.
    </p>
    <p>
        Now we're talking about simple objects, objects that are composed by behaviors with
        properties that can be considered "native", like strings, integers, boolean variables,
        mabe datastructures like stacks, queues, arrays, maps, hashmaps... but what if one
        object includes another object on it's state or by design inherits some core
        description of another object?
    </p>
    <h3>Inheritance</h3>
    <p>
        In short, some objects within the application may share a similar structure,
        by structure I mean set of variables that represents the state and the behaviors.
        It's a design option to create a more generic type of object that
        holds this "core structure" and create sub-objects to inherits them and
        avoid code duplication. This type of relationship is called <i>is-a</i>
        meaning that one object of type B is type A. For instance, a cat is a mammal,
        dogs and zebras are mammals too. Cat (type B) is a mammal (type A)
    </p>
    <img src="#" alt="INHERITANCE EXAMPLE">
    <p>
        As you can see, this type of relationship it's not exactly between the objects
        after they bein created, but before they even exist, on their template.
    </p>
    <h3>Advantages of Inheritance</h3>
    <h4>Code reusability and core design description</h4>
    <h3>Disadvantages of Inheritance</h3>
    <h4>Breaks encapsulation</h4>
    <h4>Harder to mantain</h4>
    <h3>Association, Composition and Aggregation</h3>
    <p>
        Long story short, composition and aggregation are types of association.
        Association is a relationship between different objects, of different
        type or with the same type, meaning that they were created from the
        same template of code (class). So the first example you saw before,
        is an association, a relationship between the MediaPlayer and the Video.
    </p>
    <h4>has-a</h4>
    <h4>part-of</h4>
    Good Luck XD
</div>