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
        First things first, what are we talking about here?
        As a short explanation, the main reasons a business requires
        a software solution are <b>to save money</b> or <b>to make more money</b>, usually both.
        <br>
        If you know the Software Development Life Cycle you also knows that,
        in theory, before start coding first we gotta understand what must
        be built and then document the "how".
        So before start coding, we gotta go trough the <i>Requirement Analysis</i>
        stage in which the purpose is to understand what must be done, in other words,
        what aspects of the business the stakeholders thinks can
        save or give more money to them. Then we gotta go through the
        design stage, in which we'll take the "wishlist" (not everything can be
        implemented, for many reasons, the most common is time) and
        create a model of the system, a blueprint. Then with the "blueprint"
        of the system we start coding.
    </p>
    <p>
        Now, how much design up front to do and this can conflict with
        <i>Test Driven Development</i> is topic for another article.
        The fact is that, independently of what software development strategy
        or process you're using, you're gonna need a minimun design, an architecture
        with a bare minimun description of the system.
    </p>
    <p>
        An software architecture is a visual representation of system, composed by
        elements also known as <b>components</b> and how those elements
        relate with each other.
        <br>
        Beign direct, a component is a logical section that addresses a specific
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
        Separation of Concerns is a principle for separating the
        system into different logical sections and each logical section
        addresses a different concern. This principle emphasizes
        code reuse, decoupled logical sections with well defined
        interfaces.
    </p>
    <p>
        Concerns can be split into functions, objects, modules, packages/folders
        or even at a program level. Concerns can communicate with each
        other through function calls or trough interprocess communication
        that can go from sharing data on the same memory addres space
        to communication through files, sockets, internet and so on.
        An example of concern would be the business rules, also known as
        models, domains, entities and so on. Or maybe utils or commons,
        logging, security, database. These are concerns that communicate
        with each other through functions calls. But you can also have
        some concerns like <i>Ordering</i>, <i>CreditCardPayment</i>,
        <i>DebitCardPayment</i> that can communicate through the
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
        to be considered a good one: development, deployment,
        operations and use cases.
        To be more clear, the architecture is a blueprint of the system,
        it's composed by components (each component addresses a concern)
        and their relationship. An achitecture supports those 4 concerns
        by having a relatively good separation of concerns with
        decoupled and cohesive components.
    </p>
    <h4>Development</h4>
    <p>
        To support this concern a few issues must be provided or solved
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
        is made possible. So a few issues in this concern an architecture must
        provide are or solve:
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
        case. An use case description may involve some type of UI
        technology, persistence, business rules, specific non-function
        requirements and so on.
        <br>
        It's important to have in mind that the architecture
        must make it easier to add, change or remove use cases
    </p>
    -------------------------------------------------------------- -------------------------------------------------------------- 
    <h3>Explanaition about the levels</h3>
    <p>
        So from my perspective, the levels described in the diagram
        are only to represent the 3 main ways of separating the system into
        concerns or 3 ways of breaking the system into components.
        I've separated them into levels because, according to the author,
        we gotta achieve the separation sequentially, as needed.
    </p>
    <h4>The first level</h4>
    <p>
        So we first start by identifying the concerns, but at
        the <i>source code level</i>. This means that the concerns will
        communicate with each other through function calls.
        Another name for this way of separating concerns is "monolith",
        the separation of concerns exists (doesn't mean they are tightly or loosely coupled)
        but they're running in the same program, same process address space.
    </p>
    <h5>Identify the horizontal layers</h5>
    <h5>Identify the vertical layers</h5>
    <img src="images/clean-architecture-soc-roadmap/decoupling-horizonta-vertical-layers.svg" alt="Horizontal layers are visualized from top-to-bottom. 
    They are composed by UI/Boundary, controller, entity/domain logic/business logic layer. 
    Which is composed by the layers Use Case specific business rule and enterprise 
    wide business rules/core business rules. The last layer is the database. 
    The vertical layers are the use cases, they are read left-to-right and each use case 
    has a set of objects in each layer to execute it. The logging layer cut accross cotroller, 
    business rules and database layers">

<pre class="code-snippet type-bash">├── billing_payment.py
├── billing_visualization.py
├── logging.py
├── order_cancellation.py
├── order_placement.py
├── order_visualization.py
└── some_enterprise_core_business_rule.py

0 directories, 7 files
</pre>

<pre class="code-snippet type-bash">├── <font color="#295FCC"><b>billing_payment</b></font>
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
    <h4>The third level</h4>
    <h3>In which levels to apply SOLID principles?</h3>
    <h3>In which levels to apply Package Principles?</h3>
    Good Luck XD
</div>