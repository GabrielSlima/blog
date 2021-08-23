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
        part one of <strong>how to create clean cocurrent code</strong>. Let's dive into it! 
    </p>
    <h3 id="cpus-cores">CPUs and Cores</h3>
    <p>
        To understand what a concurrent code is, first we have to go through some important topics that are crucial to understand
        the context of this form of computation. Starting by the CPU.
    </p>
    <p>
        The Central Processing Unit, also known as CPU or processor, is responsible for processing the instructions that
        composes a program. They are literally an electronical circuit composed by electronic components that
        are responsible for executing your clean and incredible code you've written with tips and tricks that were
        taught by ancient creatures specialists in programming from the last articles you read...
    </p>
    <p>
        In other words, every line of code you've written is processed by the CPU during the exectuion of your program.
        When you have <strong>more than one processing unit</strong> on the same circuit you have a <strong>multi-core processor</strong>.
        So in theory, you have more than one place in which instructions can be executed.
        If concurrency and parallelism are used, the execution of the program can theorically be faster.
    </p>
    <p>
        There is so much more about CPUs, Multiprocessing programs and computer architecture in general. But today's
        goals is to focus only on the main concepts. In general, when your program becomes a process, all the instructions
        you've written is processed by the CPU or CPUs if the host has more core or processors.
    </p>
    <p>
        Well, now let's explore a bit more about <strong>what a process is.</strong>
    </p>
    <h3>What is a Process?</h3>
    <h4>Operating System</h4>
    <p>
        Before continuing with this topic, I would like to remind you with a few words about
        <strong>what an Operating System is</strong>.
        An operating system is basically a system, a program, that is responsible for managing the computer's resources
        and encapsulating it. In other words, the operating system is the program that is going to control how the interaction
        with and between the resources of a computer will happen and, other than that, it provides abstract interfaces
        so that other programs can interact with the resources...
    </p>
    <img src="images/clean-concurrent-code/concurrency-operating-system.svg" class="post-img" alt="">
    <h4>Programs and Processes</h4>
    <p>
        In short, the operating system is an "intermediate layer" between the high level tools and the resources. It also
        provides tools to create other programs. Tools such as Pycharm, Viusual Studio Code, Notepad++ and so on.
        Not only this, but also provides simpler ways of interacting with the resources using system calls (services request to the kernel)
        for instance through interfaces. Through system calls the program can read/write
        files from the disk, fork new processes and so on.
    </p>
    <p>
        The files (or source files) we use to keep the instructions we want the CPU to execute are called <strong>programs</strong>. When the program is
        executed, the source files are loaded from the storage into the memory with some vital information hold by
        the OS and it becomes a process. So in other words,
        a process is a program in execution plus the data structures needed to manage it.
    </p>
    <p>
        This is a example of a program:
    </p>
<pre class="brush: python">
<code>
def welcome(name):
  print("Welcome {}".format(name))

welcome("Gabriel")
</code>
</pre>
    <p>
        A process can create other processes (child processes) and the strucutre of the processes end up like a tree (<strong>process tree</strong>).
        They can communicate with each other using pipes or queues. This communication is not restricted to parent-child relationship only.
        Unrelated processes can communicate with each other through these tools too.
    </p>
    <img class="post-img" src="images/clean-concurrent-code/concurrency-process.svg" alt="">
    <p>
        So to summarize, the operating system isolates processes since they are allocated independently into the memory.
        The memory layout of a process is:
    </p>
    <img class="post-img" src="images/clean-concurrent-code/concurrency-memory-layout.svg" alt="Memory layout of a process">
    <p>
        Once the process is created, I mean, the program is loaded from the storage into a region of the virtual memory,
        the OS stores information about the process into a data structure caleld <strong>Process Control Block (PCB)</strong>,
        also known as <strong>processor descriptor</strong> into a <strong>process table</strong>.
        This data structure cointains vital information about the process like identification, state and control.
        This helps the OS to manage active processes. Inside this structure we can find the process's security attributes
        (owner and permissions) state (new, ready, running, waiting or dead and etc.), information about the resources allocated
        for the process and one specific data called <strong>program counter</strong>.
    </p>
    <p>
        The program counter (or instruction pointer) is a register that is part of the CPU. It stores a 
        pointer to the address of the memory location where the current instruction being processed is.
        Once the instruction is done, the program counter changes and points to the next instruction to be processed.
        In other words, it keeps track of the current position in the program. Which instruction is currently being
        executed.
    </p>
    <p>
        But why I'm talking about this specific element from the PCB? Well, this will get us into the <strong>threads</strong>...
    </p>
    <p>
        I've created a program in python and executed it. On Linux the process table is visible on the
        folder <a href="https://www.kernel.org/doc/html/latest/filesystems/proc.html" target="blank">proc</a>.
        This folder like an interface to the kernel's PCBs (Process Control Blocks).
    </p>
    <p>Let's take a quick look into the process's output:</p>
<pre>
<code class="code-snippet type-bash" style="margin: 0;">python3 example.py 
Waiting 10s...
Waiting 10s...
Waiting 10s...
Waiting 10s...
Waiting 10s...
Waiting 10s...</code>
</pre>
    <p>
        We can find the above process into the representation of the kernel's (OS) PCB table. I'm using the HTOP to
        to show my current running processes's information:
    </p>
    <img src="images/clean-concurrent-code/htop.png" class="post-img" alt="">
<pre><code class="code-snippet type-bash">sudo ls /proc/
1      11118  1197   15605  18	 1999  2143  220   2309  2783  304   3521  38	449   49    579   7	     cmdline	  iomem        meminfo	     stat
10     11135  1199   15611  180  2     2145  2205  2341  28    3066  3642  39	45    50    58	  720	     consoles	  ioports      misc	     swaps
100    11147  12     15798  181  20    2147  2211  2342  281   307   365   393	46    51    6	  774	     cpuinfo	  irq	       modules	     sys
101    11156  13     15880  182  2001  2154  2223  24	 285   3085  367   4	467   53    601   781	     crypto	  kallsyms     mounts	     sysrq-trigger
10532  11172  133    15931  183  2017  2155  2234  2406  2858  31    3681  40	4712  56    604   784	     devices	  kcore        mtrr	     sysvipc
10533  1118   13646  15958  184  2020  2156  2236  2410  288   3141  3684  41	4718  563   607   8	     diskstats	  keys	       net	     thread-self
107    11219  13647  15965  185  2035  2161  2253  2414  2900  3193  3687  42	4734  566   608   819	     dma	  key-users    pagetypeinfo  timer_list
11     11422  13999  16     186  21    2164  2254  2418  292   32    3694  422	4761  57    612   828	     driver	  kmsg	       partitions    tty
11060  11432  14     16038  187  2106  2165  2264  2422  2926  3257  3706  423	48    570   615   9	     execdomains  kpagecgroup  sched_debug   uptime
11063  116    14004  16065  188  2124  2187  2270  2434  2970  3281  3709  43	4857  5702  616   acpi	     fb		  kpagecount   schedstat     version
11064  1167   14932  16174  189  2128  2188  2288  25	 2996  33    3745  44	4858  571   631   asound     filesystems  kpageflags   scsi	     version_signature
11066  1168   15     16267  19	 2135  219   2292  259	 30    34    3751  446	4859  5729  662   buddyinfo  fs		  loadavg      self	     vmallocinfo
11095  11872  15159  16307  190  2139  2193  2296  26	 3010  3473  3757  447	4860  573   692   bus	     i8k	  locks        slabinfo      vmstat
11109  11912  15182  16308  197  2141  22    2299  27	 303   3517  3765  448	489   577   6958  cgroups    interrupts   mdstat       softirqs      zoneinfo
</code></pre>
<pre><code class="code-snippet type-bash">sudo ls /proc/16174/
attr	   clear_refs	    cpuset   fd       limits	 mem	     net	oom_score      personality  schedstat  smaps_rollup  status   timerslack_ns
autogroup  cmdline	    cwd      fdinfo   loginuid	 mountinfo   ns		oom_score_adj  projid_map   sessionid  stack	     syscall  uid_map
auxv	   comm		    environ  gid_map  map_files  mounts      numa_maps	pagemap        root	    setgroups  stat	     task     wchan
cgroup	   coredump_filter  exe      io       maps	 mountstats  oom_adj	patch_state    sched	    smaps      statm	     timers
</code></pre>
    <p>
        Under this folder informations like the process's state, security attributes, memory allocation, allowed memory usage, some info about the stack
        and so on can be found.
    </p>
    <h3>What a Thread is?</h3>
    <p>
        Ok, a process is a program in execution plus the data strucutres needed to manage it. Now what is a thread and where it is kept?
    </p>
    <p> 
        A thread is a sequence of instructions that can be executed independently from other code. Since threads are
        within the process address space, they can share some data. But there are some boundries that guarantee that
        threads can be scheduled and executed independently.
    </p>
    <p>
        Threads have their own stack, program counter, registers and data. These information cannot be replicated and are kept in a
        <strong>Thread Control Block (TCB)</strong>. This guarantee that they can be processed individually.
    </p>
    <p>
        Threads can be an entire article where topics like <strong>thread safety</strong> and <strong>design patterns</strong> can be explored
        in more details. Let's focus only on the main concepts for now.
    </p>
    <h3>Multithreading</h3>
    <p>
        Is a <a href="#cpus-cores">CPU (central processing uinit)</a> feature. It allows the execution of two or more threads independently. The
        execution can be concurrent or parallel. The CPU can be single-core (single core doesn't allows parallelism,
        only the illusion of it through concurrency) or multi-core.
    </p>
    <h3>Multiprocessor System</h3>
    <p>
        In simple words, is a computer system that has more than one CPU...
    </p>
    <h3>What Concurrent Programming is?</h3>
    <p>
        The concept in plain text is relatively simple: a program is concurrent when it does many things at the same time,
        in overlapping periods of time.
        In other words, instead of making progress in one single task at a time, like on sequential programs, the program
        makes progress on all the tasks at once. The program doesn't waits for each task to be completed, it starts the execution
        of the next task before the execution of the current task ends. This gives the illusion of parallelism.
    </p>
    <img class="post-img" src="images/clean-concurrent-code/concurrency-sequential.svg" alt="Sequential vs Concurrent processing">
    <img class="post-img" src="images/clean-concurrent-code/concurrency-concurrent.svg" alt="Sequential vs Concurrent processing">
    <img class="post-img" src="images/clean-concurrent-code/concurrency-parallel.svg" alt="Sequential vs Concurrent processing">
    <h3>What is parallelism?</h3>
    <p>
        While concurrency is about <strong>dealing with many things at once</strong>, parallelism is about actually <strong>doing many things
        at once</strong>. In other words, the tasks are executed simultaneously.
    </p>
    <p>
        Although the concepts seems very simple, in practice concurrent programs are very complex. On this article we're going
        to focus on how to prevent you from making horrible things with concurrent code, like I did.
    </p>
    <h4>What does concurrency and parallelism solves?</h4>
    <p>
        I think that the term "concurrent" is very expressive about what kind of problem concurrent systems and applications
        solves...to make things faster or simpler.
    </p>
    <p>
        For instance, if you have an application that depends on data provided by other systems on your network through HTTP requests.
        If you have one request per execution the reponse time is X. But if you have let's say 10 requests and then you have to create
        a report based on all the fetched data. The respose time can increase tremendously in a sequential code.
        Maybe the requests could be made by threads symultaneously.
    </p>
    <p>
        But, of course, there are a many things to consider when we are talking about concurrent programming, including
        processors, how many cores does the processors have, memory management, cache and so on.
    </p>
</div>