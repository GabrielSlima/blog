<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's
        topic is <b>formatting rules</b>. Formatting rules are super important when it comes
        to Clean Code.
    </p>
    <p>
        Professional developers knows that the first thing to be dealth with before anything else is the
        <b>communication</b>. In the last blog posts I've been emphasizing that choosing <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">good names</a>,
        creating <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">small functions</a> instead of creating monsters and removing <a href="https://gabrielslima.github.io/blog/post.html?id=8" target="_blank">comments</a> makes your code readable.
        By doing those things you're removing the pollution and making things simple and easy to understand.
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
    </p>
    <p>
        So without further ado, let's see what to consider when setting formatting rules for your project.
    </p>
    <h3>Vertical Formatting</h3>
    <p>
        Vertical formatting are about how long the source files should be. Of course, the smaller
        the easier to read...
    </p>
    <p>
        The author of Clean Code, Robert C. Martin, recommends the source files to be 200-500 lines long at the max. I think it's possible to
        keep the files this long and of course that there is the fact that, depending on the language,
        some things may require more deatails than others. But other than that with a max of 500 lines it covers those cases.
        <br>
        And what about the structure of the file? It's ok to just <b>put functions in any order</b>?
    </p>
    <p>
        I confess. This wasn't a thing for me till recently, I'm not lying to you. I find classes that have functions
        in any order harder to read but I thought it was just me being paranoid about this...
    </p>
    <p>
        But now I see that I wasn't been paranoid at all. I got used going throught the functions and just debugging
        them till I figure out and map everything that was happening. But that is not how it should be.
    </p>
    <p>
        Of course there are cases where debugging is the way to go. But if you think that the code should be simple
        and readable the debugging processing should be used with specific purpouses not as the main tool to figure out
        what the code is doing.
    </p>
    <h4>The newspaper metaphor</h4>
    <p>
        Ok, the source files should be between 200-500 lines long at the most and the functions should have a specific order to make
        the file readable, but how?
    </p>
    <p>
        Imagine the source file as a newspaper article. Every article has a headline to let the reader know what the article is about. The first paragraph
        is a synopisis covering the main concepts of the arcticle and the next paragraphs explores those concepts and expose the
        details hidden in the first paragraph.
    </p>
    <p>
        So when it comes to the code, the headline would be the file's name. The top of the file should include only the high-level concepts and the details
        should be increased as we move downward.
        <br>
        Following the idea of <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">abstractions</a>, the first layers would
        be at the top of the file as the lower-level layers are kept at the bottom.
    </p>
    <h4>Vertical openness between concepts</h4>
    <p>
        Assuming that your code is read left to right, top to bottom. Every line is a expression or clause and every group of lines is a concept or
        complete thought.
        Every thought should be separated by blank lines. So instead of:
    </p>
    <pre class="brush: python">
    <code>
import logging
import random
import time
logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)
to_reprocess = []
members = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True),
    ("gabriellima@supercooldomain.com", True),
    ("gabriel_lima@supercooldomain.com", False)
]
def send_to_premium_members(customized_message):
    for member in members:
        send_to_premium_member(member, customized_message)
def send_to_premium_member(member, message):
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    is_premium_member = member[_MEMBERSHIP_TYPE]

    if is_premium_member:
        send(member[_EMAIL], message)
def send(email, message):
    try:
        send_email(email, message)
    except ConnectionError as e:
        logging.error(e)
        to_reprocess.append(email)
def send_email(email, message):
    statuses = [True, False]
    time.sleep(.2)
    connection_status = random.choices(statuses)[0]
    
    if not connection_status:
        raise ConnectionError("Connection Error: Could not sent Email to {}".format(email))
    
    logging.info("Message sent to {email}: {connection_status}".format(
        email=email,
        connection_status=connection_status
    ))
def show_not_contacted_members():
    logging.info("The following members couldn't be contacted: {}".format(to_reprocess))
if __name__ == "__main__":
    send_to_premium_members("Super customized email")
    show_not_contacted_members()
    </code>
    </pre>
    Try doing something like this:
    <pre class="brush: python">
    <code>
import logging
import random
import time


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)

to_reprocess = []

members = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True),
    ("gabriellima@supercooldomain.com", True),
    ("gabriel_lima@supercooldomain.com", False)
]

def send_to_premium_members(customized_message):
    for member in members:
        send_to_premium_member(member, customized_message)


def send_to_premium_member(member, message):
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    is_premium_member = member[_MEMBERSHIP_TYPE]

    if is_premium_member:
        send(member[_EMAIL], message)


def send(email, message):
    try:
        send_email(email, message)
    except ConnectionError as e:
        logging.error(e)
        to_reprocess.append(email)


def send_email(email, message):
    statuses = [True, False]
    time.sleep(.2)
    connection_status = random.choices(statuses)[0]
    
    if not connection_status:
        raise ConnectionError("Connection Error: Could not sent Email to {}".format(email))
    
    logging.info("Message sent to {email}: {connection_status}".format(
        email=email,
        connection_status=connection_status
    ))


def show_not_contacted_members():
    logging.info("The following members couldn't be contacted: {}".format(to_reprocess))

if __name__ == "__main__":
    send_to_premium_members("Super customized email")
    show_not_contacted_members()
    </code>
    </pre>
    <p>
        Keep concepts (thoughts) vertically separated by blank lines. Consider using the style guide of the current language you are working with right now.
        Python for instance has <a href="https://www.python.org/dev/peps/pep-0008/#blank-lines" target="blank">Pep8</a>...
        <br>
        This is not only going to help you to have a good style on your code but it will make easier to read by removing all the "stress" you would have or
        any other reader would have without any blank lines.
    </p>

    <h3>Keeping related things close to each other</h3>
    <h4>Vertical Density</h4>
    <p>
        Keep expressions that have a close association together, without blank lines. In this way it's so much easier to identify all
         expressions a class or function has.
    </p>
<pre class="brush: python">
<code>
class Car():
  def __init__(self, model, color):
    # Model of the car
    self.model = model

    # Color of the car
    self.color = color
</code>
</pre>
    <p>
        Instance variables is the classic example of expressions that should be together, wtihout blank lines. But I think this should be
        applied to functions too. 
        <br>
        Functions by being organized in 
        <a href="https://gabrielslima.github.io/blog/post.html?id=7#levels-of-abstraction" target="blank">layers/levels of abstractions</a>
        can have expressions that are only important in a specific layer and have some constants and some blocks. So it's a good a idea to keep related expressions together and choose
        <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">meaningful names</a> for them instead of 
        keeping them separated and with comments.
    </p>
<pre class="brush: python">
<code>
def send_to_premium_member(member, message):

    # Position of the membership type
    _MEMBERSHIP_TYPE = 1

    # Position of the member's email
    _EMAIL = 0

    # Says if the current member is premium or not
    is_premium_member = member[_MEMBERSHIP_TYPE]

    if is_premium_member:
        send(member[_EMAIL], message)
</code>
</pre>
    Just remove the spaces and comments and keep them close to each other...
<pre class="brush: python">
<code>
class Car():
  def __init__(self, model, color):
    self.model = model
    self.color = color
</code>
</pre>
<pre class="brush: python">
<code>
def send_to_premium_member(member, message):
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    is_premium_member = member[_MEMBERSHIP_TYPE]

    if is_premium_member:
        send(member[_EMAIL], message)
</code>
</pre>
    <h4>Vertical Distance</h4>
    <p>
        Concepts that are close, you know, concepts that have some kind of connection because they have related lines of expression or because
        they call each other. Those concepts should be kept vertically close. 
        <br>
        This is going to prevent the reader from going throught the entire file to read functions that calls each other and also 
        prevent the reader to keep track of every concept read while trying to figure out what the system does.
    </p>
    <p>
        Also make sure that related concepts are kept in the same source file. Separated concepts in the same source are hard to read and make
        it harder when you have to deal with a bug and figure out where the value of a variable comes from and so on. Imagine
        when they are kept in different source files...
    </p>
    <p>
        Once the related concepts are close to each other, their vertical distance/separation should be based on their importance to the
        understandability of each other.
    </p>
    <p>
        This is going to prevent the reader of hopping through the source file or even classes to understand the concepts.
    </p>
    <h4>Variable Declarations</h4>
    <p>
        The varialbes should be declared as close as possible to their usage. In functions, keep local variables at the top.
        <br>
        As for the control varibles for loops, try to declare them within the loop statement.
    </p>
    <h4>Instance Variables</h4>
    <p>
        For instance variables, keep them declared in one place only. These varibles can be accessed by all functions in the class. It's
        best that they are kept in one place only.
        <br>
        Avoid doing things like this: 
    </p>
<pre class="brush: python">
<code>
class Project:
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
    
    BOOTSTRAP_PACKAGE_NAME = "bootstrap-4.1.2-dist.zip"
    BOOTSTRAP_ADDRESS = "https://github.com/twbs/bootstrap/releases/download/v4.1.2/{package_name}"
    def fetch_bootstrap(self):
        os.system(
            'cd {bootstrap_folder} && wget {bootstrap_address} && unzip {package_name}'.format(
                bootstrap_folder=self.BOOTSTRAP_FOLDER,
                bootstrap_address=self.BOOTSTRAP_ADDRESS,
                package_name=self.BOOTSTRAP_PACKAGE_NAME
            )
        )
</code>
</pre>
    <p>
        Imagine how much time would it take to figure out where the the variable <b>BOOTSTRAP_PACKAGE_NAME</b> is every time you move your eyes.
        Things would be worse if this was a 300 lines source file...
    </p>
    <h4>Dependent Functions</h4>
    <p>
        Functions that calls each other. They should be vertically close and the caller should be kept above the calle.
        <br>
        Take the code below as an example:
    </p>
<pre class="brush: python">
<code>
import pandas as pd
import logging


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


class Grid:
  grid = []

  def __init__(self, columns, rows):
    self.rows = rows
    self.columns = columns

  def append_columns(self):
    self.grid.append(self.columns)
    
  def append_rows(self):
    for row in self.rows:
      self.grid.append(row)

  def build(self):
    self.append_columns()
    self.append_rows()

  def to_pandas_data_frame(self):
    return pd.DataFrame(self.grid)


if __name__ == "__main__":
  employees_grid_columns = ["Name", "Role", "Salary"]
  employees = [["Gabriel", "Software Engineer", "84k Year"],
               ["David", "Software Engineer", "80k Year"]]
  employees = Grid(employees_grid_columns, employees)
  employees.build()
  logging.info(employees.to_pandas_data_frame())
</code>
</pre>
    <p>
        The <b>build</b> function is calling 2 functions above itself. Of course here it's easy to find where the functions are located.
        But in a more complex source file the functions could be located 10 functions or more above/bellow the caller.
    </p>
    <p>
        I've been through this situation on the last couple of days. I was in a hurry to write the code and suddenly my source file
        had lots of functions and the last function was clalling the first function after the constructor. After a couple of times
        trying to find the function to make some changes, I finally decided to put it right after the other function I was using to call it.
        So much better...
    </p>
<pre class="brush: python">
<code>
import pandas as pd
import logging


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


class Grid:
  grid = []

  def __init__(self, columns, rows):
    self.rows = rows
    self.columns = columns
  
  def build(self):
    self.append_columns()
    self.append_rows()

  def append_columns(self):
    self.grid.append(self.columns)
    
  def append_rows(self):
    for row in self.rows:
      self.grid.append(row)

  def to_pandas_data_frame(self):
    return pd.DataFrame(self.grid)


if __name__ == "__main__":
  employees_grid_columns = ["Name", "Role", "Salary"]
  employees = [["Gabriel", "Software Engineer", "84k Year"],
               ["David", "Software Engineer", "80k Year"]]
  employees = Grid(employees_grid_columns, employees)
  employees.build()
  logging.info(employees.to_pandas_data_frame())
</code>
</pre>
  <h4>Conceptual Affinity</h4>
  <p>
      Conceptual affinity implies that functions that have a certain affinity should be kept vertically close. The affinity can be a direct dependece,
      like a function calling another. But there are functions that perform similar operations, share a commom name scheme or perform
      a variation of the same task. Those functions should be kept together.
  </p>
  <h4>The vertical ordering</h4>
  <p>
      Following the concepts we've been through on the last subheads we will come up with source files organized in layers. The high level concepts
      will come first, hiding the details and as we go downwards the details are explored.
  </p>

  <h3>How wide should lines be: Horizontal Formatting</h3>
  <p>
      Now that you know how long should your source files be, it's time to know how wide the lines should be...
      <br>
      I'm going to give you an example of a code with long lines and you will know why they should be short. There it goes:
  </p>
<pre>
<code>import pandas as pd
import logging


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


class Grid:
  grid = []

  def __init__(self, columns, rows):
    self.rows = rows
    self.columns = columns

  def append_columns(self):
    self.grid.append(self.columns)
    
  def append_rows(self):
    for row in self.rows:
      self.grid.append(row)

  def build(self):
    self.append_columns()
    self.append_rows()

  def to_pandas_data_frame(self):
    return pd.DataFrame(self.grid)


if __name__ == "__main__":
  employees_grid_columns = ["Name", "Middle Name", "Last Name", "Job Title", "Position", "Department", "Manager", "Cost Center", "Employee number", "Office Number", "Mobile Phone", "Home Phone", "Email", "Start Date", "Termination Date", "Salary"]
  employees = [["Gabriel", "-", "Lima", "Information technology", "Software Engineer", "Digital Services", "Samuel", "1224", "99533", "3", "+1 732-624-0600", "-" , "gabriel@email.com", "2021-05-03", "-", "84k Year"],
               ["David", "-", "Lima", "Information technology", "Web Developer", "Digital Services", "Samuel", "1224", "99533", "3", "+1 212-420-0228", "-" , "david@email.com", "2021-05-03", "-", "80k Year"]]
  employees = Grid(employees_grid_columns, employees)
  employees.build()
  logging.info(employees.to_pandas_data_frame())
</code>
</pre>
    <p>
        Now that I've convinced you why they should be short, let's see how wide should they be...
        <br>
        Keep the lines between 80-120 chars at the most. Of course consider the style guide of the current language you are working with right now.
    </p>
    <h4>Horizontal Openness and Density</h4>
    <p>
        To associate strongly related things and to disassociate weakly realeated things we use white spaces.
        <br>
        So in cases where there is an assignment we have two different elements to work with, they naturally should be kept separated by white
        spaces to make the operation obvious: 
    </p>
<pre class="brush: python">
<code>
class Car():
  def __init__(self, model, color):
    self.model=model # Wrong
    self.color = color # Correct
</code>
</pre>
    <p>
        On the other hand function calls and their opening parenthesis is a good example of things that should be kept whithout whitespaces.
        Functions are strongly related to it's arguments. The arguments within the function call parenthesis should have a whitespace after
        every comma showing that the arguments are separated, like the example bellow:
    </p>
<pre>
<code>def send_to_premium_members(customized_message):
    for member in members:
        send_to_premium_member(member, customized_message)


def send_to_premium_member(member, message):
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    is_premium_member = member[_MEMBERSHIP_TYPE]

    if is_premium_member:
        send(member[_EMAIL], message)
</code>
</pre>
    <h4>Horizontal Alignment</h4>
    <p>
        It's a common practice to align strucutres horizontally when using languages like Assembly or C/C++, I think...
        <br>
        I particularly saw horizontal alignment for the first time in a specific project where I was working along with a COBOL programmer.
        <br>
        I was kind of helping him with the frameworks we where using and giving him an overview about the project and supporting him on following
        the best practices in Java.
    </p>
    <p>
        His first commits had assignments like this:
    </p>

<pre>
<code>
def send_to_premium_member(member, message):
    _MEMBERSHIP_TYPE  =  1
    _EMAIL            =  0
    is_premium_member = member[_MEMBERSHIP_TYPE]

    if is_premium_member:
        send(member[_EMAIL], message)
</code>
</pre>
    <p>
        I was like...ok man, let's forget about this, ok? hahaha
    </p>
    <p>
        Avoid doing things like this, I don't know about Assembly, COBOL or even C/C++, but in languages like Java, Typescript, Python and so on
        we don't use this kind of assignment.
    </p>
    <p>
        They can emphisize the wrong things. Take Java for instance. We have to specify the type for every variable, we can confuses their types
        easily by not paying attention to the left side of the assingment.
        In cases where we have long lists of assingments it's best to split up the class...
        <br>
        And again, consider using the style guide of the current language you are working with!
    </p>
    <h4>Indentation</h4>
    <p>
        The source file is a hierarcchy. Each level is a scope and we make those scopes visible by indenting the lines of code in proportion
        to their position in ther hierarchy.
    </p>
    <p>
        The levels are always one level to the right of their previous level. So we have statements or expressions at 
        the level of the file such as classes declarations and imports that are not indented at all. I usually say that they are in the
        root of the source file. This makes sense in my head.
    </p>
    <p>
        We also have functions/methods whithin the classes. They are indented one level to the right of the class.
        The implementation of those functions/methods are one level to right of their declaration.
        <br>
        Block implementations are implemented one level to the right of their containing block and so on.
    </p>
    <p>
        This hierarchy help us to identify classes, functions and variable declarations easily by making the source file cleaner and organized.
    </p>
    <h4>Collapsing scopes</h4>
    <p>
        It's natural that as our confidence and proeficiency with programming grows we do things that seems a good idea but in reality, they are not.
    </p>
    <p>
        In python we can do things like:
    </p>
<pre>
<code>
print("OK") if 2 < 3 else print("NOK")
</code>
</pre>

    <p>But I bet you've seen things like the following</p>
<pre>
<code>if(2 < 3) console.log("OK")</code>
</pre>
    <p>
        I've done this with functions too... ;--;
        <br>
        Of course this is a silly example. But the thing is, choose to break the blocks and expand them. This is going to make them visible
        in the source file.
    </p>
    
    <h3>Team Rules</h3>
    
    <p>
        The idea behind the formatting rules is to stablish a set of guidelines to write code so that our documents (source files) have
        the same style and are read nicely. This is what composes a good Software System. 
    </p>
    
    <p>
        If you are working in a team, use the team rules. The idea is to have a single style for the entire project and that's why the
        rules should be decided by the entire team, not only by a single person...
    </p>
    <p>
        So take some time to discuss some rules with yout team. Consider using tools to check if the formatting rules are being used and apply the
        verification in CI pipelines an so on...
    </p>

    <h3>Final Thoughts</h3>
    <p>
        Formatting rules are not just about creating a governance process for your project. It's about the communication...
        <br>
        It may seems a good idea to have developers worring only about delivering things and not caring about the code style at all or caring the minimum
        about how they write code. But on the long run, this is going to cost more time to figure out how things works and more time to fix things.
    </p>
    <p>
        Stablishing a good communication process (set of rules) is the best option for those teams that care about the maintainability of the Software
        and are serious about the project on the long run.
    </p>
    <p>
        Take some time to explore your IDE and set some rules for your side projects, or maybe if you are using a predefined style guide like pep8,
        take sometime to explore and think about how you've been writing code.
        <br>
        Maybe you can help your team to stablish a set of formatting rules if they don't have one. 
    </p>

    Good Luck XD
</div>