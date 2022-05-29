<div style="text-align: left;">
    <img class="post-img" src="images/clean-architecture-soc-roadmap/roadmap.svg" alt="">
    <p>
        Hey, welcome back to the PewdiePie's favourite blog
        about Software Engineering and today I would like
        to share with you my rodamp for separating the system's
        architecture into different concerns. Let's
        get into it!
    </p>
    <h3>Linking everything together and what is a component</h3>
    <p>
        First things first, I would like to give you a litte bit of context
        so you know what are we talking about here.
        As a short explanation, from the beggining, the main reasons a business requires
        a software solution are <b>to save money</b> or <b>to make more money</b>, usually both.
        That's the kind of the origin of a Software in most cases. Now as
        next steps, those that wishes to take this further gotta go after a Software
        development team where you will be working.
    </p>
    <p>
        Cool, this is where most Software projects you've worked with, probably came out.
        A business requires a Software, they go after the engineering team.
        <br>
        If you know the Software Development Life Cycle you also knows that,
        in theory, before start coding first we gotta understand what must
        be built and then document the "how".
        So before start coding, we gotta go trough the <i>Requirement Analysis</i>
        stage in which the purpose is to understand what must be done, in other words,
        what aspects of the business the stakeholders thinks can
        save or give more money to them (usually some steps of an existing business process).
    </p>
    <p>
        Then we gotta go through the
        design stage, in which we'll take the "wishlist" (not everything can be
        implemented, for many reasons, the most common is time) and
        create a model of the system, a blueprint. Then with the "blueprint"
        of the system we start coding. Thats a summary of the SDLC
    </p>
    <p>
        How much design up front to do and this can conflict with
        <i>Test Driven Development</i> is topic for another article.
        The fact is that, independently of what software development strategy
        or process you're using, you're gonna need a minimun design, an architecture
        with a bare minimun description of the system.
    </p>
    <p>
        A software architecture is a visual representation of system, composed by
        elements also known as <b>components</b> and how those elements
        relate with each other.
        <br>
        A component is a logical section that addresses a specific
        concern within the architecture. This means it can be a function, an object, a
        module/source file, a package/folder or an entire application/program.
    </p>
    <p>
        Some authors refers to architecture as beign a "high-level/macro"
        description of the system, composed only by macro components, and
        design as beign a "low-level/detailed" description of each component
        described by the "higher representation". But fact is that this
        seems more of a subjective matter than a fact.
    </p>
    <h3>Separation of Concerns</h3>
    <p>
        To fully understand systems design I had to understand Separation of Concerns.
        A business process is composed by a set of steps executed by humans or
        machine and at the end of the day, produces a service, solution or product.
        The software may automate one or more of those steps, and to do so, one usually
        goes through the SDLC. At the end the solution (the software) hopefully will have different
        logical sections to reduce the complexity and make everyone's life easier.
    </p>
    <p>
        Separation of Concerns is a principle for separating the
        system into different logical sections and each logical section
        addresses a different concern. This principle emphasizes
        code reuse, decoupled logical sections with well defined
        interfaces therefore reducing the complexity.
    </p>
    <p>
        A concern can be as broad a business process or as specific as 
        an aspect of a step of that business process.
    </p>
    <p>
        Concerns can be split into functions, objects, modules, packages/folders
        or even at a program level. Concerns can communicate with each
        other through function calls or trough interprocess communication
        that can go from sharing data on the same memory addres space
        to communication through files, sockets, internet and so on.
    </p>
    <p>
        An example of concern would be the business rules, also known as
        models, domains, entities and so on. Or maybe utils or commons,
        logging, security, database. These are concerns that communicate
        with each other through functions calls. But you can also have
        some concerns like <i>Ordering</i>, <i>Credit Card Payment</i>,
        <i>Debit Card Payment</i> that can communicate through the
        network, maybe trough HTTP Requests or through events.
    </p>
    <p>
        Sure there are some concerns that are used by many other concerns
        in the system. The <i>logging</i> concern for instance, can be
        used by any other concern within the system. These are called
        <b>Cross-Cutting Concerns</b>.
    </p>
    <p>
        If you really wanna know more about SoC, I recommend you read
        <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="blank">this article</a>
    </p>
    <h3>The 4 main concerns your architecture should support</h3>
    <p>
        There are 4 main concerns an architecture should support
        to be considered decent: development, deployment,
        operations and use cases.
        To be more clear, the architecture is a blueprint of the system,
        it's composed by components (each component addresses a concern)
        and their relationship. An achitecture supports those 4 concerns
        by having a relatively good separation of concerns with
        decoupled and cohesive components.
    </p>
    <h4>Development</h4>
    <p>
        To support this concern a few aspects must be provided or solved
        by the architecture:
        <ul>
            <li>Developers can work in parallel, maybe building different
                elements for the same concern or even in different
                concerns that are at the same memory space
                (concerns that are part of the same application/program for instance)
            </li>
            <li>Developers can work in different concerns or sub-concerns,
                without depending on each other's version. In summary,
                no circular dependecies between the concerns.
                Working with concerns that communicate directly or not, the
                concerns they're working on must not depend on each other's version
            </li>
            <li>
                Developers can add, edit or remove uses cases from the architecture
                without having to worry about learning everything at once.
            </li>
        </ul>
    </p>
    <p>
        In short, the architecture must provide decoupled and high-cohesive
        concerns. By concerns, I mean components.
    </p>
    <h4>Deployment</h4>
    <p>
        By supporting <b>development</b> automatically some aspects of
        deployment are supported too. By having decoupled and high-cohesive
        concerns, it makes it easier to release new versions of different
        concerns. Therefore, delivering small pieces of software
        is made possible. So a few aspects in this concern the architecture must
        provide or solve are:
        <ul>
            <li>Avoid circular/cyclic dependeces between the concerns</li>
            <li>Group concerns (if needed) that change at the same rate. Keep separated those
                that don't.
            </li>
            <li>
                Keep more unstable concerns pointing in the direction
                of more stable concerns. In other words, more unstanble
                concerns should be client of more stable ones. This
                Will reduce the chances of having to change concerns
                that has nothing to do with current requirements, therefore
                growing the stability of the system.
            </li>
            <li>
                Avoid duplication and encapsulate cross-cutting concerns
            </li>
        </ul>
    </p>
    <p>
        The issues are also about have an architecture composed by
        decopupled and high-cohesive components.
        Those aspects will certainly cause a positive impact in the
        architecture making releases a lower cost process.
    </p>
    <h4>Operation</h4>
    <p>
        The architecture must support non-functional requirements.
        For instance security, performance, auditing issues  must be
        considered while creating the architecture and the components
        must be arranged in a way in which those concerns are addressed.
    </p>
    <h4>Use Cases</h4>
    <p>
        The last concern the architecture must support are the use
        cases. An use case is a case in which the system will be used.
        To execute an use case within the application, a set of elements are required.
        For instance a set of objects or a set of functions and data structures.
        Maybe all of them.
    </p>
    <p>
        An use case may also involve some type of UI
        technology, persistence and business rules.
        These aspects of an use case changes for different
        reasons and they will also represent 
        the horizontal layers of the application.
        <br>
        It's important to have in mind that the architecture
        must make it easier to add, change or remove use cases.
    </p>
    <h3>Explanaition about the levels</h3>
    <p>
        Great, to create a decent design we know that the software 
        must be broken into diffrent logical sections that addresses diffrent
        concerns and tha the architecture must support 4 main concerns.
        Now what?
    </p>
    <p>
        I'm not gonna lie there's quite a few ways of creating an architecture.
        The process I've been using, in simple words are:
        <ol>
            <li>Requirements Analyis:
                <ol>
                    <li>Build Use cases:</li>
                    <ol>
                        <li>Use cases description (if the use case is more complex than usual)</li>
                    </ol>
                    <li>Build a domain model</li>
                </ol>
            </li>
            <li>Design Stage
                <ol>
                    <li>UML Class Diagrams using the use cases and domain model</li>
                    <li>Component Diagrams using the UML Class Diagrams I've created</li>
                </ol>
            </li>
        </ol>
        At this process the requirements stage can be done all at once using all the steps of
        a busines process or step by step. but when it comes to the design - class diagram,
        it's made use case by use case. This process will give me a blueprint of what
        I have to build. I've been focusing on identifying the elements I have to build
        and their relationship, without worrying about
        the implementation too much, and also not worrying about knowing all the elements and
        describing all of them in detail 100%.
        <br>
        Usually I just want to know enough to get started with the implementation.
    </p>
    <p>
        To make things simple, I've created a visualization of ways of separating the
        system into different concerns, based on the book Clean Architecture from Robert
        C. Martin.
        It's a "levels visualization" that goes from
        source code to complete application programs and the concerns can be
        organized into a "table" representation called horizontal and vertical layers.
    </p>
    <p>
        This will guide me on
        what types of elements to identify while creating the design. For instance,
        if i'm talking about level 1, source file, and that I gotta execute a very small
        use case with a few steps to make it happen, I know that I can separate concerns into
        functions and data structures and because it is simpler than usual, I can keep the
        use case beign execute with procedural code, no objects. Got it?
    </p>
    <h4>The default types of elements necessary to carry on a use case</h4>
    <p>
        There are 4 types of elements that can be implemented by functions and datastructures,
        objects (that encapsulates functions and data), packages/folders/components or application programs.
        They are:
        <ul>

            <li>Boundary/UI: elements that are interfaces for the system. User interface. A
                screen for instance.
            </li>
            <li>Control: elements responsible for orchestrating requests from the boundary/ui</li>
            <li>Entities: elements responsible for executing business rules/logic,
                maybe they are just data placeholders.
                They are part of the domain model
            </li>
            <li>Data Access/Persistency: as you can guess,
                elements that are responsible for acessing or persisting data,
                which can be store into files, databasse systems, cache etc.
            </li>
        </ul>
        These 4 types of elements are also called prototypes, when we're talking
        specifically about OOP and for each use case we may have a few of these elements
        (if not all of them) to execute it. I like to see them as the <b>horizontal layers</b>
        of the system and the use cases are the vertical ones. The use cases are the columns of this "table"
    </p>
    <h4>The first level</h4>
    <p>
        So we first start by identifying the concerns, but at
        the <i>source code level</i>. This means that the concerns will
        communicate with each other through function calls.
        Another name for this way of separating concerns is "monolith",
        the separation of concerns exists (doesn't mean they are tightly or loosely coupled)
        but they're running in the same program, same address space.
    </p>
    <h5>Identify the horizontal layers</h5>
    <p>
        To identify the horizontal layers you can use the Common Closure principle
        to identify elements of each use case that changes for different reasons
        and then identify those have a certain similarity and group them.
        As I said before, there are 4 basic types of elements, so naturally they
        can be your 4 initial layers. Almost every use case has a interface, almost
        every interface requires accessing stored data, so naturally it will require
        a controller element to orchestrate some aspects of the flow. Maybe the
        use case has some business rule.
    </p>
    <h5>Identify the vertical layers</h5>
    <img src="images/clean-architecture-soc-roadmap/decoupling-horizonta-vertical-layers-level-1.svg" alt="Horizontal layers are visualized from top-to-bottom. 
    They are composed by UI/Boundary, controller, entity/domain logic/business logic layer. 
    Which is composed by the layers Use Case specific business rule and enterprise 
    wide business rules/core business rules. The last layer is the database. 
    The vertical layers are the use cases, they are read left-to-right and each use case 
    has a set of objects in each layer to execute it. The logging layer cut accross cotroller, 
    business rules and database layers">

<pre class="code-snippet type-bash">tree
├── billing_payment.py
├── billing_visualization.py
├── logging.py
├── order_cancellation.py
├── order_placement.py
├── order_visualization.py
└── some_enterprise_core_business_rule.py

0 directories, 7 files
</pre>

<pre class="code-snippet type-bash">tree
├── <font color="#295FCC"><b>billing_payment</b></font>
│   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   └── billing_payment_business_rules.py
│   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   └── billing_payment_controller.py
│   ├── <font color="#295FCC"><b>database</b></font>
│   │   └── billing_payment_database.py
│   └── <font color="#295FCC"><b>ui</b></font>
│       └── billing_payment_ui.py
├── <font color="#295FCC"><b>billing_visualization</b></font>
│   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   └── billing_visualization_business_rules.py
│   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   └── billing_visualization_controller.py
│   ├── <font color="#295FCC"><b>database</b></font>
│   │   └── billing_visualization_database.py
│   └── <font color="#295FCC"><b>ui</b></font>
│       └── billing_visualization_ui.py
├── <font color="#295FCC"><b>enterprise_wide_business_rules</b></font>
│   └── some_enterprise_core_business_rule.py
├── <font color="#295FCC"><b>logging</b></font>
│   └── logger.py
├── <font color="#295FCC"><b>order_cancellation</b></font>
│   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   └── order_cancellation_business_rules.py
│   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   └── order_cancellation_controller.py
│   ├── <font color="#295FCC"><b>database</b></font>
│   │   └── order_cancellation_database.py
│   └── <font color="#295FCC"><b>ui</b></font>
│       └── order_cancellation_ui.py
├── <font color="#295FCC"><b>order_placement</b></font>
│   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   └── order_placement_business_rules.py
│   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   └── order_placement_controller.py
│   ├── <font color="#295FCC"><b>database</b></font>
│   │   └── order_placement_database.py
│   └── <font color="#295FCC"><b>ui</b></font>
│       └── order_placement_ui.py
└── <font color="#295FCC"><b>order_visualization</b></font>
    ├── <font color="#295FCC"><b>business_rules</b></font>
    │   └── order_visualization_business_rules.py
    ├── <font color="#295FCC"><b>controllers</b></font>
    │   └── order_visualization_controller.py
    ├── <font color="#295FCC"><b>database</b></font>
    │   └── order_visualization_database.py
    └── <font color="#295FCC"><b>ui</b></font>
        └── order_visualization_ui.py

27 directories, 22 files
</pre>
    <h4>The second level</h4>
    <img src="images/clean-architecture-soc-roadmap/decoupling-horizonta-vertical-layers-level-2.svg" alt="Horizontal layers are visualized from top-to-bottom. 
    They are composed by UI/Boundary, controller, entity/domain logic/business logic layer. 
    Which is composed by the layers Use Case specific business rule and enterprise 
    wide business rules/core business rules. The last layer is the database. 
    The vertical layers are the use cases, they are read left-to-right and each use case 
    has a set of objects in each layer to execute it. The logging layer cut accross cotroller, 
    business rules and database layers">
<pre class="code-snippet type-bash">tree
├── <font color="#295FCC"><b>back-end</b></font>
│   ├── <font color="#295FCC"><b>billing_payment</b></font>
│   │   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   │   └── billing_payment_business_rules.py
│   │   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   │   └── billing_payment_controller.py
│   │   └── <font color="#295FCC"><b>database</b></font>
│   │       └── billing_payment_database.py
│   ├── <font color="#295FCC"><b>billing_visualization</b></font>
│   │   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   │   └── billing_visualization_business_rules.py
│   │   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   │   └── billing_visualization_controller.py
│   │   └── <font color="#295FCC"><b>database</b></font>
│   │       └── billing_visualization_database.py
│   ├── <font color="#295FCC"><b>enterprise_wide_business_rules</b></font>
│   │   └── some_enterprise_core_business_rule.py
│   ├── <font color="#295FCC"><b>order_cancellation</b></font>
│   │   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   │   └── order_cancellation_business_rules.py
│   │   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   │   └── order_cancellation_controller.py
│   │   └── <font color="#295FCC"><b>database</b></font>
│   │       └── order_cancellation_database.py
│   ├── <font color="#295FCC"><b>order_placement</b></font>
│   │   ├── <font color="#295FCC"><b>business_rules</b></font>
│   │   │   └── order_placement_business_rules.py
│   │   ├── <font color="#295FCC"><b>controllers</b></font>
│   │   │   └── order_placement_controller.py
│   │   └── <font color="#295FCC"><b>database</b></font>
│   │       └── order_placement_database.py
│   └── <font color="#295FCC"><b>order_visualization</b></font>
│       ├── <font color="#295FCC"><b>business_rules</b></font>
│       │   └── order_visualization_business_rules.py
│       ├── <font color="#295FCC"><b>controllers</b></font>
│       │   └── order_visualization_controller.py
│       └── <font color="#295FCC"><b>database</b></font>
│           └── order_visualization_database.py
├── <font color="#295FCC"><b>front-end</b></font>
│   ├── <font color="#295FCC"><b>billing_payment</b></font>
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── billing_payment_ui.py
│   ├── <font color="#295FCC"><b>billing_visualization</b></font>
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── billing_visualization_ui.py
│   ├── <font color="#295FCC"><b>order_cancellation</b></font>
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── order_cancellation_ui.py
│   ├── <font color="#295FCC"><b>order_placement</b></font>
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── order_placement_ui.py
│   └── <font color="#295FCC"><b>order_visualization</b></font>
│       └── <font color="#295FCC"><b>ui</b></font>
│           └── order_visualization_ui.py
└── <font color="#295FCC"><b>logging</b></font>
    └── logger.py

34 directories, 22 files
</pre>
    <h4>The third level</h4>
    <img src="images/clean-architecture-soc-roadmap/decoupling-horizonta-vertical-layers-level-3.svg" alt="Horizontal layers are visualized from top-to-bottom. 
    They are composed by UI/Boundary, controller, entity/domain logic/business logic layer. 
    Which is composed by the layers Use Case specific business rule and enterprise 
    wide business rules/core business rules. The last layer is the database. 
    The vertical layers are the use cases, they are read left-to-right and each use case 
    has a set of objects in each layer to execute it. The logging layer cut accross cotroller, 
    business rules and database layers">
<pre class="code-snippet type-bash">tree
├── <font color="#295FCC"><b>front-end</b></font>
│   ├── <font color="#295FCC"><b>billing_payment</b></font>
│   │   ├── <font color="#295FCC"><b>services</b></font>
│   │   │   └── billing_payment_service.py
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── billing_payment_ui.py
│   ├── <font color="#295FCC"><b>billing_visualization</b></font>
│   │   ├── <font color="#295FCC"><b>services</b></font>
│   │   │   └── billing_visualization_service.py
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── billing_visualization_ui.py
│   ├── <font color="#295FCC"><b>order_cancellation</b></font>
│   │   ├── <font color="#295FCC"><b>services</b></font>
│   │   │   └── order_cancelation_service.py
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── order_cancellation_ui.py
│   ├── <font color="#295FCC"><b>order_placement</b></font>
│   │   ├── <font color="#295FCC"><b>services</b></font>
│   │   │   └── order_placement_service.py
│   │   └── <font color="#295FCC"><b>ui</b></font>
│   │       └── order_placement_ui.py
│   └── <font color="#295FCC"><b>order_visualization</b></font>
│       ├── <font color="#295FCC"><b>services</b></font>
│       │   └── order_visualization_service.py
│       └── <font color="#295FCC"><b>ui</b></font>
│           └── order_visualization_ui.py
└── <font color="#295FCC"><b>services</b></font>
    ├── <font color="#295FCC"><b>billing_payment</b></font>
    │   ├── <font color="#295FCC"><b>business_rules</b></font>
    │   │   └── billing_payment_business_rules.py
    │   ├── <font color="#295FCC"><b>controllers</b></font>
    │   │   └── billing_payment_controller.py
    │   └── <font color="#295FCC"><b>database</b></font>
    │       └── billing_payment_database.py
    ├── <font color="#295FCC"><b>billing_visualization</b></font>
    │   ├── <font color="#295FCC"><b>business_rules</b></font>
    │   │   └── billing_visualization_business_rules.py
    │   ├── <font color="#295FCC"><b>controllers</b></font>
    │   │   └── billing_visualization_controller.py
    │   └── <font color="#295FCC"><b>database</b></font>
    │       └── billing_visualization_database.py
    ├── <font color="#295FCC"><b>enterprise_wide_business_rules</b></font>
    │   └── some_enterprise_core_business_rule.py
    ├── <font color="#295FCC"><b>logging</b></font>
    │   └── logger.py
    ├── <font color="#295FCC"><b>order_cancellation</b></font>
    │   ├── <font color="#295FCC"><b>business_rules</b></font>
    │   │   └── order_cancellation_business_rules.py
    │   ├── <font color="#295FCC"><b>controllers</b></font>
    │   │   └── order_cancellation_controller.py
    │   └── <font color="#295FCC"><b>database</b></font>
    │       └── order_cancellation_database.py
    ├── <font color="#295FCC"><b>order_placement</b></font>
    │   ├── <font color="#295FCC"><b>business_rules</b></font>
    │   │   └── order_placement_business_rules.py
    │   ├── <font color="#295FCC"><b>controllers</b></font>
    │   │   └── order_placement_controller.py
    │   └── <font color="#295FCC"><b>database</b></font>
    │       └── order_placement_database.py
    └── <font color="#295FCC"><b>order_visualization</b></font>
        ├── <font color="#295FCC"><b>business_rules</b></font>
        │   └── order_visualization_business_rules.py
        ├── <font color="#295FCC"><b>controllers</b></font>
        │   └── order_visualization_controller.py
        └── <font color="#295FCC"><b>database</b></font>
            └── order_visualization_database.py

39 directories, 27 files
</pre>
    <h3>In which levels to apply SOLID principles?</h3>
    <h3>In which levels to apply Package Principles?</h3>
    Good Luck XD
</div>