<div style="text-align: left;">
    <p>
        Solving the same problem over and over again not only is annoying but also a lost of time.
        Software Engineers are problem solvers, but this doesn't mean we should spend time to solve the
        same type of problems over and over again, that's not even productive.
    </p>
    <p>
        Welcome to the pewdiepie's  favourite blog about Software Engineering and today's topic is
        Design Patterns, MVC, to be more specific...let's get into it.
    </p>
    <h3>What is an OOP System/Application</h3>
    <p>
        Before continuing with the topic, I would like to remind you that an OOP system or application
        is composed by objects. Objects are entities that are composed by data and behaviors
        enpcasulating them, like a package.
    </p>
    <p>
        The objects interact with each other and from this interaction, we have system
        or applicaton that does what it's supposed to do (or almost). Instead of
        having data and functions separated from each other and the program being
        executed in a sequence of events, we see the system as a composition of
        objects that interact with each other and each object as a blackbox that receives
        the inputs it needs to do the job, manipulates it with it's own procedures
        and produces an output.
    </p>
    <p>
        Now that being said, as we design systems some problems start to reapear and
        the natural approach is to reuse an existing solution to solve it. This brings
        us to today's topic: <strong>design patterns</strong>...
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
        Every pattern is composed by 4 elements: name, problem, solution and it's consequences.
    </p>
    <img class="post-img" src="images/design-patterns-mvc/design-patterns-composition.svg" alt="design PATTERN COMPOSITION MIND MAP">
    <h4>The name</h4>
    <p>
        The name describes the problem the pattern it is supposed to solve, the solution and the consequences for using it.
        The name will help to better identify the pattern. When to use it and when not to and on the communication in
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
    <h3>The MVC Design Pattern</h3>
    <p>
        This parttern is probably the first design pattern every web developer
        have contact with
        when getting started with programming. This pattern was used in
        desktop applications and now it's broadly used in Web development too.
        One problem it solves is the tightly coupling between the data management, user interface
        and how the interactions between the user and the interface affects the data management.
    </p>
    <p>
        On this pattern these three concerns are decomposed into three different objects.
        This decomposition enables a more flexible application by promoting a loosely coupled
        relationship between the objects.
    </p>
    <h4>Model</h4>
    <p>
        The first object described on the name of this pattern is the Model. This object
        is also called <strong>application object</strong>. It is resposible for dealing with
        the data management. So business rules can be in here and if the data is persisted
        on files or databases, this object will be the user of the objects responsible for
        retrieving the data to manipulate them.
    </p>
    <h4>View</h4>
    <p>
        The second object described on the name of this pattern is the View. This object
        is responsible for reflecting the model's state. The model
        can have it's data represented in many different ways. Meaning that one Model
        can have many views.
    </p>
    <h4>The Model/View relationship</h4>
    <p>
        Before continuing to the last object that composes this pattern, I would  like to
        talk about the Model/View relationship. The view, the user interface,
        is supposed to reflect the model's state. These two objects have a subscribe/notify
        protocol between them.
    </p>
    <p>
        The View subscribes to the model to reflect it's state. Whenever the model's state
        changes it notifies the view. The view once notified, updates itself with the
        new state.
    </p>
    <img class="post-img" src="images/design-patterns-mvc/design-patterns-model-view.svg" alt="View Reflecting the Model's state">
    <p>
        The model refers to the data and the view refers to how that data is
        presented on the UI. When it comes to the business rules, data storing and so on
        they can happen within the model object or maybe these
        concerns can be broken into different objects or modules.
    </p>
    <p>
        The model's
        state (the data or variables) can be represented by the view. Or
        many views if necessary. Whenever the model changes, all the views subscribed to
        the model will change too and update itself without the model having to know their
        existence.
    </p>
    <p>
        This kind of feature is very similar to the <strong>observer pattern</strong>.
        One object changes and affects others objects that are dependent on it's state,
        without the changed object having to know details about them. On this case,
        the views are dependent upon the model's values/state. Whenever it changes, the
        views changes too.
    </p>
    <img class="post-img" src="images/design-patterns-mvc/design-patterns-model-many-views.svg" alt="View Reflecting the Model's state">
    <p>
        The above diagram can be exemplified by the following image:
    </p>
    <img class="post-img" src="images/design-patterns-mvc/design-patterns-model-many-views-example.svg" alt="View Reflecting the Model's state">
    <p>
        Now to <strong>how the model's state changes</strong>.
        One way the model can be stimulated to chage it's own state is by requests from 
        the user itself. This brings us to the last object, the controller.
    </p>
    <h4>Controller</h4>
    <p>
        The last object described on the name of this pattern is the Controller. This object
        defines the way that the user's  interactions on the view (the interface) are passed
        on to the model. This inclues requests like commands or inputs.
    </p>
    <p>
        That being said, the overall design of a an application with a simple MVC
        implementation looks like the following image:
    </p>
    <img class="post-img" src="images/design-patterns-mvc/design-patterns-model-view-controller.svg" alt="View Reflecting the Model's state">
    <p>
        It's also very common see this relationship between Model, View  and Controlller like on the
        image below. The controller is like the conduit. It's responsible for dealing with the user's
        inputs or commands and notifying the model and also responsible for notifying the view
        with the model's new state.
    </p>
    <img class="post-img" src="images/design-patterns-mvc/design-patterns-model-view-controller-2.svg" alt="View Reflecting the Model's state">
    <h3>Final Thoughts</h3>
    <p>
        MVC is one the most used patterns on Web Development. As I said, every design pattern is a template,
        the MVC is not different. An application may or may not inlude a controller for instance or
        may not have a view. There are some variants of this pattern like the <strong>model view adapter</strong>
        and many others.
    </p>
    <p>
        This design pattern is an architectural pattern. Model, view and controller can be interpreted as
        layers. This means that business rules may or may not be placed within the model object. The model
        object may be user of other objects (domain objects) that are responsible for the business rules.
        The model layer can be split into more lower level layers, going from the business layer to a data
        access layer.
    </p>
    Good Luck XD
</div>