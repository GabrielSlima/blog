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
        One good example of the first separation of concerns you already have been working with but maybe never
        realized it is the construction of the application and the runtime logic. And by "construction" I 
        mean constructing the objects of the application or system and executing anything related to the set up.
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
        runtime logic use the main to instantiate all objects and perform more general configurations the system/application
        needs to run.
    </p>
    <p>
        Basically the main will be at the top and "know everyone" but the application won't.
        The objects of the application will not know that the main exists. They will act as if everything is up
        and running and ready to go.
    </p>
    <p>
        The following code represents a application that converts a video to Gif. It's basically a MVC application.
        All the configurations and set up happens inside the "main" and provides the application what is needed to run.
    </p>
<pre class="brush: python">
<code>from moviepy.editor import VideoFileClip
from datetime import datetime
from flask import Flask
from flask import request
from flask import send_file


app = Flask(__name__)


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


@app.route("/gifs", methods=["POST"])
def convert():
    _converter = GifConverterService(request.remote_addr)
    _converter.convert_from(request.data)
    return send_file(
        _converter.convert_from(request.data),
        attachment_filename="video_to_gif.gif"
    )


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
        This tatic is used to speed up the process of creation and set up of the application or Initialization of elements of a module. Expensive processes are executed for the first
        time it's needed and stored so that the following requests from clients are faster. In that way the "expensive process" is 
        executed only when it's needed rather than on the application's start up.
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
        being processed and returned by the server.
    </p>
    <p>
        Usually a public acessor is created to return the private instance variable (that can be an object) or a public interface that requires it can initialize it. If the instance variable is null, then the function can be responsinle for 
        creating a new instance and populating it. Something like the following: 
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
        On this process of saparation of concerns between the construction from the runtime logic on our applications and systems there is
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
        I've been using factories to deal with the creation of the objects and keeping my classes free from creating them.
        I didn't know but this approach actually follows one principle called <i>Inversion of Control IoC priciple</i>.
    </p>
    <h4>The Inversion of Control principle</h4>
    <p>
        Usually our programs are composed by custom code and we use external libs to perform generic or specific tasks.
        For example, I could be building an API that returns a large amount of data in Python. Let's say this data are videos
        uploaded into our platform. 
    </p>
    <p>
        But for some reason I've decided to load all videos from our database and sort them by uplaod date in runtime, instead of
        asking the database to order them for me. I can use Pandas to store those videos
        in a DataFrame and order them the way I want. The connection with the database is controlled by custom code. The
        Instances are made by custom code. Basically everything that is needed keep this application running is custom code.
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
        Now there is so many different aspects of inversion of control that I can't even imagine that exists, but the most common are
        plugin lookup implementation, I mean, how plugins are implemented into applications without the application having knowledge 
        of a plugin's internal structure. Another common aspect of control being inverted is how to wire objects 
        without them having knowledge about each other's internal structure.
    </p>
    <p>
        SpringFrameework for instance we describe what plugins we are going to use on our application and it's responsible for wiring them
        into our application. All we have to do is to use them.
    </p>
    <p>
        Another example are the controllers on our MVC applications:
    </p>
<pre class="brush: python">
<code>@app.route("/gifs", methods=["POST"])
def convert():
    _converter = GifConverterService(request.remote_addr)
    _converter.convert_from(request.data)
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
        When it comes to classes and objects, the <i>wiring</i> is a process deletaged to an assembler module or object. 
        So instead of creating instances of objects within the class's constructor creating a direct dependece upon a concrete class, the dependecy is
        created by another module, class or object (Factory Pattern) or is populated and injected by the assembler through the class's constructor. This is a desing pattern called <strong>Dependecy Injection</strong>.
    </p>
    <img src="" alt="GifConverService image being dependet up the GifConvert image by directing instatiating it">
    <img src="" alt="GifConverService image being dependet up the GifConvert image but the depence is injected by an assembler object">
    Good Luck XD
</div>
