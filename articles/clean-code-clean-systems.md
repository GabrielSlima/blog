<div style="text-align: left;">
    <p>
        So far you have seen how to create clean and meaningful code using tips, principles and some desing patterns for creating <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">clean and meaningful names</a>
        for your functions, variables and classes. How to create <a href="https://gabrielslima.github.io/blog/post.html?id=11" target="blank">clean and robust code</a>. How to create <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="blank"> clean classes</a> using principles like
        SOLID to create OOP desings with High-Cohesion and loosely-coupled objects.
    </p>
    <p>
        These are super important articles and I strongly recommend you reading them...we've talked about the organization of our functions , variables, classes and source-files. Welcome to the PewdiePie's favourite blog about Software Engineering and 
        Today's topic is about the organization of our applications and systems, I mean, <strong>how to create clean and meaningful systems or applications</strong>.
    </p>
    <p>
        Let's get into it!
    </p>
    <h3>Separation of Concerns</h3>
    <p>
        One of the main concerns in Software Development is complexity management. Systems and applications can get very complex depending on the problem domain.
        There are different ways of dealing with complexity in Software Development. One of them is creating small and manageable units of code and giving for each one of them clear and well
        defined names and responsibilities. Another way of dealing with complexity is <strong>providing desings modularized by concerns</strong>.
    </p>
    <p>
        Separation of Concerns is a desing pattern for (as you can guess by the name) creating systems or applications with logical sections separated by different concerns. Each logical section or module
        is focused on solving a piece of the entire solution or group a set of elements that solves a piece of the entire solution. Each logical separation have well-defined interfaces and applies encapsulation.
    </p>
    <h3>Ways of providing SoC</h3>
    <h4>OOP designs</h4>
    <p>
        Concerns can be separated into objects, packages of classes that share a common set of responsibilities or modules
    </p>
    <h4>Procedural desings</h4>
    <p>
        Concerns can be separated into methods or functions or packages of source files that share a common set of responsibilities or modules
    </p>
    <h4>Architectural Desing Patterns</h4>
    <p>
        Concerns can be separated into Layers. For instance the MVC Pattern. It sepatares the system/application into 3 layers considering that services, repositories, DAO and so on are patterns used to compose 2 of the 3 layers it has.
    </p>
    <h4>Static Web Page</h4>
    <p>
        Static Web Pages can me "modularized" into 3 different files, HTML which holds the structure of the page. CSS which holds the formatting of the page and the JS which is responsible for maipulating the DOM.
    </p>
    <h3>SoC: Separation of Concerns vs SRP: Single Responsibility Principle</h3>
    <p>
        For a moment I thought these two were the same...maybe you did to. The fact is that the SRP is a principle that is about <strong>how many things our classes and modules are responsible</strong> and the SoC is about <strong>what things a set of elements of a module is responsible for</strong>.
        A module can be anything inside the application. It can be a Microservice, a layer from a Architectural point of view, a package, source files, classes...
        The SRP can be be used as a guideline for those things too <strong>but</strong> it is intended to be used as a guideline for designing classes and modules (source files in some promming languages, for instance, python).
    </p>
    <p>
        Imagine that we are creating a <strong>video-to-gif converter platform</strong>...Every anonymous user can convert 10 videos to gifs with a duration of 10s at the most each.
        To create longer gifs or covert more than 10 videos the user can have some options. If he sings up to the platform (without paying nothing) automatically he
        earns the possibilty to convert 100 videos to gifs with a duration of 10s at the most and 10 of them can have a duration of 20s at the most and the possibility of
        saving till 500MB on the cloud. No ADs.
    </p>
    <p>
        This "Quota Filter" would have to be applied before converting the videos. For the first version of the MVP the desing could be something like the following:
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/SRPvsSoC-SRP-BROKEN.svg" alt="Single Responsibility and Separation of Concerns Broken">
    <p>
        Pay attention to how many things the class <strong>GifConvert</strong> is doing. It has to convert the Video to Gif and also verify if the user can or not continue with the conversion.
        If this type of "Quota" verication changes, let's say, if the verication will be by <strong>IP Address</strong> and <strong>Channel</strong> this class will have to be changed for a different reason other than
        by some change on the <strong>Converter's requirements</strong>.
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/SRPvsSoC-SoC-BROKEN-SRP-NOT-BROKEN.svg" alt="Single Responsibility not Broken but Separation of Concerns is Broken">
    <p>
        The above image represents a desing that supports the SRP. Now any changes related to the GifConverter will be made on the correct class and the changes related to the
        Quota will be made in a separated place.
    </p>
    <p>
        But this desing  still doesn't supports the SoC. The <strong>QuotaService</strong> is more of a infrastrucutre concern than a domain concern. This is a service that will be responsible for
        dealing with the requests made by the user.
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/SRPvsSoC-SRP-AND-SoC-NOT-BROKEN.svg" alt="Single Responsibility and Separation of Concerns not Broken">
    <p>
        Now it's more like it. The above image represents a desing that supports the SoC and SRP principles...
    </p>
    <p>
        On the first example, I mean, the first image, there was a separation of concerns already. Each block represents a module. This means that each one of those blocks can
        be a file, a folder or a package. It depends on the application or system's architecture and programming language you are using.
        <br>
        What I'm trying to say is that SoC is a principle that is used since the first moment you start a new project. It's almost inevitable not to create 
        at least one single module inside the application. But this doesn't means that we're separiting things the best way we can. The goal here is to make you aware
        of the overall organization of the system or application.
    </p>
    <h3>Separate Constructing a System or Application from Using It</h3>
    <p>
        One good example of the first separation of concerns you already have been working with but maybe never realized it is construction of the application and the runtime logic.
        Construction means constructing the objects of the application or system and runtime logic is what happens after the construction, I mean, after the set up.
    </p>
    <p>
        A good example of these two concerns being mixed is the <strong>Lazy Initialization Tatic</strong>...
    </p>
    <h4>The Lazy Initialization Tatic</h4>
    <p>
        This tatic is used to speed up the process of creation of set up of the application or Initialization of elements of a module. Expensive processes are executed for the first
        time it's needed and stored so that the following requests of the client is faster after the process is initialzed.
    </p>
    <p>
        For instance, imagine we have to build a website using Angular for instance. The main page is a grid of movies like the following:
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/lazy-initialization-example.png" alt="Mock of a Movies catalog website">
    <p>
        What happens if right after building the component a async function is called to fetch the movies from an API and right after this call, the
        function responsible to basically build the data source is called?
    </p>
    <p>
        As you can imagine, the grid will be created and will be empty. One way of solving this is removing the async call and build the page "step by step" or
        apply the tatic of Lazy Initialization to the grid so that it stay in a splash presentation while the request is being processed and returned by the server.
    </p>
    Good Luck XD
</div>
