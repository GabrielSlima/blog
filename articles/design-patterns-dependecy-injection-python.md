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
        those objects depends on other objects to do their job. 
    </p>
    <p>
        But manage those dependecies can be quite difficult if you have
        a larger system with lots of objects, including objects
        that deals with the business rules/use cases, data placeholders,
        API encapsulation and so on.
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering.
        Probably the next big company will grow from here, and today I'll
        be showing to you how do I implement <b>dependecy management</b>
        using dependecy injection in Python without the use of frameworks or
        external libs.
    </p>
    <h3>What is Depdency Injection?</h3>
    <p>
        First things first, if you don't know what Object Oriented Programming
        is, I mean, if you think an Object Oriented Program
        is a code composed by classes, functions, variables and packages
        and that encapsulation is creating getter and setter interfaces, you
        should probabbly relearn Object Oriented Programming. I mean, you're not
        100% wrong but you don't fully understand this paradigm.
        I also strongly recommend you reading 
        <a href="#" target="_blank">this article</a> where I talk about 
        the difference between Objects and Data Structures.
    </p>
    <p>
        Anyways, what dependecy injection actually is. Being direct,
        dependecy injection is <b>Inversion of Control</b> applied to
        dependecy management. This means that the control of the flow
        that is responsible for provisioning the necessary dependecies an object needs
        to be up and running to be ready for use, is inverted and handed to
        a specific piece of code that will be responsible for dealing
        with all the work, including providing the dependecies to the object.
    </p>
    <p>
        So to give you an example, consider two objects, a <b>UserController</b>
        and an <b>Authorizer</b> object. The UserController object has in it's
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
        had more 10 dependecies? What if the following architecture
        was/is your reality?
    </p>
    <img class="post-img" src="images/design-patterns-dependecy-injection-python/dependecy-injection-python-MultipleControllers.svg" alt="Controllers - Authorizer relationship">
    <h3>Hard dependecy management</h3>
    <p>
        I'll tell what is gonna happen if the authorizer change it's
        constructor one day. You'll have to change all the objects
        that are dependent on it and retest all of them to guarantee
        that everything is working fine. Other than that, you create
        a coupling between these objects that isn't really necessary.
        I mean, Authorizer's clients doesn't need to know about the
        dependecies it needs to function properly.
    </p>
    <h3>Making your unit testing life harder</h3>
    <p>
        I gotta tell you, allowing the constructor of your object
        to deal with it's own dependecies will make your life simpler
        at the beginning when it comes to unit testing. But at some
        point, naturally as the system grows, requirements changes,
        refactoring and so on, you will realize that your unit tests
        are coupled with the dependecies of the object you're testing.
        <br>
        This can make your life harder than it actually should be. Now
        you gotta deal with another object that probably will be useless if
        your intentions is not making integrated testing.
    </p>
    <h3>Ther first level of Inverion of Control</h3>
    <p>
        Don't get me wrong, programming is an art. This means that
        it's a creative process and very subjective. Also meaning that
        different people think in different ways, that's one reason why 
        design patterns exists, so that people follow a common solution for a common problem.
        <br>
        But that's not the point, the point is, you may have a different
        context compared with what I have right now, that's why I'm showing
        you what I've done in some cases and that doesn't mean it will work
        on your case.
    </p>
    <p>
        To invert the control of dependecy management we must remove
        from the parent the class, the responsibility of
        defining the values of whatever variable that is part
        of object's state.
        After doing that, we also need a way of injecting those dependecies
        into the object. There are some ways of injecting those
        dependecies, the most known ways are throught the 
        Constructor and through the public interfaces.
    </p>
    <h4>Injecting dependecies through constructor</h4>
    <p>
        This is one of the most used ways of injecting dependencies
        into an object.
        We remove the responsibility of initializing the dependecies
        from the object's constructor and we just assume that
        the "builder" or "assembler" knows what he's doing.
        The "builder" or "assember" elements (they can be objects, functions etc.)
        are one level above the object itself in this case.
    </p>
<pre class="brush: python">
<code>class UserController:
    def __init__(self):
        self.authorizer = Authorizer(repository=UserRepository())
        self.requester = http_util.identify_user_responsible_for(request)
</code>
</pre>
    <p>
        The above example is a case in which the constructor
        is responsible for defining the values of the object's
        state. The dependecies are managed in the natural flow of control
        of this object creation.This breaks the SRP, OCP and DIP principles
        (from SOLID), for the simple fact that a dependecy between 
        <b>UserController</b>, <b>http_util</b> and <b>Authorizer</b>
        exists.
        They're tighly coupled. It'll be difficult to mantain this
        relationship. But you already knows that.
    </p>
<pre class="brush: python">
<code>class UserController:
    def __init__(self, authorizer, requester):
        self.__authorizer = authorizer
        self.__requester = requester
</code>
</pre>
    <p>
        The code above is the same code, but the flow of control
        of dependecy management was inverted. The object's constructor
        doesn't have to worry about this anymore. In this case,
        another element will be responsible for defining those
        values and passing them at the moment of the object's creation.
    </p>
    <h4>Injecting through interfaces</h4>
    <p>
        Another way of providing dependecies to objects is through
        public interfaces. This can be very useful if the object
        gotta deal with expensive dependecies. Dependecies that
        takes a lot of time to be defined/built (Lazy Load Tactic).
    </p>
<pre class="brush: python">
<code>class UserController:
    def __init__(self, requester):
        self.__authorizer = None
        self.__requester = requester

    def populate_authorizer_with(self, authorizer_instance):
        self.__authorizer = authorizer_instance
</code>
</pre>
    <h4>The assembler element</h4>
    <p>
        This element will be responsible for putting everything
        together. It'll build the objects and arrange them. This 
        is one level above the objects's code I would say.
    </p>
<pre class="brush: python">
<code>def main():

    # BUILD DEPENDENCIES
    authorizer = Authorizer(repository=UserRepository())
    requester = http_util.identify_user_responsible_for(request)

    # DEPENDENCY INJECTION THROUGH THE CONSTRUCTOR
    controller = UserController(authorizer=authorizer, requester=requester)

    francis = UserVO(name="Cool Francis", profile=UserProfile.TRADER)
    return controller.save(francis)
</code>
</pre>
    <p>
        In the above example the main is the assembler. It creates
        the objects and inject them into the right object.
        But this can also be in a different piece of code, apart
        from the main's control.
    </p>
    <h4>Making the Unit Testing process easier</h4>
    <p>
        Talking about unit testing, by using dependecy injection
        a higher level of flexibility appears. The test has freedom
        to inject dependecies with different values. A mocked
        instance of authorizer for example.
    </p>
<pre class="brush: python">
<code>from src.controller.user_controller import UserController
from src.vos.user import UserVO
from src.vos.http.status import HttpStatus
from src.constants.user.profile import UserProfile


def test_should_return_forbidden_on_save_with_non_authorized_user(mocker):
    __authorizer = __patch_authorizer_with(mocker)
    __authorizer.verify_if_request_is_authorized_for.side_effect = raise_exception

    controller = UserController(
        authorizer=__authorizer,
        requester=UserVO(name="Gabriel", identification=133312)
    )

    response = controller.save(
        UserVO(name="New User Name", profile=UserProfile.TRADER)
    )
    assert response.status == HttpStatus.FORBIDDEN


def raise_exception(*args):
    raise Exception("USER IS NOT ALLOWED TO PERFORM THIS ACTION...")


def __patch_authorizer_with(mocker):
    return mocker.patch('src.security.authorizer.Authorizer')
</code>
</pre>
    <p>
        The unit test has the minimum knowledge about the Authorizer, that's a beginning.
        The authorizer's implementation for the interface <b>verify_if_request_is_authorized_for</b>
        isn't relevant here. Of course, the unit test knows the bare minimum about
        the Authorizer's behavior,
        but pay attention to the way it was built. The unit test doesn't knows anything about
        the authorizer's dependecies to mock it.
    </p>
    <h3>Using Factories</h3>
    <p>
        There's some good reasons for using factories. Well, at least
        in my case are reasons that I consider very important for using
        factories.
    </p>
    <h4>CCC: Cross-Cutting-Concerns</h4>
    <p>
        Cross-Cutting-Concerns is a very important subject and you probably
        deals with them. As the application grows, more and more code is
        written and more and more logical separations (modules) appears
        to help keep the code with a small degree of organization.
    </p>
    <p>
        So those "logical separations" tend to be different from each other
        and specific. That's why they were separated from each other.
        Maybe you have a concern that was treated by multiple layers (if you don't
        know what I'm talking about, recommend you reading <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">this article</a>
        too. But in simple words, a big process is broken into different
        functions - layers, instead of having only one function with lots of
        code to do the job) because
        they are complex.
        <br>
        At some point you'll realize that some concerns will be duplicated in
        more places within your code. In other words, you'll realize that
        some lines of code are duplicated in many functions and many source files
        and I'll also realize that it's very hard to change those duplicated lines of code because
        they're everywhere. These are concerns that <b>cut acrross other concerns</b>.
    </p>
    <p>
        An amazing example of a cross-cutting-concern is a <b>Logger</b> element
        (Object, module, function). You may have <b>Logger.loginfo(message: str)</b>
        everywhere. This piece of code may be mentioned in a lot of places.
        <br>
        Another good example is the <b>Authorizer</b> object from previous
        examples. Any controller can use the Authorizer.
    </p>
    <p>
        Cross-Cutting-Concerns may become a problem because they're hard to
        mantain. They're not encapsulated. And extending them will lead to
        a ploriferation of duplicated code impossible to mantain.
    </p>
    <p>
        So the one thing I really consider when using a factory is <b>how many times I'll have to assemble this object?</b>
        and I try to identify as much relationships as possible
        this object could have inside this application. Usually, at least
        two. The object will be assembled by the assembler/builder
        element (class, method, source file)
        and by unit tests. These are reasons enough to create
        a factory that will be responsible for assembling the object
        for those cases.
    </p>
    <h4>Single Responsibility Principle</h4>
    <p>
        I'll give you a summary about this principle, 
        it states that each element of our application should be responsible
        for only one thing. Robert C. Martin describes this as
        "Each element should have only one reason to change".
    </p>
    <p>
        This principle is strongly about cohesion, the amount of things
        the element is responsible for and the amount of knowledege
        the element has about other concerns.
        <br>
        I also strongly recommend that you read <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="blank">this article</a>
        for more content about this principle.
    </p>
    <h4>Open/Closed Principle</h4>
    <p>
        This principle is more about the stability and cost of mantainence of our application.
        This is achieved through low coupling and high cohesion.
        Principles like SRP and DIP will help you on achieving that.
    </p>
    <p>
        To summarize, it states that modules should be open for extension
        and closed for modification. Meaning that as requirements changes
        (functional or non-functional), we should consider extending
        existing modules (classes, source files, functions) for satisfying the
        new requirements, instead of changing existing production code.
    </p>
    <p>
        The reason for this is the stability and cost of mantainance.
        Of course if you're building classes, source files or functions
        with this principle in your mind, you'll end up building more
        abstract elements to make things easier.
    </p>
    <h4>Assembling process's complexity</h4>
    <p>
        I also consider how complex is to assemble the object.
        Maybe the object is composed by other objects that
        are composed by other objects that have lots of dependecies
        and so on... So it's obivous that the more complex the object
        is to assemble, and the more places I have to assemble it, the
        hard it's to mantain.
    </p>
    <h3>Adding factories to the design</h3>
    <img class="post-img" src="images/design-patterns-dependecy-injection-python/dependecy-injection-python-factory.svg" alt="UserController - Authorizer relationship">
    <p>
        The diagram above represents the new way the objects of this
        application will request a new instance of a dependecy.
        They will be intermediated by the factory. Now this is great
        for objects that are complex and objects that can be considered
        CCC (Cross-Cutting-Concerns).
    </p>
    <p>
        To fully understand this diagram, you gotta consider that what I'm trying
        to express with the arrows are not only the data flowing through
        the objects, but that element A mentions code of element B.
        <br>
        In this case, the <b>Unit Tests UserController</b> mentions
        <b>UserControllerFactory's</b> code that then mentions
        <b>UserController's</b> code and the <b>AuthorizerFactory's</b> code. 
    </p>
<pre class="brush: python">
<code># test_user_controller.py

from src.vos.user import UserVO
from src.vos.http.status import HttpStatus
from src.factories import user_controller_factory
from src.constants.user.profile import UserProfile
from src.controller.user_controller import UserController


def test_should_return_not_authorized_on_user_not_identified(mocker):
    __authorizer = __patch_authorizer_with(mocker)
    __authorizer.verify_that_request_is_authorized_for.side_effect = raise_exception

    controller = user_controller_factory.build_with(
        requester=UserVO(name="Gabriel", identification=133312)
    )

    response = controller.save(
        UserVO(name="New User Name", profile=UserProfile.TRADER)
    )
    assert response.status == HttpStatus.FORBIDDEN


def raise_exception(*args):
    raise Exception("USER IS NOT ALLOWED TO PERFORM THIS ACTION...")


def __patch_authorizer_with(mocker):
    return mocker.patch('src.security.authorizer.Authorizer')
</code>
</pre>
<pre class="brush: python">
<code># user_controller_factory.py

from src.vos.user import UserVO
from src.factories import authorizer_factory
from src.controller.user_controller import UserController


def build_with(requester: UserVO) -> UserController:
    return UserController(
        authorizer=authorizer_factory.build(), requester=requester
    )
</code>
</pre>
    <p>
        I want you to pay attention to both cases, the controllers that
        don't have a factory for them, meaning that if they are big, complex
        and have many other dependencies and don't have a factory for assembling
        them, you'll end up with lot's of lines of code for the unit tests
        for instance, everytime you need an instance of them.
        <br>
        All the controllers are looking into the Authorizer's factory.
        So the coupling between them was reduced meaningfully.
        If we apply DIP (Dependecy Inversion Principle) or AOP (Aspect Oriented Programming)
        the coupling will be reduced even more.
    </p>
    <p>
        I also want you to pay attention to the UserControllerFactory. Now everyone
        that needs an instance of this object, don't have to worry
        about assembling it. The coupling between the Controller and it's clients
        was reduced too.
    </p>
    <h3>Final Thoughts and Cosiderations</h3>
    <p>
        Hope you've had a good experience with this article. I also
        want to make it clear that this is a recommendation of
        how to use <b>Dependency Injection</b> with Python
        without the use of frameworks or libs. This also doesn't 
        mean I see frameworks and libs as evil. Actually I think
        the opposite of this, frameworks and libs are great and
        came to make our (devs/engineers) easier.
    </p>
    Good Luck XD
</div>