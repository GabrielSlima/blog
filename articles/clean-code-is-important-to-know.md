<div style="text-align: left;">
    <p>
        The overall objective of today's article is to summarize important topics you need to know to start
        writing clean code. It's important to understand that a clean code is not attached to a specific language
        or technology. Clean code is all about communication through the tools you already knows, but using
        principles and desing patterns to better reveal your intentions.
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's topic is
        <strong>principles and desing patterns you should know to write a cleaner code</strong>...let's dive into it.
    </p>
    <h3>Super important principles and concepts</h3>
    <p>
        To create clean code, first you start with common sense. You don't need to know any principle
        to know that by mixing up logic that doesn't seems to belong together makes the code more confuse or
        that long source files with long classes and functions are harder to understand. 
    </p>
    <p>
        But in fact some of the things we do as "common sense" is actually a concept or a design pattern.
        Maybe by using common sense we're not fully applying the concept or desing pattern, but that's not the point.
        The point is, we start wrting clean code after we notice that things are getting messy.
    </p>
    <p>
        That being said, let's explore what are some principles and desing patterns we have to
        help us to create a cleaner code.
    </p>
    <h3>Functions</h3>
    <p>
        Starting by one of the first things you learn when starting with programming, functions.
        When first strating with code we don't write many functions. Usually the instructions are
        pretty simple and programs are small. Maybe 5 - 10 lines long.
    </p>
    <p>
        As the program's complexity grows at some point you start to notice that a lot of the instructions are
        duplicated. That's when functions starts to appear. Functions are one of the first (if not the first)
        concept we have contact and is the first concept that introduces the concept of <strong>modularity</strong>.
    </p>
    <p>
        A module is a logical section. A module can be a function, class, source file or system/application.
        By using functions another super important principle is introduced, <strong>reusability</strong>.
        Functions provides a simple way of reusing existing code to perform a task whenever it's needed.
    </p>
    <p>
        Now to the best practices, starting with functions.
    </p>
    <h4>The size</h4>
    <p>
        Functions should be as small as possible. To be more clear, they should do a specific task, I mean,
        do only one single thing.
    </p>
    <p>
        For instance, error handling is a different thing from the function's main logic. An HTTP request is different
        from seralization. Validation is different from business logic and so on.
    </p>
    <p>
        To make functions small we must break them into small individual pieces. One function performs the validation,
        another one the error handling and so on. In this way, the process for
        testing them, understanding them, changing or adding stuff, refactoring or any thing related to
        each function and the task they performs is way simpler. In other
        words, the <strong>readability and mantainability are increased</strong>.
    </p>
    <h4>Levels of indentation</h4>
    <p>
        This principle is to prevent nested structures inside your functions. In short, your functions should have
        <strong>2 levels of indentation</strong> at the most. The function's body is the first level, control flow
        statements (if/else or switch/case) and error handling blocks have their own bodies. That's the second level.
        The statements within their bodie's should be a function call, if possible. 
    </p>
    <p>
        So instead of doing this:
    </p>
<pre class="brush: python">
<code>def delete_by(_id: str):
    if _id: #First Level of Indentation
        try: #Second Level of Indentation
            self.user_repository.delete_by(id) #Third Level of Indentation
        except UserNotFoundException as _exception:
          logging.info(str(_exception))
</code>
</pre>
    <p>
        Do this:
    </p>
<pre class="brush: python">
<code>@not_blank_arguments
def delete_by(_id: str):
    self.user_repository.delete_by(id)
</code>
</pre>
<pre class="brush: python">
<code>class UserRepository:
    def delete_by(_id: str):
        try: #First Level of Indentation
            self.db.delete_by(idd) #Second Level of Indentation
        except UserNotFoundException as _exception:
            logging.info(str(_exception))
</code>
</pre>
    <h4>Layers of Abstraction</h4>
    <p>
        By creating small and specialized functions you will notice that your code will have way much more functions
        than you expected. Instead of having a function that calculates values and the same function creates a
        report output called <strong>get_montly_report</strong>, this process will be broken in at least two
        steps, <strong>calculate_monthly_expenses</strong> and <strong>create_report_from(Expenses expenses)</strong>.
    </p>
    <p>
        This process of creating small function will lead you to a <strong>layered organization</strong>.
        The first function you see is the highest layer, meaning that you will have more abstractions and less
        details and the caller must be above the callee. As
        you go down the details are added but the complexity is manageable because you have a small amount
        of information in each layer.
    </p>
    <h4>The names</h4>
    <p>
        Choosing well defined and descriptive names will help you as you read (or any other reader reads) the layers.
        The names should reveal the intent of the function. This includes the
        function calls within other functions.
    </p>
    <p>
        Don't forget to choose good names for your local and global variables. They should be simple an easy
        to read and this should result in easier layers to read and understand.
    </p>
    <p>
        To choose good names for your functions consider asking yourself the following questions about the
        function/variable: 
        <strong>Why it exists?</strong>, <strong>What it does?</strong> and <strong>How it is used?</strong>.
        You (the author) should completly reveal your intentions through the names for the readers.
    </p>
    <h4>Amount of Arguments</h4>
    <p>
        This one is can be described in a few workds, the less arguments, the better. The more arguments, the harder the
        function will be to test, the more time readers will take to understand what the function does
        and everytime someone needs to use it, the function's signature will have to be checked.
    </p>
    <p>
        The goal here is to have 1 or 2 arguments. 3 at the most. And the name will be or end up with a verb
        that goes with the arguments. For instance <strong>users_repository.fetch_by(String name)</strong>,
        <strong>queue.write(String message)</strong>, <strong>authorizator.check_permissions_for(User user, AccessGroups requested_groups)</strong>
        or <strong>counter.increment(Int total, Int value_to_be_incremented, Int interval)</strong>. List or keyword arguments counts as one.
    </p>
    <h4>The stepdown rule</h4>
    <p>
        At this point, if you visualize or have been writing code kind of following these previous tips, you have
        small and and specific functions with well defined names. Now for the vertical organization of them.
    </p>
    <p>
        Your files should be read following the stepdown rule. Higher level layers should be at the top. As we go down,
        we can see lower level layers. The source files should be read as a newspaper article, the title tell us
        what the article is about. The first paragraphs introduces the subject and main concepts. Details are increased
        as we go down.
    </p>
    <p>
        The title can be the source file's name or classe's name. The first functions introduces the 
        main algorithms and as we go donw on the layers details appears in a small and manageable amount.
        And don't forget, try to keep the caller always goes above the callee. But of course, tometimes
        you must order the functions by importance. Just try to keep them closer to each other.
    </p>
    <p>
        This will make your source files so much easier to read and understand.
    </p>
    <h3>No side-effects</h3>
    <p>
        If your function says it performs task Y, it should only perform task Y. No side-effect ot intermediate paths.
        If the task can't be performed for some reason, return a <strong>do-nothing</strong> object or raise an exception.
        Don't make programmers be fooled.
    </p>
    <h4>Error handling</h4>
    <p>
        To "end" this subject about, you just gotta understand that error handling is one thing and the body of your function, is
        another. Keep these two separated. Try/Catch blocks are a mess alone, mixing up with the function's logic
        can make things worse.
    </p>
    <p>
        Another important thing about error handling. If your function calls another function that can result in exceptional cases,
        keep the error handling apart from the function's logic. Now if your function has some kind of requirement to
        perform it's task and, for some reason, you decide to abort the execution, <strong>don't return error codes</strong>. Prefer
        to <strong>raise exceptions</strong>.
    </p>
    <p>
        In this way the caller don't have to be attached to any error code and don't have to deal with
        the return imediatly. This will prevent the caller from having nested structures.
    </p>
    <p>
        To know more about functions and naming you can access <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">this article</a>.
    </p>
    <h3>Object Oriented Programming (OOP)</h3>
    <p>
        In procedural programming, our system/application is composed by procedures/functions/methods and data strucutres.
        To help us to better organize things, let's say, if a source file is getting too long, modules can be
        used to split the code into one or more other source files.
    </p>
    <p>
        In Object Oriented Programming our system/application is composed by Objects. We also have procedures
        and data structures, but classes and objects groups them and act as if they were independent from each other.
    </p>
    <h4>Classes</h4>
    <p>
        The definition of a class can be achieved in a few words, a class is a template for creating objects or
        data structures. Classes can be composed by data (variables/attributes) and behaviors (methods/functions).
        The functions can (or not) have a body.
    </p>
    <h4>What objects are?</h4>
    <p>
        Objects are like mini programs that runs within the system/application. They are
        composed by data and behaviors members. The data members represents the object's state. The
        behavior members are used to change the object's state or retrieve information about them.
    </p>
    <p>
        Objects can interact with each other by using each other's public interfaces.
        For instance, you can have a <strong>report_generator</strong> object and a <strong>report_printer</strong>
        one. They can call each other's public behaviors.
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
    <p>
        For every new Instance a copy of the variables described on the template (the class) is created. Those variables
        are called <strong>instance variables</strong>. That's what enables objects to have different states and
        data structures to have different values from other of the same type.
    </p>
    <p>
        For those variables that are not attached to any instance, they are part of the class, the code template. They can be
        accessed by any instance. These variables are know as <strong>class variables</strong>. They can represent a
        general state for every instance. They also can be constants like date/datetime masks, values and so on.
    </p>
    <h4>Instance attached functions vs non-attached functions</h4>
    <p>
        I'm going to call them functions, but have in mind that when we are talking about objects, we refer to them as <strong>behaviors</strong>.
    </p>
    <p>
        Now, when a new instance is created functions are not copied to the instance. Functions stay within the class space. What happens
        is that <strong>attached functions</strong> not only receives the caller's pointer, but with that,
        they receive the object's reference. That is what isolates objects from each other. This means that functions that are attached to instances
        can only manipulate their own state.
    </p>
    <p>
        For <strong>non-attached functions</strong>, they receive the caller's reference, the caller's pointer, of course. But they don't receive
        the instances's reference. They are attached the code template, the class. This means that <strong>non-attached functions
        can only manipulate the classe's state</strong>. And remember, because the class's state is visible to every instance, every change
        made by any through these functions affects all the objects of the same type, I mean, all the objects that were created by the same
        code template/class.
    </p>
    <h4>Encapsulation</h4>
    <p>
        Another super important concept in OOP is encapsulation. This is about <strong>restricting direct access object's components</strong>.
        Basically, every object has a state. This is defined by their instance variables. Objects also have behaviors. Behaviors may or may not
        change the object's state. Encapsulation is the process of restricting direct access to some of those components.
    </p>
    <p>
        This prevents the object's state from changes from outside of the object itself. This means that the object's variables and
        some interfaces, behaviors are only visible for the object itself and the object only can change it's own state.
    </p>
    <h4>Inheritance</h4>
    <p>
        This mechanism enables inheritance. This means that we can create templates, classes, that are composed by inherited elements.
        In other words, we can create templates that describes how instance os it's type should be. Data and function members. And we
        can also create sub-classes, sub-templates that will not only have it's own description of what data and function members instances
        should have but also carries on <strong>base data and function members</strong>.
    </p>
    <h4>Polymorphism</h4>
    <p>
        This mechanism allows different implementations of the same function when we are using inheritance. In other words, sub-classes can
        override behaviors inherited from it's parents and have different implementations for the same bahavior. 
    </p>
    <h4>Composition</h4>
    <p>
        Is another way of creating objects that are composed by other objects. In other words, we can create an object that also
        takes advantage or depends upon another object's state to fully perform it's own behaviors.
    </p>
    <h4>Abstraction</h4>
    <p>
        Abstraction is the process of hidding information. The description may be similar to encapsulation. But these two are different things
        when it comes to oop. 
    </p>
    <p>
        In OOP abstraction is the process of hidding the implementation from the imposed desing of an instance. In other words, we describe
        <strong>What components an instance of type T must have</strong> separated from <strong>How those components are used</strong>...
    </p>
    <p>
        This can be achieved through <strong>interfaces classes</strong> or <strong>abstract classes</strong>. In interfaces classes we describe
        what functions an of type T must have and that's it. They are <strong>abstract functions</strong>, this means that they have no body.
        There's only the function's signature. In other words, an <strong>interface class</strong> is a code template that imposes 
        <strong>what functions an instancde of it's type must have</strong> but the functions don't have a body.
    </p>
    <p>
        When it comes to <strong>abstract classes</strong>, they are also used to impose some kind of desing. But with abstract classes not
        only <strong>what functions an instance of type T</strong> must have are imposed but also <strong>core variables and function implementations</strong>.
        In other words, we can describe what functions, core variable and core functions with implementation an isntance of type T must have.
    </p>
    <p>
        This mechanism uses inheritance strongly because iterfaces and abstract classes can't be instantiated. They must have
        have their components implemented. This means that sub-classes must be created to actually have a template that can be instantiated.
    </p>
    <h3>Software Engineering -illities</h3>
    <p>
        Programmers have been creating new ways of writing code, new paradigms. Creating principles and desing patterns for different approachs.
        But all of them supports healthier Software Engineering life cycles.
    </p>
    <p>
        Software Engineering have quite a few amount of quality attributes, among them we have, mantainability, readability, usability, security,
        reliability, observability and so on. Each of these attributes can be supported by writing clean code.
    </p>
    <h3>Cohesion</h3>
    <p>
        Cohesion is a measurement of strength between the members of a module. In other words, the degree in which the elements of a module belog
        together. The more cohesive a module is, the better. For instance, a source file that is called <strong>date_util</strong> is supposed
        to have date utilities. Like tools to add days, months, years. Maybe formating tools and so on. This icreases <strong>readability</strong>
        and therefore <strong>mantainability</strong> becauses things related to date utilities have a specific place to be. It's easier
        to find and change/add stuff.
    </p>
    <h3>Coupling</h3>
    <p>
        Coupling on the other hand is the degree in which modules are dependent upon each other. The less dependent they are on each other,
        the better. For instance a unit testing source file depends upon another source file, wich is the one being tested.
        The down side of depedence between modules is that one module can't change it's own implementation. This will breaks it's users.
    </p>
    <p>
        Things gets worse if one module is using interfaces, functions returned from another module that actually is a third module. For instance,
        module A calls a function from module B but in reality the return is a function call from module C.
        Not only this creates a dependece that will make things harder to understand and maintain.
        But it also exposes the internal strucutre of the module B. In other words, this breaks the encapsulation.
    </p>
    <h3>The Law of Demeter</h3>
    <p>
        This "Law" is a set of rules to help us to reduce the coupling between the modules of our application and prevent things like the
        last example from happening. In short, this law states that a the functions of an object can only be called if:
    </p>
    <ul>
        <li>The object is instance variable of the object that holds the current function that is a client</li>
        <li>The object is argument of the function</li>
        <li>The object was created within the function's body</li>
        <li>The object is member of the class or is global variable</li>
    </ul>
    <p>
        Just want to remind you that these are not actually a law, they are recommendations. They don't apply for Data Strucutres that were created
        from a class for isntance.
    </p>
    <h3>SOLID</h3>
    <p>
        These 5 principles are pretty famous for creating OOP desings. They promotes mantainability, reliability, stability,
        readability and so on because they focus on reducing the coupling, creating small and manageable classes and the habit
        of changing the right classses once the requirements changes.
    </p>
    <h4>Single Responsibility Principle</h4>
    <p>
        This principle states that our classes should have one responsibility only. Uncle bob describes it saying that our modules should
        have one reason to change.
    </p>
    <p>
        To make it clear, if you have a class that represents a report generator object, but this object also
        fetches the data it needs to process and also performs the formatting of the report, it has more than one reason to change.
        What if the data source changes or the report's format changes? Changes are a risk and the entire class would have to be tested
        to guarantee that everything is working fine.
    </p>
    <p>
        To solve this problem this class should be split into 3 different classes, one class that will be responsible for
        fetching the data, another one that will be responsible for processing the data and another one to actually
        generate the final report.
    </p>
    <h4>Open/Closed Principle</h4>
    <p>
        This principle states that our classes should be open for extension and closed for modification. In other words,
        once our classes are developed, tested and are being used in production, they should not be opened again for any changes.
        So we're not supposed to add/remove or change any data or behavior member of a class that was already developed and validated.
    </p>
    <p>
        Don't be so attached to this principle. It was created over a decade ago. Back then changes where a big cost and the risks
        of recompiling something that was already being used in production was a big risk. Requirements weren't supposed to change
        with frequency. Today with the agile requirements changes all the time. Not changing a class is almost impossible.
    </p>
    <p>
        Just be aware that changes are a risk. If you find yourself opening classes that weren't supposed to be changed many times
        consider redesigning it.
    </p>
    <h4>Dependecy Inversion</h4>
    <p>
        This principle states that the clients of a class should be dependent upon abstract versions of it, not concrete ones. So
        instead of calling the sub-class, clients consumes the abstract version, the parent. In this way the implementation
        is hidden and the sub-class is free to have any changes to it's implementations without the risk of breaking it's clients. 
    </p>
    <h3>Separation of Concerns</h3>
    <p>
        Separation of Concerns is a principle for separating our system/application into different logical sections. Each logical section
        addresses a concern. Each logical section takes care of it's own business. Concerns can be split into functions,
        classes/objects, source files, modules, microservices. Maybe they can be interpreted as features and so on.
        This principle can be applied at level any level of the system/application. From architectural desing to the source file level.
    </p>
    <h3>Aspect Oriented Programming</h3>
    <p>
        When it comes to separation of concerns, we are talking about separating our system/application into different parts.
        Each part takes care of your own business. For instance, a <strong>repositories</strong> package or folder (in python) is
        home for modules and classes responsible for managing managing a variety of objects into the database.
    </p>
    <p>
        A package called <strong>domains</strong> is home for modules and classes responsible for business logic and so on.
        The domain shouldn't interfere on how the repositories manipulates or consumes the database and vise versa.
    </p>
    <p>
        Another good example is Microservices application. Let's an ecommerce. The payments microservice has no business
        with the cart in terms of how the cart stores the products and vise versa.
    </p>
    <p>
        But there are some concerns are business of everyone. They can be used by any other concern. For instance, a logger
        object can be used by any other concern to keep track of the execution. The same goes for performance logging,
        security and so on. In short, this breaks modularization. If a concern tha cuts accross other concerns changes,
        those concerns are affected. This makes it harder to change them and mantain them because they are literally duplicated.
    </p>
    <p>
        Not only that, but by not being primary features, they mix up with the main feature's logic and makes it harder to
        understand the primary feature's solution.
    </p>
    <p>
        To solve cross-cutting concerns the Aspect Oriented paradigm can be used. This paradigm promotes
        the modulariation of those secondary concerns by spliting them into aspects and removing them from the middle of
        primary feature's code and using them as additional behaviors.
    </p>
    <h4>Aspect</h4>
    <p>
        Represents a cross-cutting concern. A logger is an aspect, a performance logger is an aspect. An user-authorizer is an aspect.
    </p>
    <h4>Advice</h4>
    <p>
        Is the behavior that will be applied in execution time to the primary feature's code. For instance, you can have a function
        that performs an HTTP request. To monitor what is being requested the the server's response and adivice called
        <strong>watch_http_request</strong> advice (behavior) from and aspect called <strong>http_monitoring</strong> can be applied.
    </p>
    <h4>Pointcut</h4>
    <p>
        Is an expression that will specifies in what joint point to apply an especific adivice.
        In other words, where to apply an advice and what adivice to apply. In Python for instance decorators
        can be used to wrap up the function and add the needed additional behavior, in Java the same can be achieved with
        annotations. 
    </p>
    <h4>Join point</h4>
    <p>
        This one is very simple, every point on our code that an additional behavior can be called and executed is a join point.
        Function calls, variable attribution, error handling are examples of join points.
    </p>
    <h3>Serialization</h3>
    <p>
        Is the process of translating a data strucutre or object into a format that the environment understands. For instance,
        translating a JSON data structure into a Map in Java. Or translating a JSON data structure into a dictionary in Python.
        Translating a dictionary into a Queue message format and so on.
    </p>
    <h3>Inversion of Control</h3>
    <p>
        This one is about inverting the normal flow of control of parts or all of your application. In other words, using
        in this principle the control of some part of your code is handed to specific components responsible for doing the job.
    </p>
    <p>
        This can be from the function level to the application level. For instance, instead of loading env variables inside your
        functions, you hand this job to a specific module. How this env variable is going to be loaded is not the job of your function,
        you just gotta use the value. In this case, the control of the flow of loading an env variable is handed to a specific module.
    </p>
    <p>
        Another good example of this principle being applied are fremeworks. With frameworks all the control of the flow of the application
        is the freamework's responsibility and your custom code is called whenever it's needed. In a not inverted control flow
        application, you would have to take care of everything. How plungins are attached together, the environment, the dependencies
        and so on.
    </p>
    <h2>Desing Patterns</h2>
    <p>
        In short, there are countless solutions for even the same problem. When it comes to different problems there are endless
        solution paths. But even with a huge amount of possibilities some problems are very similiar. An application that exposes
        endpoints to extend a server application still is a server-side application and most probably will have business logic.
    </p>
    <p>
        For those very commom issues and solutions we have Desing Patterns. This not only prevent developers from reinventing the wheel
        but also promotes a good communication within the Software Engineering communitt. For instance the Singleton Pattern doesn't change
        according to the geographical location. It statys the same.
    </p>
    <h3>Singleton</h3>
    <p>
        An object is called singleton when only one single instance of it is lives on the entire application. For instance, an authenticator
        object can be singleton. A message sender can be singleton and so on. To be applied we need a code template (a class) that will
        be responsible for returning always the same instance when it's required.
    </p>
    <h3>Dependecy Injection</h3>
    <p>
        Dependency Injection is Inversion of Control applied to dependence management. In other words, on this design pattern the process of
        creating objects that composes another one and the process of injecting those objects and other dependeces
        is handed to modules responsibls for this kind of job. Those modules are also known as assemblers and injectors.
    </p>
    <h3>Lazy Initialization</h3>
    <p>
        Some processes can be expensive. For instance, the instantiation process of an object that composes another one can take quite a while
        to be completed. In this kind of scenario those expensive processes can be executed only the first time they are needed and the following
        requests are going to be faster. This desing pattern is called the Lazy Initialization Tatic
    </p>
    <h3>Repositories</h3>
    <p>
        This desing pattern is very simple and maybe you already uses it. To manipulate a collection of a specific object within the database
        repositories are used. For instance, a collection of users can be manipulated within the database using the interface UserRespository.
        With this interface we can add a new user, retrieve using custom queries and so on.
    </p>
    <h3>Factory Method</h3>
    <p>
        What happens when you need an instance from a class C? The usual approach is to call the class's constructor directly.
        Using this pattern the responsibility of creating objects is handend to a speicific element responsible for creating the objects
        whenever they are needed. this element is also known as <strong>factory method</strong>.
    </p>
    <p>
        This desing pattern also is an application of Inversion of Control. The control of the flow of creation of objects is handend to
        a specific module. This reduces the coupling between the elements of the application upon concrete versions of classes.
    </p>
    <h3>Null Object</h3>
    <p>
        This desing pattern allows the application of a <strong>do-nothing</strong> realtionship in a elegant way. Instead of returning literally
        <i>null</i> to the caller when a specific object can not be created for any reason, let's say because the type is not mapped into the factory
        an NullObject is returned with the same behaviors a <i>non-null-object</i> would have. But they don't have any effect. They do nothing.
    </p>
    <p>
        This desing pattern is used with inheritance and polymorphism. The NullObject class have the same type as the the <i>non-null-object</i> classes.
    </p>
    <h3>Decorators</h3>
    <p>
        This one allows adding additional behaviors without changing existing code. In other words, new statements are added to existing code
        by wrapping it up using only an expression.
    </p>
    <h3>Final Thoughts</h3>
    <p>
        Writing clean code is not a easy thing. It's a constant process and requires a little bit of effort on the beggining. But things
        gets easier once you've created the habit of writing clean code.
    </p>
    Good Luck XD
</div>
