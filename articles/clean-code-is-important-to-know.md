<div style="text-align: left;">
    <p>
        The overall objective of today's article is to summarize important topics you need to know to start
        creating clean code. It's important to understand that a clean code is not attached to a specific language
        or thecnology. Clean code is all about communication through the tools you alredy have, but using
        principles and desing patterns to reveal your intentions
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's topic is
        <strong>what principles you should know to write clean code</strong>...let's dive into it.
    </p>
    <h2>Super important principles and concepts</h2>
    <p>
        To create clean code, first you start with common sense. You don't need to know any principle
        to know that by mixing up logic that doesn't seems to belong together makes the code more confuse or
        that long source files with long classes and functions are harder to understand. 
    </p>
    <p>
        Maybe you are using some of the following principles and don't even know that it's a thing.
        Let's explore what are some principles we have to help us to create a cleaner code.
    </p>
    <h3>Functions</h3>
    <p>
        Starting by one of the first things you learn when starting with programming, the functions.
        when first strating with code we don't write much functions. Usually the instructions are
        pretty simple and the programs are small. Maybe 5 - 10 lines long.
    </p>
    <p>
        As the program's complexity grows at some point you start to notice that a lot of the instructions are
        duplicated. That's when functions starts to appear. Functions are one of the first (if not the first)
        concept we have contact and is the first concept that introduces the conpcet of <strong>modularity</strong>.
    </p>
    <p>
        A module is a logical section. A module can be a function, class, source file or system/application.
        By using functions another super important principle is introduced, <strong>reusability</strong>.
        Functions provides a simple way of reusing existing code to perform a task whenever it's needed.
    </p>
    <h4>The size</h4>
    <p>
        Functions should be as small as possible. To be more acertive, they should do a specific work, I mean,
        do only one single thing.
    </p>
    <p>
        For instance, error handling is different from the function's main logic. An HTTP request is different
        from seralization. Validation is different from business logic and so on. In this way, the process for
        testing them, understanding them, changing or adding stuff, refactoring is way simpler. In other
        words, the readability and mantainability is increased.
    </p>
    <h4>Layers of Abstraction</h4>
    <p>
        By creating small and specialized functions you will notice that your code will have way much more functions
        than you expected. Instead of having a function that calculates values and the same function creates a
        report output called <strong>get_montly_report</strong>, this process will be broken in at least two
        steps, <strong>calculate_monthly_expenses</strong> and <strong>create_report_from(Expenses expenses)</strong>.
    </p>
    <p>
        This process of creating small function will lead to a <strong>layered organization</strong>.
        The first function you see is the highest layer, meaning that you will have more abstractions and less
        details. As
        you go down the details are added but the complexity is manageable because you have a small amount
        of information in each layer.
    </p>
    <h4>The names</h4>
    <p>
        Choosing well defined and descriptive names will help you as you reading the layers.
        The names should reveal the intent of the function.
    </p>
    <p>
        Don't forget to choose good names for your local and global variables. They should be simple an easy
        to read and this should result in easier layers to read and understand.
    </p>
    <p>
        To choose good names for your functions consider asking yourself the following questions about the
        function/variable: 
        <strong>Why it exists?</strong>, <strong>What it does?</strong> and <strong>How it is used?</strong>.
        You (the author) should completly reveal you intentions through the names for the readers.
    </p>
    <h4>Amount of Arguments</h4>
    <p>
        This one is very fast, the less arguments, the better. The more arguments, the harder the
        function will be to test, the more time readers will take to understand what the function does
        and everytime someone needs to use it, the function's signature will have to be checked.
    </p>
    <p>
        The goal here is to have 1 or 2 arguments. 3 at the most. And the name will be or end up with a verb
        that goes with the arguments. For instance <strong>users_repository.fetch_by(String name)</strong>,
        <strong>queue.write(String message)</strong>, <strong>authorizator.check_permissions_for(User user, AccessGroups request_groups)</strong>
        or <strong>counter.increment(Int total, Int value_to_be_incremented, Int interval)</strong>.
    </p>
    <h4>The stepdown rule</h4>
    <h4>Error handling</h4>
    <h3>Object Oriented Programming (OOP)</h3>
    <p>
        In procedural programming, our system/application is composed by procedures/functions/methods and data strucutres.
        To help us to organize things, let's say, if a source file is getting too long, modules can be
        used to split the code into one or more other source files.
    </p>
    <p>
        In Object Oriented Programming our system/application is composed by Objects. We also have procedures
        and data structures, but the objects group them and act as if they were independent from each other.
    </p>
    <h4>Classes</h4>
    <p>
        The definition of a class can be achieved in a few words, a class is a template for creating objects or
        data structures. Classes can be composed by data (variables/attributes) and behaviors (methods/functions).
        The functions can have (or not) a body.
    </p>
    <h4>What objects are?</h4>
    <p>
        Objects are like mini programs that runs within the system/application. They are
        composed by data and behaviors members. The data members represents the object's state. The
        behavior members are used to change the object's state or retrive information about them.
    </p>
    <p>
        Objects can interact with each other by using each other's public interfaces.
        For instance, you can have a <strong>report_generator</strong> object and a <strong>report_printer</strong>
        one. The can call each other's public behaviors.
    </p>
    <h4>Data Strucutres created based on classes?</h4>
    <p>
        Classes can also be templates for Data Strucutres. A data structure is a way of storing data
        into your computer. A Data Strucutre doesn't have behaviors related to business logic.
        Value Object (VO) or a Data Transfer Object are examples of Data Strucutres created based on
        a code template (Classe).
    </p>
    <h3>Object Oriented Programming Concepts</h3>
    <h4>Instance vs Classes variables</h4>
    <h4>Object attached behaviors vs non-attached behaviors</h4>
    <h4>Encapsulation</h4>
    <h4>Polymorphism</h4>
    <h4>Abstraction</h4>
    <h4>Inheritance</h4>
    <h4>Composition</h4>
    <h3>Software Engineering -illities</h3>
    <h3>Coupling</h3>
    <h3>Cohesion</h3>
    <h3>The Law of Demeter</h3>
    <h3>SOLID</h3>
    <h4>Single Responsibility Principle</h4>
    <h4>What a concern is</h4>
    <h4>Open/Closed Principle</h4>
    <h4>Liskov Substitution</h4>
    <h4>Interface Segregation</h4>
    <h4>Dependecy Inversion</h4>
    <h3>Separation of Concerns</h3>
    <h3>Inversion of Control</h3>
    <h3>Aspect Oriented Programming</h3>
    <h4>Aspects</h4>
    <h4>Advice</h4>
    <h4>Pointcut</h4>
    <h4>Join point</h4>
    <h3>Serialization</h3>
    <h2>Desing Patterns</h2>
    <h3>Singleton</h3>
    <h3>Dependecy Injection</h3>
    <h3>Lazy Initialization</h3>
    <h3>Repositories</h3>
    <h3>Data Access Object</h3>
    <h3>Factory</h3>
    <h3>Null Object</h3>
    <h3>Decorators</h3>
    Good Luck XD
</div>