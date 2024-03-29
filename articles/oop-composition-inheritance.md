<div style="text-align: left;">
    <p>
        When to create sub-classes and when not to...In short, there are 2 ways
        (well, at least that I know) of creating classes from
        other classes in OO programming. Composition and inheritance.
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today
        we're going to talk about inheritance and composition. Let's get into it.
    </p>
    <h3>Relationship between the objects</h3>
    <p>
        There are 2 basic relationships classes can have with each other: <i>is-a</i> and
        <i>has-a</i>.
    </p>
    <h4>Is-a relationship</h4>
    <p>
        <i>is-a</i> relationship is all about inheritance. Inheritance is a powerful OOP mechanism.
        Classes can inherit attributes or behaviors from others without duplicating code.
        Generaly, parent classes are more abstract. This means that they tend to be more generic. 
    </p>
    <p>
        When a sub-class is created, it inherits it's parent attributes and behaviors. The sub-class
        <i>is-a</i> class of type T. For instance, if you have two classes, one called car and motorcycle.
        Both of them can inherit some behaviors like accelerate and break from another class called
        <i>Vehicle</i>.
    </p>
    <p>
        In this case, the class Motorcyle has a <i>is-a</i> relationship with the <i>Vehicle class</i>.
        The same goes for the <i>Car</i> class.
    </p>
    <p>
        The following image represent's a <i>is-a</i> relationship:
    </p>
    <img class="post-img" src="images/oop-inheritance-composition/is-a.svg" alt="">
    <h4>Has-a relationship</h4>
    <p>
        This kind of relationship is very simple, a class is a blueprint of an object. Taking the last
        example, a car of type Car that therefore <i>is-a</i> Vehicle, <i>has a</i> motor.
        A computer <i>has a</i> motherboard, memory, hard drive or ssd. This is a <i>has-a</i> relationship.
        An object can be composed by other objects and at the same time, those objects are individual and encapsulates
        it's own data and behaviors...
    </p>
    <img class="post-img" src="images/oop-inheritance-composition/has-a.svg" alt="">
    <h3>Final Thoughts</h3>
    <p>
        Knowing the difference between inheritance and composition will help you when designing
        objects that are created from other objects, not only bacause the overall desing
        becomes more logic, but really knowing more about your options brings agility to the table.
    </p>
    Good Luck XD
</div>