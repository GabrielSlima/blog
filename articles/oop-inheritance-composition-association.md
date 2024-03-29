<div style="text-align: left;">
    <p>
        Ok  it's been a while, I know. Maybe I'll write an article about this
        too. But continuing this process of discovery in Software Engineering,
        today's topic is something that maybe not every developer pays attention
        when writing code. Maybe because we have so many things to worry
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
        <b>Should you use inheritance, composition or aggregation? And what is association?</b>
    </p>
    <h3>Before we continue, a quick review of OOP</h3>
    <p>
        As always, I'd like to start reviewing the paradigm. An Object Oriented Program
        is very simple, the execution is a relationship of relating objects. Each object
        represents a entity on our program. This entity posesses behaviors and a state.
    </p>
    <img class="post-img" src="images/inheritance-association/object-entity.svg" alt="OBJECT ENTITY">
    <p>
        These entities are created from templates of code called <b>classes</b>.
        In other words, a class describes what behaviors (methods/functions/procedures)
        and what set of variables will represent the object's state. Every entity
        should have only one purpose. Meaning that every entity acts like if it was
        a completely isolated program. A program generally requires some kind of data
        to fully accomplish it's job. Object entities are not different. For instance,
        maybe you have a Video Object. A video contains duration time, format, maybe a name
        and a specific var for marking the current point of this video beign shown.
        Those variables are part of the object's state.
    </p>
    <img class="post-img" src="images/inheritance-association/Media-Player.svg" alt="VIDEO OBJECT">
<pre class="brush: python">
<code>def main():
    video = Video(absolute_path="/home/elliot/videos/dystopia_2016_live.mp4")
    media_player = MediaPlayer()
    
    video.load()
    media_player.play(video)
</code>
</pre>
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
    <img class="post-img" src="images/inheritance-association/is-a.svg" alt="INHERITANCE EXAMPLE">
    <p>
        As you can see, this type of relationship it's not exactly between the objects
        after they bein created, but before they even exist, on their template/class.
    </p>
    <h3>Advantages of Inheritance</h3>
    <h4>Code reusability, code duplication and core design description</h4>
    <p>
        This mechanism can be used for one important thing, which is
        <i>reusability</i>. There is nothing new to add to this, it's
        very simple actually. We can prevent code duplication by creating
        more generic templates and reuse their structures on what we call
        <i>sub-classes</i> or <i>children</i>. Therefore, reducing code
        duplication because we don't have to write the same lines of code
        all over again for different templates.
    </p>
    <p>
        Another important thing inheritance provides is <i>impose core design</i>.
        Some templates (classes) share the same core structure, and usually
        that core structure is fundamental for the them. They <i>have to</i>
        implement a set elements (methods/procedures/functions and/or state/variables).
    </p>
    <h3>Disadvantages of Inheritance</h3>
    <h4>Breaks Encapsulation</h4>
    <p>
        I would say that this is not a rule because it really depends
        on the language being used, and the <i>access modifiers</i>
        of some elements. To be more specific, some elements like behaviors/functions/methods/procedures
        may be visible by sub-classes because of their access modifiers.
        If any new method is added to the parent, and it has an acess modifier
        that allows them to be seen by" it's children, they must implement
        the new method. Therefore, in this case, the encapsulation of 
        the parent is broken.
    </p>
    <h4>Harder to maintain</h4>
    <p>
        Templates that doesn't have freedom by having it's encapsulation broken
        are harder to maintain. A developer can't simply change a parent class
        adding or removing elements that are part of core implementation
        of it's children. Changing the parent will require testing all the
        children all over again to guarantee that they are working properly.
        And of course, this also depends on how complex this relationship and
        the parent class is.
    </p>
    <h3>Association, Composition and Aggregation</h3>
    <p>
        Long story short, composition and aggregation are types of association.
        Association is a relationship between different objects, of different
        type or with the same type, meaning that they were created from the
        same template of code (class). So the first example you saw before,
        is an association, a relationship between the MediaPlayer and the Video.
    </p>
    <h4>Composition: has-a relationship</h4>
    <p>
        So as the name above says, composition is a relationship between
        two (or more) objects, where one object owns another one.
        The owned object provides specific services for a specific type
        of object, and requires to be owned to accomplish a task.
    </p>
    <p>
        Example, a computer is an object that is composed by other objects
        like a Memory, Hard Drive or SSD, CPU. If we are talking about
        a laptop, each laptop model has a specific screen, keyboard, mousepad...
        Also, a computer is not composed by any type of CPU, screen, Hard Drive
        or SSD. Those objects got to be compatible with the computer's motherboard
        and space limitations. 
    </p>
    <p>
        Another one, a classic example. A car is an object. An entity that
        encapsulates data and procedures. Provides abstraction by exposing
        specific services/interfaces for it's clients, people/drivers.
        <br>
        A car is composed by a motor, it has seats, seat belts,
        airbag, doors, trunk a glove box. All of those objects doesn't provide
        services that can be provided by themselves, without being 
        part of a car. They are also specific for each car model.
        You can't take a Civic's motor and put it into a Honda and vise versa.
    </p>
    <img class="post-img" src="images/inheritance-association/association-composition.svg" alt="COMPOSITION: COMPUTER EXAMPLE">
<pre class="brush: python">
<code>class SpecificAPIHTTPConnector:
    def __init__(htpp_connector: HttpConnector, validator: SpecificAPIHTTPConnectorValidator, authority: str):
        self.http_connector = htpp_connector
        self.url = f"https://{authority}/specific_api"
        self.validator = validator
    
    def save(payload: dict):
        request = {
            "url": self.url
            "body": payload,
            "headers": {"specific-header": "specific value"}
        }
        validator.validate_return_from(self.http_connector.post(request))
</code>
</pre>
    <p>
        With the example above I tried to create a very simple
        case of composition. In this case, the SpecificAPIHTTPConnectorValidator
        is an object to be owned by SpecificAPIHTTPConnector.
        I usually encapsulate HTTP requests per API. This makes
        it easier to give maintance, it increases readability,
        and reduce code duplication.
        <br>
        Anyways, the SpecificAPIHTTPConnectorValidator can't be used
        by other types of objects in this case. Well, at least
        it's not supposed to.
    </p>
    <p>
        There's also another aspect of composition which is the fact 
        that those owned objects, die once the owner dies. Simply
        by the fact that they provide specific services for specific
        types of objects, so doesn't make sense to keep them alive.
    </p>
    <h4>Aggregation: part-of relationship</h4>
    <p>
        After understanding the composition, this one should be simpler.
        Objects that are formed by another objects that actually
        can provide services without requiring being <i>owned</i>
        by another specific type of object, are called
        <b>aggregate objects</b>. They are formed by a collection
        of other objects that doesn't depends on them. In other
        words, an aggregate object groups other objects.
    </p>
    <p>
        Now for the examples, getting the computer again,
        if we're talking about desktops, the periferals
        are objects that part of this aggregation like the screen,
        the keyboard, mouse, headphones, printer and so on.
        Of course we may have minimum level of compatibility,
        maybe the computer is so old that it doesn't have
        USB port haha.
    </p>
    <p>
        But you don't have a specific 
        USB port for each model of computer or each brand. You have
        one "universal" USB port for every one.
    </p>
    <img class="post-img" src="images/inheritance-association/association-aggregation.svg" alt="COMPOSITION: COMPUTER EXAMPLE">
<pre class="brush: python">
<code>class SpecificAPIHTTPConnector:
    def __init__(htpp_connector: HttpConnector, authority: str):
        self.http_connector = htpp_connector
        self.url = f"https://{authority}/specific_api"
    
    def save(payload: dict) -> None:
        request = {
            "url": self.url
            "body": payload,
            "headers": {"specific-header": "specific value"}
        }
        self._validate_return_from(self.http_connector.post(request))
    
    def _validate_return_from(response: HTTPResponse) -> None:
        _ERROR_MESSAGE = f"{self.url}. Response Body => {response.body}, Response Status => {response.status}"
        if response.status != 200:
            raise SpecificAPIHTTPConnectorException(message=_ERROR_MESSAGE)
</code>
</pre>
    <p>
        Different from composition, the grouped objects
        don't necessarily have to die once their "owner"
        dies. They can live by themselves simply for the fact
        that they can provide services for other types of objects.
        They tend to be more generic, therefore, reusable.
    </p>
    <p>
        On the example above the HttpConnector is not attatched
        to a specific type of object. It can be used by any other
        object that performs HTTP Requests. There is no dependece
        between SpecificAPIHTTPConnector and HttpConnector.
    </p>
    <h3>Why use association?</h3>
    <h4>Readability</h4>
    <p>
        By combining more abstract objects to create another,
        we attack complexity. Each object provides abstraction,
        this makes simple to combine them and makes it easier 
        to understand the object as a whole without having to
        understand lots of information at once.
    </p>
    <h4>Complextity</h4>
    <p>
        This is not today's news. Complextity is a thing in Software
        Engineering, and it can really impact the software
        development process by making things harder to understand.
        <br>
        Association, if used with the right mindset, that would
        be <i>readability</i> and that <i>solutions should help on
            solving problems, not creating new ones
        </i> is a great tool. Again, it's easier to understand
        a large amount of information by breaking it into small
        pieces.
    </p>
    <p>
        Objects hide their implementation by providing only the
        necessary interfaces. They also hide their
        state to prevent clients from knowing their internal
        structure, which would result in a dependece on each other.
        With simple words, objects encapsulates their implementation
        and provides abstraction.
        <br>
        Objects that relate with each other by association,
        being by composition or aggregation, are less dependent
        on each other. And of course, objects that are composed
        by other ones, are dependent on each other at a certain
        degree, but each object that is part of this composition
        have freedom to change it's implementation.
        Don't forget that principles like <i>Open/Closed</i>
        can help you on defining interfaces that don't requires
        changes when you have to change it's implementation.
        This will help you to create more stable objects.
        If you're curious about this principle, I've written
        <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="_blank">this article</a>
        about <b>clean classes</b>.
    </p>
    <h4>Maintainability</h4>
    <p>
        I think it's kind of obvious at this point that
        more readable and less complex objects are easier to
        understand. If your objects are readable and less complex,
        they for sure are more maintainable. Because one object is
        built from other small unities, you don't have to change
        objects that has nothing to do with the requirements.
        This also makes it simple for testing. You onlt test
        what in fact you've changed. I have another article
        about <a href="https://gabrielslima.github.io/blog/post.html?id=12" target="_blank">testing</a> too, if you wanna
        take a look.
    </p>
    <h3>Conclusion</h3>
    <p>
        A while ago I really thought that inheritance was the best
        approach for code reusability. Turns out that it's not
        always the best choice. If you have a class with lots
        of children, it's harder to make changes on it (depending)
        on the change, if requirements change. It's easier to
        deal with separeted objects with low dependece on each other.
        <br>
        So as a general recommendation, if you have generic
        classes that probably won't change much in the future,
        like a generic HTTP component that you've created or
        a component that offers generic interfaces for databases for instance,
        I recommend using inheritance. But other that, I'd recommend using
        one of the two types of association.
    </p>
    Good Luck XD
</div>