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
        Error hadling help us to atablish a procedure that deals with interruptions during the execution of a giving piece of code.
        <br>
        But they also can be confusing if not used right. A code with logic and try-catch-finally statements can be super hard to understand.
        So today we are taking a look on some tips from the book Clean Code to write clean and robust code!
    </p>
    <h3>Prefer exceptions over error codes</h3>
    <p>
        I already said <a href="https://gabrielslima.github.io/blog/post.html?id=7" target="blank">here</a> that our functions should be small and do
        only one thing. If the functions is hadling a error and also have expression within the try statement that is not a function call, it's doing
        more than one thing acuatlly... 
    </p>
    <p>
        Error codes forces the caller to deals with the returned code immediatly and leads to nested structures, which is not good...
    </p>
    Good Luck XD
</div>