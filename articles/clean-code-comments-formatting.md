<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today
        we are with one more article about clean code talking about why comments can be bad for your code
        and how to set formatting rules so that your team can work with clean code principles in mind...
    </p>
    <p>
        So as I did on my last blog posts talking about <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank"> 
        how I gave meaningful names to  my code </a> and how I use clean code
        principles to <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">create better functions</a>,
        I'm going to apply principles from the book Clean Code and try to illustrate them using my own code.
    </p>
    So without further ado let's get into it!
    <h3>Why comments are bad?</h3>
    <p>
        Lately I've been seeing code as a form of art. Wait...what?.Yeah, I know.
        <br>
        The last few months I've been looking at my code as a way of express my thoughts about something, about a solution.
        It's natural that when we enjoy doing something we want to do it well. Even if it's simple...well, at least I think in this
        way and I'm not better than anyone, of course.
        <br>
        But the thing is, when you have to come up with a solution you are expressing your way of thinking about something.
    </p>
    <p>
        Now imagine a painting with post-it notes on it explaining things about the painting itself. The notes can help beginners to
        comprehend the artist but they are useless for those more experienced.
        <br>
        Another point is that the thing with programming is that the same painting is changed constantly. 
        It's like when start a painting, make some things and pass it on to another artist. 
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
        I was with the PO, Scrum Master and Architect to discuss a new feature. This feature was dependent on another feature that was developed
        on past sprints and they were assuming that it was 100% completed because, again, there was no documentation about it. The team didn't had
        the discipline to keep the documentation updated. So there was no one worring about it and they were
        confident that the developer had finished it because the QA had approved.
        <br>
        When I started to read the code I found some parts of it that wasn't working the way it should be. I mean, the tests applied by the
        QA team where passing and so on but there was hard coded configurations that was supposed to be fetched from the database and most of
        the code wasn't prepared for custom configurations.
    </p>
    <p>
        So what does it mean? That the developer lied? Of course not. I've been working with a team where the MVP idea is strong. That means
        that we work delivering the bare minimun every sprint but what we deliver has the minimum value for the user. This way of 
        thinking is great for new projects because there is so much to do. Setting up environments for the first time, CI/CD pipelines that need to be created, basic security implementations, testing environments
        and so on...building the meminum features is great in this cases.
        <br>
        Most probably this happend in the past and the developer was working with them with this MVP mindset for each feature too. The 
        project was new.
    </p>
    <h3>So comments are bad...so I shouldn't use them?</h3>
    <p>
        I worked with a cool guy that always said out loud that <b>if your code needs comments, refact it</b>.
        <br>
        I agree with him. As I said in the past subhead, the code is the only documentation that will always be updated and will never lie 
        to you. If your code needs comments that's because you didn't expressed your thoughts well. So the best that you can do is just refact it.
        <br>
        It's like when you write an entire text message but no one can understand what you are saing. It's best that you just reformulate
        what you are trying to say.
    </p>
    <p>
        But there are cases where comments are not that hurtful...I'm going to list here those cases but don't use them as an excuse to add comments
        on your code. These are cases where there is no better way (at the moment) to write what you need with code only.
        <h5>Legal comments</h5>
        Are those comments that arey copyright notes, licenses and legal disclaimers. If you have to put them in your code just write the bare
        minimum and choose to put links to external documents if it requires more than one to three lines.
        <h5>Informative comments</h5>
        Are those that really carries a relevant information about a specific line of code. Like the match of a regex or date/time patterns.
        <h5>Explaination of intent</h5>
        Are comments that, as name says, explain the <b>why</b> behind a decision.
        <h5>Clarification comments</h5>
        Are those who translate the meaning behind something that it's obscure. They are used specially when the code can't be changed because
        it's part of some standard lib or because there is an integration with another system and the representation of somethings 
        are different for some reason.
        <h5>Warning of consequences</h5>
        Are those who not only inform other developers about a piece of code or explain the intent behind a decision but they also inform <b>why</b> 
        the given piece of code is working the way it is. A good example would be a unit test that is deactivated because it takes forever to
        run.
        <h5>TODO comments</h5>
        This one are very common if the MVP idea is been used for features too. Are those that act like notes inside the code maybe to
        remind the developer to change something later or to let other developers know what was going to be done originally in a given contex.
        <br>
        Remember the last example I gave you about the "unfinished" feature? Well this kind of comments could be very useful in that case...
        <h5>Amplification comments</h5>
        Are those who reinforce the importance of something. Things that seems harmless but, if removed, could bring the chaos on earth.
    </p>
    <h3>Bad comments</h3>
    <p>
    </p>
</div>