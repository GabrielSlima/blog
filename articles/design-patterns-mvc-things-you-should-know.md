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
        wisely.
    </p>
    <p>
        Welcome to the pewdiepie's favourite blog about Software Engineering and today's topic is
        <strong>Things you should know before using MVC</strong>. Let's get into it.
    </p>
    <h3>MVC and REST (Representational State Transfer)</h3>
    <p>
        I would like to start telling you the difference between REST and MVC and when they are used together.
    </p>
    <p>
        REST is an architectural style
        based on a set of contraints, rules for defining how networked resources must be
        defined and addressed. Resources are transferred between client/server via
        language agnostic and standardized interactions.
    </p>
    <img class="post-img" src="images/design-patterns-mvc-is-important-to-know/REST.svg" alt="Image of an architecture using REST style">
    <p>
        Those systems/applications that adhere to REST's constraints are called RESTful.
        REST contraints includes rules about the protocol been used between the
        communication of the systems/applications and how their resources should be addressed.
    </p>
    <p>
        REST Architectural style deserves an entire article. You may have been creating
        applications/systems that doesn't fully adhere to all the REST's constraints at all
        and doesn't even know, as I did.
    </p>
    <p>
        MVC is an architectural pattern for the application. It's about the organization
        of an specific application or system. REST is about the communication between client/server
        and this may include one or more systems/applications that not necessarely uses MVC
        as an architectural pattern.
    </p>
    <img class="post-img" src="images/design-patterns-mvc-is-important-to-know/mvc.svg" alt="Image of a system/appliction with MVC architecture">
    <p>
        So in other words, if your RESTful Web APIs were built using MVC or not doesn't makes difference
        since the Web APIs adhere to REST constraints. The REST is an architectural style for guiding
        architectures in which the elements are clinet/server applications/systems.
    </p>
    <h3>Can the View be in JSON or XML?</h3>
    <p>
        Every desing pattern is a template. The solution is an arrangement of elements (classes and/or objects).
        It represents their relationships, responsibilities and colaborations to solve a specific 
        desing problem.
    </p>
    <p>
        That being said,
        the view is a representation of the Model. The model may or may not be a Data Structure. I've
        talked about the difference between Objects and Data Strucutres based on the book <strong>Clean Code</strong>
        from Robert C. Martin <a href="https://gabrielslima.github.io/blog/post.html?id=10" target="blank">here</a>.

        Therefore, the model can be represented by UI, spreadsheet or any other way of visualization/format, including JSON
        or XML.
    </p>
    <h3>Where does the business rules goes in a MVC design?</h3>
    <p>
        There isn't a specification of where business rules must be put. The Model is the object responsible for
        the data management, so it's natural that anything related to business rules that manipulates the model's data
        goes in there.
    </p>
    <img class="post-img" src="images/design-patterns-mvc-is-important-to-know/mvc-business-data-access.svg">
    <p>
        The business logic may or may not be on a separated object. The Data Access usually is another object.
        I recommend to keep the data access in a separated object because accessing the persisted
        data and manipulating it are two different things. I've talked about <strong>separation
        of concerns</strong>
        <a href="https://gabrielslima.github.io/blog/post.html?id=14" target="blank">here</a>
        if you want to know more about it.
    </p>
    <h3>MVC and layered architectures</h3>
    <p>
        If you read the
        <a href="https://gabrielslima.github.io/blog/post.html?id=20" target="blank">
        last article about MVC</a> you know that an application that uses MVC separates
        concerns like the UI, business logic and user input/commands logic into 3 different
        objects, Model: resposible for the data management, the view: resposible for
        reflecting the model's state in a UI or any other form and the controller: responsible
        for dealing with the user's inputs/commands and notifying the model about it.
    </p>
    <p>
        You also know that the model and the view has a subscribe/notify protocol between them.
        The view subscibes to the model's state and reflects it in an UI or any other way
        that represents the state and the model notifies it's views whenever it's state changes.
    </p>
    <p>
        The MVC pattern also uses other patterns to compose it's solution. A behavioral
        pattern called <strong>observer pattern</strong> is used between the model and views
        to keep views updated.
    </p>
    <p>
        The observer
        pattern's description is: whenever an object changes, any other number of objects that
        are dependent upon it's state are affected too, without the changed object having to
        know details about them. In MVC, the views are the observers, the dependents of the model.
    </p>
    <p>
        On bigger systems/applications the overall architecture can be more complex.
        The models may not be just data holders. The application/system may require
        access to persisted data, the business rules may be more complex and so on.
        Sometimes the overall architecture may be in layers to better separate these concerns.
    </p>
    <p>
        It's not news that the model may be an object or be a data strucutre. There is an
        entire article about the
        <a href="https://gabrielslima.github.io/blog/post.html?id=10" target="blank">between these two</a>.
        But what is the relationship between MVC, an architectural pattern and a layered architecture?
    </p>
    <p>
        There will be an entire different article about layered architectures. But in short,
        the most used layers with MVC and actually confused with some concepts of the pattern 
        are the <strong>services layer</strong> and the <strong>data access layer</strong>.
    </p>
    <p>
        Maybe you have been wondering, what is the relationship between models and services,
        DAOs and models and so on.
        But the reality is that the services layer and Data Access Layers doesn't relates directly with
        the MVC pattern and they shouldn't be compared at all.
    </p>
    <p>
        Your MVC applicaton may or may not have a services layer and a Data Access Layer.
        Layred architectures desires an entire article, but have in mind that MVC and
        layered systems/application are two different things.
        MVC would be the first layer in a layered
        system/application.
    </p>
    <h3>Final Thoughts</h3>
    <p>
        The MVC pattern is a well known pattern. Because of that, some people doesn't
        really invest time to actually understand this pattern that, besides being simple
        can be present in complex architectures.
    </p>
    <p>
        Take some time to actually play with the patterns and implement them from sctrach.
        No frameworks.
    </p>
    Good Luck XD
</div>