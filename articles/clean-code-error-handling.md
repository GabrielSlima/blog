<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's
        topic is <b>Error Handling</b>...
    </p>
    <p>
        Error Handling is the process of antecipating, detecting and giving a solution for errors
        that can occur during the execution of the application.
    </p>
    <p>
        Error hadling help us to stablish a procedure that deals with interruptions during the execution of a giving piece of code.
        <br>
        But they also can be confusing if not used right. A code with logic and try-catch-finally statements can be super hard to understand.
        So today we are taking a look on some tips from the book Clean Code to write clean and robust code!
    </p>
    <h3>Prefer exceptions over error codes</h3>
    <p>
        I already said <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">here</a> that our functions should be small and do
        only one thing. If the functions is hadling an error and also have expressions within the try statement that is not a function calls, it's doing
        more than one thing acuatlly... 
    </p>
    <p>
        Error codes forces the caller to deals with the returned code immediatly and leads to nested structures, which is not good...
        <br>
        Also, when dealing with error codes instead of try-catch-finally statements, these two corcerns are mixed, making it harder to 
        know what is error handling and what is logic.
    </p>
    <p>
        Even if the amount of error codes on your function is small, keep the logic and the error handling in different blocks and expose these concerns.
        The reader will identify what is logic and what is error handling way easier. 
    </p>
    <h3>Write the try-catch-finally statement first</h3>
    <p>
        The goal behind the try-catch-finally statement (other than keeping the logic and error handling separated from each other),
        is to guarantee that our code does what it's supposed to do and to atecipate errors that can interrupt the execution of the 
        code and give solutions for those interruptions by stablishing a set of expressions that will deals with them, as you read in the begining of this article.
    </p>
    <p>
        That being said, by writing the try-catch-finally statement first we are writing exactly what the user of the function can expect if anything goes wrong in the <i>try</i> block.
        <br>
        This mindset of writing what the user can expect first leads us to one approach very well know among developers called 
        "TDD" or "Test Driven Development". 
    </p>
    <h4>Test Driven Development</h4>
    <p>
        This can be an entire separate article or set of articles...in short, TDD is a Software Development process or a set of procedures
        for writing code where we write the test cases before writing the entire Software. In other words, first you translate the requirements (the contract)
        of a functionality into test cases, then you write the code to satisfy the tests.
        <br>
        This is contrary to the "normal" approach where we write
        the Software to satisfy the requirements and then we write the tests to guarantee that the requirements are being satisfied as
        expected.
    </p>
    <p>
        In this approach the development is driven towards the Software's requirements or contract.
        Before writing any code, the Software's requirements are translated into test cases and the development of the Software
        is tracked down as we test the Software against those test cases.
        <br>
        This means that first we stablish what is expected as a behaviors from a function in given contexts by writing unit tests
        and then we move on to sastify those tests by writing only the necessary code. 
    </p>
    <p>
        Using the error handling as an example, first we would have to write the tests that expects a error handling for specific contexts.
        Naturally we would be forced to create a function (empty). The first time, is expected that all the test cases where is expected
        a exception or error handling to break. Now we must to write the necessary code to satisfy each test case written.
    </p>

    <p>
        Let's say that you are writing an API to manage some clients into the database. What is expected to happen if the user
        of the API tries to insert an existing client? Let's say that the requirements says that we can create a new client if
        he doesn't exists.
    </p>
    <h4>Phase: Define the test cases that expects the errors:</h4>
    <img class="post-img" src="images/clean-code-error-handling/tdd-exceptions-1.png" alt="">
    <img class="post-img" src="images/clean-code-error-handling/tdd-exceptions-1-2.png" alt="">
<pre class="brush: python">
<code>

</code>
</pre>
    Good Luck XD
</div>