<div style="text-align: left;">
    <p>
        If you read the article about the difference between <a href="https://gabrielslima.github.io/blog/post.html?id=10" target="blank">Objects and Data Structures</a>
        or if you already have experience writting OOP code you know that Objects are like "mini programs" that composes an application
        and that Classes are the templates for creating those objects.
    </p>
    <p>
        So far, if you've read the last articles, you know how to create <b>clean and meaningful functions</b>. But how can we create Clean Classes?
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today
        you are going to learn what do you need to create Clean and meaningful Classes. Let's get into it!
    </p>
    <h3>How Classes should be structured: The Organization of Classes</h3>
    <p>
        Files should be strucutred as a newspaper article. The name and title should convey what the article is about. The first paragraph
        should introduce the topics to be  explored on the following paragraphs and the body should explore those topics, adding details
        as we go down...
        This "way" of writting the code is called <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">The Stepdown Rule</a>.
    </p>
    <img class="post-img" src="images/clean-code-clean-classes/class-structure.svg" alt="">
    <p>
        The image above shows the recommend structure of a class based on the Java Convetion for classes. Although the book doesn't recommends the usage of
        protected members I thought it was worth it to include them too.
    </p>
    <h3>Small Classes</h3>
    <p>
        To say how small functions should be we count the number of lines and how many thing it's doing (should be only one thing).
        To measure how small classes should be we have to count <i>how many responsabilities</i> it has.
    </p>
    <p>
        They should have just one responsibility only and their names should describe the responsibility...
    </p>
    <h3>The Single Responsibility Principle</h3>
    <p>
        This is one of the SOLID principles for designing OOP applications. It states that our classes, modules and functions should be responsible for only one piece
        of the entire feature. In other words, those entities should have only one reason to change: only if the requirements requires them to change directly.
    </p>
    Good Luck XD
</div>