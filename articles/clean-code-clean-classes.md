<div style="text-align: left;">
    <p>
        If you read the article about the difference between <a href="https://gabrielslima.github.io/blog/post.html?id=10" target="blank">Objects and Data Structures</a>
        or if you already have experience writting OOP code you know that Objects are like "mini programs" that composes an application. And that Classes are the templates for creating those objects.
    </p>
    <p>
        So far, if you've read the last articles, you know how to create <b>clean and meaningful functions</b>. But how can we create <strong>clean and meaningful classes</strong>?
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today
        you are going to learn what do you need to create Clean and meaningful Classes. Let's get into it!
    </p>
    <h3>How Classes should be structured: The Organization of Classes</h3>
    <p>
        Files should be strucutred as a newspaper article. The name and title should convey what the article is about. The first paragraph
        should introduce the topics to be  explored on the following paragraphs and the body should explore those topics, adding details
        as we go down...
        This "way" of writting code is called <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">The Stepdown Rule</a>.
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/class-structure.svg" alt="">
    <p>
        The image above shows the recommend structure of a class based on the Java Convetion for classes. Although the book doesn't recommends the usage of
        protected members I thought it was worth it to include them too.
    </p>
    <h3>Small Classes</h3>
    <p>
        To say how small functions should be we count the number of lines and how many thing it's doing (should be only one thing).
        To measure how small a class is we have to count <i>how many responsabilities</i> it has.
    </p>
    <p>
        They should have just one responsibility only and their names should describe the responsibility...
    </p>
    <h3>The Single Responsibility Principle</h3>
    <p>
        This is one of the SOLID principles for designing OOP applications. It states that our classes and modules should be responsible for only one piece
        of the entire feature. In other words, those entities should have only one reason to change: only if the requirements requires them to change directly.
    </p>
    <p>
        The SRP is about separation of concerns. The responsibility part is about specific parts of a class that changes independently from other parts of it because it's about a different concern.
        If you see that a method for instance seems to be changed independently of other behaviors of the same class, this is a sign that the class have more than one responsibility.
        With "change independently" I mean that although the method/function/behavior seems to belong logically to the class, they are more of an additional behavior than a necessary behavior to
        accomplish the specific goal implied by the classes's name.
    </p>
    <p>
        Here are a few examples of classes for an online Game: 
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/SRP-BROKEN.svg" alt="Broken SRP">
    <p>
        The image above illustrates a class that is supposed to handle the user's input related to the current logged player on the game. If you pay attention, the behaviors <strong>last_matches</strong>
        and <strong>save_match()</strong> are behaviors that has a relationship with the Class Player, but providing information about the player's last matches or saving matches ins't responsibility of this class...
    </p>
    <p>
        To support the SRP principle we would have to create one more class to deal with this kind of request:
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/SRP.svg" alt="SRP">
    <h4>Why I didn't use the class AbstractMatch to imply a <i>save()</i> or other functions related to the Report?</h4>
    <p>
        The AbstractMatch is a representation of a match between two teams. Every match have a score and a way of connecting and disconnecting from it. Saving the current match so that the player can watch it later is not
        it's concern. It's concern is to manage the "Match Environment", I mean, keep the amount of players updated, provide ways of connecting and disconnecting and so on.
    </p>
    <p>
        Of course, in online games the backend's architecture is way more complex and elaborated than this. Probably a lot of things would be different related to this desing. Online matches requires network connection, 
        a server. Ways of securing it and so on. That's a super basic example.
    </p>
    <p>
        The motivation for this principle or a few motivations for this principle to be created are <strong>to isolate the objects</strong> and <strong>to reduce the risks of changes</strong> on classes.
    </p>
    <p>
        Classes are composed by data and behavior members. The same way it can be simple to change/remove some of them from a class and put them into another one, it can be super hard if the responsabilities are tightly coupled on the same class.
        <br>
        One requirement changes and the entire class has to be tested all over again. On the above example, the output of the behavior <strong>last_matches</strong> can change. The visualization can change. The amount
        of fields can change. Maybe the report changes to provide a video. What if a image report is required? The entire class Player will have to be tested every single time 
        a change is made.
    </p>
    <h4>Making the code work is enough...</h4>
    <p>
        It's commom to think that the job is done once the code works. But that's not true. The job is done once the code works and it's clean. These are two different things.
        <br>
        Instead of going to the next problem after solving the current one, go back and make the code cleaner by breaking it into small units with specific
        responsibilities and, of course, using previous tips about names, functions, error handling and so on...
    </p>
    <p>
        For large code bases, one of the main concerns is having lot's of classes and because of that the system becomes more complex than before, making it harder to understand...Well, that's not completly true.
        <br>
        Yes, with lots of small classes the system can be hard to read but at the same time it's well organized. So it's easier to find what you are looking for
        if you have specific places to look into instead of a few places to look into and lots of lines of code in only one place.
    </p>
    <p>
        Developers should be able to focus on only one affected complexity or concept at a time and be able to ignore details that are not relevant for the given context. Learning about the system
        as needed.
        <br>
        We want a system composed by small classes with specific responsibilities and that those features that requires more than one class to work together can work
        without having to worry about the structure of the others...
    </p>
    <h3>Cohesion</h3>
    <p>
        Cohesion is a measure of the strength of relationship between the the elements of a module. The elements (variables and methods) should work together to achieve a specific goal and the module should have
        a single responsibility. For the elements to work together to achieve a specific goal, they must belong logically together. Otherwise the module clearly doesn't have a specific responsibility.
    </p>
    <p>
        When it comes to classes, the class should have only one responsibility, only one goal, and the members (data and behaviors/methods) should work together to achieve this goal. The attributes/data members should represent the state
        of the object. The behaviors should work with those data members to achieve the goal. The higher the cohesion, I mean, the stronger the reletionship between the elements of a module, the better.
    </p>
    <p>
        We can make the relationship between variables and methods stronger by actually using the variables in methods. The more variables are used by the methods of a class, the more cohesive the class is.
        The more variables of a class a behavior/method uses, the more cohesive the behavior is to it's class and therefore, the more cohesive the class is.
        <br>
        A class is maxissively cohesive if each data member is used by each behavior member (the methods).
    </p>
    <p>
        We want classes with high cohesion. This means that the data and behavior members of a class are codependent (the state of a class depends on a behavior or group of behaviors to be manipulated) and they're connected,
        working together as a logical whole.
    </p>
    <p>
        High cohesion makes the code simpler because we have more specific classes with fewer behaviors rather than generic classes. This help us to reduce the complexity (increases the readability) and also to create low coupling objects (increases the maintainability).
    </p>
    <p>
        Here are an example of a low/high cohesion object:
    </p>
    <h4>Low Cohesion</h4>
    <img class="post-img" src="images/clean-code-clean-classes/low-cohesion.svg" alt="">
    <p>
        The function <strong>measureTemperature()</strong> on the first image is within the <strong>Person</strong> class. It makes sense to have a behavior like that because you know, our bodies have a temperature.
        <br>
        But it makes even more sense to create a separate class for this function called <strong>Thermometer</strong> that will measure any object. We don't need to create a new object everytime we need to check
        the temperature of another object, so we can create a <strong>public static function</strong> (public behavior that is member of a class and is not attached to any instance) and have the object we want to check the temperature
        an argument for this function.
    </p>
    <h4>High Cohesion</h4>
    <img class="post-img" src="images/clean-code-clean-classes/high-cohesion.svg" alt="">
    <p>
        So a quick summary. Cohesion is a measure of the strengh of relationship between the elements of a module. It says the degree in wich these elements belongs together. The more cohesive a module is, the more specialist it is and, therefore, the more reusable, readable
        and maintainable it is.
        <br>
        This means that not only the elements need to connect with each other (by calling/using each other) but also that logically they belong together by sharing a set of common tasks/body or because they are connected by the responsibility
        of the module.
    </p>
    <h4>Dealing with lots of variables on the module/class</h4>
    <p>
        If the module/class has lots of variables try to identify those that logically doesn't fit the responsibility of the module or class and create a new one to aggroup them.
    </p>
    <p>
        When refacting code it's common to extract smaller functions from other functions. These "smaller functions" can be required so that the main function can execute it's task but they are not directly related to the responsibility of the module itself.
        Its worth it to analyse and consider the possibility of a new class or module instead of creating a new method into the module/class.
    </p>
    <p>
        Another example of this kind of scenario is also when we want to extract smaller functions from another function but the smaller function needs some arguments that are part of the body of the "main function" or they are received as arguments by the "main function".
        <br>
        In these cases one workaround would be declare those variables as instance variables if your application is OOP or as global variables if your application is POP (Procedural Oriented Programming).
        But pay attention to the cohesion. If the functions and the variables to be extracted from this larger function doesn't seems to fit logically to the module or class, consider the possibility of creating a new one.
    </p>
    <h3>Isolating from Change: coupling</h3>
    <p>
        One of the most important concepts in OOP is coupling. Coupling also is a measure, but instead of a saying the degree in which the elements of a module or class belongs together, it says the strenght of the relationship between the modules 
        of our application. In this case, how strong the relationship between the classes of our system is, I mean, how depentent they are on each other.
        <br>
        The classes, can be tightly coupled, meaning that they are highly dependent on each other. Or they can be loosely coupled, meaning that they are not dependent on each other.  
    </p>
    <p>
        In a tightly coupled desing classes access concrete classes directly. This creates a dependence between the client class and the provider class. The provider can't just change the implementation
        of a behavior or it's signature without breaking it's clients.
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/SRP.svg" alt="SRP">
    <p>
        On the above example the AbstractMatch class implies a <strong>save()</strong> method that will save the current match's state. It calls the the concrete <strong>MatchReport</strong>. This creates a
        dependence of the AbstractMatch on the MatchReport. And this brings us to the Depence Inversion Principle or DIP.
    </p>
    <h4>The Dependence Inversion Principle</h4>
    <p>
        This principle states that <strong>the classes of our application should depends on abstraction, not on concrete details</strong>. So to satisfy this principle our desing would have to be something more like the following:
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/DIP.svg" alt="">
    <h4>The Open/Closed Principle</h4>
    <p>
        The Open/Closed principle is also one of the SOLID principles. It states that our classes and modules should be <strong>open for extension but closed for modification</strong>.  In other words,
        we can only write new code, I mean, we can extend an existing class or module but we can't change existing ones. We can actually modify an existing one, I mean, acatually change the variables or the behaviors
        of a module or class, only when we have to fix a bug/error on it.
    </p>
    <p>
        A module is said open if we can open it and change existing data strcutures and elements of the existing interfaces. It's said closed if it has well defined interfaces and data strucutres and are being used by other modules of the application.
        <br>
        When it comes to classes, a class is said closed if it was already being compiled and stored in a lib and are being used by other client classes. It is said open because other classes can used it as a parent class.
    </p>
    <p>
        So let's say that on our last example the requirements says that a video report option is required. The first thing one would thought without having the OCP in head can be maybe this:
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/BROKEN-OCP.svg" alt="">
    <p>
        But assuming that these classes you see above have already being tested, validated and are in use in production. They "can't be changed" because we would be violating the OCP. So to actually support this principle we
        would have to apply inheritance to the report's desing and extend the existing classes. Something like this: 
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/OCP.svg" alt="">
    <h4>What if the business requires a <i>delete report</i> feature?</h4>
    <p>
        There are many opinions over the internet about this kind of scenario. Specially because in some places the OCP is described as rule that states that we can't change our classes at all
        without giving some important considerations about it to the reader. For instance the time it was created. It's first appearance was on the book Object Oriented Software Construction in 1988.
        <br>
        Another important consideration, this principle is about compiled languages. What about the interpreted ones?
    </p>
    <p>
        The OCP is also about changes. Changes in any code is a risk. Something can break and stop working. To know if something is broken or not we have to test and validate it all over again.
        To avoid this kind of scenario, the OCP is one of the principles that says directly that well defined modules or classes "can't be touched".
        Unless the requirements requires so. Let's say because it has a bug or error.
    </p>
    <p>
        Adding a new method to a class or module is to add a new interface to it. This means that we are actually extending it. The violation is when we have to change interfaces that already in use by other classes. They've been tested and validated.
        I mean, changing elements inside existing interfaces or changing existing data members that are used by those interfaces, the same ones that have been "closed" because they've been tested and validated and are 
        well defined and are being used by other modules/classes is a "violation".
    </p>
    <p> 
        Even so, this principle was created in times where the projects were managed using the waterfall model. Today, the vast majority of the projects are agile, the requirements can change at any time.

    </p>
    <p>
        I think the smartest thing to say is: desing your objects to be extendable with well defined interfaces. But don't be so attached to this principle. For what I've seen over the internet, and
        I bet you've realized too, is that this principle became more of a guideline than a principle per say.
    </p>
    <p>
        If you find yourself violating it many times, maybe it's a good idea
        to revaluate the overall desing of the system and cosider refactoring instead of creating lots of classes that holds one method only.
    </p>
    <h3>Final Thoughts</h3>
    <p>
        Good OOP desings are clean and clear. The classes have high cohesion and are loosely coupled from each other. They also have specific responsibilities, well defined interfaces and depends on abstract classes instead of concrete ones.
    </p>
    <p>
        The classes of our application should be small and specific. To guarantee that they are small and specific, they should have only one responsibility. Meaning that they should worry about only one thing. If the class is an HttpConnector, it shouldn't calculate
        anything for instance or apply any other type of "additional behavior" that can be changed independent of the state of the class or other behavior it has.
    </p>
    <p>
        To reduce the risks of changes on existing classes, apply the Dependence Inversion principle. This is going to help you to create classes that depends on abstract interfaces and to create loose coupled classes.
    </p>
    <p>
        Don't forget to create well defined interfaces and data members. The Open/Closed Principle will help you on creating desings that are more stable and reliable.
    </p>
    Good Luck XD
</div>