<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today
        we are going to talk about how we can write clean and robust code by using error handling properly.
    </p>
    <p> 
        Error Handling is the process of antecipating, detecting and giving a solution for errors
        that can occur during the execution of the application.
    </p>
    <p>
        Error handling help us to stablish a procedure that deals with interruptions during the execution of a giving piece of code.
        <br>
        But they also can be confusing if not used right. A code with logic and try-catch-finally statements can be super hard to understand.
    </p>
    <p>
      So today we are taking a look on some tips from the book Clean Code to write clean and robust code. Let's get started!
    </p>
    <h3>Prefer exceptions over error codes</h3>
    <p>
        I already said <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">here</a> that our functions should be small and do
        only one thing. If the functions is handling errors and also have expressions within the try statement that is not function calls, it's definitely doing
        more than one thing... 
    </p>
    <p>
        Error codes forces the caller to deals with the returned code immediately and leads to nested structures, which is not good...
        <br>
        Also, when dealing with error codes instead of try-catch-finally statements, these two corcerns are mixed, making it harder to 
        know what is error handling and what is logic.
    </p>
    <p>
        Even if the amount of error codes on your function is small, keep the logic and the error handling in different blocks and expose these concerns.
        The reader will identify what is logic and what is error handling way easier. 
    </p>
    <h3>Write the try-catch-finally statement first</h3>
    <p>
        The goal behind the try-catch-finally statement (other than keeping the logic and error handling separated from each other),
        is to guarantee that our code does what it's supposed to do and to atecipate errors that can interrupt the execution of the 
        code and give solutions for those interruptions by stablishing a set of expressions that will deals with them, as you read in the begining of this article.
    </p>
    <p>
        That being said, by writing the try-catch-finally statement first we are writing exactly what the user of the function can expect if anything goes wrong in the <i>try</i> block.
        <br>
        This mindset of writing what the user can expect first leads us to one approach very well know among developers called 
        "TDD" or "Test Driven Development". 
    </p>
    <h4>Test Driven Development</h4>
    <p>
        This can be an entire separate article or set of articles...in short, TDD is a Software Development process or a set of procedures
        for writing code where we write the test cases before writing the entire Software. In other words, first you translate the requirements (the contract)
        of a functionality into test cases, then you write the code to satisfy the tests.
    </p>
    <p>
       This is contrary to the "normal" approach where we write
        the Software to satisfy the requirements and then we write the tests to guarantee that the requirements are being satisfied as
        expected.
    </p>
    <p>
        In this approach the development is driven towards the Software's requirements or contract by defining test scenarios first.
        Before writing any code, the Software's requirements are translated into test cases and the development of the Software
        is tracked down as we test the Software against those test cases.
        <br>
        This means that first we stablish what is expected as a behaviors from a function in given contexts by writing unit tests
        and then we move on to sastify those tests by writing only the necessary code. 
    </p>
    <p>
        Using the error handling as an example, first we would have to write the tests that expects a error handling for specific contexts.
        Naturally we would be forced to create a function (empty). The first time, is expected that all the test cases where is expected
        a exception or error handling to break. Now we must to write down the necessary code to satisfy each test case written.
    </p>
    <p>
        Let's say that you are writing an API to manage some clients into the database. What is expected to happen if the user
        of the API tries to insert an existing client? Let's say that the requirements says that we can create a new client if
        he doesn't exists.
    </p>
    <h4>Phase 1: Define the test cases that expects the errors:</h4>
    <img class="post-img" src="images/clean-code-error-handling/tdd-exceptions-1.png" alt="">
    <img class="post-img" src="images/clean-code-error-handling/tdd-exceptions-1-2.png" alt="">
    <p>
        I'm going to add the <b>save</b> function and the <b>ClientException</b>
        and run the test for the first time:
    </p>
<pre>
<code><font color="#5555FF"><b>.</b></font>
├── clients.py
├── <font color="#5555FF"><b>exceptions</b></font>
│   └── client_exception.py
└── <font color="#5555FF"><b>tests</b></font>
    ├── __init__.py
    └── test_clients.py

2 directories, 4 files</code>
</pre>
    <p><strong>clients.py</strong>'s content:</p>
<pre>
<code>def save(client):
    pass
</code>
</pre>
    <p><strong>client_exception.py</strong>'s content:</p>
<pre>
<code>class ClientException(Exception):
    def __init__(self, message):
        super().__init__(message)
</code>
</pre>
    <p>
        The log output after running the test case for the first time with the bare minimun code:
    </p>
<pre class="brush: python">
<code>tests/test_clients.py F                                                  [100%]

=================================== FAILURES ===================================
___________ test_should_raise_exception_if_the_client_already_exists ___________

    def test_should_raise_exception_if_the_client_already_exists():
        client = {
            "name": "Gabriel",
            "email": "gabriel@email.com"
        }
        try:
            clients.save(client)
>           assert False
E           assert False

tests/test_clients.py:12: AssertionError
-------------- generated xml file: /tmp/tmp-27388wxjS5IboWIeh.xml --------------
=========================== short test summary info ============================
FAILED tests/test_clients.py::test_should_raise_exception_if_the_client_already_exists
============================== 1 failed in 0.03s ===============================
</code>
</pre>
    <h4>Phase 2: satisfy the test cases:</h4>
    <p>
        Now <strong></strong> client.py's content is:
    </p>
<pre class="brush: python">
<code>from exceptions.client_exception import ClientException


super_cool_data_base_representation = [
    {
        "name": "Gabriel",
        "email": "gabriel@email.com"
    }
]


def save(client):
    if client in super_cool_data_base_representation:
        raise ClientException("Client already exists!")
    
    super_cool_data_base_representation.append(client)
</code>
</pre>
    <p>Now if we run the test again, it should receive the expected result:</p>
<pre class="brush: python">
<code>tests/test_clients.py .                                                  [100%]

-------------- generated xml file: /tmp/tmp-27388aLp5xKTAHwjR.xml --------------
============================== 1 passed in 0.03s ===============================
</code>
</pre>
    <p>
        Of course this is a super simple example. In a real database integration we would have
        to mock the response.
        <br>
        But you got it, right? Translate the expected behaviors into test cases before acuatlly writing the Software, 
        then continue with the process till you've satisfied all the requirements.
    </p>
    <h3>Use unchecked exceptions</h3>
    <h4>Checked exceptions</h4>
    <p>
        Checked exceptions are exceptions that are checked during the compilation time. Basically are exceptions that can't be ignored.
        The author of the code, the programmer, is forced to either handle the function call that throws an exception or list the
        exception (or exceptions) on the list of possible interruptions that can occur during the execution of a function by specifying
        them on the function's signature.
    </p>
    <p>
        In Java for instance, the code can be complied if the compiler checks those exceptions and detect that they are handled or listed
        on the function's declaration.
    </p>
    <h4>Unchecked exceptions</h4>
    <p>
        Are exceptions that are "ignored" by the compiler, which means that the author of the code is not forced to handle the exception on the
        caller function or list the exception as a possible exception to be thrown by the function as a not handled exception.
    </p>
    <h4>The problem with checked exceptions</h4>
    <p>
        Checked exceptions breaks encapsulation by adding dependences between functions  by forcing the caller to handle or to add the exceptions
        of lower level functions into it's signature. If we change lower level functions, we have to change higher level functions.
    </p>
    <p>
        They are good for critical libs but in general, they violates the <i>open/closed</i> principle. Every change in exceptions thrown from lower level functions
        results in changes on higher level functions. With the open/close principle, we are not supposed to change source code that is not directly related
        with the requirements we are working with when writing a new or altering a piece of code.
        <br>
        In other words, we shouldn't have to modify other parts of the code that satisfy different requirements everytime a requirement is added or changed.
    </p>
    <h4>The open/closed principle</h4>
    <p>
        The <i>open/closed principle</i> is one of the principles of SOLID for designing OOP applications. It states that a module, function or class should be
        open for extension but closed for modification. This means that an entity (Class, object or module for instance) can have
        it's behaviors extended without having it's source code modified.
    </p>
    <p>
        This means that we are not supposed to change/modify the source code of a entity everytime requirements change but the entity can have it's
        behaviors extended by adding new ones to satisfy those requirements.
    </p>
    <p>
        So a class for instance is called closed for modification when it has behaviors, interfaces being used by other parts of the code but it's called
        open because it can be extented by another class and have it's behaviors extended without having it's source code modified.
    </p>
    <p>
        The same goes for modules, a module is called closed when it's has a well defined set of behaviors and data structures that can be used by other
        parts of the applications, but it's called open for adding new properties to it's data structure or adding a new behavior without having it's existing
        data structures and behaviors modified.
    </p>
    <p>
        The same goes for functions, we can extend them by adding layers, but we're not supposed to change the functions we are calling on those layers.
    </p>
    <h3>Adding contexts for your exceptions</h3>
    <p>
        Exceptions are events that intrerrupts the natural flow of a application. So it's important to add contexts for those interruptions
        to easilly identify the cause of the problem.
    </p>
    <p>
        The stack of the exception is super useful, but sometimes it's not enough. Make sure that you are passing on enough information on your
        error messages when raising or throwing an exception like the operation that failed and the type of failure so that you can log
        it on your catch.
    </p>
    <h3>Define Exception Classes in Terms of a Caller's Needs: Errors Classification</h3>
    <p>
        There are well known ways of categorise errors like by component or by type. This subhead introduces a different way of 
        think when doing this, and that would be <i>by the caller's needs</i>.
    </p>
    <p>
        That's it, if the caller needs a wrapper class for exceptions throwed by a third-party API, a new wrapper class should be created.
        If the caller needs a class that represents an error from a specific component, create one.
        If the caller needs a class that represents a specific type, create one. 
    </p>
    <h4>Wrapping third-party APIs</h4>
    <p>
        Wrapping APIs that are provided by other companies is a good practice. This prevents our code from:
        <ul>
            <li>Having dependences upon specific API's. Maybe, in the future, you want to change the API's version or even change the API being used. Well, it's going to be harder if the APIs are being used in different places on your code.</li>
            <li>Having depedences upon third-parties companies's desing.</li>
        </ul>
    </p>
    <p>
        By Wrapping third-party APIs we are not only minimizing the depedence of out application upon them, but also making
        it easier to mock those calls and to add a custom desing to them. This also includes the possibility of throwing our own exceptions.
    </p>
    <h3>Stylish ways of dealing with exceptional cases</h3>
    <p>
        The vast majority of the cases our exceptions have almost the same purpouses: to let us now that an interruption occured and the details about it.
        But sometimes we actually need more than that to be done but the code starts to get mixed up again, I mean, the error handling are supposed to
        be separated from the logic block, exposing it's statements so that the reader (the programmers) can identify things easily.
    </p>
    <p>
        Some exceptions leads to a catch where there is more logic behind the error handling. This can be either to deals with null objects returned from
        one of the function's statements or to deals with more than one type of object on the same function.
    </p>
    <p>
        There are patterns that can help us on those cases. Help us to keep the code clean and, at the same time, robust.
    </p>
    <h4>The Special Case Pattern</h4>
    <p>
        For those cases where the caller has to deals with more than one type of object, by "type" I mean that the objects were created based on different
        templates of code (types or classes), putting the preferable object into the <i>try block</i> and the one object into the <i>catch block</i> is one option.
        <br>
        This is an example of this scencario:
    </p>
    <img class="post-img" src="images/clean-code-error-handling/SpecialCasePattern-1.png" alt="">
<pre class="brush: python">
<code>class Garage:
    def __init__(self, car=None, motorcycle=None):
        self.car = car
        self.motorcycle = motorcycle

class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def drive(self):
        print("Driving {}...".format(self.brand))


class Motorcycle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def drive(self):
        print("Driving {}...".format(self.brand))

if __name__ == "__main__":
    garage = Garage(motorcycle=Motorcycle("BMW", "M 1000 RR"))
    try:
        garage.car.drive()
    except AttributeError:
        garage.motorcycle.drive()</code>
</pre>
    <p>
        If you are familiar with the OOP principles you might be thinking that this is more of a desing issue than a option.
        <br>
        I  aggree...but even though this can be considere a "design issue" it's very common...
    </p>
    <p>
        On this pattern we create an abstract class with the data and behavior members we need and both classes extends it. 
        In this way, we can create objects of different types but they are based on the same base template, they are "brothers" . The user of those objects
        always returns the parent type and is responsible for returning one of it's children.
    </p>
    <p>
        Now the caller has only to deals with the base type (the parent), regardless of the object returned.
    </p>
    <img class="post-img" src="images/clean-code-error-handling/SpecialCasePattern-1.1.png" alt="">
<pre class="brush: python">
<code>class Garage:
    def __init__(self, car=None, motorcycle=None):
        self.car = car
        self.motorcycle = motorcycle
    
    def available_vehicle(self):
        return self.car or self.motorcycle

class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def drive(self):
        print("Driving {}...".format(self.brand))

class Car(Vehicle):
    pass


class Motorcycle(Vehicle):
    pass

if __name__ == "__main__":
    garage = Garage(motorcycle=Motorcycle("BMW", "M 1000 RR"))
    vehicle = garage.available_vehicle()
    vehicle.drive()

</code>
</pre>
    <p>
        Of course on these contexts we are considering a <i>must have at least one</i> logic so that our logic works. If none of the vehicle are available,
        this won't work as expected, naturally...
    </p>
    <p>
        But this leads us to another interesting pattern that allow us to create this <i>do nothing</i> relationship that could be useful on scenearios where
        the object we need is null, on this case, where none of the vehicles are available, the <i>Null Object Pattern</i>
    </p>
    <h4>The Null Object pattern</h4>
    <p>
        This pattern is a stylish way of dealing with null objects. It's natural that the user of a object have error handling for cases where the
        need object is not present. Following the same idea as the <b>Special Case Pattern</b>, a object with <i>do nothing</i> behaviors is returned
        if the required object is null.
    </p>
    <img class="post-img" src="images/clean-code-error-handling/NullObjectPattern-1.png" alt="">
<pre class="brush: python">
<code>class Garage:
    def __init__(self, car=None, motorcycle=None):
        self.car = car
        self.motorcycle = motorcycle

class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def drive(self):
        print("Driving {}...".format(self.brand))


class Motorcycle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def drive(self):
        print("Driving {}...".format(self.brand))

if __name__ == "__main__":
    garage = Garage()
    if not garage.car and not garage.car:
        raise Exception("No available vehicles.")
    try:
        garage.car.drive()
    except AttributeError:
        garage.motorcycle.drive()
</code>
</pre>
    <p>
        The above code has a validation on the caller so that we also have a <i>non existing</i> or <i>null object</i> scenario for all objects.
        <br>
        Compare this solution written in other words:
    </p>
    <img class="post-img" src="images/clean-code-error-handling/NullObjectPattern-1.1.png" alt="">
<pre class="brush: python">
<code>class Garage:
    def __init__(self, car=None, motorcycle=None):
        self.car = car
        self.motorcycle = motorcycle
    
    def available_vehicle(self):
        return self.car or self.motorcycle or NullObject()


class Vehicle:
    def __init__(self, brand=None, model=None):
        self.brand = brand
        self.model = model
    
    def drive(self):
        print("Driving {}...".format(self.brand))


class Car(Vehicle):
    pass


class Motorcycle(Vehicle):
    pass


class NullObject(Vehicle):
    def drive(self):
        print("No available vehicles.")


if __name__ == "__main__":
    garage = Garage()
    vehicle = garage.available_vehicle()
    vehicle.drive()
</code>
</pre>
    <p>The only thing the caller needs to know is what arguments to provide and use the return.</p>
    <h3>Don't return Null</h3>
    <p>
        Returning null is the same deal as returning error codes, we already talked about returning exceptions vs error codes <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">here</a>. They leads to nested statements, we can forget to apply the logic...
        The part of forgetting to apply the logic can be solved with unit testing. But it doesn't exclude the fact that nested structures and
        additional layers (function) has to be created to fully achieve the requirements.
    </p>
    <p>
        Prefer to throw exceptions or return a null object if you have to deals with null returns.
    </p>
    <h3>Don't pass Null</h3>
    <p>
        Don't pass null into functions. Prefer to add validations into the function to prevent <i>null pointer exceptions</i>...
    </p>
    Good Luck XD
</div>
