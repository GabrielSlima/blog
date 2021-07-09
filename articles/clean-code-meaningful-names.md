<div style="text-align: left;">
One of the most important things you can learn in programming is Clean Code.
<br>
Writing bad code can make things more complicated than they really are and forces you to spend more time
trying to figure out what one piece of code does before actually doing any work.
<br>
<br>
This situation can be solved by executing the code piece piece by piece and giving for each of them the proper data to process. But 
what if you don't even know what is the data input and some of those pieces has like 100 lines with one for loop
behind the other and some times one for loop inside the other with lots of if else statements?
That makes things a little bit harder, don't they? 

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

Today i'm going to show you how I go through this refact process, pretty much almost everyday actually, using my own code as an example
and using recommendations from the book <a href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM" targe="blank">
Clean Code</a>.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

<h3><a href="https://github.com/GabrielSlima/Static-Project" target="blank">Static Project</a>: understanding the idea</h3>
Some years ago I was looking for content about how to get started in the Programming industry, what to learn, how to learn, when to learn
and where to learn.
<br>
I found this video in a Cyber Security channel that encourages people to start a blog, to share their ideas and basically externalize their 
thoughts and create. I found this idea amazing, so why not?
<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
I contacted the owner of the channel to have a talk you know? Know his thoughts about my ideas and maybe he could give me some tips
on this journey... 
<br>
One of his recommendations was to use this CLI tool to genarate static web pages and blog posts 
so I didn't had to deal with Front end and Back end development, hosting both applications 
dealing with the database and bulding everything from scratch. All I
had to do was to change the content files and deploy it.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

<q>What a great idea!!</q> I thought...
<br>
You can check this first blog I had <a href="https://codigocuriosidade.github.io/" target="blank">here</a>. There is some funny stuff in there.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
But the thing is, the way this first blog was created wasn't enough for me...I wanted to understand and actually learn the necessary 
tools and concepts and then work to create my own tools.
<br>

After some days I came up with this idea of building a similar tool but with my own code, my own solutions and so on. It's by far not the
easiest path to take but that helped me with a <b>purpose</b> and it was another reason to keep me <b>excited</b> about what I
was doing...
<br>
I talk a little bit about building things for your own benefits <a href="http://localhost:8080/post.html?id=5#questions" target="blank">here</a>.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

So without further ado let's dive in to the code.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

The idea was simple: to generate projects and static blog post pages so I didn't had to create a new Web page everytime I wanted
to write a blog post. Pretty much similar to the CLI tool I was using at the time.

Here is some prints of the second blog I started to talk about Cyber Security specifically called 
<a href="https://darkarmybrasil.github.io/" target="blank">Darkarmy Brasil</a> 
(I'm not proud of the names I chose for almost all of my projects back then).

<img class="post-img" src="images/clean-code-meaningful-names/static_project_demo.png">
<img class="post-img" src="images/clean-code-meaningful-names/static_project_demo_post.png">

A very simple idea with a very simple implementation which made this project perfect
to apply concepts like OOP and learn the basics of a new programming language.
<br>
<br>
This project being one of the first projects of mine is perfect to show you how I could make things better and clear.
<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

<h3 id="understanding-the-solution-technically">Understanding the solution technically</h3>

Following the <a href="https://github.com/GabrielSlima/Static-Project/blob/master/README.md" target="blank">documentation</a> it seems that <b>main.py</b> controls the user input and give us the possibility to create a new project or a new 
blog post with:
<div class="code-snippet type-bash">
    <span class="bash-keyword">python3</span> <span>main.py &lt;command&gt; &lt;command_arguments&gt;</span>
</div>

I've cloned the project on my computer to make things easier. The structure is pretty simple:
<pre class="code-snippet"><font color="#5555FF"><b>Static-Project/</b></font>
├── generate.py
├── main.py
├── README.md
└── template.py

0 directories, 4 files
</pre>

Let's execute the command to create a new project as said in the doc:
<img class="post-img" src="images/clean-code-meaningful-names/new_project.gif">

And that's what we have inside the project's folder:
<pre class="code-snippet"><font color="#5555FF"><b>demo</b></font>
├── <font color="#5555FF"><b>bootstrap</b></font>
│   ├── <font color="#FF5555"><b>bootstrap-4.1.2-dist.zip</b></font>
│   ├── <font color="#5555FF"><b>css</b></font>
│   │   ├── bootstrap.css
│   │   ├── bootstrap.css.map
│   │   ├── bootstrap-grid.css
│   │   ├── bootstrap-grid.css.map
│   │   ├── bootstrap-grid.min.css
│   │   ├── bootstrap-grid.min.css.map
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.min.css.map
│   │   ├── bootstrap-reboot.css
│   │   ├── bootstrap-reboot.css.map
│   │   ├── bootstrap-reboot.min.css
│   │   ├── bootstrap-reboot.min.css.map
│   │   └── estilo.css
│   └── <font color="#5555FF"><b>js</b></font>
│       ├── bootstrap.bundle.js
│       ├── bootstrap.bundle.js.map
│       ├── bootstrap.bundle.min.js
│       ├── bootstrap.bundle.min.js.map
│       ├── bootstrap.js
│       ├── bootstrap.js.map
│       ├── bootstrap.min.js
│       └── bootstrap.min.js.map
├── <font color="#5555FF"><b>conteudo</b></font>
│   ├── dir_list.js
│   ├── js_post.js
│   └── <font color="#5555FF"><b>principal</b></font>
├── data.json
├── index.html
└── java.js

5 directories, 27 files
</pre>

Let's try to create a new blog post to see what happens:
<img class="post-img" src="images/clean-code-meaningful-names/new_blog_post.gif">

The project strucutre after creating a new blog post and a new category:
<pre class="code-snippet"><font color="#5555FF"><b>demo/</b></font>
├── <font color="#5555FF"><b>bootstrap</b></font>
│   ├── <font color="#FF5555"><b>bootstrap-4.1.2-dist.zip</b></font>
│   ├── <font color="#5555FF"><b>css</b></font>
│   │   ├── bootstrap.css
│   │   ├── bootstrap.css.map
│   │   ├── bootstrap-grid.css
│   │   ├── bootstrap-grid.css.map
│   │   ├── bootstrap-grid.min.css
│   │   ├── bootstrap-grid.min.css.map
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.min.css.map
│   │   ├── bootstrap-reboot.css
│   │   ├── bootstrap-reboot.css.map
│   │   ├── bootstrap-reboot.min.css
│   │   ├── bootstrap-reboot.min.css.map
│   │   └── estilo.css
│   └── <font color="#5555FF"><b>js</b></font>
│       ├── bootstrap.bundle.js
│       ├── bootstrap.bundle.js.map
│       ├── bootstrap.bundle.min.js
│       ├── bootstrap.bundle.min.js.map
│       ├── bootstrap.js
│       ├── bootstrap.js.map
│       ├── bootstrap.min.js
│       └── bootstrap.min.js.map
├── <font color="#5555FF"><b>conteudo</b></font>
│   ├── <font color="#5555FF"><b>demo</b></font>
│   │   ├── demo.html
│   │   └── demo_post.html
│   ├── dir_list.js
│   ├── js_post.js
│   └── <font color="#5555FF"><b>principal</b></font>
├── data.json
├── index.html
└── java.js

6 directories, 29 files
</pre>

<br>
It seems to be working the way it was supposed to...now let's analyze the core code and start working:
<img style="margin: auto;" class="post-img" src="images/clean-code-meaningful-names/writer-typing.gif">

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

<h3 id="understand-the-solution">Understand the solution</h3>
If you're working with somenone else's code it's important to get used with the code and the way that the other person
thinks and deals with problems and actually understand the implemented solution as best as you can. 
I know this seems pretty obivous but it's commom to see people trying to refact 
code that they don't know how it was supposed to work, specially when they have a date to delivery something.
Sometimes I caught myself doing this and I don't recommend you to do the same.
<br>
<br>
Anyway, there is not much to talk about this, the best way to understand someone else's thoughts 
is by executing the code and seeing some kind of diagram or documentation if the code has one. 
<br>
My personal recommendation is that you just do your best to understand and start by the business
problem that it was intended to solve. This is going to help you to comprehend the applyed solution 
and why some things where done in a certain way and it's also going to help you to kind of 
consolidate the solution.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
It is hard to know what everything is doing when dealing with a not well written or structured code at the first moment. 
What I like to do is to try to identify things that I can easily "understand" like function calls, maybe some hard coded 
strings and try to figure out what is happening while reading the code for the first times.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

To execute pieces of the code from the unit testing class is a good idea. Set some break points on the places where you can't comprehend
so you can have more visibility and control of what's happening. You can use the some sort of <b>Evaluate Expression</b> to execute
some code fragments or expressions and see the results without executing the entire test if your IDE offers this kind of function.
<br>
If your code doesn't have a unit test class, it's a good idea to create one. This
is going to help others when they try to read and understand your code and sometimes can help even yourself understand your own code.
<br>
Of course unit tests are not 100% focused to help to understand the solution but there is where the mocked code and test scenarios are
and they are perfect to understand functions and conditional statements because they are supposed to test a given function's behavior.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

<h3>It's important to know</h3>
There is some things that it's interesting to have in mind when writing or refacting code that
I would like to bring here.
<br>
Choosing names should be a simple thing to do but to have an entire chapter in a book 
and so many blog posts and videos out there to talk about this means that it's not that simple.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

A bad choice for a name can delay the development process like for an entire day, can conflict with other
names during the execution not making clear it's usage and make it harder to mantain the code.
<br>
So think twice before giving a name like "variable" for your variable or giving the same name of a module 
to a function. Your team will be thankful...

<br>
But how should you do it?
<br>
If you don't have much experience maybe I can help you listing some topics:
<ul style="word-wrap: break-word;">
    <li>Make sure that the name is clear, simple and reveals the class/function/variable's intent</li>
    <li>Avoid using abbreviations that it's not commom like "stn" for "street name". This onlys makes sense in your own head</li>
    <li>Try to use unique names. The Clean Code refers to those as "Searchable Names"</li>
    <li>Use the context of the Class/Function or even loops and conditional blocks in your favor</li>
    <li>Avoid using Magic Numbers. You know those number that are just in the middle of the code and you don't have a clue of what it was supposed to mean?</li>
    <li>When naming Classes and objects use noun or noun phrases</li>
    <li>When naming Methods use verbs or verb phrases</li>
    <li>Avoid redundant names like "streetNameOFtheCurrentUser".
        If there's a object created from a User Class and there's a attribute called address 
        gabriel.address.streetName or simply gabriel.streetName will be enough to understand</li>
    <li>Don't use extreme and useless long names. Things like "dateOfTheFirstCreatedUserInsideThePlatformWithTimezoneAndMilliSeconds". Someone will pretty much want to punch you in the face</li>
</ul>

<br>

<h3 id="the-big-questions">The 3 big questions</h3>
Let's start from the beginning, the main class <b>main.py</b> of course.
<br>

The Clean Code book recommends that when choosing the name of a class, 
function or variable we should have in mind at least the following 3 big questions:
<ul>
    <li>Why it exists?</li>
    <li>What it does?</li>
    <li>How it is used?</li>
</ul>
Let's get these recommendations as starting point and explore the <b>main.py</b>'s content trying to apply and
 answer those questions and understand the meaning behind each line of code:
<pre class="brush: python">
    <code>
from generate import gerador
import sys, json, datetime
if len(sys.argv) < 3:
    print('Insira argumentos validos por favor...\n\n')
    print('''Modo de usar:\nCRIAR UM NOVO PROJETO \t\t novo NOME_PROJETO\nCRIAR UM NOVO POST\t\tpost NOME_DO_POST PASTA_DO_PROJETO''')

else:
        
    #A OPCAO SERA O PRIMEIRO ARGUMENTO
    argumento = sys.argv[1]

    #SERA O SEGUNDO A PASTA OU NOME DO POST
    pasta_nome_post = sys.argv[2]

    if argumento.lower() == 'novo' and pasta_nome_post != " ":
        print("Tentando gerar arquivos...")

        #INSTANCIAMOS A CLASSE PASSANDO OS ARGUMENTOS
        projeto = gerador(argumento, pasta_nome_post + '/')

        #SE A RESPOSTA FOR TRUE
        if projeto:
            print('Feito')  
    if argumento.lower() == 'ajuda':
        print('''Modo de usar:\n\n CRIAR UM NOVO PROJETO \t\t novo NOME_PROJETO\nCRIAR UM NOVO POST\t\tpost NOME_DO_POST PASTA_DO_PROJETO''')
    #SE O ARGUMENTO FOR POST, O NOME DO POST DEVE SER PASSADO JUNTO A PASTA DO PROJETO  
    
    if argumento.lower() == 'post' and pasta_nome_post != " " and sys.argv[3] != " " and sys.argv[4] != " ":
        print("Gerando arquivos...")
        #PRIMEIRO SERA INSERIDO, O POST, NO JSON
        #ABERTURA DO ARQUIVO EM MODO ESCRITA/LEITURA
        pasta_destino = sys.argv[3]
        categoria = sys.argv[4]  
        try:
            files = open(str(pasta_destino) + '/data.json', 'r+')
            #LEITURA DO ARQUIVO
            leitura = files.read()
            #PASSANDO DE JSON PARA PARA ALGO QUE O PYTHON ENTENDA, GERALMENTE, LISTA, DICIONARIOS ETC.
            dados = json.loads(leitura)
                    
            #INSTANCIA DA CLASS DATETIME
            agora = datetime.datetime.now()

            #ATRIBUIÇÃO DE UM NOVO POST COM DADOS GENERICOS
            dados[1]['posts'][pasta_nome_post] = {"title": "titulo do post", "categoria": str(categoria),"Data": str(agora.day) + '/' + str(agora.month) + '/' + str(agora.year), "conteudo": "SEU CONTEUDO DEVE SER INSERIDO AQUI"}
                    
            files.seek(0)

            #"OFICIALIZANDO" AS ALTERAÇOES DO JSON DANDO UM DUMP, NADA MAIS É DO QUE GERAR O NOVO BINARIO JSON
            json.dump(dados, files, indent = 4)

            files.truncate()
            #ISNTANCIA DA CLASSE GENERATE, TAIS ARGUMENTOS DEVEM SER PASSADOS
            postagem = gerador(" "," ")
            post = postagem.newPost(pasta_nome_post, str(pasta_destino),categoria)
            if post:
                print('Feito') 
        
        except FileNotFoundError:
            print('Talvez o diretorio informado não exista.')
    </code>
</pre>

<h3 id="understanding-the-imports">Understanding the imports</h3>
Right at the beginning of the code we can see that the first import uses 2 different languages. This probably isn't gonna
happen if your native language is English. But make sure that if you're using a language, stick with it to make things easier.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
That being said, we can see that the first import is about the class that actually process the "commands" sent by the user, the following
imports are <b>sys</b> a module to interact with the Python interpreter, <b>json</b> module to represent and manipulate data in Json Objects
and <b>datetime</b> to manipulate date and time.
<br>
There is also a <b>if</b> statement to check if the the minimum amount of arguments for to the script has been provided, 
if not, it shows the documentation.
<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
What I'm going to do here is to get those imports and try to have a clue of what is happening looking where they are being used.
<br>
If I was dealing with long lines of code I would just go right into the unit testing class and execute the code, maybe function by function instead of spending
so much time trying to understand it.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
So answering the big questions for the imports:
<ul>
 <li><b>generate.gerador</b>: imports the class that is going to process the commands provided by the user</li>
 <li><b>sys</b>: used to interact with the users through command line</li>
 <li><b>json</b>: used to manipulate the configuration files</li>
 <li><b>datetime</b>: used to dinamycally flag the creation date of a post</li>
</ul>

<br>
<h3 id="understanding-the-first-conditional-statement">Understanding the first <b>if statement</b></h3>
There isn't much to talk about:
<ul>
 <li>it guarantees that the user only gives the script at the minimum 3 arguments</li>
 <li>it shows a summary of how to use the script using the function <b>print</b></li>
</ul>

When I'm going through the refact process I like to go piece by piece, maybe function by function or following the conditional statements
in sequence to make things more simple. Deal with a small piece of code is easier than trying to understand the entire code at once.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

I would like to remember that the possible inputs that the user can give are:
<div class="code-snippet type-bash">
    <span class="bash-keyword">python3</span> <span>main.py new &lt;project_name&gt;</span>
</div>
<div class="code-snippet type-bash">
    <span class="bash-keyword">python3</span> <span>main.py post &lt;post_name&gt; &lt;project_name&gt; &lt;post_category&gt;</span>
</div>

That means that the user's input can be <b>3</b> arguments at the minimum and <b>5</b> at the max since the name of the script is the first
argument, the script needs to know which flow the user wants to follow (the second argument) and it's considering that there's room for plus
3 more arguments to complete the chosen flow.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

Refacting the code for the first time:

<pre class="brush: python">
    <code>
import core
import sys
import json
import datetime
import logging

MINIMUM_COMMAND_LINE_ARGS = 3
MAX_COMMAND_LINE_ARGS = 5

USAGE_SUMMARY = """
How to use ->
python3 main.py &lt;COMMAND&gt; &lt;COMMAND_ARGUMENTS&gt;
Create a new project: python3 main.py project &lt;PROJECT_NAME&gt;
Create a new blog post: python3 main.py post &lt;POST_NAME&gt; &lt;PROJECT_NAME&gt; &lt;POST_CATEGORY&gt;
"""

if len(sys.argv) < MINIMUM_COMMAND_LINE_ARGS or len(sys.argv) > MAX_COMMAND_LINE_ARGS:
    invalid_arguments_message = """
    Invalid amount of arguments, please try again with: \n {usage_summary}
    """
        
    invalid_arguments_message = invalid_arguments_message.format(
        usage_summary=USAGE_SUMMARY
    )
        
    logging.info(invalid_arguments_message)
    </code>
</pre>

Now we can see that if there's not the minimum or there's more than 5 arguments to deal with, a default error message 
will be shown along with the summary of the basic usage guide and let the user know how to properly use the script.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
I've hidden the <b>magic numbers</b> giving them a meaning, a name, as you can see for the <b>MINIMUM_COMMAND_LINE_ARGS</b>
and <b>MAX_COMMAND_LINE_ARGS</b> variables.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

But we still have some issues, what if it's passed 4 arguments? The verification doesn't cover that. Let's refact again

<pre class="brush: python">
    <code>
import core
import sys
import json
import datetime
import logging

AVAILABLE_FLOWS = {
    "new": {
        "arguments": [
            "project_name"
        ],
        "processor": core.Project
    },
    "post": {
        "arguments": [
            "post_name",
            "project_name",
            "post_category"
        ],
        "processor": core.Post
    }
}
MINIMUM_COMMAND_LINE_ARGS = 1
FLOW_POSITION = 1
SCRIPT_NAME = 1

USAGE_SUMMARY = """
    How to use ->
    python3 main.py &lt;COMMAND&gt; &lt;COMMAND_ARGUMENTS&gt;
    Create a new project: python3 main.py project &lt;PROJECT_NAME&gt;
    Create a new blog post: python3 main.py post &lt;POST_NAME&gt; &lt;PROJECT_NAME&gt; &lt;POST_CATEGORY&gt;
"""

def exit_program():
    invalid_arguments_message = """
        Invalid amount of arguments, please try again with: \n {usage_summary}
        """
    invalid_arguments_message = invalid_arguments_message.format(
        usage_summary=USAGE_SUMMARY
    )
    logging.info(invalid_arguments_message)
    sys.exit(1)

user_input = sys.argv

if (len(user_input) - SCRIPT_NAME < MINIMUM_COMMAND_LINE_ARGS or
        not AVAILABLE_FLOWS.get(user_input[FLOW_POSITION])):
    exit_program()

flow = AVAILABLE_FLOWS.get(user_input[FLOW_POSITION])
if len(user_input) - (SCRIPT_NAME + FLOW_POSITION) != len(flow.get('arguments')):
    exit_program()
    </code>
</pre>
I think it's a good idea to see the possible behaviors as <b>flows</b>. We can have the <b>new project</b> flow,
<b>new post</b> flow and the <b>help</b> flow. New flows could be added eventually like a <b>list created posts</b> flow
with the possibility of seing the amount of posts created for a specific category and so on.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
I've also added the <b>AVAILABLE_FLOWS</b> structure, this is going to help us to store the avaible flows as the name says, the needed
elements or variables to process each flow and the processor resposible for each flow.
<br>
In this way we can simply access the arguments or call the processor for each flow dinamycally using the name as a reference.
<br>
To give you an example let's say that we want to access the needed arguments to process the <b>new project</b> flow, so all we would have
to do is:
<pre class="brush: python">
    <code>
<span class="python-console-line">AVAILABLE_FLOWS.get('new').get('arguments')</span>
<span class="python-console-line">["project_name"]</span>
</code>
</pre>

Just remember that the first argument will be the script itself <b>main.py</b>, the second one will be the flow.
<br>
Now we guarantee that the default message will be displayed:
<ul>
  <li>When the user gives the script less than 2 arguments</li>
  <li>when the user gives the script a flow that does not exists</li>
  <li>When the user gives the script the minimum amount of arguments but not enough arguments to complete the flow or
      gives more arguments than expected
  </li>
</ul>

<br>

<h3 id="uderstanding-the-else-statement">Understanding the <b>else statement</b></h3>
Lets take a look into the <b>else</b> block. I'm going to break this one in two parts:
<pre class="brush: python">
    <code>
else:
     # A OPCAO SERA O PRIMEIRO ARGUMENTO
     argumento = sys.argv[1]

      # SERA O SEGUNDO A PASTA OU NOME DO POST
      pasta_nome_post = sys.argv[2]

    if argumento.lower() == 'novo' and pasta_nome_post != " ":
        print("Tentando gerar arquivos...")

        # INSTANCIAMOS A CLASSE PASSANDO OS ARGUMENTOS
        projeto = gerador(argumento, pasta_nome_post + '/')

        # SE A RESPOSTA FOR TRUE
        if projeto:
            print('Feito')
    if argumento.lower() == 'ajuda':  # Create an output to the user with the documentation
        print('''Modo de usar:\n\n CRIAR UM NOVO PROJETO \t\t novo NOME_PROJETO\nCRIAR UM NOVO POST\t\tpost NOME_DO_POST PASTA_DO_PROJETO''')  
    </code>
</pre>
Right at the beginning we have two variables, one to store the <b>flow</b> chosen by the user and the second one to store
the name of the project/post.
<br>
The first <b>if</b> statement deals with the <b>new project</b> flow and guarantees that the project name is not empty.
The second one checks if the user typed <b>help</b> and shows the documentation if so.
<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
So making some changes:
<pre class="brush: python">
    <code>
import core
import sys
import json
import datetime
import logging

AVAILABLE_FLOWS = {
    "new": {
        "arguments": [
            "project_name"
        ],
        "processor": core.Project
    },
    "post": {
        "arguments": [
            "post_name",
            "project_name",
            "post_category"
        ],
        "processor": core.Post
    }
}
MINIMUM_COMMAND_LINE_ARGS = 1
FLOW_POSITION = 1
SCRIPT_NAME = 1

USAGE_SUMMARY = """
    How to use ->
    python3 main.py &lt;COMMAND&gt; &lt;COMMAND_ARGUMENTS&gt;
    Create a new project: python3 main.py project &lt;PROJECT_NAME&gt;
    Create a new blog post: python3 main.py post &lt;POST_NAME&gt; &lt;PROJECT_NAME&gt; &lt;POST_CATEGORY&gt;
"""

def exit_program():
    invalid_arguments_message = """
        Invalid amount of arguments, please try again with: \n {usage_summary}
        """
    invalid_arguments_message = invalid_arguments_message.format(
        usage_summary=USAGE_SUMMARY
    )
    logging.info(invalid_arguments_message)
    sys.exit(1)

user_input = sys.argv

if (len(user_input) - SCRIPT_NAME < MINIMUM_COMMAND_LINE_ARGS or
        not AVAILABLE_FLOWS.get(user_input[FLOW_POSITION])):
    exit_program()

flow = AVAILABLE_FLOWS.get(user_input[FLOW_POSITION])
if len(user_input) - (SCRIPT_NAME + FLOW_POSITION) != len(flow.get('arguments')):
    exit_program()
else:
    if argumento.lower() == 'post' and pasta_nome_post != " " and sys.argv[3] != " " and sys.argv[4] != " ":
        print("Gerando arquivos...")
        #PRIMEIRO SERA INSERIDO, O POST, NO JSON
        #ABERTURA DO ARQUIVO EM MODO ESCRITA/LEITURA
        pasta_destino = sys.argv[3]
        categoria = sys.argv[4]  
        try:
            files = open(str(pasta_destino) + '/data.json', 'r+')
             #LEITURA DO ARQUIVO
            leitura = files.read()
            #PASSANDO DE JSON PARA PARA ALGO QUE O PYTHON ENTENDA, GERALMENTE, LISTA, DICIONARIOS ETC.
            dados = json.loads(leitura)
                
            #INSTANCIA DA CLASS DATETIME
            agora = datetime.datetime.now()

            #ATRIBUIÇÃO DE UM NOVO POST COM DADOS GENERICOS
            dados[1]['posts'][pasta_nome_post] = {"title": "titulo do post", "categoria": str(categoria),"Data": str(agora.day) + '/' + str(agora.month) + '/' + str(agora.year), "conteudo": "SEU CONTEUDO DEVE SER INSERIDO AQUI"}
                
            files.seek(0)

            #"OFICIALIZANDO" AS ALTERAÇOES DO JSON DANDO UM DUMP, NADA MAIS É DO QUE GERAR O NOVO BINARIO JSON
            json.dump(dados, files, indent = 4)

            files.truncate()
            #ISNTANCIA DA CLASSE GENERATE, TAIS ARGUMENTOS DEVEM SER PASSADOS
            postagem = gerador(" "," ")
            post = postagem.newPost(pasta_nome_post, str(pasta_destino),categoria)
            if post:
                print('Feito') 
    
        except FileNotFoundError:
            print('Talvez o diretorio informado não exista.')
</code>
</pre>

I basically removed those validations from the code because once the flow and the 
right amount of arguments is provided by the user the processor will be called and the arguments will be passed to the core module
dinamycally. If not, the basic usage guide will be shown.
<br>
I kept the <b>else block</b> to make it easier to keep a track of what is happening inside the code.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
That's it, let's analyze the last <b>if statement</b> inside the <b>else block</b> and see what's happening:
<pre class="brush: python">
    <code>
else:
    if argumento.lower() == 'post' and pasta_nome_post != " " and sys.argv[3] != " " and sys.argv[4] != " ":
        print("Gerando arquivos...")
        #PRIMEIRO SERA INSERIDO, O POST, NO JSON
        #ABERTURA DO ARQUIVO EM MODO ESCRITA/LEITURA
        pasta_destino = sys.argv[3]
        categoria = sys.argv[4]  
        try:
            files = open(str(pasta_destino) + '/data.json', 'r+')
             #LEITURA DO ARQUIVO
            leitura = files.read()
            #PASSANDO DE JSON PARA PARA ALGO QUE O PYTHON ENTENDA, GERALMENTE, LISTA, DICIONARIOS ETC.
            dados = json.loads(leitura)
                
            #INSTANCIA DA CLASS DATETIME
            agora = datetime.datetime.now()

            #ATRIBUIÇÃO DE UM NOVO POST COM DADOS GENERICOS
            dados[1]['posts'][pasta_nome_post] = {"title": "titulo do post", "categoria": str(categoria),"Data": str(agora.day) + '/' + str(agora.month) + '/' + str(agora.year), "conteudo": "SEU CONTEUDO DEVE SER INSERIDO AQUI"}
                
            files.seek(0)

            #"OFICIALIZANDO" AS ALTERAÇOES DO JSON DANDO UM DUMP, NADA MAIS É DO QUE GERAR O NOVO BINARIO JSON
            json.dump(dados, files, indent = 4)

            files.truncate()
            #ISNTANCIA DA CLASSE GENERATE, TAIS ARGUMENTOS DEVEM SER PASSADOS
            postagem = gerador(" "," ")
            post = postagem.newPost(pasta_nome_post, str(pasta_destino),categoria)
            if post:
                print('Feito') 
    
        except FileNotFoundError:
            print('Talvez o diretorio informado não exista.')
    </code>
</pre>
As we can see, it's about the <b>new post</b> flow and it validates if all the required parameters are present and not empty.
Right in the sequence it opens the file <b>data.json</b> inside the existing project, reads it, loads the Json text and 
add a new dict object to it.
<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->
The <b>seek()</b> call is related to the stream position. I'm not getting too much into this today, 
but a simple explanation would be: Python offers a way to work with <b>stream positions</b> similarly to 
<b>File Position pointers</b> in C. That would be a way to identify your position inside a file object.
<br>
The module being used in this case is the <b>I/O</b> through the built-in function <b>open()</b>. When the Json file is opened a text stream
is stored. The <b>seek()</b> allow us to define where the operations (Input/output or Read/Write) will be started using the 
offset (beginning) informed as a reference.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

Let's say that you have a file <b>cool_file.txt</b> with the text <b>Just a cool content for a cool file</b> and you wants to
print just the "cool file" part. Seek allow us to set the starting point, so our starting point would be the byte 26, translating
this, the function call would be <b>file.seek(26)</b>.
<br>

To make it more clear, let's take from the point where the file <b>cool_file.txt</b> was opened and the content was stored.
The output would be something like this:
<img class="post-img" src="images/clean-code-meaningful-names/seek_example.png">

Let's translate this into a <a href="https://docs.python.org/3/library/functions.html#func-bytearray" target="blank">byte array</a>,
get the byte in the 26 position, get the hexadecimal represenation from the given decimal number and load the text again and see what happens:
<img class="post-img" src="images/clean-code-meaningful-names/seek_example_hex_to_text.png">
There it is, the "c" char. The char that will be used as a starting point to produce the <b>Read</b> operation and give us the expected output 
<b>cool file</b> part.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

Getting back to the "why" of things, right after setting the starting point for the Write operation the oppened file receives the
updated valid json text with the <b>json.dupm()</b>.
<br>
The <a href="https://docs.python.org/3/library/io.html#io.IOBase.truncate" targe="blank">truncate()</a> is going to resize the stream 
to the current offset position which will be the last written byte since any value is passed to it followed by the <b>gerador()</b> instance and the actually
page post page generator function call...

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

Now that we know what everything is doing, let's work on this piece of code.
To remove this last <b>if statement</b> inside the <b>else block</b> we can just verify if any of the required arguments of the current flow are empty like this:
<pre class="brush: python">
<code>
for index, required_argument in enumerate(flow['arguments']):
    if not user_input[index + (FLOW_POSITION + SCRIPT_NAME)].strip():
        exit_program()
</code>
</pre>

The remaining code does not seems to follow the idea of the <b>main.py</b> file which would be to intermediate the 
core and the user's input so it makes more sense to remove it from there and put it inside the <b>core</b> module.
<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

Finally we have the actual processor call where it's going to be easier since the processor reference is inside the 
<b>AVAILABLE_FLOWS</b> structure. All we have to do is to get the corresponding processor based on the flow name 
and provide the arguments:
<pre class="brush: python">
<code>processor = flow['processor']
processor(user_input[(FLOW_POSITION + SCRIPT_NAME): ])
</code>
</pre>

And the complete file would be:
<pre class="brush: python">
    <code>
import core
import sys
import json
import datetime
import logging

AVAILABLE_FLOWS = {
    "new": {
        "arguments": [
             "project_name"
             ],
         "processor": core.Project
        },
    "post": {
         "arguments": [
             "post_name",
               "post_category",
             "project_name"
             ],
        "processor": core.Post
     }
}
MINIMUM_COMMAND_LINE_ARGS = 1
FLOW_POSITION = 1
SCRIPT_NAME = 1

USAGE_SUMMARY = """
    How to use ->
    python3 main.py &lt;COMMAND&gt; &lt;COMMAND_ARGUMENTS&gt;
    Create a new project: python3 main.py project &lt;PROJECT_NAME&gt;
    Create a new blog post: python3 main.py post &lt;POST_NAME&gt; &lt;PROJECT_NAME&gt; &lt;POST_CATEGORY&gt;
"""

def exit_program():
    invalid_arguments_message = """
        Invalid amount of arguments, please try again with: \n {usage_summary}
        """
    invalid_arguments_message = invalid_arguments_message.format(
        usage_summary=USAGE_SUMMARY
    )
    logging.info(invalid_arguments_message)
    sys.exit(1)

user_input = sys.argv

if (len(user_input) - SCRIPT_NAME < MINIMUM_COMMAND_LINE_ARGS or
        not AVAILABLE_FLOWS.get(user_input[FLOW_POSITION])):
    exit_program()

flow = AVAILABLE_FLOWS.get(user_input[FLOW_POSITION])
if len(user_input) - (SCRIPT_NAME + FLOW_POSITION) != len(flow.get('arguments')):
    exit_program()

for index, required_argument in enumerate(flow['arguments']):
    if not user_input[index + (FLOW_POSITION + SCRIPT_NAME)].strip():
        exit_program()

processor = flow['processor']
processor(user_input[(FLOW_POSITION + SCRIPT_NAME):])

</code>
</pre>

We can go even further and organize this module like this:
<pre id="refacted-main-class" class="brush: python">
    <code>
import core
import sys
import json
import datetime
import logging


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


AVAILABLE_FLOWS = {
    "project": {
        "arguments": [
            "project_name"
        ],
        "processor": core.Project
    },
    "post": {
        "arguments": [
            "post_name",
            "post_category",
            "project_name"
        ],
        "processor": core.Post
    }
}
MINIMUM_COMMAND_LINE_ARGS = 1
FLOW_NAME = 0
FIRST_FLOW_PARAM = 1
SCRIPT_NAME = 0


def exit_program(message=None):
    if message:
        logging.error(message)
    logging.info(execute_flow.__doc__)
    sys.exit(1)


def execute_flow(user_input):
    """Usage: 
    Basic structure: python3 main.py &lt;FLOW&gt; &lt;FLOW_ARGUMENTS&gt;
    Create a new project: python3 main.py project &lt;PROJECT_NAME&gt;
    Create a new blog post: python3 main.py post &lt;POST_NAME&gt; &lt;POST_CATEGORY&gt; &lt;PROJECT_NAME&gt;
    """

    if (len(user_input) < MINIMUM_COMMAND_LINE_ARGS or not 
        AVAILABLE_FLOWS.get(user_input[FLOW_NAME])):
        exit_program("The flow does not exist or there is not enough params to process")
    
    if user_input[FLOW_NAME] == 'help':
        exit_program()
    
    flow = AVAILABLE_FLOWS.get(user_input[FLOW_NAME])
    flow_arguments = user_input[FIRST_FLOW_PARAM: ]
    
    if len(flow_arguments) != len(flow.get('arguments')):
        exit_program("Too much arguments")
    
    for index, required_argument in enumerate(flow['arguments']):
        if not user_input[index + FLOW_NAME].strip():
            exit_program("There's an invalid argument")    
    processor = flow['processor'](flow_arguments)
    processor.process()


if __name__ == "__main__":
    flow_name = 1
    execute_flow(sys.argv[flow_name: ])
    </code>
</pre>

That's so much better...now we can see where it starts, it has a function to deal with the user's input (execute_flow). It has
a <b>help flow</b> that is responsible for providing the user with the basic usage guide that takes advantage
of the <b>exit_program function</b> that will also be called when the script is provided with some kind of invalid input.

<!-- #Long line break -->
<br>
<br>
<!-- #Long line break -->

<h3>The core module</h3>
Now that the <b>main.py</b> has a better look, let's dive into the the <b>core.py</b> previously <b>generate.py</b>.
<pre class="brush: python">
    <code>
from template import hCSS
import os, json
Temp = hCSS()
HTML = Temp.html
JAVAS = Temp.javaS
estiloCSS = Temp.estilo
Json = Temp.json
conteudoH = Temp.post_html
conteudoJ = Temp.javaS_post
List_dir_html = Temp.diretorio_list_html
ListDirJs = Temp.diretorio_list_js
class gerador():
    def __init__(self,arg,pasta):
        self.arg = arg
        self.pasta = pasta

        
        if self.arg.lower() == 'novo':
            self.gerar_projeto(self.pasta)

    def gerar_projeto (self, pasta):
        self.dir = os.path.dirname(pasta)
        self.bootstrap = os.path.dirname(self.dir+ '/bootstrap/')
        self.estilo = os.path.dirname(self.bootstrap +'/css/')
        self.content = os.path.dirname(self.dir + '/conteudo/')
        self.principal_content = os.path.dirname(self.dir + '/conteudo/principal/')

        #VERIFICAMOS SE A PASTA EXISTE
        if not os.path.exists(self.dir):

            #SE NÃO EXISTIR, VAMOS CRIA-LA
            os.makedirs(self.dir)
            #ABRIREMOS UM ARQUIVO DENTRO DO DIRETORIO, SE ELE NAO EXISTIR, CRIAMOS UM ARQUIVO INDEX DENTRO DO DIRETORIO E O ABRIREMOS
            self.index = open(self.dir + '/index.html', 'w+')

            #ESCREVEREMOS DENTRO DESSE ARQUIVO O TEXTO ESCRITO NO ARQUIVO TEMPLATE html
            self.index.write(HTML)

            #ABRIREMOS UM ARQUIVO DENTRO DO DIRETORIO. SE NAO EXISTIR, VAMOS CRIA-LO
            self.javascript = open(self.dir +'/java.js', 'w+' )
            

            #VAMOS ESCREVER O JAVASCRIPT VINDO DA PAGINA TEMPLATE
            self.javascript.write(JAVAS)

            # O MESMO ACONTECE COM O JSON
            self.j = open(self.dir +'/data.json','w+')
            self.j.write(Json)

            os.makedirs(self.principal_content)
            
            
            # #SE O DIRETORIO NAO EXISTIR
            if not os.path.exists(self.bootstrap):
                os.makedirs(self.bootstrap)

                #ENTRAR NA PASTA self.bootstrap/ BAIXAR O BOOTSTRAP/DESCOMPACTAR O BOOTSTRAP BAIXADO
                os.system('cd ' + self.bootstrap + ' && wget https://github.com/twbs/bootstrap/releases/download/v4.1.2/bootstrap-4.1.2-dist.zip && unzip bootstrap-4.1.2-dist.zip')
                self.arq = open(self.estilo + '/estilo.css', 'w+')
                self.arq.write(estiloCSS)

            #CRIAR A PASTA CONTENT E INSERIR O JS DOS POSTS E DA LISTAGEM DE DIRETORIOS LÁ CASO O DIRETORIO CONTEUDO NAO EXISTA 
            if not os.path.exists(self.content):
                os.makedirs(self.content)
                self.js_post = open(self.content + '/js_post.js', 'w+')
                self.js_post.write(conteudoJ)
                self.js_dir_list = open(self.content + '/dir_list.js', 'w+')
                self.js.dir_list.write(List_dir_js)

            #CASO ELE EXISTA VAMOS APENAS CRIAR/ ESCREVER OS CONTEUDOS NOS ARQUIVOS
            else: 
                self.js_post = open(self.content + '/js_post.js', 'w+')
                self.js_post.write(conteudoJ)
                self.js_dir_list = open(self.content + '/dir_list.js', 'w+')
                
                self.js_dir_list.write(ListDirJs)
                
        return True            


    #CRIAR POSTS
    def newPost(self, nome_post, pasta_proj, categoria):
        self.nome_post = nome_post
        self.pasta_proj = pasta_proj
        self.categoria = categoria
        self.caminho = self.pasta_proj + '/conteudo/' + self.categoria + '/'
        
        if not os.path.exists(self.caminho):
            os.makedirs(self.caminho)
            self.dir_list = open(self.caminho + categoria + '.html', 'w+')
            self.dir_list.write(List_dir_html)
            self.post = open(self.caminho + self.nome_post + '.html', 'w+')
            self.post.write(conteudoH)
        else:
            
            self.post = open(self.caminho + self.nome_post + '.html', 'w+')
            self.post.write(conteudoH)
        return True
    </code>
</pre>
<h3 id="core-module-imports">Understanding the imports</h3>
This file has 3 imports:
<ul>
    <li><b>from template import hCSS</b>: imports the Html, Css and Js templates</li>
    <li><b>import os</b>: used to manipulate the files inside project. Read and Write the the project's folder and so on</li>
    <li><b>import json</b>: used to manipulate the Json template for the <b>data.json</b> file</li>
</ul>
<br>
<h3 id="core-global-scope-variables">Understanding the global scope variables</h3>
I don't really think that there is much to talk about this, they are just the loaded template from the <b>template.py</b>
module...I dont think it's the best case scenario to use the templates like this but we are going to focus on just the names
for now...
<ul>
    <li><b>HTML = Temp.html</b>: Main page HTML template</li>
    <li><b>JAVAS = Temp.javaS</b>: Main page's JavaScript code template</li>
    <li><b>estiloCSS = Temp.estilo</b>: Main page's CSS code template</li>
    <li><b>Json = Temp.json</b>: The WebSite's data file template. It's used by both, main page and posts</li>
    <li><b>conteudoH = Temp.post_html</b>: Blog post page's HTML template</li>
    <li><b>conteudoJ = Temp.javaS_post</b>: Blog post page's JavaScript template</li>
    <li><b>List_dir_html = Temp.diretorio_list_html</b>: Categories's main pages HTML template</li>
    <li><b>ListDirJs = Temp.diretorio_list_js</b>: Categories's main pages JavaScript template</li>
</ul>

<br>
<h3 id="core-gerador-class">The "gerador" class</h3>
This Class is supposed to hold all things related to the creation of the files and folders for the projects and 
blog posts. This is where the templates can be manipulated and created, the necessary packages are 
installed and so on.
<br>
<br>
<h3 id="core-functions">The functions</h3>
<ul>
    <li><b>constructor (__init__)</b>: It sets the user's input and the project folder that will be the "working space". 
        It also calls the "new project" function</li>
    <li><b>gerar_projeto</b>: Translating -> generate_project or build_project. This one is going to deal with the "new project" flow</li>
    <li><b>newPost</b>: The last function will deal with the "new post" flow</li>
</ul>
<br>

<h3 id="core-refact">A better core for all of us</h3>
<pre class="brush: python">
    <code>
from template import hCSS as frontend_tamplate
import os
import json
import logging
from datetime import datetime


class Project:
    template = frontend_tamplate()
    BOOTSTRAP_PACKAGE_NAME = "bootstrap-4.1.2-dist.zip"
    BOOTSTRAP_ADDRESS = "https://github.com/twbs/bootstrap/releases/download/v4.1.2/{package_name}"

    def __init__(self, workspace_name):
        self.WORKSPACE =  os.path.dirname(workspace_name[0] + "/") 
        
        self.BOOTSTRAP_FOLDER = os.path.dirname(
            "{workspace}/bootstrap/".format(workspace=self.WORKSPACE)
        )
        
        self.CSS_FOLDER = os.path.dirname(
            "{workspace}/bootstrap/css/".format(workspace=self.WORKSPACE)
        )
        
        self.POSTS_FOLDER = os.path.dirname(
            "{workspace}/conteudo/".format(workspace=self.WORKSPACE)
        )
        
        self.BOOTSTRAP_ADDRESS = self.BOOTSTRAP_ADDRESS.format(
            package_name=self.BOOTSTRAP_PACKAGE_NAME
        )

        self.CORE_ELEMENTS = {
            "main_page": {
                "main_page": {
                    "name": "index.html",
                    "template": self.template.html,
                    "base_path": self.WORKSPACE
                },
                "main_page_javascript": {
                    "name": "java.js",
                    "template": self.template.javaS,
                    "base_path": self.WORKSPACE
                }
            },
            "posts": {
                "posts_javascript": {
                    "name": "js_post.js",
                    "template": self.template.javaS_post,
                    "base_path": self.POSTS_FOLDER
                },
                "categories_main_page_javascript": {
                    "name": "dir_list.js",
                    "template": self.template.diretorio_list_js,
                    "base_path": self.POSTS_FOLDER
                }
            },
            "global_usage": {
                "metadata": {
                    "name": "data.json",
                    "template": self.template.json,
                    "base_path": self.WORKSPACE
                },
                "css": {
                    "name": "estilo.css",
                    "template": self.template.estilo,
                    "base_path": self.CSS_FOLDER
                }
            }
        }

    def fetch_bootstrap(self):
        os.system(
            'cd {bootstrap_folder} && wget {bootstrap_address} && unzip {package_name}'.format(
                bootstrap_folder=self.BOOTSTRAP_FOLDER,
                bootstrap_address=self.BOOTSTRAP_ADDRESS,
                package_name=self.BOOTSTRAP_PACKAGE_NAME
            )
        )

    def process(self):
        if os.path.exists(self.WORKSPACE):
           logging.info("The project already exists, please try again with another name.")
           return

        os.makedirs(self.WORKSPACE)
        os.makedirs(self.POSTS_FOLDER)
        os.makedirs(self.BOOTSTRAP_FOLDER)
        os.makedirs(self.CSS_FOLDER)
        self.fetch_bootstrap()
            
        for core_elements_group in self.CORE_ELEMENTS.values():
            logging.info("Creating core elements...")
            for core_element in core_elements_group.values(): 
                element_path = "{base_path}/{name}".format(
                    base_path=core_element.get('base_path'),
                    name=core_element.get('name')
                )
                element = open(element_path, 'w+')
                element.write(core_element.get('template'))
                element.close()
        logging.info("The project was created at {}".format(os.path.realpath(self.WORKSPACE)))

class Post:
    POSTS_CREATION_DATE_MASK = "%d/%m/%Y"

    def __init__(self, post_basic_information):
        self.name = post_basic_information[0]
        self.category = post_basic_information[1]
        self.workspace = post_basic_information[2]
        self.METADATA_TEMPLATE = {
            "title": "Title",
            "categoria": self.category,
            "Data": datetime.now().strftime(self.POSTS_CREATION_DATE_MASK),
            "conteudo": "Content"
        }

    def update_posts_metadata(self):
        metadata_file = open(self.workspace + '/data.json', 'r+')
        metadata = metadata_file.read()
        metadata_file.seek(0)
        
        json_matadata = json.loads(metadata)
        json_matadata[1]['posts'][self.name] = self.METADATA_TEMPLATE
        json.dump(json_matadata, metadata_file, indent=4)
        
        metadata_file.truncate()
        metadata_file.close()

    def process(self):
        self.update_posts_metadata()
        template = frontend_tamplate()
        category_path = self.workspace + '/conteudo/' + self.category + '/'

        if not os.path.exists(category_path):
            os.makedirs(category_path)

            category_main_page = self.category + '.html'
            post_template = self.name + '.html'

            category_main_page = open(category_path + category_main_page, 'w+')
            category_main_page.write(template.diretorio_list_html)
            category_main_page.close()
        post = open(category_path + self.name + '.html', 'w+')
        post.write(template.post_html)
        post.close()
        logging.info("A new template was created for {}".format(self.name))

</code>
</pre>
I followed the same idea as the <b>main.py</b> trying to keep everything simple and clear using
simple and clear names. 
<br>
Starting from the beginning, the imports of course. I've added an alias for the <b>hCSS</b> class 
and imported two more modules, <b>logging</b> to help us with some feedback and the <b>datetime</b>
which was already in use but I wanted to remove the <b>datetime.datetime</b> and keep just the <b>datetime</b>
calls.
<br>
<br>
The construcutor will initialize the necessary variables for both cases, Projects and Posts creation.
<br>
On the <b>Project</b> Class I've added a dictinoary called <b>CORE_ELEMENTS</b> which represents the 
core elements of each project. This is going to help us to reduce the amount of if statements 
and code repetition when creating the files.
<br>
<br>

I applyed the same idea into the <b>Post</b> Class. I've created a <b>METADATA_TEMPLATE</b> structure
to hold the template for every new blog post. Created a <b>update_posts_metadata</b> function to update 
only the <b>data.json</b> file and keeping the <b>process</b> function responsible for calling it.
<br>
<br>

<h3 id="problems-observations">Problems and final observations</h3>
There is so many problems with this code. One of them was the basic feedback for instance. I didn't know
what was happening, if the project/posts was created or not and so on.
The code doesn't validate if a given blog post exists so there's a risk of reseting an existing blog post.
<br>
<br>
If something goes wrong during the <b>new project flow</b> we'll endup with an incomplete projet folder missing
some files and the current structure only understands the <b>new project/post</b> flow so if there was a need 
for adding a new flow probably there will be a new if statement wich is pretty normal but be careful,
<b>normal</b> doesn't mean that it's ok to create 50 new if statements.
<br>
<br>
Eventually the <b>data.json</b> will be huge because it is where every blog post's content is stored so the performance
of the pages will be affected since everytime you load them the data.json is loaded too. So it would be better
if the content was stored somewhere else, maybe in files apart from it or in a database.
<br>
There is just a basic user input validation and there is no unit testing.

<br>
<br>
<h3>Final words</h3>
Reacting your code (or someone else's code) can take some time and maybe the chosen names starts to lose the meaning or
reveals not to be as clear as you thought. It may take more than one refact process till the most appropriate names appears.
<br>
Even when I was writing this blog post I changed the names that at first was making so much sense. So don't be frustrated,
the more code you refact the more senior you become.
<br>
<br>
One thing I usually do to make sure that I'm choosing the right name for my variable, at least for the moment, 
of course, is to review my own code after some hours, maybe even days or weeks. 
If I don't really know what the variable/function/class is doing I just change the name to something
that makes more sense at the moment and repeat this process till eventually I come up with a more clear name. 
<br>
<br>
Consider the time that you have to work specially if you have to deliver something.
I refact code almost daily but that does not mean that we have to rewrite the entire solution from scratch 
every single time. That's something that I usually do when I have some work to do with some piece of code specifically 
and I see the opportunity to make things better and more clear. It's better that you make sure that everything is
working fine and deliver something than have only one "well written" piece of the code but nothing to deliver.
<br>
<br>
Good Luck XD
</div>
