<div style="text-align: left;">
    <p>
        Recently I've decided to explore a bit more about each stage
        from the SDLC (Software Development Life-Cycle). This process
        is actually part of the job, it's part of the daily basis
        of a software developer/software engineer and it's easier than
        you think to forget that there are different approaches to
        execute it.
    </p>
    <p>
        The last articles I've been learning and writing about it
        in order to become more familiar with all the stages and
        explore the activities of each one of them. The main goal
        is to master the basics (maybe I'll write an article about
        this too).
    </p>
    <p>
        Welcome to the piewdiepie's favourite blog about Software Engineering
        and today's topic is <strong>Software Development Life-Cycle: Exploring the Design Stage</strong>.
        Let's get started.
    </p>
    <h3>What is it?</h3>
    <p>
        If you are familiar with the SDLC, you already know that every new software, piece of software
        or any alteration to an existing one goes through a development process composed
        by at least 5 stages: analysis, <strong>design</strong>, implementation,
        testing and deploy. That's kind of the natural process every new code or alteration
        goes through till it's available for the final user.
    </p>
    <p>
        If you read the last two articles in which I talk more about the <a href="#" target="blank">Analysis Stage</a>
        and <a href="#" target="blank">Techniques for the Analysis Stage</a> or already
        is familiar with the analysis stage, you know that this stage, the analysis stage
        can also be called <strong>requirements analysis and initial design</strong>. That's because
        it's intented to create a inital model of the software/system. This means that what the software
        must have, must do and how it must look like is documented by the business/system analyst.
    </p>
    <p>
        The output of the analysis stage are documents describing the software
        without implementation constraints. These documents are
        input for the design stage, guiding the designer on creating an specification of the
        system to be created.
    </p>
    <h3>The System Specification</h3>
    <p>
        The <i>system/software specification</i> is composed by some types of documents
        that are actually some type of design: interface design, basic architecture design,
        database design and programs design. The system specification will be
        used at the implmentation phase by the developers, it's a plan of what
        needs to be done.
    </p>
    <h4>Basic Architecture Design</h4>
    <p>
        The basic architecture design will describe what the system has,
        what hardware, software and infraestructure will be used.
        Most of the time, existing hardware, software and infraestructure
        are altered instead of new ones being created.
    </p>
    <h4>Interface Design</h4>
    <p>
        The interface is the <i>user interface</i>, if applicable,
        representations of how the system/software will look like
        is created. This means that if the software has a website,
        the screens are actually prototyped.
    </p>
    <h4>Database Design or File Design</h4>
    <p>
        Definition of what data will be manipulated and where it will be
        stored.
    </p>
    <h4>Programs Design</h4>
    <p>
        Every program identified at the basic architecture stage
        must be defined. This means that every program that
        need to be written will have a specific description
        of what it will do.
    </p>
    <h3>Design Levels</h3>
    <h4>Network Diagram</h4>
    <p>
        Is a model of how the system is deployed accross networks and systems.
    </p>
    <h4>Architetural Design</h4>
    <p>
        It's also called conceptual design. It's a broad representation 
        of the system's structure.
    </p>
    <h4>Detail Design</h4>
    <p>
        As the name says, it's a detailed design. This kind of design is
        usually applied to individual programs. In other words,
        each identifiend program has it's specifications described
        by the datailed design.
    </p>
    <h3>Input and Output</h3>
    <p>
        The input of the design is the output that coms from the analysis stage.
        Uses-cases, UML Diagrams, flowcharts, natural language requirements, requirements list,
        data motels, business process diagrams like sequence diagram sand so on. In other words,
        the input is the model of the system created at the analysis stage.
    </p>
    <p>
        From those documents, a new one that represents the solution is created.
        The design is a intermediate process, like a bridge. It receives the
        desired system and creates solutions for it. Naturally, the output
        of the design are diagrams and documents that describes how the system must
        be implemented. It's a blueprint of what must be done.
    </p>
    <img class="post-img" src="images/software-development-life-cycle-design/inputs-outputs.svg" alt="INPUT AND OUTPUT">
    <h3>Jumping the Design Stage</h3>
    <p>
        The design stage can be done in a formal way, meaning that
        before creating and code, a design must be accomplished and approved
        by someone, sometimes the design is not even made byh the developer.
        It also can be achieved using an informal way, the developer
        creates the design and after having the solutin implemented,
        the design is thrown away. This usually happens in agile models.
        Because of that, in many comapanies the design stage is not executed
        or it's not executed properly.
    </p>
    <p>
        Besides the argument that "no one will ever read the design,
        besides the designer himself",
        it's really important to create the design before wirting any code.
        It will be faster and prevent many patches to correct what is missing.
        Having the habit of creating the design first will make things faster
        to be implemented because you don't have to thing everything from scratch
        while implementing. Everything or almost everything that needs to be done
        were already planned.
    </p>
    <h3>Final Thoughts</h3>
    <p>
        Solutions can be made only when we understand the problem, that's why it makes
        sense to first analyse the requirements, understand business processes,
        other systems and the environment before doing anything.
        <br>
        Sometimes it doesn't look like that, but not going through the analysis stage
        and not understanding or documenting anything makes a huge difference.
        Of course it's a natural thing having to understand at least the bare minimum
        to code anything, the point here is about skiping parts of the process
        to "have more time" to code.
    </p>
    <p>
        The design stage is intended to create the solution to be implemented by the programmer.
        What the system must do and must have is already documented at this point.
        The designer will describe <i>how</i> things will be done. This plan
        will be important to prevent implementation flaws and prevent time lost during the
        implementation stage, making the programmer to thing about everything
        from scratch.
    </p>
    Good Luck XD
</div>
