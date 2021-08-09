<div style="text-align: left;">
    <p>
        If you read our last article about
        <a href="https://gabrielslima.github.io/blog/post.html?id=14" target="blank">Clean Systems/Applications</a>
        you already know that high cohesion and loosely coupled desings is the way to go. Following these principles
        more cleaner, mantainable, reuasable and flexible desings emerges.
    </p>
    <p>
        You also know that there are important desing patterns like decorators, DI (Dependecy Injection), factory and principles
        like SOLID, IoC (Inversion of Control), LoD (Law of Demeter) and many other that help us to provide more cohesive desings
        with loosely-coupled elements...
    </p>
    <p>
        But why bother about these things? Why bother about a loosely-coupled or high-cohesive desing?
        <br>
        The short answer is <strong>agility</strong>. Well, there it goes the long answer...
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and 
        today's topic is about <strong>rules for a good and simple desing</strong>. Let's dive into it!
    </p>
    <h3>Why bother about Clean Code and why it affects agility?</h3>
    <p>
        Agility is not only about project management using Scrum, Kanban and so on. It's also about code.
        Good desings leads to more agile development. Simple like that.
    </p>
    <p>
        These past weeks I had to change a couple of things on this microservice. I'm not going to lie to you, the first version of it is not even close of a good one
        and I did this. I don't want give to you excuses, but the first version was made in a very tricky situation, for both, me and the entire team.
        I was new at the team and they needed this feature done ASAP, so I did what was necessary.
    </p>
    <p>
        I also added to my own Kanban, the one that is for my usage only and use to keep track of what I have to do or what I'm working on,
        a label to refact this microservice and create a better desing for it.
    </p>
    <p>
        The time came where I had to add some other stuff on it and change existing ones and I had to basically refact at least the bare minimum to change
        how the existing feature works and satisfy the additional requirements. It took more time than I expected. If this desing was loosely-coupled and high-cohesive,
        small versions of it could be released during this development process. But instead, I had to refact it and deploy the first couple of changes and
        now I have what I need to add the new stuff and have small deliveries...
    </p>
    <p>
        Well, now that you kind of know how Clean Code affects agility, let's explore some rules for a simple desing!
    </p>
    <h1>Tests: makes the system verifiable</h1>
    <p>
        Having tests guarantee that the system work as intended and that our classes are small and have a single purpose. Therefore, having
        tests kind of force us to use more principles that help us to make the system easier to test. A loosely-coupled and high-cohesive system
        is easer to test than a tight-coupled and low-cohesive one.
    </p>
    <p>
        So the more tests we write, the more principles like DIP, Dependecy Injection, Law of Demeter, interfaces and abstractions we have to use
        to make things easier.
    </p>
</div>