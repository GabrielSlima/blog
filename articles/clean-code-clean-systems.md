<div style="text-align: left;">
    <p>
        So far you have seen how to create clean and meaningful code using tips, principles and some desing patterns for creating <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">clean and meaningful names</a>
        for your functions, variables and classes. How to create <a href="https://gabrielslima.github.io/blog/post.html?id=11" target="blank">clean and robust code</a>. How to create <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="blank"> clean classes</a> using principles like
        SOLID to promote OOP desings with High-Cohesion and Loosely-Coupled objects.
        <br>
        These are super important articles and I strongly recommend you reading them...we've talked about the organization of the functions,
        variables, classes and source-files. 
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and 
        Today's topic is about the organization of our applications/systems, I mean, <strong>how to create clean and meaningful systems or applications</strong>.
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
        Concerns can be separated into Layers. For instance the MVC Pattern. It sepatares the system/application into 3 layers considering that services,
        repositories, DAO and so on are patterns used to compose 2 of those 3 layers.
    </p>
    <h4>Static Web Page</h4>
    <p>
        Static Web Pages can me "modularized" into 3 different files, HTML which holds the structure of the page. CSS which holds the formatting of the page and the JS which is responsible for maipulating the DOM.
    </p>
    <h3>SoC: Separation of Concerns vs SRP: Single Responsibility Principle</h3>
    <p>
        For a moment I thought these two were the same...maybe you did to. The fact is that the SRP is a principle that is about
        <strong>how many things our classes and modules are responsible for</strong> and the SoC is about <strong>what things a set of elements of a module is responsible for</strong>.
        A module can be anything inside the application. It can be a Microservice, a layer from a Architectural point of view, a package, source files, classes...
        The SRP can be be used as a guideline for those things too <strong>but</strong> it is intended to be used as a guideline for designing classes and modules (source files in some promming languages, for instance, python).
    </p>
    <p>
        Now to illustrate this concept or design pattern, imagine that we are creating a <strong>video-to-gif converter platform</strong>...
        Every anonymous user can convert 10 videos to gifs with a duration of 10s at the most each.
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
        be a file, a folder or a package. It depends on the system/application's architecture and programming language you are using.
        <br>
        What I'm trying to say is that SoC is a principle that is used since the first moment you start a new project. It's almost inevitable not to create 
        at least one single module inside the application. But this doesn't means that we're separiting things the best way we can. The goal here is to make you aware
        of the overall organization of the system/application.
    </p>
    <h3>Separate Constructing a system/application from Using It</h3>
    <p>
        One good example of the first separation of concerns you already have been working with but maybe never
        realized it is the construction of the application and the runtime logic. And by "construction" I 
        mean constructing the objects of the system/application and executing anything related to the set up.
        Runtime logic is what happens after the construction, I mean, after the set up.
    </p>
    <p>
        It's not hard to do stuff like the following:
    </p>
<pre class="brush: python">
<code>def convert_from(self, video):
    if not self.converter:
        self.converter = GifConverter() #Lazy Initialization
    
    self.converter.save(video)
    return self.converter.convert_from(video)
</code>
</pre>
    <p>
        As you can see, the code above applies the <strong>Lazy Initialization tatic</strong>. We are going to explore a little more of it on the following paragraphs.
        But the point is, what is wrong with this type of initialization? I'm going to tell you...there is nothing wrong
        with it.
    </p>
    <p>
        The point is basically the separation of concerns to improve the readability and maintainability of the code. 
        If there is a lazy initialization per object inside the application, it's going to get harder to find out why this
        object wans't set since the begnning if it's required so. But it's a great tatic to improve the start up performance.
    </p>
    <h4>Use the "main" to construct all the objects at once</h4>
    <p>
        In general, preferer to construct everything from the begining. Objects that are composed by other objects
        will construct them beforehand and are going to be read to be used. To separate the construction from the 
        runtime logic use the main to instantiate all objects and execute more general configurations the system/application
        needs to run.
    </p>
    <p>
        Basically the main will be at the top and "know everyone" but the application won't.
        The objects of the application will not know that the main exists. They will act as if everything is up
        and running and ready to go.
    </p>
    <p>
        The following code represents an application that converts a video to Gif. It's basically a MVC application.
        All the configurations and set up happens inside the "main" and provides the application what is needed to run.
    </p>
<pre class="brush: python">
<code>from moviepy.editor import VideoFileClip
from datetime import datetime
from flask import Flask
from flask import request
from flask import send_file


app = Flask(__name__)


@app.route("/video_to_gif", methods=["POST"])
def convert():
    _converter = GifConverterService(request.remote_addr)

    return send_file(
        _converter.convert_from(request.data),
        attachment_filename="video_to_gif.gif"
    )


class GifConverterService:
    def __init__(self, ip_address):
        self.ip_address = ip_address
        self.quota_service = None
        self.converter = None
    
    def convert_from(self, video):
        if not self.converter:
            self.converter = GifConverter() #Lazy Initialization
        
        self.converter.save(video)
        return self.converter.convert_from(video)


class GifConverter:
    def __init__(self):
        self.timestamp = datetime.now().strftime("%Y%m%d-%H%m%s")
        self.video = '/tmp/video-{}.mp4'.format(self.timestamp)
    
    def convert_from(self, video):        
        __video = VideoFileClip(self.video).subclip(10, 20)
        absolute_path = '/tmp/video-{}.gif'.format(self.timestamp)
        __video.write_gif(absolute_path)
        return absolute_path
    
    def save(self, video):
        with open(self.video, 'wb') as _video_file:
            _video_file.write(video)
            _video_file.close()


if __name__ == "__main__":
    app.debug = False
    app.run(port=5001)
</code>
</pre>
    <p>
        Of course in this example the objects will be created based on the requests received.
        Every request will trigger a different invocation on the corresponding function responsible
        for handling it. But at this point, this already is the runtime logic. The set up already
        happened on the main.
    </p>
    <p>
        But if you are not satisfyed with the above example, here goes one more...the following code is an example of the same video-to-gif-converter.
        But now it's a scheduled version that runs every 5 minutes and converts all the videos in a input folder and creates a gif as an output.
        Imagine every <strong>input folder</strong> has sub folders in which the names are the users IP Addresses...take a look:
    </p>
<pre class="code-snippet type-bash">tree
<font color="#5555FF"><b>.</b></font>
├── <font color="#5555FF"><b>192.168.0.102</b></font>
│   └── <font color="#FF55FF"><b>super_cool_video.mp4</b></font>
├── <font color="#5555FF"><b>192.168.0.103</b></font>
│   └── <font color="#FF55FF"><b>another_super_interesting_video.mp4</b></font>
└── <font color="#5555FF"><b>192.168.0.104</b></font>
    └── <font color="#FF55FF"><b>just_a_video.mp4</b></font>

3 directories, 3 files</pre>
<pre class="brush: python">
<code>
if __name__ == "__main__":
    consumer = VideosConsumerService()
    videos_grouped_by_ip_address = consumer.consume_videos()
    
    for video in videos_grouped_by_ip_address:
        quota_service = QuotaService()
        try:
            quota_service.check_quota_for(video.origin)
        except ConversionsAmountExceeded:
            logging.info("{} exceeded the max amount of free conversions".format(video.origin))
            continue
        gif_converter = GifConverterService(video.origin)
        gif_converter.convert_from(video.content)
</code>
</pre>
    <p>
        Look how messy the code gets by mixing the <strong>construction</strong> with the <strong>runtime logic</strong> (among other things).
    </p>
    <p>
        This is an example of these two concerns separated:
    </p>
<pre class="brush: python">
<code>
if __name__ == "__main__":
    consumer = VideosConsumerService()
    quota_service = QuotaService()
    
    videos_grouped_by_ip_address = consumer.consume_videos()
    _videos = quota_service.videos_that_can_be_processed_from(
        videos_grouped_by_ip_address
    )

    for video in _videos:
        gif_converter = GifConverterService(video.origin)
        gif_converter.convert_from(video.content)
</code>
</pre>
    <p>
        Now we're not only taking advantage of the Singleton Pattern but also we know clearly when the construction happens
        and when the runtime logic starts.
    </p>
    <h4>But what if the construction has expensive processes? </h4>
    <p>
        This bring us to the tatic that you've already seen on past paragraphs called <strong>the Lazy Initialization Tatic</strong>
    </p>
    <h4>The Lazy Initialization Tatic</h4>
    <p>
        This tatic is used to speed up the process of creation and set up of the application or Initialization of elements of a module.
        Expensive processes are executed only on the first time it's needed or only when it's needed and they can be stored so that the following
        requests from clients are faster. In this way the application's start up and requests from clients is much faster.
    </p>
    <p>
        For instance, imagine we have to build a website using Angular. The main page is a grid of movies like the following:
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/lazy-initialization-example.png" alt="Mock of a Movies catalog website">
    <p>
        What happens if while building the component a async function is called to fetch the movies from an API and right after this call, the
        function responsible to basically build the data source that will be used to store the grid's data is called?
    </p>
    <p>
        As you can imagine, the grid will be created and will be empty. One way of "solving" this is by removing the 
        async call and building the page "step by step", but this is not applicable for the vast majority of the cases.
        You may want some other part of the component or page to load independently of this part. Another option would be
        by applying the tatic of Lazy Initialization to the grid so that it stays in a splash presentation while the request is 
        being processed and returned by the server and initialized when function responsible for building the grid sinalizes
        that his job is done.
    </p>
    <p>
        This is an example of a front-end application, but the principle is the same. On the back-end, usually a public acessor is created to
        return the private instance variable (that can be an object) or any other public interface that requires it, can initialize it.
        If the instance variable is null, then the function can be responsinle for 
        creating a new instance and populating the corresponding instance variable. Something like the following: 
    </p>
<pre class="brush: python">
<code>class GifConverter:
    @staticmethod
    def from(video):
        return video
        
class GifConverterService:
    def __init__(self, ip_address):
        self.ip_address = ip_address
        self.quota_service = QuotaService()
        self.converter = None
    
    def from(self, video):
        if not self.converter:
            self.converter = GifConverter()
        return self.converter.rom(video)
</code>
</pre>
    <h4>Promoting Decoupled Desings</h4>
    <p>
        On this process of saparation of concerns between the construction from the runtime logic on our applications/systems there is
        one more thing to worry about which is the <i>coupling</i> between the objects.
    </p>
    <p>
        I've talked about coupling <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="blank">here</a> and one
        strategy to provide a declouped desing is by using Dependecy Inversion, one of the SOLID principles. Basically the users of an
        object or class depends upon abstract versions of it instead of a concrete one. But one little thing was bugging me for a while.
        How my classes that are composed by other objects are supossed to depend upon abstract versions of another class if I have
        to basically say what concrete class to use when instantiating it?
    </p>
    <p>
        The following code represents this scenario:
    </p>
<pre class="brush: python">
<code>class GifConverterService:
    def __init__(self, ip_address):
        self.ip_address = ip_address
        self.quota_service: AbstractQuotaService = QuotaService() #INSTANTIATING A CONCRETE CLASS
        self.converter: AbstractConverter = None
    
    def from(self, video):
        if not self.converter:
            self.converter = GifConverter() #INSTANTIATING A CONCRETE CLASS
        return self.converter.rom(video)
</code>
</pre>
    <p>
        I've been using factories to deal with the creation of the objects and keeping my classes free from creating them.
        The following code represents a even more decoupled desing and another level of separation of concerns: 
    </p>
<pre class="brush: python">
<code>class GifConverterService:
    def __init__(self, ip_address):
        self.ip_address = ip_address
        self.quota_service: AbstractQuotaService = QuotaServiceFactory.create_by("VideoToGifQuotaService") #ASKING A FACTORY FOR AN INSTANCE
        self.converter: AbstractConverter = None
    
    def from(self, video):
        if not self.converter:
            self.converter = ConverterFactory.create_by("VideoToGifConverter") #ASKING A FACTORY FOR AN INSTANCE
        return self.converter.rom(video)
</code>
</pre>
    <p>
        I didn't know but this approach actually follows one principle called <i>Inversion of Control priciple</i>. Instead of creating
        the instances itself, the class that is composed by other objects delegates this job to specialist modules, inverting the control flow
        and worring about only asking the right thing... 
    </p>
    <h4>The Inversion of Control principle</h4>
    <p>
        Usually our programs are composed by custom code and we use external libs to perform generic or specific tasks.
        For example, I could be building an API that returns a large amount of data in Python. Let's say this data are the videos
        uploaded into our platform. 
    </p>
    <p>
        But for some reason I've decided to load all videos from our database and sort them by upload date in runtime, instead of
        asking the database to order them for me. I can use Pandas to store those videos
        in a DataFrame and order them the way I want. The connection with the database is controlled by custom code. The
        Instances are made by custom code. Basically everything that is needed keep this application up and running is custom code.
        That's is an example of a <strong>flow contorlled by custom code</strong>.
    </p>
    <p>
        Now what if we invert this scenario and the only custom part we have is a controller and some models that represents
        the videos's Payload and all the work is controlled by a framework?
    </p>
    <p>
        This principle is very simple. The control of the flow of some part of our program (or all of it) is handed to
        a service, component, assembler module or framework and our custom code is called to perform generic
        or specific tasks.
    </p>
    <p>
        Now there is so many different aspects of inversion of control that I can't even imagine that exists, but the most common is
        plugin lookup implementation, I mean, how plugins are implemented into applications without the application having knowledge 
        of a plugin's internal structure. Another common aspect of control being inverted is how to wire objects 
        without them having knowledge about each other's internal structure.
    </p>
    <p>
        With SpringFramework for instance we describe what plugins we are going to use on our application and it's responsible for wiring them
        into it. All we have to do is to use them.
    </p>
    <p>
        Another example are the controllers on our last MVC application made in Python with the Flask Framework:
    </p>
<pre class="brush: python">
<code>@app.route("/video_to_gif", methods=["POST"])
def convert():
    _converter = GifConverterService(request.remote_addr)

    return send_file(
        _converter.convert_from(request.data),
        attachment_filename="video_to_gif.gif"
    )
</code>
</pre>
    <p>
        How the <i>@app.route</i> decorator is implemented? We don't have to know. We just use them.
    </p>
    <p>
        Creation, configuration and management of elements, objects, environments and so on is a different thing from using them. These are different responsibilities.
    </p>
    <h4>Dependecy Injection and Factory Desing Patterns</h4>
    <p>
        When it comes to classes and objects, the <i>instantiation</i> and the <i>wiring</i> are processes deletaged to assemblers/injectors or factories modules/objects/methods. 
        So instead of creating instances of objects within the class's constructor creating a direct dependece upon a concrete class, the dependecy is
        created by another module, class or object (Factory Pattern) or it is populated and injected by the assembler/injector through the class's constructor. This is a desing pattern called <strong>Dependecy Injection</strong>.
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/SRPvsSoC-SRP-AND-SoC-NOT-BROKEN.svg" alt="GifConverService being dependet upon the GifConvert image by directing instatiating it">
    <p>
        Look the dependecy of the class GifConverterService upon the GifConverter. Even if there was an AbstractGifConverter the users of the GifConverter would have
        to create the instace themselves. In other words, the <strong>GifConverterService</strong> has to have direct access to the class <strong>GifConverter</strong>
        creating a coupling between them.
    </p>
    <p>
        The <strong>GifConverterService</strong>'s contructor would look like the following:
    </p>
<pre class="brush: python">
<code>class GifConverterService:
    def __init__(self, ip_address):
        self.ip_address = ip_address
        self.quota_service = QuotaService()
        self.converter = GifConverter()
    
    def convert_from(self, video):
        self.converter.save(video)
        return self.converter.convert_from(video)
</code>
</pre>
    <img class="post-img" src="images/clean-code-clean-systems/Factory-Pattern.svg" alt="GifConverService not being dependent upon the GifConvert image by calling a factory">
    <p>
        Applying the <strong>Factory Pattern</strong> the control of this flow of instantiation is handed to a class or method responsible for creating this type of objects. Now all the
        clients of the <strong>GifConverter</strong> expects a <strong>AbstractConverter</strong> and asks the Factory for the type of object they need.
    </p>
<pre class="brush: python">
<code>class GifConverterService:
    def __init__(self, ip_address):
        _CONVERTER_NAME = "gif_converter"
        self.ip_address = ip_address
        self.quota_service = QuotaService()
        self.converter: AbstractConverter = ConverterFactory.create_converter_by(_CONVERTER_NAME)
    
    def convert_from(self, video):
        self.converter.save(video)
        return self.converter.convert_from(video)
</code>
</pre>
    <p>
        This scenario sounds familiar to you? Clients of classes depending upon Abstract versions of it instead of concrete ones? Yes...this is one of the SOLID principles called
        <strong>Dependency Inversion</strong>. You can read more about some of them <a href="https://gabrielslima.github.io/blog/post.html?id=13" target="blank">here</a>.
    </p>
    <p>
        Great, now we have a more decoupled relationship between the <strong>GifConverterService</strong> and <strong>GifConverter</strong>
        by using the <strong>Factory Pattern</strong>...but client classes still have to worry about controlling the flow of initialization
        of it's dependecies to start working. This initialization can be while instatiating any object
        from <strong>GifConverterService</strong> class or through public interfaces when needed, applying the lazy initialization pattern.
    </p>
    <p>
        Another observation is that now the <strong>GifConverterService</strong> depends upon the Factory to have an instance of the dependency...Let's take a look on how
        this desing will look like injecting the dependecies into the GifConverterService, inverting this flow of initialization of dependencies.
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/SRPvsSoC-Dependency-Injection.svg" alt="GifConverService not being dependet upon the GifConvert and Factory neither. Dependecy is being injected by an assembler object/module">
    <p>
        Now the <strong>GifConverService</strong> classs will have it's dependencies initialized by an assembler/injector, in this case, can be the controller itself...
    </p>
<pre class="brush: python">
<code>from moviepy.editor import VideoFileClip
from datetime import datetime
from flask import Flask
from flask import request
from flask import send_file


app = Flask(__name__)


@app.route("/video_to_gif", methods=["POST"])
def convert(): #ASSEMBLER/INJECTOR
    _CONVERTER_NAME = "gif_converter"
    
    _converter = ConverterFactory.create_converter_by(_CONVERTER_NAME)
    _quota_service = QuotaService()
    _converter_service = GifConverterService(
        request.remote_addr,
        _converter,
        _quota_service
    )

    return send_file(
        _converter_service.convert_from(request.data),
        attachment_filename="video_to_gif.gif"
    )


class GifConverterService:
    def __init__(self, ip_address, converter, quota_service): #INJECTED DEPENDENCIES
        self.ip_address = ip_address
        self.quota_service = quota_service
        self.converter: AbstractConverter = converter

    def convert_from(self, video):
        self.converter.save(video)
        return self.converter.convert_from(video)


class GifConverter:
    def __init__(self):
        self.timestamp = datetime.now().strftime("%Y%m%d-%H%m%s")
        self.video = '/tmp/video-{}.mp4'.format(self.timestamp)
    
    def convert_from(self, video):        
        __video = VideoFileClip(self.video).subclip(10, 20)
        absolute_path = '/tmp/video-{}.gif'.format(self.timestamp)
        __video.write_gif(absolute_path)
        return absolute_path
    
    def save(self, video):
        with open(self.video, 'wb') as _video_file:
            _video_file.write(video)
            _video_file.close()


if __name__ == "__main__":
    app.debug = False
    app.run(port=5001)
</code>
</pre>
    <h3>Types of Dependency Injection</h3>
    <h4>Constructor Injection</h4>
    <p>
        The dependencies are provided on the instatiation of the object through an assembler module/object or injector module/object.
    </p>
    <h4>Setter Injection</h4>
    <p>
        The dependencies are provided through a public accessor exposed by the client class called <strong>setter</strong>. An assembler module/object or injector module/object
        is still needed to provide the dependecies.
    </p>
    <h4>Interface Injection</h4>
    <p>
        The client class implements an interface that implies a <i>setter</i> public interface for the dependecies. The dependencies are provided through
        the public accessor exposed by the client class. An assembler module/object or injector module/object is still needed to provide the dependecies.
    </p>
    <h3>Cross-Cutting Concerns</h3>
    <p>
        The motive for decomponsing a system/application into modules separated by concerns is to promote a loosely coupled desing, increase the maintainability and reusability
        of each module and, at the same time, keep them free. This means that each module by applying encapsulation and abstraction providing well defined interfaces
        has freedom to change the way their public interfaces work internally without affecting clients.
    </p>
    <p>
        But some concerns are not actually part of the main logic of a determined concern and other than that, 
        they can be used by any other module inside the system/application. These are also known as
        <strong>Cross Cutting Concerns</strong> because the cut across other concerns of the system/application.
    </p>
    <p>
        Cross Cutting concerns are parts of the system that are used by other parts of it. Instead of creating one implementation for each module, the existing
        modules share the same solution for a requirement.
        For instance logging can be used by one or more modules of our application. The same goes for persistence, data validation, monitoring, caching,
        error handling, security, transaction logic, business rules and so on.
    </p>
    <p>
        Basically, they are not related to the business logic or business requirements. They are aspects of a program
        ("secondary features") that are shared accross the modules of the system/application and the same strategy of usage is applied to everyone.
        But this doesn't mean that they are not important.
    </p>
    <p>
        The following image represents an application with very common cross-cutting concerns that are not solved:
    </p>
    <img class="post-img" src="images/clean-code-clean-systems/SRPvsSoC-Cross-Cutting-Concerns.svg" alt="Cross Cutting concerns image">
    <p>
        Translating the diagram above into code and of course not applying a super crazy level of verbosity, we would come up with the following code:
    </p>
<pre class="brush: python">
<code>from src.logger.logger_service import LoggerService
from src.factories.converter_factory import ConverterFactory
from src.services.quota_service import QuotaService
from src.services.gif_converter_service import GifConverterService
from flask import Flask
from flask import request
from flask import send_file

app = Flask(__name__)
_logger = LoggerService()


@app.route("/video_to_gif", methods=["POST"])
def convert():
    _logger.log(
        "Request received from => {} - payload size: {}".format(
            request.remote_addr,
            "{} bytes".format(len(request.data))
        ),
        "info"
    )

    _CONVERTER_NAME = "gif_converter"

    _converter = ConverterFactory.create_converter_by(_CONVERTER_NAME)
    _quota_service = QuotaService()

    _converter_service = GifConverterService(
        request.remote_addr,
        _converter,
        _quota_service
    )

    _logger.log("Converting {}".format("{} bytes".format(len(request.data))), "info")
    gif = _converter_service.convert_from(request.data)
    _logger.log("{} converted to Gif".format("{} bytes".format(len(request.data))), "info")
    return send_file(gif, attachment_filename="video_to_gif.gif")


if __name__ == "__main__":
    app.debug = False
    app.run(port=5001)
</code>
</pre>
    <p>
        Running and executing the following request to convert a MP4 video on my own computer would result on the following log output:
    </p>
<pre class="code-snippet type-bash" style="margin-top: 0;">curl -X POST -H &quot;Content-Type: text/xml&quot; --data-binary &quot;@./video.mp4&quot; \
&gt; http://localhost:5001/video_to_gif --output ./conversions/conversion-3.gif
</pre>

<pre>
<code>* Running on http://127.0.0.1:5001/ (Press CTRL+C to quit)
Request received from => 127.0.0.1 - payload size: 731649 bytes
Converting 731649 bytes
MoviePy - Building file /tmp/video-20210725-11071627225066.gif with imageio.
731649 bytes converted to Gif
127.0.0.1 - - [25/Jul/2021 11:58:03] "POST /video_to_gif HTTP/1.1" 200 -
</code>
</pre>
    <h4>Project Tree</h4>
<pre class="code-snippet type-bash" style="margin-top: 0;">tree -I __pycache__
<font color="#5555FF"><b>.</b></font>
├── requirements
├── <font color="#5555FF"><b>src</b></font>
│   ├── <font color="#5555FF"><b>converters</b></font>
│   │   └── gif_converter.py
│   ├── <font color="#5555FF"><b>factories</b></font>
│   │   └── converter_factory.py
│   ├── <font color="#5555FF"><b>logger</b></font>
│   │   └── logger_service.py
│   └── <font color="#5555FF"><b>services</b></font>
│       ├── gif_converter_service.py
│       └── quota_service.py
├── <font color="#5555FF"><b>tests</b></font>
│   ├── __init__.py
│   └── test_without_aop.py
└── without-aop.py

6 directories, 9 files</pre>
    <p>
        This type of scenario is very common. I confess that I myself have been writing code like this for a while...But what are the problems or potential
        problems here?
    </p>
    <h4>Code Duplication</h4>
    <p>
        Look how many times the statement <i>_logger.info</i> is called...this statement can be spread all over the application affecting many other concerns
        inside the application or sytstem, literally duplicated in other parts... 
    </p>
    <p>
        I have an experience to share with you about this kind of scenario. I worked on this modularized Java project with
        around 8-9 modules. The modules were supposed to be Microservice but this is a topic for another article.
    </p>
    <p>
        The point is that one of the modules was a <i>log module</i>. As you can guess, it was the module that was 
        supposed to group elements responsible for the logs of the entire application.
    </p>
    <p>
        This <i>log module</i> was supposed to provide interfaces for log streams.
        Basically the logs where put into a Kafka Topic and then stored into Elasticsearch indexes
        based on their type (trace, business rules and so on) by the Logstash.
    </p>
    <p>
        Due to some performance issues (this can be another article too) the team decided to prioritize a
        new requirement for log streaming. Disable/Enable log streams and the possibility of choosing which "Microservice"
        to produce log streams and what type of log streams to produce. 
    </p>
    <p>
        The requirements were "simple":
    </p>
<pre class="plain-text">Possibility of choosing what "Microservice" to produce log streams
Possibility of choosing log streams output for all "Microservices"
Possibility of choosing what type of log streams to produce: Trace, business rules
Possibility of choosing basic verbosity levels for each of configuration
All the configuration should be made directly into a specific document on the database
</pre>
    <p>
        The first thing that came into my mind when we defined the above requirements was to map all
        the places in which those interfaces from the <i>logs module</i>
        were being used. To summarize, they were being used everywhere...
    </p>
    <p>
        To satisfy these requirements the module would have to know <i>who is calling</i> and <i>what type of log stream</i> is
        being produced. Now the big question is: What solution will satisfy all the requirements and will not take forever
        to be applied by having to change <strong>every log call</strong> into the application?
    </p>
    <p>
        The problem was solved in a not very elegant way, I can assure you that.
    </p>
    <p>
        The <i>code duplication</i> was so hard that the possibilities of adding new code or changing
        anything without having to change the entire application were small.
        Almost all solutions (without a pattern) I thought resulted in changing all places. 
    </p>
    <p>
        The one that was chosen involved to customize the type of log and verbosity for each module (that was supposed to be microservices)
        into the database and because the <i>logs module</i> was more of a lib inside the system, consider the package path of the caller
        to identify the "Microservice". 
    </p>
    <p>
        I actually don't recommend this approach. This is scalable approach in a certain degree because the identification of the microservices
        was dynamic, all that was required was to describe the custom configuration into the database, otherwise the default configuration would be applied.
        But this is not a very clean approach...
    </p>
    <h4>Mixing Up Concerns</h4>
    <p>
        I don't know if you realized but logging, caching, security, business rules are "secondary" concerns
        compared to the business requirements.
        <br>
        Mixing up business requirements with "secondary" requirements is not a good practice. The business requirements
        tend to be prioritized because of a series of reasons, one of them is because
        they are kind of required to deliver a piece of the software. They can be considered (and they are in the most part) more important than
        a log for instance.
    </p>
    <p>
        Please, I'm not saying that logs or performance logs or any kind of monitoring is not important. I'm
        giving you an example of a scenario where these concerns are not the priority... 
    </p>
    <p>
        And also, take a look at the last code used as an example. Look how hard is to separate what is business logic
        and what is not...
    </p>
    <h3>Aspect Oriented Programming</h3>
    <p>
        So now you know what kind of problems you may have by not solving cross-cutting concerns, which are:
        <strong>code duplication</strong> and <strong>business logic mixed up with non-business logic</strong>.
    </p>
    <p>
        But you may be asking yourself: Ok, but what is the solution? One of them is using <strong>Aspect Oriented Programming</strong>.
        I won't get too much into this today but I want you to have an ideia of what it ts...
    </p>
    <p>
        Aspect Oriented Programming is a program paradigm that allows <strong>separation of cross-cutting concerns</strong>.
        This means that those concerns that a shared by other modules of the application/system are modularized and used properly.
        New behaviors are added to existing code without actuallly chaning it and mixing up business logic with non-business logic.
        In other words, logging, performance, caching, and any other concern that cut accross other ones can be applied without polluting
        existing code...
    </p>
    <p>
        Let's take a look into some concepts of this paradigm.
    </p>
    <h4>Aspect</h4>
    <p>
        An Aspect represents a cross-cutting concern. An Aspect can have one or more adivices.
    </p>
    <h4>Advice</h4>
    <p>
        Is a behavior that will be applied in runtime at some point of the program specified by a pointcut.
    </p>
    <h4>Pointcut</h4>
    <p>
        Is an expression that specifies when and where a behavior (Advice) will be applied and executed. A pointcut can be
        a set of join points, meaning that an advice will be applied in one or more points of the program.
    </p>
    <h4>Join Point</h4>
    <p>
        Is a point on the program where an advice can be joined and executed. This can be a method being called, an error being thrown or when chaning the value
        of a variable.
    </p>
    <p>
        Every join point is a <strong>possibility</strong> for an advice to be applied, this doesn't mean that in every join point will have an
        pointcut specifying where to apply an advice...
    </p>
    <p>
        We specify when a certain advice is executed by using <i>pointcuts</i>. In other words, we can decided when an additional behavior (advice)
        will be applied to a specfic part of the code by using pointcuts.
        In this way the cross-cutting concerns are keept in one place and are used by expressions.
    </p>
    <p>
        In Python AOP can be achieved by using Decorators, a desing pattern that allow us to add additional behavior to functions without changing
        their code. Let's refact the last example and apply the AOP into the code:
    </p>
    <h4>gif_converter_controller.py</h4>
<pre class="brush: python">
<code>from src.factories.converter_factory import ConverterFactory
from src.services.quota_service import QuotaService
from src.services.gif_converter_service import GifConverterService
from src.aspects.loggers.incoming_request import log_stream_incoming_request
from flask import Flask
from flask import request
from flask import send_file


app = Flask(__name__)


@app.route("/video_to_gif", methods=["POST"])
@log_stream_incoming_request #POINTCUT
def convert(): #JOIN POINT (IN THIS CASE, THIS METHODS IS THE OPPURTUNITY FOR ADDING AN ADDITIONAL BEHAVIOR)
    _CONVERTER_NAME = "gif_converter"
    _converter = ConverterFactory.create_converter_by(_CONVERTER_NAME)
    _quota_service = QuotaService()

    _converter_service = GifConverterService(
        request.remote_addr,
        _converter,
        _quota_service
    )

    gif = _converter_service.convert_from(request.data)
    return send_file(gif, attachment_filename="video_to_gif.gif")


if __name__ == "__main__":
    app.debug = False
    app.run(port=5001)
</code>
</pre>
    <h4>src.aspects.loggers.incoming_request.py</h4>
<pre class="brush: python">
<code>from src.aspects.loggers.logger_service import LoggerService
from functools import wraps
from flask import request


def log_stream_incoming_request(request_handler): #ADVICE
    _logger = LoggerService("request")

    @wraps(request_handler)
    def _request_handler(*args, **kwargs):
        _logger.log(
            "Request received from => {} - payload size: {}".format(
                request.remote_addr,
                "{} bytes".format(len(request.data))
            ),
            "info"
        )
        return request_handler(*args, **kwargs)
    return _request_handler
</code>
</pre>
    <h4>src.converters.gif_converter.py</h4>
<pre class="brush: python">
<code>from src.aspects.loggers.converter import log_stream_conversion_process


class GifConverterService:
    def __init__(self, ip_address, converter, quota_service):
        self.ip_address = ip_address
        self.quota_service = quota_service
        self.converter = converter

    @log_stream_conversion_process #POINTCUT
    def convert_from(self, video): #JOIN POINT (IN THIS CASE, THIS METHODS IS THE OPPURTUNITY FOR ADDING AN ADDITIONAL BEHAVIOR)
        self.converter.save(video)
        return self.converter.convert_from(video)
</code>
</pre>
    <h4>src.aspects.loggers.converter.py</h4>
<pre class="brush: python">
<code>from src.aspects.loggers.logger_service import LoggerService
from flask import request


def log_stream_conversion_process(converter):
    _logger = LoggerService("converter")

    def _converter(*args, **kwargs):
        _logger.log(
            "Converting {}...".format("{} bytes".format(len(request.data))),
            "info"
        )
        video = converter(*args, **kwargs)

        _logger.log(
            "{} converted to Gif!".format("{} bytes".format(len(request.data))),
            "info"
        )
        return video

    return _converter
</code>
</pre>
<pre>
<code> * Running on http://127.0.0.1:5001/ (Press CTRL+C to quit)
Request received from => 127.0.0.1 - payload size: 731649 bytes
Converting 731649 bytes...
MoviePy - Building file /tmp/video-20210726-10071627305017.gif with imageio.
731649 bytes converted to Gif!
</code>
</pre>
    <p>
        The same log output can be achieved and the business logic code will be kept separated from cross-cutting concerns. To apply them,
        using a pointcut is enough and the logic to apply the desired cross-cutting concern is kept only in one place....
    </p>
    <p>
        These examples of AOP can be found <a href="https://github.com/GabrielSlima/Python-Examples/tree/master/aspect-oriented-programming" target="blank">here</a>. The tree of this application with AOP is the following:
    </p>
<pre class="code-snippet type-bash" style="margin-top: 0;">tree -I __pycache__
<font color="#5555FF"><b>.</b></font>
├── requirements
├── <font color="#5555FF"><b>src</b></font>
│   ├── <font color="#5555FF"><b>aspects</b></font>
│   │   └── <font color="#5555FF"><b>loggers</b></font>
│   │       ├── converter.py
│   │       ├── incoming_request.py
│   │       └── logger_service.py
│   ├── <font color="#5555FF"><b>converters</b></font>
│   │   └── gif_converter.py
│   ├── <font color="#5555FF"><b>factories</b></font>
│   │   └── converter_factory.py
│   └── <font color="#5555FF"><b>services</b></font>
│       ├── gif_converter_service.py
│       └── quota_service.py
├── <font color="#5555FF"><b>tests</b></font>
│   ├── __init__.py
│   └── test_without_aop.py
└── with-aop.py

7 directories, 11 files</pre>
    <h3>Final Words</h3>
    <p>
        A system/application that doesn't apply SoC effectivelly struggles (or will eventually) with the agility for satisfying requirements.
        The purpose of creating a desing with decoupled modules separated by concerns is to provide decentralized management and
        make the process of decision making faster.
    </p>
    <p>
        Prefer separating domain logic from aspect-like concerns and apply an aspect when it's need using AOP meachanisms...
    </p>
    Good Luck!
</div>
