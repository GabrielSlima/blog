<div style="text-align: left;">
    <p>
        I don't have many years of experience in Software Engineering, during these last months
        i started to ask myself if documentation is really a thing and if it's worth it
        to spend time bulding them.
    </p>
    <p>
        Welcome to the Pewdiepie's favourite blog that maybe is only about Software Engineering
        and today I would like to share with you my thoughts about documentation and what I'm
        considering to do about it to save myself from the pain of having to understand
        complex desings... 
    </p>
    <h3>Is documentation really important?</h3>
    <p>
        Since I started to acquire more knowledge about and work with Software Engineering,
        documentation always seemed a problem or the solution to all problems related to
        the knowledge about the project itself.
    </p>
    <p>
        Working on a complex code base with lots of classes and lines of code is hard.
        For a period of time I thought that having a documentation that shows how the system
        is organized, what it was supposed to do and how it's doing it
        was going to make things easier for me.
    </p>
    <p>
        Now, working on a product where the overall objective is to reduce the amount
        of manual work of the users it seems that documentation is irrelevant at a certain
        degree. Writing what the system was supposed to do seems a waste of time because
        what it was supposed to do may be different next week...
    </p>
    <p>
        Documentation not only help me to better understand the solution, but also help me
        to organize my own thoughts, what I have to test, create and so on. Coding "without
        a plan" takes more time than coding with a basic plan. For instance, without having
        the visualization of the objects of the system/application.
    </p>
    <p>
        I'm reading this book about OOP and the author always talks about the use of UML,
        and it's realtionship with the requirements. On later chapters he focuses on
        introducing a very simple development process that goes from the requirements to
        the UML diagram.
        The phases of this process can be summarized into 3 steps: 
        requirements, desing and implementation.
    </p>
    <h4>Struggling to keep it updated</h4>
    <p>
        It's great to have a starting point when designing the application. A plan of what
        I have to create within it seems a good idea. Or at least was...
    </p>
    <p>
        As the requirements changed, the costs were increasing and the time decreasing.
        I started to notice that what I had to deliver on the begning was going to take,
        let's say 4 to 5 days to desing, implement and test from scratch.
        <br>
        After going through this process
        and going back to the user, the requirements changed and now I had to go through
        all the process of designing, implementing and testing all over again and didn't had
        the same time as before. In that way something was going to be outdated and letting
        the tests behind wasn't and still isn't a option for me.
    </p>
    <p>
        So in other words, having to change the documentation as the requirements changes
        becomes an inpratical thing. The reallity is that if requirements changes during the
        implementation or deployment phase, you certainly won't have the same time you had
        before to revaluate your desing and documentation all over again...
    </p>
    <h4>Does anyone actually reads it?</h4>
    <p>
        Documentation is a tricky subject because it gives you the impression that it's
        the answer for everything. For instance, I worked on a product where some of
        the features were something that <i>could be useful for the user</i> and not
        <i>what the user asked to build</i>, these are two different things.
        At that time I had to fix and, after strugling to understand the code,
        add some new things to an existing feature.
    </p>
    <p>
        The hard part was that no one seemed to
        know precisely what the feature was supposed to do. Some of them knew what
        the feature was about but nobody could tell what output it should produce.
        A documentation about what the feature was supposed to do, what it was supposed
        to produce and where all the used data was coming from seemed the solution
        for my problem. At the end I ended up refacting the code and going through
        the <strong>unit tests</strong>
    </p>
    <p>
        Documentation is really important when using APIs that are from another part of the
        company or from a vendor that provides a SaaS product for instance. When you need to
        understand how a specific lib works and so on. But other than that, does someone
        really reads the documentation?
    </p>
    <p>
        Afther going through the struggle for keeping the documentation uptodate and trying
        to keep the users happy by codind what they actually need and working on some
        large code bases I'm really starting to think that documentation is something that
        is worth it only when my code will be reused by someone else that doesn't need to
        understand everything about the code, just how to use it. This includes other teams
        within the comopany or someone on the internet if the product is intended to
        be "public"
        <br>
        Other than that, a well written and tested code base will be enough.
    </p>
    <h4>Struggling to keep the application testable</h4>
    <p>
        Don't get me wrong, I'm not a Software Engineering Wizard. I just want to share
        with you my frustration. By no means I'm telling you if it's right or
        wrong to have a well tested application.
    </p>
    <p>
        It's harder to write a unit test when you don't know how things are supposed to work.
        For instance, how are you supposed to validate if a required field isn't missing
        within a form data if you don't know how to properly serialize the parts of a multipart
        object? Maybe one option is to understand how the serialization works and think of
        a solution, an option for mocking a request from a client and test what you need, right?
    </p>
    <p>
        The worst thing one can do is to write production code without tests. I don't know you,
        but skiping unit tests beacause they they "double the work" isn't a valid
        excuse...
    </p>
    <p>
        Tests are supposed to keep the system flexible to changes. If any change is made,
        what is working can't stop working. It also improves the documentation part.
        The code base is the only thing that will be uptodate for obvious reasons. Not having
        tests leads to an application lead by fear. Fear of breaking what is already working
        because readers doesn't know everything the application should do util he makes a
        change and everything starts to break apart...
    </p>
    <p></p>
    <h4>Mind maps and creating the minimun documentation for my own benefit</h4>
</div>