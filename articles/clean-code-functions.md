<div style="text-align: left;">
I already said that Clean Code is one of the most important things that you can learn in Software Engineering?
<br>
And that bad code can complicate your life by making simple things harder that they really are?
<br>
<br>
Welcome to the PewdiePie's favourite blog about Software Engineering and today I'm going to show you how to create meaningful and useful functions
that can make your code with <a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">amazing names</a> way more simple, 
well structured and...simple.
<br>
<br>
I don't have 200+ years of experience in this field but I can tell you that one of the enemies in Software Engineering is the complexity.
Every complex code has more than a complex solution behind it. It has hidden bugs, cognitive efforts to understand things and more and more time 
to figure out what the code is doing.
<br>
<br>
For what I've been seeing in past projects, complex code can make things very complicated for everyone. Speaking
specifically about the developers's point of view, we have to deal with delivery time and other problems like performance, 
reusability, readability, scalability, availability and so on.
<br>
<br>
Dealing with all of those things and still having to understand what everything is doing inside a 100 lines function can be stressful and 
stress can lead to serious real health problems and of course that it's not just because you have a bad code to work with but because others problems
like the pressure to delivery something can make your anxiety levels go astronomical and so on.
<br>
<br>
I'm not saying if you should or not to sacrifice your own mental health to delivery things (you shouldn't). That's another discussion and I prefer to maybe write 
a specific blog post to talk about it.
<br>
What I'm saying is that if we follow the best practices those problems can be avoided and can make things easier for yourself.
<br>
<br>
I'm going to use principles from the book Clean Code to refact my own code as I did on 
<a href="https://gabrielslima.github.io/blog/post.html?id=6" target="blank">this blog post</a> that I talk about <b>meaningful names</b>.
You should read it if you want to save the world from your bad name choices and prevent 
our world from being exploded when aliens read your code.


<h3>Small functions</h3>
Maybe this one seems obvious but it's easy to write long functions thinking that the more things one function 
does related to a given context the better. In that way all things that are related to a specific function can be handled 
right there.
<br>
I don't know about you, but I find long functions harder to understand because they have so many things to consider
before you actually understand what it's doing. I just want get to the end of it and see the output most of the time.
<br>
<br>
Small functions are easier to understand because they have less things to worry about, of course.
But I also think that how long your functions should be depends on the language you are using and the style guide.
<br>
<br>
I'm trying to organize the topics with a top-down visualization and trying to connect each of them in each stage.
Hopefully it makes sense at the end.


<h5 id="block-indenting">Blocks and Indenting</h5>
Make sure that the function indenting level is one or two at the max. This will garantee that the function doesn't hold so many (or none) nested strcutures.
Also pay attention on if/else/while/switch/case blocks. It's recommended that they are one line long and that this line be a function call.
<br>
For example instead of doing this:
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


emails = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True)
]

def send_to_premium_members(customized_message):
    for email in emails:
        if email[1] == True:
            status = send_email(email[0], customized_message)
            if status == True:
                logging.info("Email sent to {}".format(email[0]))
            else:
                logging.info("An error occured while trying to contact: {}".format(email[0]))


def send_email(email, message):
    status = [True, False]
    time.sleep(.2)
    return random.choices(status)[0]


if __name__ == "__main__":
    send_to_premium_members("Super customized email")
</code>
</pre>

Try doing this:
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


members = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True)
]


def send_to_premium_members(customized_message):
    for member in members:
        send_to_premium_member(member, customized_message)


def send_to_premium_member(member, message):
    _PREMIUM_MEMBERSHIP = True
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    if member[_MEMBERSHIP_TYPE] == _PREMIUM_MEMBERSHIP:
        send_email(member[_EMAIL], message)


def send_email(email, message):
    statuses = [True, False]
    time.sleep(.2)
    connection_status = random.choices(statuses)[0]
    logging.info("Message sent to {email}: {connection_status}".format(
        email=email,
        connection_status=connection_status
    ))


if __name__ == "__main__":
    send_to_premium_members("Super customized email")
</code>
</pre>
If you pay attention you can see that I could extract one entire function from <b>send_to_premium_members</b> and that all the functions
has one or two levels of indentation. They also keep the <b>for</b> and <b>if</b> statements blocks one line long.

<h3 id="do-one-thing">How many things should your functions do?</h3>
Functions should do one thing only. This means that the function should do things related to the current level of abstraction.

<h5 id="levels-of-abstraction">Levels of Abstraction and the Stepdown Rule</h5>
To better understand how long functions/methods should be it's important to understand levels of abstraction in programming.
<br>
Abstraction is the process of hiding information that isn't relevant for a giving context. Like when you turn on the lights 
or when you turn on the car or move your mouse or even when you are texting. You don't need to know how those things are working internally
to actually use them.

<br>
<br>
When you have abstractions within abstractions you have <b>levels of abstraction</b>. I don't know if that is the correct way to say this. But what
I'm trying to say is that when you have a super detailed context it's necessary to create more than one layer of abstraction creating 
subcontexts that compose a bigger one.
<br>
A good example would be when we turn on the lights:
<img class="post-img" src="images/clean-code-functions/lights.png" alt="">
We don't really need to know what happens behind the switch. We just need the lights on (hopefully this makes sense).
<br>
<br>
So if we have a function that brings only the odd numbers in one range of numbers that's all we need to worry about when using it.

<br>
<br>
Abstraction is the process of keeping only the details related to the given context. So to garantee that the function 
is doing only one thing all the steps inside of it should be related to the function's context.
Take the last block of code for instance. We have 3 levels of abstractions:
<img class="post-img" src="images/clean-code-functions/premium_members.png" alt="">

Following this idea of <b>one level of abstraction per function</b> we will follow <b>stepdown rule</b>. This means that 
we will read/wirite the functions stage by stage worring only with the relevant information for each context.
<br>
So now that you know how to organize the function in layers of abstraction, what about the arguments/parameters?


<h3>Function Arguments</h3>
The Clean Code book has a very funny way of say that we shouldn't have more that 2 arguments per function and I understand why.
The more arguments the more contexts to worry about and the less we will worry about the function's context and useless information
will take the place of important information. They are also more complicated to cover with unit testing. 

<h5>One arguments functions</h5>
Functions that asks a question about a specific argument, transform it into something else or activates an event
that changes the state of the system.

<h5>Two arguments functions</h5>
It's recommended to use them when the arguments have a natural ordering or when there is a specific reason to have 
two arguments.

<h5>Three arguments functions</h5>
Just avoid them.

<h5>More than 3 arguments</h5>
In these cases consider to encapsulate some of the arguments inside a class.

<h5>Flag arguments</h5>
Avoid flag arguments. They indicates that the function does more than one thing.

<h5>What about the argument lists?</h5>
For functions that receives rest parameters and/or keyword parameters. Those arguments count as one. This means
that this is a <b>one argument function</b>:
<pre class="brush: python">
<code>
import logging

def one_argument(*args):
  logging.info(args)
</code>
</pre>

And this is a <b>two arguments function</b>:
<pre class="brush: python">
<code>
import logging

def two_arguments(some_incredible_demo_variable, *args):
  logging.info(some_incredible_demo_variable)
  logging.info(args)
</code>
</pre>

I'm pretty sure you already knows this by now but it's worth it to
reinforce that the main reasons to avoid having functions with lots of arguments are the current layer of abstraction
and how many things the function is doing. The more things the function does the harder it is to understand, cover
with unit testing and keep the code clean and simple.
<br>
<br>
Although I don't think those principles applies for every context I do think that they are great in most of the cases.
<br>
Try to keep the function with less arguments but also consider the language that you are using. Python for example has the
<a href="https://docs.python.org/3/glossary.html#term-argument" target="blank">keywords</a> and
<a href="https://docs.python.org/3/glossary.html#term-parameter" target="blank">rest/keyword parameters</a> that allow us to identify the arguments
or have an immutable sequence of data so having more than 2 arguments in a function is not a big deal if you use those tools
properly.
<h3>Hidden things and readibilitty: Side effects and output arguments</h3>
Avoid hidden actions in your function. Take this piece of code for instance:
<pre>
<code>
import logging
import random
import time


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


members = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True)
]


def send_to_email_list(customized_message):
    _PREMIUM_MEMBERSHIP = True
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    for member in members:
        if member[_MEMBERSHIP_TYPE] != _PREMIUM_MEMBERSHIP:
            continue
        send_email(member[_EMAIL], customized_message)

def send_email(email, message):
    statuses = [True, False]
    time.sleep(.2)
    connection_status = random.choices(statuses)[0]
    logging.info("Message sent to {email}: {connection_status}".format(
        email=email,
        connection_status=connection_status
    ))


if __name__ == "__main__":
    send_to_email_list("Super customized email")
</code>
</pre>
The function <b>send_to_email_list</b> is not sending the email for all members. It's sending for <b>premium members</b>
only. So the premium members verification is a hidden action.
This is also another way of doing more than one thing in the same function. In these cases the most recommended
thing to do is to create another layer of abstraction keeping the function doing only one thing
<br>
<br>
And talking about readibilitty. Make sure that not only the functions are well strucutred with clear names and
following the step down rule but that when calling them that it's intention is clear preventing the reader from
having to check the function's signature. Take the last example:
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


obj = "Super customized email"

members = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True)
]


def send_to_premium_members(customized_message):
    for member in members:
        send_to_premium_member(member, customized_message)


def send_to_premium_member(member, message):
    _PREMIUM_MEMBERSHIP = True
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    if member[_MEMBERSHIP_TYPE] == _PREMIUM_MEMBERSHIP:
        send_email(member[_EMAIL], message)


def send_email(email, message):
    statuses = [True, False]
    time.sleep(.2)
    connection_status = random.choices(statuses)[0]
    logging.info("Message sent to {email}: {connection_status}".format(
        email=email,
        connection_status=connection_status
    ))


if __name__ == "__main__":
    send_to_premium_members(obj)
</code>
</pre>
What does the <b>obj</b> variable even mean here? It could be a structure with the email list or with connection details and so on.
To figure it out I would have to check the obj's value and see how the function works. Got it?

<h3>Exceptions vs Error Codes</h3>
When dealing with errors it's common to create <b>error codes</b> to categorize those errors scenarios. Maybe the 
error codes will be used to change the behavior of the application or maybe you have a workflow that is affected
acording to error codes and so on. I don't think that it's wrong. Maybe you're managing the log output and using 
the codes to create data visualization and things like that. But I think that it's worth it to use them thinking on the long run. 
<br>
<br>
One of the most common thing when using error codes is that it forces the caller to deal with the error immediatelly 
not giving it an easier path than creating nested strucutres. Talking specifically of scenarios that the error codes
are used inside the code only and they are used for internal control and things like that. They are invisible
for the user.

<br>
<br>
It maybe easier to use error codes because they can have a descriptive name of what is happening. Like when
you try to open a connection with some server but it doesn't happen for any reason. It's easier to "flag" the 
function response with a code that represents each error scenario.
But it also makes room for the caller to deal with the error code the way it wants. Nothing wrong with that too but
I'm going to give you an example that can illsutrate what I'm talking about:
<pre class="bruh: python">
<code>
import logging
import random
import time


logger = logging.getLogger()
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setLevel(logging.INFO)
logger.addHandler(handler)


members = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True)
]


def send_to_premium_members(customized_message):
    for member in members:
        send_to_premium_member(member, customized_message)


def send_to_premium_member(member, message):
    _PREMIUM_MEMBERSHIP = True
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    if member[_MEMBERSHIP_TYPE] == _PREMIUM_MEMBERSHIP:
        send_email(member[_EMAIL], message)


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


if __name__ == "__main__":
    send_to_premium_members("Super customized email")
</code>
</pre>
Take this code and imagine that we want it to continue trying to send emails for the rest of the list and 
store those premium members that couldn't be contacted so that we can deal with them later. 
<br>
<br>
If the solution had a web  interface maybe we could have a contact members screen that shows the emails that 
we can use to reach the members with some custom configuarion possibilitties, like choosing a group to send emails to, 
like the <b>premium members list</b>. 
<br>
It could have a graph that shows how many people could be reached right after we've sent the list to process.
Those who couldn't be contacted for any reason  could be processed manually or throught a schedule later on.
The first thing that came into my mind was doing this:
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


members = [
    ("gabriel@supercooldomain.com", True),
    ("gabrielsuperpersonal@supercooldomain.com", False),
    ("gabrielbusiness@supercooldomain.com", True)
]


def send_to_premium_members(customized_message):
    to_reprocess = []
    _EMAIL = 0
    for member in members:
        status = send_to_premium_member(member, customized_message)
        if status == "FAILED":
            to_reprocess.append(member[_EMAIL])
    logging.info("Members to be contacted: {}".format(to_reprocess))
    return to_reprocess

def send_to_premium_member(member, message):
    _PREMIUM_MEMBERSHIP = True
    _MEMBERSHIP_TYPE = 1
    _EMAIL = 0
    status = "NON_PREMIUM_MEMBER"
    if member[_MEMBERSHIP_TYPE] == _PREMIUM_MEMBERSHIP:
        sent = send_email(member[_EMAIL], message)
        if not sent:
            status = "FAILED"
        else:
            status = "SUCCESS"
    return status


def send_email(email, message):
    statuses = [True, False]
    time.sleep(.2)
    connection_status = random.choices(statuses)[0]
    
    logging.info("Message sent to {email}: {connection_status}".format(
        email=email,
        connection_status=connection_status
    ))


if __name__ == "__main__":
    send_to_premium_members("Super customized email")
</code>
</pre>
There are other ways of doing this but if you pay attention you'll see that the two levels of identation is not applied
in 2 functions and they are not doing one thing only. The <b>send_to_premium_members</b> is the first layer of abstraction
and has to call the function <b>send_to_premium_member</b>, check the status to see if the member was contacted successfuy 
and then returns the <b>not processed emails</b>.
<br>
<br>
This is a simple example and it doesn't have so many nested strcutures because the soluitons is simpler. But imagine
if it was a layer that fetches data from different databases because the complete representation of what the solution needs
is distributed. This code would have nested strcutures for sure. 
<br>

Now let's try using try/catch/except blocks:
<pre>
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
The same idea could be applied using error code but now it's clear that we only have 2 paths. The "happy one" and the "not so happy one"·
<br>
The error handling is another thing that the function does. So it's worth it putting it into a level above of the
actual action that demands error handling.

<h3>It's not just about the complexity</h3>
It's not from today that documentation is becoming a thing in sofware projects...
<br>
I would like to share with you a experience of mine so you can have my point of view. 
<br>
<br>
I was working on this project, not a super complex project but not that simple either. I was just starting
on the team and of course that the first action of the members was to pass on the knowledge about the solution.
<br>
<br>
The project had about 8 microservices, all of them interacting with each other throught APIs and message broker.
The project had his own way to deal with logs meaning that all the output was managed by custom code 
and there was no pattern for the output. Well, if it had at the beginning, it was lost during the development of the project.

<br>
<br>
After some months the company had some changes related to...physical access let's say...and some of my fellow
colleagues decided what was best for them, of course, and switched companies.
After a few months, this project had new people working on it and lots of places where
almost no one knew what was happening.
<br>
<br>
The project had a documentation, of course. But the diagrams of the architecture it's not always enough.
There was so many things happening inside the code. One message started the processing and our in memory 
database was called, then our MongoDB was called throught a massive for loop than methods from abstract classes and 
log output everywhere...the job was done. The problem was no one knew how.
<br>
<br>
Speaking for myself, I had a limitation related to my knowledge, of course. But as I started to grow my technical
knowledge I could see what was happening with more clarity. Didn't take much time to get the rithm and get used with
the previous programmers's way of thinking.
<br>
<br>
I also started to identify that others new programmers where facing some issues trying to figure out and
connect the dots of the solution. I found myself explaning where a given piece of code was located inside the
project's architecture a pretty good amount of times and struggling a lot to understand other parts as well.
<br>
<br>
What happened was that with the desire (let's call it that way) of delivering things in a short amount of time the real documentation,
the code, started to get more and more information and the developer that was trying to keep it organized
didn't had much time to do so, for a obvious reason.
<br>
<br>
What I could learn with that situation is that building the <b>right functions</b> can help not only with the complexity
of the code, but with the documentation.
<br>
Writing code is easier than keeping it. When writing code the solution is fresh in your mind, you know what you are 
supposed to do
and even though most people think about the code's maintenance and other things we can't cover all the possibilitties
and build an abstract code that will handle everything. So it's important that the code's structure can be 
understood as easier as possible.

<br>
<br>
Good Luck XD 
</div>