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
   <p>
      So let's use a very common example. Let's say you have an object
      called "car". Now a car has speed, 4 wheels, a certain amount
      of seats, color, brand, plate and so on. You can accelerate a car,
      use the break. Something like the following
   </p>
   ---- include code snippet --- 
   <p>
      Ok now let's say you're building a software, a video game that
      not only have cars, but also have other 4 wheel (or plus) vehicles
      like trucks and buses. Let's consider that you've realized that the
      logic to accelerate and break behaviors are similar and would like to
      reuse code. Well, you could do something like the following:  
   </p>
   ---- include code snippet - truck and bus classes inherits from car ---
   <p>
      Or another option would be something like the following:
   </p>
   ---- include code snippet - truck, bus and car classes inherits from vehicle ---
   <p>
      To give you one more example, closer to what is created on a daily basis
      in many projects cosider this:
      Let's say you have an object that will be serialized into a JSON object.
      Well, you can create a <b>serializable</b> parent
      object that contains the interface <b>to_json()</b>. All you have to is
      to inherit this object's implementation and use the method.
   </p>
   ----- CODE SNIPPET --- 
   <h3>Disadivantages of using inheritance</h3>
   <p>
      Cool, so advantages of using inheritance is basically code reuse. Now let's take
      a look into the disadivantages.
   </p>
   <h4>Breaks encapsulation</h4>
   <p>
      In Object Oriented Programming, one of the mechanisms offered by the
      paradigm is encapsulation. Encapsulation is used to guarantee that
      the object's state (it's data) is handled properly. You basically
      prevent the object's data of being changed by anything other than itself. The
      access to them is restricted. If you intend to reuse code, most certainly you'll
      re-se a few if not all of the of variables declared at the parent class.
      In this way, the sub-class, the child, knows about the internals of it's parent,
      breaking the encapsulation.
   </p>
   <h4>Breaks DIP</h4>
   <h4>Promotes coupling between the objects</h4>
   <h4>Promotes complexity</h4>
   <h3>Subtyping</h3>
   <p>
    Subtyping is about reuse of meaning, reuse of purpose. Not implementation.
   </p>
</div>