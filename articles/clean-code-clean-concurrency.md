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
    <h3>CPUs and Cores</h3>
    <p>
        The Central Processing Unit, also known as CPU or processor, is responsible for processing the instructions that
        composes a program. They are literally an electronical circuit composed by electronic components that
        are responsible for executing your clean and incredible code you've written with tips and tricks that where
        taught by ancient creatures specialists in programming from the last articles you read...
    </p>
    <p>
        In other words, every line of code you write is executed by the CPU. When you have more than one Processing Unit
        you have a multi-core processor, so in theory, you have more places where the instructions that composes your program
        can be executed. If concurrency and parallelism are used, the execution of the program can theorically be faster.
    </p>
    <p>
        There are more complex than this but let's keep in this way for now...
    </p>
    <h3>What a Process is?</h3>
    <h4>Operating System</h4>
    <p>
        Before continuing with this topic, I would like to rember you with a few words what a Operating System is.
        An operating system is basically a system, a program, that is responsible for managing the computer's resources
        and encapsulating it. In other words, the operating system is the program that is going to controll how the interaction
        with and between the resources of a computer will happen and, other than that, it provides abstract interfaces
        so that other programs can interact with the resources...
    </p>
    <img src="images/clean-concurrent-code/concurrency-operating-system.svg" class="post-img" alt="">
    <h4>Programs and Processes</h4>
    <p>
        In short, the operating system provides tools to create other programs. Tools such as Pycharm, Viusual Studio Code, Notepad++ and so on.
        Not only this, but also provides simpler ways of interacting with the resources using what we call system calls. With them we can read/write
        files from the disk, fork new processes and so on. in a more convinient way.
    </p>
    <p>
        The files (or source files) we use to keep the instructions we want the CPU to execute are called <strong>programs</strong>. When the program is
        executed, the source files are loaded from the storage into the memory and it becomes a process. So in other words,
        a process is a program in execution plus the data structures needed to manage it.
    </p>
    <p>
        A process can create other processes (child processes) and the strucutre of the processes end up like a tree (<strong>process tree</strong>).
        They can communicate with each other using pipes or queues. This communication is not restricted to parent-child relationship.
        Unrelated processes can communicate with each other through these tools too. 
    </p>
    <p>
        To summarize, the operating system isolates processes since they are store independently into the memory. The memory layout of a process
        is:
    </p>
    <img class="post-img" src="images/clean-concurrent-code/concurrency-memory-layout.svg" alt="Memory layout of a process">
    <p>
        Every process owns: a regeion of virtual memory, security attributes (owner and permissins), state and descriptors
        (data structure that holds information about the resources allocated for the process). Part of this information
        about active processes are hold by the operating system in a data structure called process controll block.
    </p>
    <h3>What a Thread is?</h3>
    <p>
        To understand what a Thread is we have to understand a litte bit more about how a process is executed by the processor...
    </p>
    <p>
        Once the program is a process, I mean, once the program is loaded from the storage to the memory a portion of the memory
        is allocated for it. There we can find vital information about the active process including the program counter or
        instruction pointer. It's basically a register that points to the current instruction being processed in memory. 
    </p>
    <h3>What Concurrent Programming is?</h3>
    <p>
        The concept in plain text is relatively simple: a program is concurrent when it does many things at the same time,
        in overlapping periods of time.
        In other words, instead of making progress in one single task at a time, like on sequential programs, the program
        makes progress on all the tasks at once. The program doesn't waits for each task to be complete, it starts the execution
        of the next task before the execution of the current task ends. This gives the illusion of parallelism.
    </p>
    <img class="post-img" src="images/clean-concurrent-code/concurrency-sequential.svg" alt="Sequential vs Concurrent processing">
    <img class="post-img" src="images/clean-concurrent-code/concurrency-concurrent.svg" alt="Sequential vs Concurrent processing">
    <h3>What is parallelism?</h3>
    <p>
        While concurrency is about <strong>dealing with many things at once</strong>, parallelism is about actually <strong>doing many things
        at once</strong>. In other words, the tasks are executed simultaneously.
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
        processors, how many cores does the processors have, memory management, cache and so on. 
        Let's focus on how this works first.
    </p>

    <h4>Does it breaks SRP?</h4>
    <h3>How to unit test concurrent code?</h3>
</div>