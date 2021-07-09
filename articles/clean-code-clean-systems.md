<div style="text-align: left;">
    <p>
        So far you have seen how to create clean and meaningful code using tips, principles and some desing patterns for creating <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">clean and meaningful names</a>
        for your functions, variables and classes. How to create <a href="https://gabrielslima.github.io/blog/post.html?id=11" target="blank">clean and robust code</a>. How to create <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="blank"> clean classes</a> using principles like
        SOLID to create OOP desings with High-Cohesion and loosely-coupled objects.
    </p>
    <p>
        These are super important articles and I strongly recommend you reading them...we've talked about the organization of our functions , variables, classes and source-files. Welcome to the PewdiePie's favourite blog about Software Engineering and 
        Today's topic is about the organization of our applications and systems, I mean, <strong>how to create clean and meaningful systems or applications</strong>.
    </p>
    <p>
        Let's get into it!
    </p>
    <h3>Separation of Concerns</h3>
    <p>
        One of the main concerns in Software Development is complexity management. Systems and applications can get very complex deppending on the problem domain.
        There are different ways of dealing with complexity in Software Development. One of them is creating small and manageable units of code and giving it clear and well
        defined names and responsibilities. Another way of dealing with complexity is <strong>providing desings modularized by concerns</strong>.
    </p>
    <p>
        Separation of Concerns is a desing pattern for (as you can guess by the name) creating systems or applications with logical sections separated by different concerns. Each logical section or module
        is focused on solving a piece of the entire solution or group a set of elements that solves a piece of the entire solution. Each logical separation have well-defined interfaces and applies encapsulation.
    </p>
    <h3>Ways of providing SoC</h3>
    <h4>OOP designs</h4>
    <p>
        Concerns can be separated into objects, packages of classes that share a common set of responsibilities or modules
    </p>
    <h4>Procedural desings</h4>
    <p>
        Concerns can be separated into methods or functions or packages of source files that share a common set of responsibilities or modules
    </p>
    <h4>Architectural Desing Patterns</h4>
    <p>
        Concerns can be separated into Layers. For instance the MVC Pattern. It sepatares the system/application into 3 layers considering that services, repositories, DAO and so on are patterns used to compose 2 of the 3 layers it has.
    </p>
    <h4>Static Web Page</h4>
    <p>
        Static Web Pages can me "modularized" into 3 different files, HTML which holds the structure of the page. CSS which holds the formatting of the page and the JS which is responsible for maipulating the DOM.
    </p>
    <h3>SoC: Separation of Concerns vs SRP: Single Responsibility Principle</h3>
    <p>
        For a moment I thought these two were the same...maybe you did to. The fact is that the SRP is a principle that is about how many things our classes and modules are responsible and the SoC is about what things a module is responsible.
        A module can be anything inside the application. It can be a Microservice, a layer from a Architectural point of view, a package, source files, classes...
        The SRP can be be used as a guideline for those things too <strong>but</strong> it is intended to be used as a guideline for designing classes and modules (source files in some promming languages, for instance, python).
    </p>
    Good Luck XD
</div>