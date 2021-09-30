<div style="text-align: left;">
    <p>
        Since I started with programming I was introduced to one of the most
        famous desing patterns for OOP applications/systems, the MVC.
        With that comes some questions about the usage of this pattern. Questions about the view,
        where business rules goes on the MVC architecture, is Model a business object or
        data holder and so on.
    </p>

    <p>
        So I've decided to look for some answers and document them here so that you can use MVC
        more wisely. Welcome to the pewdiepie's favourite blog about Software Engineering and today's topic is
        <strong>Things you should know before using MVC</strong>. Let's get into it.
    </p>
    <h3>MVC and REST APIs</h3>
    <p>
        I would like to start telling you the difference between REST and MVC and when they are used together.
    </p>
    <p>
        REST is an architectural style
        based on a set of contraints, rules for defining how networked resources must be
        defined and addressed. Resources are transferred between client/server via
        language agnostic and standardized interactions.
    </p>
    <p>
        MVC is an architectural pattern for the application. It's about the organization
        of an specific application or system. REST is about the communication between client/server
        and this may include one or more systems/applications that not necessarely uses MVC
        as an architectural pattern.
    </p>
    <p>
        So in other words, if your RESTful Web APIs were built using MVC or not doesn't makes difference
        since the Web APIs adhere to REST constraints. The REST is an architectural style for guiding
        architectures in which the elements are clinet/server applications/systems.
    </p>
    <img class="post-img" src="" alt="Image of a system/appliction with MVC architecture">
    <img class="post-img" src="" alt="Image of an architecture using REST style">
    <h3>Can the View be in JSON or XML?</h3>
    <p>
        Every desing pattern is a template. The solution is an arrangement of elements (classes and/or objects),
        their relationships, responsibilities and colaborations to solve the problem. That being said,
        the view is a representation of the Model. The model may or may not be a Data Structure. I've
        talked about the difference between Objects and Data Strucutres based on the book <strong>Clean Code</strong>
        from Robert C. Martin <a href="https://gabrielslima.github.io/blog/post.html?id=10" target="blank">here</a>.
    </p>
    Good Luck XD
</div>