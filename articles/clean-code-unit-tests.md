<div style="text-align: left;">
    <p>
        It's not the first time that you've heard that unit tests are important to guarantee that our code is doing
        what it is supposed to do. They also improves the maintainability, readability and can add documentation value
        to our software letting readers to know what to expecte when using specific functions on it.
    </p>
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today
        we are with one more article about Clean Code talking about <b>how to write clean and meaningful unit tests</b>...
    </p>
    <h3>The Process</h3>
    <p>
        The tdd process can be sumarized on the following steps:
    </p>
    <img class="post-img" src="images/clean-code-unit-tests/tdd.png" alt="Tdd cycle">
    <h4>Test Case</h4>
    <p>
        The first stage of our development is the test case, of course. Here we first write what a specific functio is supposed to do.
        We must write the bare minimun so that our test fail. This means that we can have just the test function with a name and 
        a body calling the function to be tested.
    </p>
    <p>
        The function to be tested is not supposed to exist. The idea here is to write only the necessary production code and this will be 
        achieve by first defining the name, then the arguments, then the body and so on till we have a function that fully satisfy our requirements or
        part of of the requirements.
    </p>
    <p>
        If the function to be created will have statements that can have interruptions (exceptions), start by defining what expected to be returned
        or done when those interruptions occur on the production code. We've talked about this <a href="https://gabrielslima.github.io/blog/post.html?id=11" target="blank">here</a>.
    </p>
    <p>
        Tdd is a way of developing Software where the starting point are the unit tests. This means that before writing production
        code first we have to write test cases. You can see more about it <a href="https://gabrielslima.github.io/blog/post.html?id=11">here</a>.
    </p>
    <h4>Satisfy the Test Case</h4>
    <p>
        Here is where the function to be tested will be created and the bare minimun code will be written to satisfy the test case.
        Maybe it just has a empty body with a void return.
        <br>
        If the function can have exceptions, you will most probably have to write the error handling first so that the test case that expects a specific
        error to be catched can be satisfied...
    </p>
    <h4>Refact</h4>
    <p>
        Once the the test is satisfied and passing, it's time to refact the production and the test case so that only the necessary code is present.
        Remove duplicated code, maybe, break the function in one more layer.
    </p>
    <h4>Translating requirements into test cases</h4>
    <h5>How do I know what to wirte in a unit test if I don't know what the production code is supposed to do?</h5>
    <p>
        That's where the requirements comes. To know what to expect, of course need to have a little bit of experience writing code.
        Maybe you have worked in side projects or something. If not, first focus on knowing how to write code, then worry about testing them
        and then you worry about how to write the production code along with the test cases.
    </p>
    <p>
        But in general, take the requirements and translate them into test cases. The requirements can be found in a formal document or in stories and sub-tasks if you
        are working with Scrum or in task if you are working with kanban.
    </p>
    <p>
        Let's say you have a task to develop a authentication to an application based on username and password, something like this:
    </p>
<pre style="  background: rgba(0,0,0,.8);
color: white!important;
border-radius: 5px;
letter-spacing: 1px;
padding: 15px;">
<strong>Authentication API</strong>

All users on the platform must be authenticated to perform administration
tasks.

The users can have different scopes and they must be granted access through authorized people only.

The users will be authenticated by username and password.
</pre>
<br>
    <p>
        You can start by asking yourself what the code is supposed to do in specific cases, for instace:
        <br>
        What kind of payload the backend will receive? The paylod can have null or empty fields?
        What is supposed to happend when no data is provided from the client?
        <br>
        What will happen if the user provide the wrong username? What will happen if the user provide the wrong password?
        <br>
        If it's going to have scopes, what the response looks like? Will it include the scopes the user have?
    </p>
    <p>
        <ul>
            <li>It should return 400 when a empty username is provided</li>
            <li>It should return 400 when a empty password is provided</li>
            <li>It should return 400 when a null username is provided</li>
            <li>It should return 400 when a null password is provided</li>
            <li>It should return 403 when the wrong username is provided</li>
            <li>It should return 403 when the wrong password is provided</li>
            <li>It should include scopes on authenticated users's responses</li>
        </ul>
    </p>
<pre class="brush: python">
<code>def test_it_should_return_400_when_a_empty_username_is_provided():
    assert False

def test_it_should_return_400_when_a_empty_password_is_provided():
    assert False

def test_it_should_return_400_when_a_null_username_is_provided():
    assert False

def test_it_should_return_400_when_a_null_password_is_provided():
    assert False

def test_it_should_return_403_when_the_wrong_username_is_provided():
    assert False

def test_it_should_return_403_when_the_wrong_wrong_password_is_provided():
    assert False

def test_it_should_include_scopes_on_authenticated_users_responses():
    assert False</code>
</pre>
    <p>
        Now we've entered the TDD cycle...
    </p>
    <h3>The three laws of TDD</h3>
    <p>
        But in general there is 3 laws that help us to follow the tdd process:
    </p>
    <h4><b>1:</b> You may not write production code till you've written a failing test</h4>
    <p>
        No production code till you have a test for it, a failing one. So this implies that our production code is not supposed
        to even have the function we are going to test.
    </p>
    <h4><b>2:</b> You may not write more of a unit test than is sufficient to fail, and not compiling is failing</h4>
    <p>
        Just write enough code test to have a failing test, nothing more, nothing less. Maybe you will have to mock something but
        the function's requirements and the rest of it's body will be created as you repeat the cycle.
    </p>
    <h4><b>3:</b> You may not write production code than is sufficient to pass the currently failing test</h4>
    <p>
        Just write the necessary code to pass the failing test. The code will be incremented as you repeat these three laws.
    </p>
    <p>
        The idea here is to build production and test code together. Tdd help us to write only the necessary code for both,
        test and production code. This makes our desing simpler and cleaner.
    </p>
    <h3>Keeping Tests Clean</h3>
    <p>
        Quick and dirty tests is going to harm the project eventually. Writing  unit tests just for the sake of having the necessary percentage
        of code coverage to make a deploy or thinking that "dirty tests are better than no test at all" is not enough to guarantee that future changes
        will be made fast and will not harm the production code of the entire application... 
    </p>
    <p>
        They must evolve as the production code changes. If they are dirty and have no meaningful implementation, developers tend
        to spend more time fixing broken tests for every change made on the source code. With the time, they tend to spend more
        time working on tests than on the production code. Eventually, this path will lead developers to blame them for the large estimates
        till they decide to remove or ignore the tests completly... 
    </p>
    <p>
        The tests are just importat as the production code. They guarantee that every change on the production code does not breaks other parts
        of the application and developers have freedom to make changes without the fear of messing with other parts of the application that is
        working perfectly. For this reason they must be kept clean, with short and descriptive names for they variables and for the test itself, with
        an active process of thinking for their desing and implementation.
    </p>
    <h4>Tests Enable the -ilities</h4>
    <p>
        The key to keeping the desing and the architecture of the code as cleaner as possible is by having a suit with meaningful
        unit tests.
        <br>
        They decreases the fear of making changes and enables the following "-ilities" on our production code: flexibililty/testability, maintainability and reusability
    </p>
    <h4>Clean Tests</h4>
    <p>
        What makes our tests clean? Readability. And how to keep  the readability? By keeping the clarity, simplicity and density of expressions on them,
        the same thing that we do on the production code.
        <br>
        This means shor and descriptive names, low coupling and high cohesion...
    </p>
    <h3>Domain-Specific Testing Language</h3>
    <h3>One Assert per Test</h3>
    <h3>Single Concept per Test</h3>
    Good Luck XD
</div>