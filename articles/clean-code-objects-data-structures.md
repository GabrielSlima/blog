<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's
        topic is <b>Objects and Data Structures</b>...
    </p>
    <p>
        At first I thought that this chapter of the book was about Arrays, Lists, Linked Lists, Stacks, Queues...I'm not gonna lie
        to you.
        <br>
        But what took my attention was the "Object" part...What does these two have in common?
    </p>
    <p>
        Well, after reading it I realized the connection between these two.
        You can be writing procedural code this whole time and don't even know....
    </p>
    <p>
        Of course, procedural code is not evil. That's not what I'm saying.
        <br>
        What I'm trying to say is that you can be writing procedural code <b>thinking</b> that is writing <b>OO</b> code.
        And that is a problem from my perspective.
    </p>
    <p>
        What is necessary to create and implement a Object Oriented Desing with good encapsulation, high cohesion, 
        and low coupling? Have you thought about this?
    </p>
    <p>
        Today's topic is all about this, what is the difference between objects and data structures created based on a template 
        and what can we do or think to guarantee that our OOP desing applies encapsulation, have a good cohesion and low coupling.
    </p>
    <p>
        So, without further ado, let's get into it!
    </p>
    <h3>Procedural vs Object Oriented programming</h3>
    <p>
        Before getting into the differences between these two imperative ways of writing code
        I would like to remember you what subroutines are...
    </p>
    <h4>Subroutines</h4>
    <p>
        Subroutines are a sequence of programming instructions/expressions/clauses
        that performs a specific task. They are also known as functions/methods/procedures/subprograms 
        depending on the language.
        <br>
        Some say that these four are different. Maybe they are...but that's not the point.
    </p>
    <p>
        The intent behind them is <b>maintainability</b> becasue they increases
        the code reusability and readability. Larger and complex programs can be break down into
        little blocks.
        <br>
        That being said, now you know that the purpouse of creating them is to reuse blocks 
        of code or execute a specific task whenever it is needed but also create a structured
        code that is easier to read and mantain.
    </p>
    <p>
        Every subroutine have a way of receiving data (data input), processing data (body)
        and a return (branch back) to actually return a value (or not) to it's caller once the task
        is done.
    </p>
    <img class="post-img" src="images/clean-code-objects-data-structures/subroutines.png" alt="">
    <p>
        They can be declared within a program or in separetaly libs, like the ones that are used to access system
        resources and services on linux operating system. A good example would be the GNU C Library. 
    </p>
    <p>
        I'm not getting much into this so you can find some good references <a href="https://github.com/GabrielSlima/blog#readme" target="blank">here</a> 
        if you want to explore more about subroutines and how they works in a more lower-level representation
        and hopefully I'm not getting any problems with copyright...
        <br>
        And here is a example of a subroutine/function in Python:
    </p>
    <pre class="brush: python">
<code>def sum(first, second):
    return first + second</code>
</pre>
    <h4>Procedural Programming</h4>
    <p>In procedural programming, programs are composed mostly by, guess what, 
        procedures or subroutines.
        <br>
        Some results can be achieved by writing programs that doesn't have custom subroutines
        which means that they only have variable declaraitons and uses built-in functions.
    </p>
    <p>
        But this is like almost impossible to see if we are talking about programs that does requires more complex logic.
    </p>
    <p>
        Programs written using this paradigm have global data members and behavior members that
        can acesses those global data members. Which means that the behavior members, the subroutines, can operate
        directly on the main program's state:
    </p>
    <img class="post-img" src="images/clean-code-objects-data-structures/procedural-app" alt="">
    <p>
        So as you can see the functions or subroutines can access each other inside the program, access the global variables to change the state of the program and, of course, the program itself can access all of them and dictate how this iteration is gonna happen. 
    </p>
    <p>
        They can be declared whithin the file of the program or in external files. That's a stragety that 
        helps to keep things organized.
    </p>
    <h4>Top to bottom execution</h4>
    <p>
      Procedural programs are executed top to bottom. This means that every line of code
      is executed one after another till the end of the statements.
    </p>
    <h4>Object Oriented Programming</h4>
    <p>
        In Oriented Programming the program is composed mainly by Objects.
        This is a higher level of code reusability where the functions are tied up in objects along with the necessary data members or properties that represents the object's state or model.
        <br>
        This means that objects have it's own data members or variables that represents it's state and it's own set
        of behaviors.
    </p>
    <img class="post-img" src="images/clean-code-objects-data-structures/object" alt="">
    <img class="post-img" src="images/clean-code-objects-data-structures/oop-app" alt="">
    <!-- IMAGE -->
    <p>
        In procedural programming, the author of the code have to organize the functions the best way he can to represent a behavior that is related to a representation of a object (throught a data structure for instance).
        Something like the following:
    </p>
    <pre class="brush: python">
<code>notify(cellphone, message)</code>
</pre>
    <p>
        Using OOP this could be achieved by doing something like this:
    </p>
    <pre class="brush: python">
<code>cellphone.notify(message)</code>
</pre>
    <p>
        There are some other factors like the fact that global variables can be changed at any time by any function in procedural programs, which is not very good.
    </p>
    <p>
        Of course, as you could see on the last image, objects can also access global variables but the idea of using objects is not only to represent real world objects or components inside of the program, but also that 
        they only work (mostly) with their own data structures (data members), isolating them from changes on the program's state and to encapsulate
        data and behavior members data contains details useful only for the object itself by making them private.
    </p>
    <p>
        Encapsulation of objects is also a way of preventing the object's state to change during the code execution by other users of the same object and reduce
        complexity. This also helps with debbuging because we would have only one place
        to look up in theory, which is the template of the object (the class).
    </p>
    <p>
        Object Oriented Programming makes the code cleaner, and with another level of organization if the priciples that comes with it
        are used correctly.
        Of course, in procedural programming functions can be in external files (modules) and organized by similar behaviors and therefore, growing the cohesion of
        each module and complex systems can be built with this paradigm.
    </p>
    <p>
        But when it comes to complex programs, OOP is a good choice (if not the best) for having
        principles like, inheritance, encapsulation, cohesion, coupling, abstraction and polymorphism on it's core 
        to help us to create robust desings and manipulate or create objects in different contexts...
    </p>
    <h3>The freedom of our objects's members</h3>
    <p>
        Now that we've revised some super important concepts we can get to some observations.
    </p>
    <h4>Data abstraction</h4>
    <p>
        Abstraction is the process of hiding details, so <b>data abstraction</b> would be
        the process of hiding data members of a object or class.
        <br>
        This not only helps to prevent
        their state from changes made by users, but also makes the code readable and maintainable by making it
        less polluted and limiting the places where those states can be changed other than inside of the class/object itself.
        <br>
        In other words, data abstraction heltps to manage complexity and makes the process of debugging easier.
    </p>
    <h4>Property accessors</h4>
    <p>
        Members are encapsulated by changing their accessibility to private. But even though
        those members can only be accessed inside of the class/object, the author can expose
        public interfaces to manipulate them.
        <br>
        With data members it's common to have what is called <b>property accessors</b> or <b>getters/setters</b>
        that allow users of a object to manipulate them.
    </p>
    <p>
        Even though this can be useful in some cases, they actually should be avoided if there isn't 
        a good reason to use them.
    </p>
    <p>
        Create getters and setters just for the saking of getting or setting values of variables
        is more like a false encapsulation. Any user of the object can change it's state
        as if the data members where actually public.
    </p>
    <p>
        Of course property accesors can help in some cases. Setters could have
        some validation making the user of the object to provide the right value. Or maybe some datatype conversion
        to a type that is useful internally. But other than that, they don't have much of a meaning.
    </p>
    <p>
        When it comes to getters, they are more useful than setters in most of the cases actually.
        Sometimes the user of the object only need to check it's state.
        A good example would be a cart on a e-commerce website. The cart could have some behaviors like:
        amountOfItems(), isFull(), items() and maybe one interface to actually update the cart, update(List items).
    </p>
    <p>
        Make sure that you have a good reason to add them into your code. Also make sure that they
        are not breanking the method's or funtiction's contract, I mean, that they actually have a name 
        that convey the real beahavior implemented behind it.
        <br>
        Adding a validation for a <b>setter</b> is not actually
        setting the value directly, <b>first there is a validation</b> and then, maybe, the user can set the value.
    </p>
    <p>
        <b>getItems()</b> and <b>setItems(List items)</b> makes users to expect that they can manipulate those attributes
        whenever they want. But those behavior members actually can have, as I said before, validations, data conversions and so on.
    </p>
    <p>
        It's best that objects have public interfaces that actually hides the implementation of their attributes by exposing
        only the necessary interfaces and returning a abstract value for getters, like the <b>amountOfItems()</b>
        or <b>isFull()</b> and avoid returning the attribute itself. Not allowing users of the object to set
        attributes directly, isntead, expose interfaces that will actually be a meaningful layer between the object user
        and the internal implementation with a descriptive name like <b>cart.update(List items)</b>, <b>car.add(Lugagge lugagge)</b> and so on.
    </p>
    <h3>Data/Object Anti-Symmetry</h3>
    <p>
        Classes are factories for producing objects and there is two main purpouses in which those objects can be used: Objects and Data Structures.
    </p>
    <p>
        Although some people think that OOP can achieved only by adding classes to the project
        this is not quite true.
        <br>
        There is a slightly differecen between creating objects from a class and creating data structures from a class.
    </p>
    <p>
        Even though the code may contain classes, they can actually just be a representations of <b>data placeholders</b>. I mean, they can hold 
        only a set of attributes (some of them can be arrays, lists, linked lists, queues and so on.) that represents a "data structure" 
        and doesn't have business logic at all.
    </p>
    <p>
        Although I agree with the author of the book
        (Clean Code) that creating data strucutres is different from creating objects based on a class, I really disagree with him about the concept of
        procedural code and thoughts on the behaviors of data strcutures.
        <br>
        I've add complementary information on the following paragraphs about this subject so if you really want to know what the author really thinks about these topics, I
        recommend you to take a look at his book \m/
    </p>
    <h4>Objects created from a class</h4>
    <p>
        Object are composed by data members which can be (and should to prevent sudden changes during the program execution)
        encapsulated and behaviors that operates on that data.
        <br>
        They have business logic on it's behaviors. Not all behaviors are business logic, of course. But you got it, right?
        They are not just data placeholders.
    </p>
    <h4>Data Structures created from a class</h4> 
    <p>
        Data strucutres are also composed by data and behavior members but they can expose it's data members and doesn't
        have any business logic behavior members.
    </p>
    <h4>Which is more appropriate to use: POP or OOP?</h4>
    <p>
        Well, it depends. Procedural code are a good choice to build small applications and to learn or deal with isolated topics and logic.
        OOP programming is great for robust and complex applications with a higher level of code reusability.
    </p>
    <h3>The law of demeter</h3>
    <p>
        The law of demeter is a style rule for designing Systems. Talking specifically about Object Oriented systems, these rules
        guarantee that the proper encapsulation, cohesion and loose coupling of the objects of our system.
        The rules states that the method/function of an object can only talk to friends, not strangers.
        This means that the behavior of a object can only send messages or call another object's method/function if the object is:
        <ul>
            <li>An argument of the function</li>
            <li>It's the object in which the function is attached to (self or this)</li>
            <li>Instance variable objects of the object in which the function is attached to (self or this)</li>
            <li>An object created within the method/function</li>
            <li>Global variable objects or static members of the template of the object (the Class)</li>
        </ul>
        So we are not supposed to do this:
    </p>
    <pre class="brush: python">
<code>import logging


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


class Onwer:
    def __init__(self, name, email):
        self.email = email
        self.name = name
    
    def review(self, smart_phone):
        logging.info("Review scheduled for {}".format(smart_phone.name))
    
    def open(self, app_name, smart_phone):
        smart_phone.filter_by(app_name).start() # Invoke a behavior from a Object of type App

    
class SmartPhone:
    def __init__(self, name, owner, apps):
        self.apps = apps
        self.name = name
        self.owner = owner
    
    def notify(self, message):
        logging.info("Message {} sent to {}".format(message, self.owner.name))

    def filter_by(self, name):
        found = None
        for app in list(self.apps):
            if app.name != name:
                continue
            found = app
        
        if not found:
            raise Exception("{} not found".format(name))
        
        return found


class App:
    def __init__(self, name):
        self.name = name
    
    def start(self):
        logging.info("{} started!".format(self.name.capitalize()))
    
    def stop(self):
        logging.info("{} stoped!".format(self.name).capitalize())


if __name__ == "__main__":
    defaul_apps = {
        App('calculator'),
        App('calendar'),
        App('dialer'),
        App('sms'),
        App('clock')
    }
    gabriel = Onwer('Gabriel', "gabriel@email.com")
    smart_phone = SmartPhone("SomeCoolSmartPhone", gabriel, defaul_apps)
    
    smart_phone.notify("Upcoming alarm in 10 minutes!")
    
    gabriel.review(smart_phone)
    
    gabriel.open('calculator', smart_phone)
</code>
</pre class="brush: python">
    <p>
        The object of type <b>Owner</b> has a <b>open</b> behavior that access a object of type <b>app</b> from 
        the type <b>SmartPhone</b>.
        <br>
        The object of type app is an instance variable of SmartPhone and our desing would be something like this:
    </p>
    <img class="post-img" src="images/clean-code-objects-data-structures/LOD-dont" alt="">
    <p>
        Now not only the Owner knows about the SmartPhone's internal structure by having access into one one of it's relationships,
        but also have to deals with all the possible problems that the SmartPhone would be responsible to deal with...
    </p>
    <p>
        The are quite a few amount of ways in which this interaction could happen without breaking the "Law of Demeter" like building
        "wrapper functions" to return only what we need or having the app as a argument/instance variable or creating a new instance inside
        the function so that the owner cant access the app's behaviors directly: 
    </p>
    <img class="post-img" src="images/clean-code-objects-data-structures/LOD-alternative" alt="">
    <p>
        The solution for the desing is up to you. But it's worth it to ask yourself why would the owner have direct access to the Apps?
        <br>
        The solution works but the list of apps would probably be present on the Owner's model too, which is not what I would call a desing that
        makes much sense...
    </p>
    <p>
        A good idea probably would be giving the owner the behavior of opening a app's smartphone by invoking only the SmartPhoone's interface
        and the SmartPhone only deals how it would open the App:
    </p>
    <img class="post-img" src="images/clean-code-objects-data-structures/LOD-do" alt="">
<pre>
<code>import logging


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


class Onwer:
    def __init__(self, name, email):
        self.email = email
        self.name = name
    
    def review(self, smart_phone):
        logging.info("Review scheduled for {}".format(smart_phone.name))
    
    def open(self, app_name, smart_phone):
        smart_phone.start(app_name)

    
class SmartPhone:
    def __init__(self, name, owner, apps):
        self.apps = apps
        self.name = name
        self.owner = owner
    
    def notify(self, message):
        logging.info("Message {} sent to {}".format(message, self.owner.name))

    def filter_by(self, name):
        found = None
        for app in list(self.apps):
            if app.name != name:
                continue
            found = app
        
        if not found:
            raise Exception("{} not found".format(name))
        
        return found
    
    def start(self, app_name):
        self.filter_by(app_name).start() # Invoke a behavior from a Object of type App


class App:
    def __init__(self, name):
        self.name = name
    
    def start(self):
        logging.info("{} started!".format(self.name.capitalize()))
    
    def stop(self):
        logging.info("{} stoped!".format(self.name).capitalize())


if __name__ == "__main__":
    defaul_apps = {
        App('calculator'),
        App('calendar'),
        App('dialer'),
        App('sms'),
        App('clock')
    }
    gabriel = Onwer('Gabriel', "gabriel@email.com")
    smart_phone = SmartPhone("SomeCoolSmartPhone", gabriel, defaul_apps)
    
    smart_phone.notify("Upcoming alarm in 10 minutes!")
    
    gabriel.review(smart_phone)
    
    gabriel.open('calculator', smart_phone)
</code>
</pre>
    <p>
        Now the Owner don't even know how the "Open" behavior of SmartPhone works internally, it only has to deals with the required arguments to
        open the app...
    </p>
    <h4>Data Structures created from classes</h4>
    <p>
        Does the Law of Demeter applies for data strucutres created from a class?
        <br>
        The book (clean code) has a little observation about those cases. Data Structures, by not having busines logic, could have public variables.
        So in our example, if this application was a catalog of apps and <b>App</b> was just a Data Structure, then accessing it throught the <b>SmartPhone</b> 
        wouldn't break the rules of Demeter's law at all.
    </p>
    <h3>Final thoughts</h3>
    <p>
        Objects are supposed to expose beahaviors and hide their data. In this way,
        not only the object have it's state encapsulated and have freedom to change it's internal implementation, but it also help us to create a desing with high cohesion and low
        coupling and prevent us from creating procedural programming with 
        data structures created based on a class which can be bad if this is not the goal...
    </p>
    <p>
        Also, avoid building "hybrid" classes that can create both, objects and data structures. This can causes confusions.
        If you have to create data strucutres like DTOs or Active Records to access data in databases, create separate objects to
        apply business logic and use instances of those types of objects (DTO/Active Records).
    </p>
    Good Luck XD
</div>
