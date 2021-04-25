<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's
        topic is <b>formatting rules</b>. Formatting rules are super important when it comes
        to Clean Code.
    </p>
    <p>
        Professional developers knows that the first thing to be dealth with it before anything else is the
        <b>communication</b>. In the last blog posts I've been emphasizing that choosing good names,
        creating small functions instead of creating monsters and removing comments makes your code readable
        because by doing those thing you're removing the pollution and making things simple and easy to understand.
    </p>
    <p>
        All of those things are about the <b>communication</b> between you and other developers.
        <br>
        The way the code is written will affect every change in the future. So it's natural that if it's
        not well written the next changes will make it less readable and more complex...
    </p>
    <p>
        Formatting rules are a set of guidelines to help developers to write their code and a way of keeping
        the same code style on the project.
        <br>
        Today we have tools like Sonarqube that allow us to set custom Quality Gates. Some of the formatting
        rules can be automated with it.
        <br>
        So without further ado, let's see what can helps on setting formatting rules.
    </p>
    <h3>Vertical Formatting</h3>
    <p>
        Vertical formatting are about how long should the source files should. Of course, the smaller
        the easier to read...
        <br>
        The Clean Code book recommends that the file should be 200-500 lines long. I think it's possible to
        keep the files in this size. Of course that there is the fact that depending on the language there maybe
        things that need more deatails than others.
        <br>
        And what about the structure of the file? It's ok to just put functions in any order?
    </p>
    <p>
        I confess. This wasn't a thing for me till recently. I'm not going lie. I find classes that has functions
        in any order harder to read but I thought it was just me being paranoid about this...
    </p>
    <p>
        But now I see that I wasn't been paranoid at all. I got used with going throught the functions and just debugging
        them till I figure out and map everything that is happening. But that is not how it should be.
        Of course there are cases where debugging is the way to go. But if you think that the code should be simple
        and readable the debugging processing should be used with specific purpouses not as the main tool to figure out
        what the code is doing.
    </p>
    <h4>The newspatter metaphor</h4>
</div>