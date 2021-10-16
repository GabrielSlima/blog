<div style="text-align: left;">
    <p>
        Every Software has a life-cycle. The life-cycle can be about
        the entire software as a whole. But it also can about an
        alteration to an existing feature or even a new one.
        <br>
        There are quite a few ways of applying this life-cycle.
        In some models some of the the phases can be achieved in 
        parallel. In others, the phases are achieved one after the other.
        <br>
        Today will take a look on this life-cycle using one of the most
        know models where the phases are completed one after the other
        to keep things simple.
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's
        topic is <strong>What is the Software Development Life-Cycle</strong>.
        Let's get into it!
    </p>
    <h3>The Software Development Life-Cycle</h3>
    <p>
        The software development life-cycle is a process for developing softwares.
        As I said before, there are some steps
        one almost always follows to actually create or alter a software.
    </p>
    <p>
        The software development process is broken into a few
        phases. From a macro visualization they would be:
        Analysis, design, implementation, testing and deployment.
        If you are not familiar with this cycle, here goes an example.
    </p>
    <p>
        Imagine you are creating a portfolio website for a body piercing/tattoo
        shop. Before actually coding anything you need to know what
        the website must or not have as a content, the sections and so on.
        <br>
        Following the watterfall model, after gathering the requirements
        (done on the analysis phase),
        you're supposed to fall into the design phase.
        <br>
        Diagrams that represents the solutions so that the software (the website),
        satisfies the requirements are created. For instance, maybe one requirement
        is a section so that their clients can send emails. Maybe a prototype
        is created for the frontend.
        <br>
        Then, and only then, you're supposed to move on to the implementation
        phase. The phase in which you actually writes code. Then you
        test the webiste and host it using a hosting provider and creates a DNS.
    </p>
    <p>
        I've just described the entire software life-cycle. The software's
        development process starts with <strong>problems</strong> and ends
        with a <strong>software solution</strong>. Maybe the soluton is
        a website or a set of interacting systems.
        <br>
        Of course
        that depending on how complex the entire software is the overall
        cycle may or may not have more details. This was an example of
        a simple portfolio website.
    </p>
    <p>
        That being said, using the <strong>watterfall</strong> approach
        (an approach for the software development process),
        these phases are accomplished one
        after the other.
        Each phase has an important role on this life-cycle.
        Each one of them will be input for the next one.
        <br>
        This means that first we do the analysis
        and have a well and abstract description of the requirements,
        then and only then we create the designs that represents
        the solutions based on the requirements for the software.
        Then we move on to the coding phase, then we test and deployment.
    </p>
    <img src="images/software-development-life-cycle/software-life-cycle.svg" alt="Software Life Cycle image">
    <h4>Analysis</h4>
    <p>
        The overall objective of any analysis activity on this life-cycle
        is to create a model of the requirements that is independent
        of implementation rules. In other words, first what
        the software must have and how it must function is documented using tools
        and languages that are agnostic to the implementation rules, such as
        programming languages, infrastructure constraints and so on.
    </p>
    <p>
        In short, the output of this phase can be ER Models and flow-charts,
        use cases diagrams, requirements lists or even UML diagrams,
        when it comes to OOAD (Object-oriented analysis and design) and so on.
    </p>
    <h4>Design</h4>
    <p>
        With the analysis output, the overall architecture of the software
        is created. The design creates a solution based on the 
        requirements that later will be translated into a software.
        The results can be a low-level architecture, meaning that the designer
        created a solution that is on a component level or algorithm level.
        Or it can also be a high-level architecture. A macro representation
        of what the software has.
    </p>
    <h4>Coding or Implementation</h4>
    <p>
        The implementation phase is very simple. The design is translated into
        actual code. The software can be organized into subsystems,
        components or microservices.
    </p>
    <h4>Testing</h4>
    <p>
        After implemented, I mean, after translating the high/low architectures
        into code, the software must be tested. On this phase the software's
        features are tested to guarantee that they are working properly according
        with the requirements.
    </p>
    <h4>Deploy</h4>
    <p>
        Once the software is tested, finally but not least important,
        the deploy phase must be achived so that the user can
        actually use it.
    </p>
    <p>
        Now that's a very summarized description of these phases.
        They can be way more complex...
    </p>
    <h3>Object Oriented Software Development Process</h3>
    <p>
        The process for developing an object-oriented software
        is very similar to other development processes.
        The main difference is that the result is an
        object-oriented software. This means that
        the software is composed by interacting entities called objects.
        The requirements are broken into objects and
        they interact with each other to accomplish business goals.
    </p>
    <p>
        The life-cycle or development process of an object-oriented software
        is basically the same as the one you've seen on previously.
        First we gather the requirements throught the analysis, then the design is created,
        implemented, tested and deployed.
    </p>
    <h4>Object-oriented analysis</h4>
    <p>
        To understand object-oriented design, first we have to
        understand what information it needs as input.
        The input for this process (object-oriented desing) is achieved in the OOA (Object-oriented
        analysis). As I said before, this is an approach
        for identifying and documenting problems.
        In other words, the object-oriented design will
        represent a object-oriented program that will solve one or
        more problems that were indetified and documented during the OOA.
    </p>
    <p>
        Every application/system has a life cycle. I would go even further
        and say that today every thing you create within the
        application/system has a life cycle.
        Why? Simple, today you don't develop an entire application/system
        from the ground up. You create it in small pieces.
        This model is also called <strong>incremental mode</strong>.
        But that's a subject for another post...
    </p>
    <p>
        There are many other software life-cycle models in which
        the phases are accomplished in different ways. This subject
        deservers an entire article or series of articles.
        <br>
        In short, the Object-oriented analysis falls into
        the analysis phase and the outputs are diagrams.
        In this approach the requirements are organized in objects
        and, if you read <a href="https://gabrielslima.github.io/blog/post.html?id=10" target="blank">this article</a>
        you know that objects are composed by data and behaviors to
        represent entities into the application/system. So naturally
        these two aspects are dealt with together instead of separately,
        like in other software analysis approaches.
    </p>
    <h4>Object-oriented design (OOD)</h4>
    <p>
        An object-riented design is the process of defining objects and
        their interactions with the purpose of solving a software problem.
        The problems are identified and documented on the analysis phase.
        The input for the design phase can be use cases for functional
        requirements, I mean, for describing behaviors and interaction
        between the user and system/application or between the system with
        other systems. The output can also include prototypes, requirements
        lists and so on.
        <br>
        The result is a system of interacting objects,
        also knwon as <strong>object-oriented program</strong>.
    </p>
    <p>
        An object is an entity composed by data and behaviors
        (the methods/functions/procedures).
        The procedures act upon the object's data, manipulating them,
        changing the object's
        state or retrieving information about it. The interfaces
        (the public methods) are how the object can be interacted with.
        The overall objective is that the object represents a single
        concern within the system/application/program and interact with
        your own data.
    </p>
    <p>
        Object-oriented design is the process of identifying the
        objects (their data, interfaces and implemetations)
        and how they interact with each other to solve one or more problems. 
        It is an approach to Software design. The process of desiging software
        solutions.
        The solution can be low-level (component or algorithm)
        or high-level (architecture).
    </p>
    <h4>Implementation or coding</h4>
    <p>
        Once the hihg level (software's architecture)
        and low level (algorithms and components) designs are
        accomplished on the design phase, the solution is translated
        to code. In other words, the software that were
        planed on the desing phase is brought to life and 
        the result is an object-oriented program.
    </p>
    <h4>Testing and Deploy</h4>
    <p>
        This phase is preety much the same as other models.
        Once the solutions are implemented they need to be
        tested and once checked that the requirements
        were satisfied and that the implementation is working
        fine, the software is deployed
        so that it can be used.
    </p>
    <h3>Final Thoughts</h3>
    <p>
        The software development life-cycle, I mean,
        the process every software or piece of software
        goes through till it's deployed is actually
        very simple.
        We have a phase for each concern and eanch concern
        is threated accordingly with the tools and methods
        for identifying, documenting and creating solutons.
    </p>
    <p>
        Of course that each phase may or may not have more details
        based on the complexity level of each project,
        but in general, it's very simple.
    </p>
    <p>
        On the next articles we'll explore a bit more of each phase of
        this life-cycle and eventually compare it with some other models.
        The watterfall for instance isn't used as much as the
        incremental model. That's because the incremental mode
        was proved to be more efficient.
    </p>
    <p>
        Thank you for reading this far and till the next post!
    </p>
    Good Luck XD
</div>