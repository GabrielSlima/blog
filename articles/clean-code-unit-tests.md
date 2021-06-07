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
    <h3>The three laws of TDD</h3>
    <p>
        Tdd is a way of developing Software where the starting point are the unit tests. This means that before writing production
        code first we have to write test cases. You can see more about it <a href="https://gabrielslima.github.io/blog/post.html?id=11">here</a>.
    </p>
    <p>
        But in general there is 3 laws that help us to follow the tdd technique:
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
    <img src="" alt="Tdd cycle">
    Good Luck XD
</div>