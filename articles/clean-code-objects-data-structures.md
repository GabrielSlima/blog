<div style="text-align: left;">
    <p>
        Welcome to the PewdiePie's favourite blog about Software Engineering and today's
        topic is <b>Objects and Data Strcutures</b>...
    </p>
    <h3>Procedural vs Object Oriented programming</h3>
    <p>
        Before getting into the differences between these two imperative ways of writing code
        I would like to explain what subroutines are...
    </p>
    <h4>Subroutines</h4>
    <p>
        Subroutines are a sequence of programming instructions/expressions/clauses
        that performs a specific task. They are also known as functions/methods/procedures/subprograms 
        depending on the language.
        <br>
        Some say that these four are different. Maybe they are...but that's not the point.
    </p>
    <p>
        The intent behind them is <b>maintainability</b> becasue they increases
        the code reusability and readability. Larger and complex programs can be break down into
        little blocks.
        <br>
        That being said, now you know that the purpouse of creating them is to reuse blocks 
        of code or execute a specific task whenever it is needed but also create a structured
        code that is easier to read and mantain.
    </p>
    <p>
        Every subroutine have a way of receiving data (data input), processing data (body)
        and a return (branch back) to actually return a value (or not) to it's caller once the task
        is done.
    </p>
    <img class="post-img" src="../images/clean-code-objects-data-structures/subroutines.png" alt="">
    <p>
        They can be declared within a program or in separetaly libs, like the ones that are used to access system
        resources and services on linux operating system. A good example would be the GNU C Library. 
    </p>
    <p>
        I'm not getting much into this so I'm gonna put some good references at the end of the post
        if you want to explore more about subroutines and how they works in a more lower-level representation
        and hopefully I'm not getting any problems with copyright...
        <br>
        And here is a example of a subroutine/function in Python:
    </p>
    <pre class="brush: python">
<code>def sum(first, second):
    return first + second</code>
</pre>
    <h4>Procedural Programming</h4>
    <p>In procedural programming, programs are composed in mostly by, guess what, 
        procedures or subroutines.
        <br>
        Some results can be achieved by writing programs that doesn't have custom subroutines
        which means that they only have variable declaraitons and uses built-in functions.
    </p>
    <p>
        But this is like almost impossible to see if we are talking about programs that does requires more complex logic.
    </p>
    <p>
        Programs written using this paradigm have global data members and behavior members that
        can acesses all global members. Which means that the behavior members, the subroutines, can operate
        directly on the main program's data:
    </p>
    <img class="post-img" src="../images/clean-code-objects-data-structures/procedural-app" alt="">
    <p>
        So as you can see the functions or subroutines can access each other inside the program, access the global variables to change the state of the program and, of course, the program itself can access all of them and dictate how this iteration is gonna happen. 
    </p>
    <p>
        Functions can be declared whithin the file of the program or in external files.
        This helps to organize the structure of the progam.
    </p>
    <h4>Top to bottom execution</h4>
    <p>
      Procedural programs are executed top to bottom. This means that every line of code
      is executed one after another till the end of the statements.
    </p>
    <h4>Object Oriented Programming</h4>
    <p>
        In Oriented Programming the program is composed mainly by Objects.
        This is a higher level of code reusability where the functions are tied up in objects along with the necessary data members or properties that represents the object's state or model.
        <br>
        This means that objects have it's own data members or variables and it's own set
        of behaviors to change it's state.
    </p>
    <!-- IMAGE -->
    <p>
        In procedural programming, the author of the code have to organize the functions the best way he can to represent a behavior that can be related to a representation of a object. For instance:
    </p>
    <pre class="brush: python">
<code>notify(cellphone, message)</code>
</pre>
    <p>
        Using OOP this could be achieved by doing something like this:
    </p>
    <pre class="brush: python">
<code>cellphone.notify(message)</code>
</pre>
    <p>
        There are some other factors like the fact that global variables can be changed at any time by any function in procedural programs, which is not very good.
        This also makes the code cleaner, and with another level of organization.
        Of course, in procedural programming functions can be in external files and organized by similar behavior and things like that.
        <br>
        But it's different when you have a function attached to a object. We can see exactly where the function is operating and what we can expect.
    </p>
    <p>
        And of course, because programming languages where made by humans to humans, the OOP have some principles like, inheritance, encapsulation, abstraction and polymorphism to help us to manipulate or create objects in different contexts...
    </p>
    <h3>Objects</h3>
    <h3>Data Strctures</h3> 
    Good Luck XD
</div>