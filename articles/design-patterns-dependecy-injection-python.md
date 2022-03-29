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
        But manage those dependecies can be quite difficult if you have
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
        that provides the necessary dependecies an object needs
        to be up and running to be ready for use, is inverted and handed to
        a specific piece of code that will be responsible for dealing
        with all the work to create and provide the dependecies to the object.
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
    <h3>Hard dependence management</h3>
    <p>
        I'll tell what is gonna happen if the authorizer change it's
        constructor one day. You'll have to change all the objects
        that are dependent on it and retest all of them to guarantee
        everything is working fine. Other than that, you create
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
        you gotta deal with another object that probably be useless if
        your intentions is not making interated testing.
    </p>
    <h3>Ther first level of Inverion of Control</h3>
    <p>
        Don't get me wrong, programming is an art. This means that
        it's a creative process and very subjective. Also meaning that
        different people think in a different way, that's why design pattern
        exists, so that people follow a common solution for a common problem.
        <br>
        But that's not the point, the point is, you may have a different
        context compared with what I have right now, that's why I'm showing
        you what I've done in some cases and that doesn't mean it will work
        on your case.
    </p>
    <p>
        To invert the control of depdence management we must remove
        from the parent the class the responsibility of
        defining the values of whatever variable that is part
        of object's state. There are some ways of injecting the
        dependecies of an object: Constructor, public interface
        and XXX
    </p>
    <h4>Injecting dependecies through constructor</h4>
    <p>
        This is one of the most used ways of dependece injection.
        We remove the responsibility of initializing the dependecies
        from the object's constructor and we just assume that
        the "builder" or "assembler" knows what he's doing
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
        (from SOLID). This also creates a dependence between 
        <b>UserController</b>, <b>http_util</b> and <b>Authorizer</b>.
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
        of dependence management was inverted. The object's constructor
        doesn't have to worry about this anymore. In this case,
        another element will be responsible for defining those
        values and passing them at the moment of the object's creation.
    </p>
    <h4>Injecting through interfaces</h4>
    <p>
        Another way of providing dependecies to objects is through
        public interfaces. This can be very useful if the object
        gotta deal with expensive dependecies. dependecies that
        takes a lot of time to be defined/built (Lazy Load Tatic).
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
        together. It'll built the objects and arrange them. This 
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
    <h4>Making the Unit Testing process easier</h4>
    <p>
        Talking about unit testing, by using dependecy injection
        a higher level of flexibility appears. The test has freedom
        to inject dependecies with different values. A mocked
        instance of authorizer for instance.
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
        isn't relevant here. Of course, the unit test knows the bare minimum about it's behavior,
        but pay attention to the way it was built. The unit test doesn't knows anything about
        the authorizer's dependecies to mock it.
    </p>
    <h3>Using Factories</h3>
    <p>
        There's some good reasons for using factories. Well, at least
        in my case are reasons that I consider very important on using
        factories.
    </p>
    <h4>CCC: Cross-Cutting-Concerns</h4>
    <p>
        Cross-Cutting-Concerns is a very important subject and you probably
        deals with them. As the application grows, more and more code is
        written and more and more logical separations (modules) appears
        to keep the code with at least the minimum organization.
    </p>
    <p>
        So those "logical separations" tend to be different from each other
        and specific. That's why they were separated from each other.
        Maybe you have a concern that was treated by multiple layers because
        they are complex.
        <br>
        At some point you'll realize that some concerns will be duplicated in
        more places within your code. In other words, you'll realize that
        some lines of code are duplicated in many functions and many source files
        and that it's very hard to chage those lines of code because
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
        a ploriferation of duplcated code impossible to mantain.
    </p>
    <p>
        So the one thing I really consider when using a factory is <b>how many times I'll have to assemble this object?</b>
        and I try to identify as much relationships as possible
        this object could have inside this application. Usually, at least
        two. The object will be assembled by the assembler element (class, method. source file)
        and the by the unit tests. That's reason enough to create
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
        for more content about his principle.
    </p>
    <h4>Open/Closed Principle</h4>
    <p>
        This principle is more about the stability and cost of mantainence of our application.
        This is achieved through low coupling and high cohesion.
        Principles like SRP and DIP will help you on achieving that.
    </p>
    <p>
        But in summary, it states that modules should be open for extension
        and closed for modification. Meaning that as requirements changes
        (function or non-functional), we should consider extending
        existing modules (classes, source files, functions) for satisfying the
        new requirements, instead of changing existing production code.
    </p>
    <p>
        The reason for this is the stability and cost of mantainance.
        Of course if you're building classes, source files or functions
        with this principle in your mind, you'll end up building more
        abstract elements.
    </p>
    <h4>Assembly process complexity</h4>
    <p>
        I also consider how complex is to assemble the object.
        Maybe the object is composed by other objects that
        are composed by other objects that have lots of dependecies
        and so on... So it's obivous that the more complex the object
        is to assemble, and the more I hable to assemble it, the
        hard it's to mantain.
    </p>
<pre class="brush: python">
<code>from src.vos.user import UserVO
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
<code>from src.vos.user import UserVO
from src.factories import authorizer_factory
from src.controller.user_controller import UserController


def build_with(requester: UserVO) -> UserController:
    return UserController(
        authorizer=authorizer_factory.build(), requester=requester
    )

</code>
</pre>
    Good Luck XD
</div>