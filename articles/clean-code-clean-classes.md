<div style="text-align: left;">
    <p>
        If you read the article about the difference between <a href="https://gabrielslima.github.io/blog/post.html?id=10" target="blank">Objects and Data Structures</a>
        or if you already have experience writting OOP code you know that Objects are like "mini programs" that composes an application
        and that Classes are the templates for creating those objects.
    </p>
    <p>
        So far, if you've read the last articles, you know how to create <b>clean and meaningful functions</b>. But how can we create Clean Classes?
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
        This "way" of writting the code is called <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">The Stepdown Rule</a>.
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/class-structure.svg" alt="">
    <p>
        The image above shows the recommend structure of a class based on the Java Convetion for classes. Although the book doesn't recommends the usage of
        protected members I thought it was worth it to include them too.
    </p>
    <h3>Small Classes</h3>
    <p>
        To say how small functions should be we count the number of lines and how many thing it's doing (should be only one thing).
        To measure how small classes should be we have to count <i>how many responsabilities</i> it has.
    </p>
    <p>
        They should have just one responsibility only and their names should describe the responsibility...
    </p>
    <h3>The Single Responsibility Principle</h3>
    <p>
        This is one of the SOLID principles for designing OOP applications. It states that our classes, modules and functions should be responsible for only one piece
        of the entire feature. In other words, those entities should have only one reason to change: only if the requirements requires them to change directly.
    </p>
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
        Cohesion is a measurement of the strength of relationship between the the elements of a module. The elements (variables and methods) should work together to achieve a specific goal and the module should have
        a single responsibility. For the elements to work together to achieve a specific goal, they must belong logically together. Otherwise the modules clearly doesn't have a specific responsibility.
        When it comes to classes, the class should have only one responsibility, only one goal, and the members (data and behaviors/methods) should work together to achieve this goal. The attriibutes/data members should represent only the state
        of the object. The behaviors should work with those data members to achieve the goal. The higher the cohesion, I mean, the stronger the reletionship between the elements of a module, the better.
    </p>
    <p>
        We can make the relationship between variables and methods stronger by using the variables in methods. The more variables are used by the methods of a class, the more cohesive the class is.
        The more variables of a class a behavior/method uses, the more cohesive the behavior is to it's class and therefore, the more cohesive the class is.
        <br>
        A class is maxissively cohesive if each data member is used by each behavior member (the methods).
    </p>
    <p>
        We want classes with high cohesion. This means that the data and behavior members of a class are codependent (the state of a class depends on a behavior or group of behaviors to be manipulated) and they're connected,
        working together as a logical whole.
    </p>
    <p>
        High cohesion makes the code simpler because we have "specialist" classes with fewer behaviors and therefore reducing the complexity (increases the readability) and it also helps
        to create low coupling objects (increases the maintainability).
    </p>
    <h4>Dealing with ploriferation of instance variables</h4>
    <p>
        Limiting the amount of lines inside a funtion and the amount of parameters it receives can lead to a ploriferation of instance variables. In these cases is worth it to
        analyse if another class needs to be created to group these set of functions.
        
    </p>
    Good Luck XD
</div>