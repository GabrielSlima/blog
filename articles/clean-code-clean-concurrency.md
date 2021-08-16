<div style="text-align: left;">
    <p>
        Writing Clean Code should be a natural thing for programmers, but it's not. Even some more experienced programmers
        think that "making it work" is enough to consider the job done. But that's not true.
    </p>
    <p>
        That is why there are so many books talking about this super important topic. To teach and make programmers aware
        of the good practices and that bad code does not only hurts the product on the long run, it also
        hurts the communitcation between the members of the team...
    </p>
    <p>
        If you read some of the first articles of this series that is all about clean code,
        you know that this last year I've been considering programming a form of art.
        The motive for this is simple, I can express my thoughts through code.
        For this motive I've been trying to write clean code, so that other "artists" can easily comprehend my "art"...
    </p>
    <p>
        Clean code does not only helps with the communication, it also helps with the agility. It's way much faster
        and easier to change or add something in a well structured, organized, expressive and tested code
        than it is on a bad code base.
    </p>
    <p>
        In summary, to start writing clean code you can experiment by starting on your classes and functions. Use principles
        like SRP, SoC, cohesion and coupling mixed up with good and well defined names. That's it. 
    </p>
    <p>
        Then you can explore other concepts and design patterns that promotes those principles 
        like IoC, Dependecy Injection, Open/Closed principle, Factories, AOP programming, Null Object Pattern and so on.
    </p>
    <p>
        But all of this considering that you are writing clean and signle thread code. What about concurrent code?
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and Today's topic is 
        how to create clean cocurrent code. Let's dive into it! 
    </p>
    <h3>What Concurrent Programming is?</h3>
    <p>
        The concept in plain text is relatively simple: a program is concurrent when it does many things at the same time,
        in overlapping periods of time.
        In other words, instead of making progress in one single task at a time, like on sequential programs, the program
        makes progress on all the tasks at once. The program doesn't waits for each task to be complete, it starts the execution
        of the next task before the execution of the current task ends. This gives the illusion of parallelism.
    </p>
    <h3>What is parallelism?</h3>
    <p>
        While concurrency is about <i>dealing with many things at once</i>, parallelism is about actually doing many things
        at once. In other words, the tasks are executed simultaneously.
    </p>
    <p>
        Although the concepts seems very simple, concurrent programs are very complex in practice. On this article we're going
        to focus on how to prevent you from making horrible things with concurrent code, like I did.
    </p>
    <h4>What does it solves?</h4>
    <p>
        I think that the term "concurrent" is very expressive about what kind of problem concurrent systems and applications
        solves...to make things faster.
    </p>
    <p>
        But, of course, there are a many things to consider when we are talking about concurrent programming, including
        processors, cores, memory management, cache and so on.  Let's focus on how this works first.
    </p>
    <h4>Does it breaks SRP?</h4>
    <h3>What a Process is?</h3>
    <h3>What a Thread is?</h3>
    <h3>How to unit test concurrent code?</h3>
</div>