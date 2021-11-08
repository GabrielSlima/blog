<div style="text-align: left;">
    <p>
        If you read <a href="#">this article</a> where I talk about
        the software development life-cycle you know that every
        software or piece of software, being an alteration or a new
        piece within the entire systems has a life-cycle.
    </p>
    <p>
        The main purpose of breaking the software development
        process into different phases is to have smaller and manageable
        phases. Sometimes, those phases can be accomplished in parallel.
    </p>
    <p>
        The first phase every software or piece of software goes
        through is the analysis. In short, the analysis phase
        is where the problems are identified and documented so that
        later a solution can be created based on it. Today I'll
        try to give you more details about this phase.
    </p>
    <p>
        Welcome to the piewdiepie's favourite blog about Software Engineering
        and today's topic is <strong>Software Development Life-Cycle: Analysis</strong>.
        Let's get started.
    </p>
    <h3>Stakeholders</h3>
    <p>
        Before continuing with the activities that composes
        the requirements analysis I would like to
        describe what a stakeholder is. Every organization is supported in some way by people or even
        other oganizations. Without them, the organization wouldn't
        exist. These groups are also called <i>Stakeholders</i>.
        An Stakeholder is a member of those groups. It can be an entire
        group or a single person.
    </p>
    <p>
        Each group, I mean, each stakeholder has a concern.
        The Government for instance is concerned about taxation, employment,
        legislation and so on.
        <br>
        The customers are concerned about value and quality. The employees
        are aconcerned about respect, compensation, appreciation,
        time off, recognition and so on. Investors are concerned about income.
    </p>
    <img class="post-img" src="images/software-development-life-cycle-requirements-analysis/stakeholders.svg" alt="Relationship between stakeholders and companies">
    <p>
        An organizaiton can have quite a few stakeholders. These are
        just some examples that you might have heard of. Every organization is
        supported by stakeholders, without them, the organization probably wouldn't exist.
    </p>
    <h3>The analysis stage</h3>
    <p>
        Now that you've had a quick introduction about groups of people and
        organizations that supports a company, let's get back to
        requirements analysis. At this stage the main goal is to actually
        know the problems and document them so that a solution can be created
        in order to solve them. Every activity at this stage is intented to identify and document
        problems and business processes to create models that are
        independent of implementation rules. Independent of
        infrastrucutre and language constraints and so on.
    </p>
    <p>
        This stage is composed by 3 basic activities. Each of them
        addresses a different concern. Here is a very summarized description:
    </p>
    <h4>Requirements Gathering or Requirements Discovery</h4>
    <p>
        Before actually creating any solution, we need to know
        what is required from the software. At this step
        wet get to know more about business processes. It
        also may include interviews with stakeholders to know
        how they relate with each other in business processes.
    </p>
    <h4>Requirements Documentation or Requirements Recording</h4>
    <p>
        The requirements must be documented. I mean, the business
        processes and details about the relationship between the
        stakeholders must be documented/recorded and any other
        specification from the users must be recorded/documented.
    </p>
    <p>
        The information may be documented in many forms including
        requirements list, natural language documentation, use cases,
        user stories, data models and any other ways of
        process documentation. 
        Another very common way of documenting the requirements is
        through prototypes.
    </p>
    <h4>Requirements Analysis</h4>
    <p>
        Here, all the documented requirements is analysed. Basically what
        the software must have and how it must function is evaluated.
        The main goal here is to have a concise, unduplicated, complete,
        clear and requirements actually makes sense.
    </p>
    <h3>Requirement types</h3>
    <p>
        In short, there are two types of requirements a system may have.
        Functional and non-function.
    </p>
    <h4>Functional requirements</h4>
    <p>
        Functional requirements or behavior requirements are specific
        services a system must provide. I other words,
        are specific behaviors the system must have.
        <br>
        They are specified by the user and are usually documented
        using use cases. If you don't know what a use case is,
        it's basically a diagram that represents how a specific behavior
        should happen within the system. It also shows how users interact
        with this behavior or how other systems or parts of the system
        interact with it.
    </p>
    <p>
        A quick example of these types of requirements is a login page.
        Once logged, the user can only see the pages he/her has permissions.
    </p>
    <p>
        Another example would be a cart from an ecommerce web site.
        The client must be able to have a cart without having being registered
        to the platform. Along with this requirement, others can appear like
        the user must be able to see all products of the created cart, along
        with the total amount he has to pay.
    </p>
    <h4>Non-functional requirements</h4>
    <p>
        Non-functional requirements or non-behavior requirements,
        are quality requirements the system <strong>may have</strong>.
        In other words, these requirements are directly related to the
        quality of the system as a whole and doesn't have a direct connection
        with the behaviors required for it.
    </p>
    <p>
        These requirements that guarantee the quality of the system
        can address issues like: security, performance, reliability,
        flexibility, mantainability, portability, scalability and reusability.
        <br>
        They are also specified by technical people, like architects, tech leads
        or software developers.
    </p>
    <p>
        Examples of this kind of requirements would be:
        The website should be able to have 1000 users simultaneously without
        crashing or without slowing down more than 3s for each page.
        Each request must not take more than 15s or any other requirement
        related to perfomance.
        <br>
        Another example would be: User's should not be able to manage
        it's own scopes. Or if they can, they must go through an approval process
        before having the scope into their profile. If we are talking about
        security.
    </p>
    <h3>Qualities of a Requirement</h3>
    <p>
        In short, there are some quality attributes that
        every requirement should have to be considered a good
        requirement.
    </p>
    <img class="post-img" src="images/software-development-life-cycle-requirements-analysis/requirement-qualities.svg" alt="Qualities of a software requirement">
    <h4>Atomic</h4>
    <p>
        The requirement defines a single aspect. It may be an aspect from
        a business process or from the system.
        Every requirement should have just enough details to describe it,
        be "granular" and have a low-level of information.
        This means that the requirement is not supposed to
        be broken into more requirements.
    </p>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Bad Requirement</th>
                <th scope="col">Good Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The user must be able to register himself
                    using his Google or Facebook account. The user can
                also be able to create a new account using Email and passoword only</td>
                <td>
                    <ul>
                        <li>The user must be able to register himself using 
                            email and password only</li>
                        <li>The user must be able to register himself using
                            an existing Google Account</li>
                        <li>The user must be able to register himself using
                            an existing Facebook Account</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <h4>Complete</h4>
    <p>
        The requirement must be complete. This means that isn't missing
        any necessary/relevant information on it's description.
    </p>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Bad Requirement</th>
                <th scope="col">Good Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The user must be able to register himself using email,
                    password and any relevant information</td>
                <td>The user must be able to register himself using email, 
                    password and birth date</td>
            </tr>
        </tbody>
    </table>
    <h4>Consistent and Unambiguous</h4>
    <p>
        The requirement must not contradict other requirements and
        it must be clear, with one interpretation of it's meaning.
    </p>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Bad Requirement</th>
                <th scope="col">Good Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <ul>
                        <li>Each registered user must have a set of scopes to it's profile</li>
                        <li>Users that are admins can give other users admin access</li>
                        <li>An admin can change it's own set of scopes</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Each registered user must have a set of scopes to it's profile</li>
                        <li>Users that are admins can give other users admin access</li>
                        <li>There will be 2 kinds of scopes: admin and non-admin</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <h4>Testable/Verifiable</h4>
    <p>
        The requirement must be verifiable. This means that it can be shown
        that it has been met by the final solution via tests.
        This also means that it's description is specific and containts no
        generic informaation.
    </p>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Bad Requirement</th>
                <th scope="col">Good Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>After given or removed access, it shouldn't take much time
                    so that the user can feel the effects at any page
                </td>
                <td>
                    <ul>
                        <li>After given admin access, the user should be able
                            to access the users management page after 5 seconds</li>
                        <li>After removed the admin access, the user should not
                            be able to access the users management page after 5 seconds
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <h4>Uniquely Identified</h4>
    <p>
        The requirement must have an unique identification. This will make
        it easier for references within the documentation and to not
        be confused with other requirements.
    </p>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Bad Requirement</th>
                <th scope="col">Good Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <span>
                        1 - After given admin access, the user should be able
                        to access the users management page after 5 seconds
                    </span>
                    <br>
                    <span>
                        1 - After removed the admin access, the user should not
                        be able to access the users management page after 5 seconds
                    </span>
                </td>
                <td>
                    <ol>
                        <li>After given admin access, the user should be able
                            to access the users management page after 5 seconds</li>
                        <li>After removed the admin access, the user should not
                            be able to access the users management page after 5 seconds
                        </li>
                    </ol>
                </td>
            </tr>
        </tbody>
    </table>
    <h4>Traceable</h4>
    <p>
        A requirement can be dependent uppon other requirements.
        This means that those depedencies must be mapped. Therefore, those
        depedencies must be properly mapped, traceable.
    </p>
    <table class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Bad Requirement</th>
                <th scope="col">Good Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Every change to the set of scopes of another
                    user should be kept by the system for later
                    analysis
                </td>
                <td>
                    Every change to the set of scopes of another
                    user should be kept by the system for later
                    analysis. Scope alteration description can be found at
                    <strong>Scopes alteration - 2.1, 2.2 and 2.3</strong>
                </td>
            </tr>
        </tbody>
    </table>
    <h3>Final Thoughts</h3>
    <p>
        The analysis stage can be hard. It may require lots of interviews and
        effort to have concise and clear requirements. The result are long documents that may contain diagrams like
        use cases, UML and flowcharts. These documents
        will be the input for the design stage, they are
        also called <i>initial desing</i> of the system.
    </p>
    <p>
        As I said, the main goal is to create a model of the system that
        is indepedent of implementation constraints. The solution 
        considering environment and language constraints is accomplished
        at the design phase.
    </p>
    Good Luck XD
</div>
