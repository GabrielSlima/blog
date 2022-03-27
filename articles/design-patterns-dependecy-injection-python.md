<div style="text-align: left;">
    <p>
        Object Oriented code can be complex, that's a fact.
        This is completely normal, that's why refactoring is important,
        to keep an emergent architecture as simple as possible
        as the system grows.
    </p>
    <p>
        But as the system grows, more and more dependecies appears.
        An Object Oriented Program is a relationship between the
        objects that are part of the solution. So naturaly some of
        those objects depends on other objets to do their job. 
    </p>
    <p>
        But manage those dependeces can be quite difficult if you have
        a larger system with lots of objects, including objects
        that deals with the business rules/use cases, data placeholders,
        api encapsulation and so on.
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineer.
        Probably the next big company will grow from here, and today will
        be showing to you how do I implement <b>dependence management</b>
        using dependecy injection in Python without the use of frameworks or
        external libs.
    </p>
    <h3>What is Depdency Injection?</h3>
    <p>
        First things first, if you don't know what Object Oriented Programming
        is, I mean, if you think an Object Oriented Program
        is a code composed with classes, functions, variables and packages
        and that encapsulation is creating a getter and setter interfaces, you
        should probabbly relearn Object Oriented Programming. I mean, you're not
        100% wrong but you don't fully understand the concept of this paradigm.
        I also strongly recommend you reading 
        <a href="#" target="_blank">this article</a> where I talk about 
        the difference between Objects and Data Structures.
    </p>
    <p>
        Anyways, what dependecy injetion actually is. Being direct,
        dependecy injection is <b>Inversion of Control</b> applied to
        dependece management. This means that the control of the flow
        that provides the necessary dependeces an object needs
        to be up and running to be ready for use, is inverted and handed to
        a specific piece of code that will be responsible for dealing
        with all the work to create and provide the dependeces to the object.
    </p>
    <p>
        So to give you an example, consider two objects, a UserController and
        an Authorizer object. The UserController object has in it's
        state an Authorizer object, therefore the UserController object
        mentions the Authorizer's code by being it's client.
    </p>
    <img class="post-img" src="images/design-patterns-dependecy-injection-python/dependecy-injection-python-UserController.svg" alt="UserController - Authorizer relationship">
    <p>The code would be something like the following:</p>
<pre class="brush: python">
<code>
class UserController:
    def __init__(self):
        self.authorizer = Authorizer()

    def save(user):
        self.authorizer.assert_that_request_is_authorized()
        # some code in here

    def delete(user):
        self.authorizer.assert_that_request_is_authorized()
        # more and more code in here

    def summary_of(user):
        # more code in here
</code>
</pre>
    <p>
        Now this is a very simple example, the UserController has only
        one dependecy, but what if it had 10? What if the Authorizer
        had more 10 dependecies? What if the follwing architecture
        was/is your reality?
    </p>
    <img class="post-img" src="images/design-patterns-dependecy-injection-python/dependecy-injection-python-MultipleControllers.svg" alt="Controllers - Authorizer relationship">
    <p>
        I'll tell what is gonna happen if the authorizer change it's
        constructor one day. You'll have to change all the objects
        that are dependent on it and retest all of them to guarantee
        everything is working fine. Other than that, you create
        a coupling between these objects that isn't really necessary.
        I mean, Authorizer's clients doesn't need to know about the
        dependeces it needs to function properly.
    </p>
    Good Luck XD
</div>