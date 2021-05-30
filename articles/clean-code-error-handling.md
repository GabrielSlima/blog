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
        The goal behid the try-catch-finally statement (other than keeping the logic and error handling separated from each other),
        is, as you read on the begining of this article, to guarantee that our code does what it's supposed to do and to 
        atecipate errors that can interrupt the execution of the code and give solutions for those interruptions by stablishing a set of expressions that will deals with them.
    </p>
    <p>
        That being said, by writing the try-catch-finally statement first we are writing exactly what the user of the function can expect if anything goes wrong in the <i>try</i> block.
        <br>
        This mindset of writing what the user can expect first leads us to one approach very well know among developers called 
        "TDD" or "Test Driven Development".
    </p>
    <p>
        Try to write the exceptions first and then you'll be forced to write the try part to create those exceptions.
    </p>
    <h4>Test Driven Development</h4>
    Good Luck XD
</div>