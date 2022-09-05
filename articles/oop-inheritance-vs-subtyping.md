<div style="text-align: left;">
   <p>
    Do you really know the difference between inheritance and subtyping?
    Imma be straight to the point in this article.
   </p>
   <h3>Inheritance</h3>
   <p>
    Inheritance is an OOP mechanism for code reuse. You write a piece of
    code once then you re-use it in another object template (class) called
    sub-class. A sub-class is a specification of the super-class.
    The parent promises something to it's clients through it's interfaces
    (public methods), the child inherits those interfaces and may or may not
    have it's own implementation. Meaning there's no guarantee that the services
    provided by the parent will be provided by it's child
    (that's why it's recommend to use Liskov's Substitution Principle).
   </p>
   <h3>Advantages of inheritance: code reuse</h3>
   <p>
    The most obviously one is code reuse, of course. Let's say you have
    an object that will be serialized into a JSON object. Well, you can
    create a <b>serializable</b> parent object that contains the interface
    <b>to_json()</b>. All you have to is to inherit this object's implementation
    and use the method.
   </p>
   ----- CODE SNIPPET --- 
   <p>
    That's a very common and simple example of code reuse.
   </p>
   <h3>Disadivantages</h3>
   <h4>Breaks encapsulation</h4>
   <h4>Breaks DIP</h4>
   <h4>Promotes coupling between the objects</h4>
   <h4>Promotes complexity</h4>
   <h3>Subtyping</h3>
   <p>
    Subtyping is about reuse of meaning, reuse of purpose. Not implementation.
   </p>
</div>