<div style="text-align: left;">
    <p>
        Solving the same problem over and over again not only is annoying but also a lost of time.
        Software Engineers are problem solvers, but this doesn't mean we should spend time to solve the
        same type of problems over and over again, that's not even productive.
    </p>
    <p>
        Welcome to the pewdiepie's  favourite blog about Software Engineering and today's topic is
        Design Patterns and MVC...
    </p>
    <h3>What is a OOP System</h3>
    <p>
        Before continuing with the topic, I would like to remind you that a OOP system or application
        is composed by objects. Objects are entities that are composed by data and behaviors
        enpcasulating them as if they were a package.
    </p>
    <p>
        The objects interact with each other to do what they are supposed to do. Instead of
        having data and functions separated from each other and the program being
        executed in a sequence of events, we see the system as being a composition of
        objects that interact with each other and each object as a blackbox that receives
        the inputs it needs to do the job, manipulates it with it's own procedures
        and state and produces an output.
    </p>
    <p>
        Now that being said, as we desing systems some problems start to reapear and
        the natural approach is to reuse an existing solution to solve it. This brings
        us to <strong>design patterns</strong>...
    </p>
    <h3>What is a Design Pattern</h3>
    <p>
        Design pattern is a good and efficient solution that were documented to be used in specific design problems that
        occurs over and over again in the environment. The definition is very simple, as Software Engineers started to
        notice that some of the design problems were appearing and reappearing they started to document the solutions,
        based on their success and failures, so that they didn't had to rediscover them in the future.
    </p>
    <h4>Design Pattern composition</h4>
    <p>
        Every pattern is composed by 4 elements, a name, the problem, the solution and it's consequences.
    </p>
    <img class="post-img" src="images/design-patterns-mvc/design-patterns-composition.svg" alt="DESING PATTERN COMPOSITION MIND MAP">
    <h4>The name</h4>
    <p>
        The name describes the problem the pattern it is supposed to solve, the solution and the consequences for using it.
        The name will help to better identify the pattern. When to use it and when not to and in the communication in
        general. The name generally have a few words, one to three. It's easier to document and gives the first level of
        abstraction for the design.
    </p>
    <h4>The problem</h4>
    <p>
        Describes when to apply the pattern. It explains the design problem and it's context.
    </p>
    <h4>The solution</h4>
    <p>
        Describes the elements that composes the design, how they realate with each other and their responsibilities.
        The template to be used when applying it. The template is abstract. It shows the elements (classes and objects)
        to be used to solve the problem. Their relationships, colaborations and possibilities.
    </p>
    <h4>The consequences</h4>
    <p>
        The trade offs for using the pattern.
    </p>
    <h3>Types of Design Patterns</h3>
    <h3>The MVC Design Pattern</h3>
    <p>
        This parttern is probably the first desing pattern ervery web developer heards of
        when getting started with programming. This pattern was used in
        desktop applications and now it's broadly used in Web development too.
        One problem it solves is the tightly coupling between the data management, user interface
        and how the interactions between the user and the user interface affects the data management
        or not.
    </p>
    <p>
        On this pattern these three concerns are decomposed into three different objects.
        This decomposition enables a more flexible application by promoting a loosely coupled
        relationships between the objects.
    </p>
    <h4>Model</h4>
    <p>
        The first object described on the name of this pattern is the Model. This object
        is also called <strong>application object</strong>. It is resposible for dealing with
        the data management. So business rules are here and if the data is persisted in files
        or databases, this object will be the user of other objects responsible for
        retrieving them and manage them.
    </p>
    <h4>View</h4>
    <p>
        The second object described on the name of this pattern is the View. This object
        is responsible for reflecting the model's state into the screen. The model
        can have it's data represented in many different ways. Meaning that one Model
        can have many views.
    </p>
    <h4>Controller</h4>
    <p>
        The last object describe in the name of this pattern is the Controller. This object
        defines the way that the user's  interactions on the view (the interface) are passed
        on to the model. 
    </p>
</div>