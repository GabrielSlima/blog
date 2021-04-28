<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's
        topic is <b>formatting rules</b>. Formatting rules are super important when it comes
        to Clean Code.
    </p>
    <p>
        Professional developers knows that the first thing to be dealth with it before anything else is the
        <b>communication</b>. In the last blog posts I've been emphasizing that choosing good names,
        creating small functions instead of creating monsters and removing comments makes your code readable
        because by doing those thing you're removing the pollution and making things simple and easy to understand.
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
        <br>
        So without further ado, let's see what can helps on setting formatting rules.
    </p>
    <h3>Vertical Formatting</h3>
    <p>
        Vertical formatting are about how long should the source files be. Of course, the smaller
        the easier to read...
        <br>
        The Clean Code book recommends that the file should be 200-500 lines long. I think it's possible to
        keep the files this log and course that there is the fact that depending on the language there maybe
        things that need more deatails than others. But other than that with a max of 500 lines it covers those cases.
        <br>
        And what about the structure of the file? It's ok to just put functions in any order?
    </p>
    <p>
        I confess. This wasn't a thing for me till recently. I'm not going lie. I find classes that has functions
        in any order harder to read but I thought it was just me being paranoid about this...
    </p>
    <p>
        But now I see that I wasn't been paranoid at all. I got used going throught the functions and just debugging
        them till I figure out and map everything that is happening. But that is not how it should be.
        Of course there are cases where debugging is the way to go. But if you think that the code should be simple
        and readable the debugging processing should be used with specific purpouses not as the main tool to figure out
        what the code is doing.
    </p>
    <h4>The newspaper metaphor</h4>
    <p>
        Ok, the source files should be between 200-500 lines longs at the most and the functions should have a specific order to make
        the file readable, but how?
    </p>
    <p>
        Image the file as a newspaper article. Every article has a headline to let the reader know what the article is about. The first paragraph
        is a synopisis covering the main concepts of the arcticle and the next paragraphs explores those concepts and expose the
        details hidden in the first paragraph.
    </p>
    <p>
        So in the code the headline would be the file's name. The top of the file should include only the high-level concepts and the details
        should be increased as we move downward.
        <br>
        Following the idea of <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">abstractions</a>, the first layers would
        be at the top of the file as the low-level layers are kept at the bottom.
    </p>
    <h4>Vertical openness between concepts</h4>
    <p>
        Code is read left to right, top to bottom. Every line is a expression or clause and every group of lines is a concept.
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
    _PREMIUM_MEMBERSHIP = True
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    if member[_MEMBERSHIP_TYPE] == _PREMIUM_MEMBERSHIP:
        send(member[_EMAIL], message)
def send(email, message):
    try:
        send_email(email, message)
    except ConnectionError as e:
        print("ERROR - APENAS O DEV PODE VER: {}".format(e))
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
    Try something linke this:
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
    _PREMIUM_MEMBERSHIP = True
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    if member[_MEMBERSHIP_TYPE] == _PREMIUM_MEMBERSHIP:
        send(member[_EMAIL], message)


def send(email, message):
    try:
        send_email(email, message)
    except ConnectionError as e:
        print("ERROR - APENAS O DEV PODE VER: {}".format(e))
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
        Keep concepts (thoughts) vertically separated by blank lines. Consider using the style guide of the current language you are usins.
        Python for istance has <a href="https://www.python.org/dev/peps/pep-0008/#blank-lines" target="blank">Pep8</a>...
        <br>
        This is not only going to help you to have a good style on your code but it will make easier to read by removing all the "stress" you would have or
        any other reader would have without any blank lines.
    </p>

    <h4>Keeping related things close to each other</h4>
    <p>
        As for the lines of code (expressions or clauses) that doesn't belong to a full concept or lines of code that are part of a concept but they are
        details. Keep them close to lines that they are closely related without blank lines.
        <br>
        Instance variables is the classic example of expressions that belongs to a full conpcet a function for instance.
    </p>
    <pre>
    <code>
    
    </code>
    </pre>
    <p>
        But I think this can be applied to functions too. Of course functions should do <a href="">one thing only</a>. But even when they are doing 
        only one thing there are some expressions that conpose the entire concept (functio) that are details. This ussually happens more in low-level
        functions.
    </p>
    <!-- TODO include examples -->
</div>