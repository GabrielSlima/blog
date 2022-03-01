<div style="text-align: left;">
    <p>
        Last article about the <a href="https://gabrielslima.github.io/blog/post.html?id=27" target="_blank">relationship</a>
        between the objects of your application. In that article I mentioned
        that association can be a better choice because the encapsulation
        of a class that uses inheritance, can be broken depending of where
        and what the programmer changes.
    </p>
    <p>
        So I decided to create this small article talking about specifically
        about this subject. Welcome to the Pewdiepie's favourite
        blog about Software Engineering and today's topic is
        <b>does inheritance breaks encapsulation?</b>
    </p>
    <h3>Inheritance, what is it?</h3>
    <p>
        From Wikipedia:
    </p>
    <div class="card blockquote">
        <blockquote class="card-body blockquote-body">
            Inheritance is the mechanism of basing an object or class
                upon another object or class, retaining similar implementation.
        </blockquote>
    </div>
    <p>
        In practice we can create one template based on another template.
        In this way <i>one template inhertis the other's description (variables and methods)</i>,
    </p>
    <img class="post-img" src="images/oop-inheritance-breaks-encapsulation/is-a.svg" alt="INHERITANCE EXAMPLE">
    <h3>Encapsulation, what is it?</h3>
    <p>
        Again, another definition from Wikipedia:
    </p>
    <figure class="card blockquote">
        <blockquote class="card-body blockquote-body">
            Encapsulation refers to the packing of data with the methods
            that operate on that data.
        </blockquote>
    </figure>
    <p>
        Objects are entities composed by data (variables) and behavivors
        (functions/methods). The behaviors are supposed to
        work with that data to perform it's job. They should
        have a <i>high-cohesion</i>.
    </p>
    <h3>Does inheritance breaks encapsulation?</h3>
    <p>
        In the book Clean Code from Robert C. Martin, he talks
        about the freedom of the objects. You should be able to
        change the implementation of objects easily, without having
        to test everything all over again or being worried about breaking the
        entire application for doing so.
        Mechanisms like encapsulation itself and abstraction 
        help with this problem of <i>freedom of the objects</i>.
    </p>
    <p>
        The major problem here is the dependence between the classes
        and subclasses. Having a class that you can't change because
        you're going to break 50 other sub-classes makes everything harder.
    </p>
    <p>
        Encapsulation is about packing data and the methods that operates on
        that data. Therefore, users of an object that applies encapsulation
        decently don't have to worry about the object's implementation.
        The client just gotta worry about the services the object provides
        throught it's interfaces.
    </p>
    <h3>Conclusion</h3>
    <p>
        Inheritance creates a dependece between the parent class and
        it's children. Adding new methods on the parent class (depending on 
        the access modifier used) might require changing it's children.
        The parent class is not 100% free for adding new behaviors.
        The children are depend upon the parent to work properly.
        The parent and the children are not 100% encapsulated.
    </p>
    <p>
        So depending on the design beign applied/modified, 
        inheritance can break encapsulation if the changes
        on the parent template are visible and are required to
        be applied by the children. 
    </p>
</div>