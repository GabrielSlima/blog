<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today
        we are with one more article about Clean Code talking about <b>why comments can be bad for your code</b>...
    </p>
    <p>
        So as I did on my last blog posts talking about <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank"> 
        how I gave meaningful names to  my code </a> and how I use clean code
        principles to <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">create better functions</a>,
        I'm going to apply principles from the book Clean Code.
    </p>
    So without further ado let's get into it!
    <h3>Why comments are bad?</h3>
    <p>
        Lately I've been seeing code as a form of art. Wait...what?.Yeah, I know.
        <br>
        The last few months I've been looking at my code as a way of expressing my thoughts about something, about a solution, of course.
        It's natural that when we enjoy doing something we want to do it well. Even if it's simple...well, at least I think in this
        way and I'm not better than anyone because of that, of course.
        <br>
        But the thing is, when you have to come up with a solution you are expressing your way of thinking about something.
    </p>
    <p>
        Now imagine a painting with post-it notes on it explaining things about it. The notes can help beginners to
        comprehend the artist but they are useless for those more experienced.
        <br>
        <br>
        Another thing to consider when it comes to 
        programming is that the same painting (the code) is changed constantly. 
        You or someone else starts a painting, make some things and pass it on to another artist. 
        Naturally the other artist has a different way of thinking and he is going to do things the best way
        he can using his knowledge. If both you doesn't have the discipline to keep the notes updated guess what, they are going to
        pass on the <b>wrong information</b>.
    </p>
    <p>
        It's hard to keep comments updated for many reasons so the best way to garantee that the reader comprehend yout thoughts, your solution,
        is investing the time you would spend updating comments (that would be outdated soon) on writing a clean code.
    </p>
    <p>
        The best documentation a programmer can have is the code. A good example of this would be this project I was working on. 
        I was with the PO, Scrum Master and Architect to discuss a new feature. This feature was dependent on another feature that was developed by other developers
        on past sprints and they were assuming that it was 100% completed because, again, there was no documentation about it. The team didn't had
        the discipline to keep the documentation updated. So there was no one worring about it and they were
        confident that the developer had finished it because the QA approved the feature.
        <br>
        <br>
        When I started to read the code I found some parts of it that wasn't working the way it should be. I mean, the tests applied by the
        QA team where passing and so on but there was hard coded configurations that was supposed to be fetched from the database and most of
        the code wasn't prepared for custom configurations.
    </p>
    <p>
        So what does it mean? That the developer lied? Of course not. I've been working with a team where the MVP idea is strong. That means
        that we work delivering the bare minimun every sprint but what we deliver has a value for the user. This way of 
        thinking is great for new projects because there is so much to do. Setting up environments for the first time, CI/CD pipelines that need to be created, basic security implementations, testing environments
        and so on...building the minimum, only the features that has enough to provide value for the user is great in those cases.
        <br>
        Probably this happend in the past and the developer was working with them with this MVP mindset for each feature too. The 
        project was new.
    </p>
    <h3>So comments are bad and I'm supposed not to use them?</h3>
    <p>
        I worked with a cool guy that always said out loud that <b>if your code needs comments, refact it</b>.
        <br>
        I agree with him. As I said in the past subhead, the code is the only documentation that will always be updated and will never lie 
        to you. If your code needs comments that's because you didn't expressed your thoughts well. So the best you can do is just to refact it.
        <br>
        It's like when you write an entire text message but no one understands it. It's best that you just reformulate
        what you are trying to say.
    </p>
    <p>
        But there are cases where comments are not that hurtful...I'm going to list here those cases but don't use them as an excuse to add comments
        on your code. These are cases where there is no better way (at the moment) to write what you need with code only.
        <h4>Legal comments</h4>
        Are those comments that arey copyright notes, licenses and legal disclaimers. If you have to put them in your code just write the bare
        minimum and choose to put links to external documents if it requires more than one to three lines.
        <h4>Informative comments</h4>
        Are those that really carries a relevant information about a specific line of code. Like the match of a regex or date/time patterns.
        <h4>Explaination of intent</h4>
        Are comments that, as name says, explain the <b>why</b> behind a decision. Maybe the application is not scalable enough to complete the execution in time to respond so the developer decided to
        create something that covers that.
        <h4>Clarification comments</h4>
        Are those who translate the meaning behind something that it's obscure. They are used specially when the code can't be changed because
        it's part of some standard lib or because there is an integration with another system and the representation of somethings 
        are different for some reason.
        <h4>Warning of consequences</h4>
        Are those who not only inform other developers about a piece of code or explain the intent behind a decision but they also inform <b>why</b> 
        the given piece of code is working the way it is. A good example would be a unit test that is deactivated because it takes forever to
        run.
        <h4>TODO comments</h4>
        This one are very common if the MVP idea is been used for features too. Are those that act like notes inside the code maybe to
        remind the developer to change something later or to let other developers know what was going to be done originally in a given contex.
        <br>
        Remember the last example I gave you about the "unfinished" feature? Well this kind of comments could be very useful in that case...
        <h4>Amplification comments</h4>
        Are those who reinforce the importance of something. Things that seems harmless but, if removed, could bring the chaos on earth.
        <h4>Comments for public APIs/packages</h4>
        Those kind of documentation are super helpful for public APIs or packages. Many times we don't have much time to figure out what a function call is doing. I constantly go throught the code of external libs when using them because I'm curious about what is happenning
        but it's not always like that. There is days where I don't have time to figure things out. A good documentation
        helps a lot in cases like that.
    </p>
    <h3>Bad comments</h3>
    <p>
        So there are "good" comments...what about the "bad comments"?
        <br>
        As the author of Clean Code says in the book, most of the comments fall in category. Not that comments are 
        actually "good" but if you have to write a comment, <b>becasue you don't have a option</b>, consider the following
        ways of writing super bad comments so that your comments doesn't fall on this category too.
        <h4>Mumbling</h4>
        Comments that are unclear. They don't transmit any message. They are ussually unfinished comments or they are 
        placed in unfinished code.
        <br>
        <br>
        A good way to know if a comment fall in this case is to pay attention if you had to check other parts of the code to understand it.
        If so, clearly the comment is useless and it's not transmitting anything.
        <h4>Redundant Comments</h4>
        They literally say the same thing the code near them says. There is no relevant information or reveal of intent.
        They are literally what the code is saying and, sometimes, even longer and more confuse.
        <h4>Misleading Comments</h4>
        Comments that says something about a piece of code making the programmer believe that it's used for a purpose X
        whit a specific behavior but it does something else.
        <h4>Mandated Comments</h4>
        Are, as the name says, comments that were put in the code because they are required. Setting this kind
        of rules is not helpful because comments can be redundant and misleading. Having a rule to have documentation
        for every function, variable and so on makes room for these kind of useless comments.
        <h4>Journal Comments</h4>
        Comments added to the start of a module. The idea back in the days was to keep track of every change
        made and who made each change. Today they are useless because we have source code control.
        <h4>Noisy Comments</h4>
        Are redundant/misleading comments. The differece is that they are massivelly inside the code. You know
        when you see a class where all the 50 attributes has a comment? Yeah, those are noise comments.
        <h4>Position Markers</h4>
        Comments that marks a position inside the code to help the programmer to locate himself inside the code.
        <h4>Closing Brace Comments</h4>
        Commetns that marks the end of a block. They are ussually present in function with lots of nested blocks.
        Consider to shorten your function.
        <h4>Attributions and Bylines</h4>
        Comments that says who added what. Just remove them, we can see who added what throught the source code control systems.
        <h4>Commented-out Code</h4>
        Are, as the name says, a piece of code that is commented. They pollute the code and probably will be there <b>for
        a long time</b> becasue every developer will think it's important and shouldn't delete it.
        There is no reason to do this today, we have <b>source code control systems</b>.
        <h4>HTML comments</h4>
        Comments with HTML tags. If you find docstrings hard to read, imagine it with HTML tags...
        <h4>Nonlocal Information</h4>
        Comments that has information about other contexts. If you have to write a comment make it all about the 
        near code. Don't include systemwide information.
        <h4>Too much information</h4>
        Make sure taht the comment doesn't hold a historical discussion and irrelevant details making it 
        10 lines long like an entire chapter of a book.
        <h4>Inobvious connetion</h4>
        Comments that doesn't connects with the code it was suposed to describe.
        <h4>Function Headers</h4>
        If your functions are <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">small</a>
        and have a <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">good name</a> the function header
        is useless.
        <h4>Public APIs or packages documentation in nonpublic APIs or packages</h4>
        Don't include documentation for public APIs or packages if your API our package is not public.
    </p>
</div>