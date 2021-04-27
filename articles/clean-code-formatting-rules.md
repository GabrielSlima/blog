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
        Vertical formatting are about how long should the source files be. Of course, the smaller
        the easier to read...
        <br>
        The Clean Code book recommends that the file should be 200-500 lines long. I think it's possible to
        keep the files this log and course that there is the fact that depending on the language there maybe
        things that need more deatails than others. But other than that with a max of 500 lines it covers those cases.
        <br>
        And what about the structure of the file? It's ok to just put functions in any order?
    </p>
    <p>
        I confess. This wasn't a thing for me till recently. I'm not going lie. I find classes that has functions
        in any order harder to read but I thought it was just me being paranoid about this...
    </p>
    <p>
        But now I see that I wasn't been paranoid at all. I got used going throught the functions and just debugging
        them till I figure out and map everything that is happening. But that is not how it should be.
        Of course there are cases where debugging is the way to go. But if you think that the code should be simple
        and readable the debugging processing should be used with specific purpouses not as the main tool to figure out
        what the code is doing.
    </p>
    <h4>The newspaper metaphor</h4>
    <p>
        Ok, the source files should be between 200-500 lines longs at the most and the functions should have a specific order to make
        the file readable, but how?
    </p>
    <p>
        Image the file as a newspaper article. Every article has a headline to let the reader know what the article is about. The first paragraph
        is a synopisis covering the main concepts of the arcticle and the next paragraphs explores those concepts and expose the
        details hidden in the first paragraph.
    </p>
    <p>
        So in the code the headline would be the file's name. The top of the file should include only the high-level concepts and the details
        should be increased as we move downward.
        <br>
        Following the idea of <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">abstractions</a>, the first layers would
        be at the top of the file as the low-level layers are kept at the bottom.
    </p>
    <h4>Vertical openness between concepts</h4>
    <p>
        Code is read left to right, top to bottom. Every line is a expression or clause and every group of lines is a concept.
        Every thought should be separated by blank lines
    </p>
    <!-- TODO include examples -->
</div>