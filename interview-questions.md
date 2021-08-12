# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer MVC stands for model, view, controller which is an architectural pattern. The view is what the user sees, them model is for the data and the controller is like a switchboard that makes all of the pieces work.

  Researched answer: MVC is a pattern in software design meant to separate the logic and what the user sees. Model manages the logic, View controls layout and display and the Controllers sends commands to the model and view parts. It connects the two. This pattern is beneficial for developers to work on different aspects of the business as well as debugging as there is little interference between the two areas of logic and display.  



2. What is a relational database? Are there other kinds of databases?

  Your answer: It is a database that has multiple tables that are related to each other. Each table is made of rows and columns. There are other kinds of databases.  

  Researched answer: A relational database is a collection of data that has some form of relationship to each other. This data is stored within tables that consists of rows and columns. Each row in a table can be marked with a primary key. Other tables can become related to this table using foreign keys. This way data can be accessed with out disrupting the original organization of the data.
  There are other kids of databases. They include: NoSQL (which include key-value databases, graph databses, ), Cloud databases, Columnar databases, Wide column databases, Object-oriented databases, Document database and Time series databases.



3. What is object-relational mapping?

  Your answer: It is a programming technique that converts data to allow two languages to talk to each other that wouldn't normally interact.

  Researched answer: An ORM goes between two languages that don't inherently interact and allows them to communicate. It helps programmers to connect the database and the language.



4. What is a gem?

  Your answer: Gems are packages of data that add to the functionality of the Ruby language.

  Researched answer: Gems contain libraries or applications that can be used to distribute reusable functionality. They allow a programer to use packages of code that they haven't explicitly inserted.



5. What are primary keys? Why are they important?

  Your answer: A primary key is a unique identifier for a row in a database. They are important because they are the key that allows for interconnectedness between tables.

  Researched answer:Primary keys are the backbone of relational databases. They provide a unique identity to each row of a table that can be utilized in other tables to gather the data stored within that row.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer.  It utilizes the HTTP verb and the URL to see what CRUD action holds that method and URL. This determines what information gets sent back to the user. These actions put together provide a route that is then named to create a more streamlined and reusable process.

2. JSON: Stands for JavaScript Object Notation. It is a ligthweight data interchange format that is easy for humans and machines to interact with. It is typically built in two ways: name/value pairs or an ordered list of values. The format is text only and provides a way for computers using different languages to communicate. To turn JSON into a JavaScript object you use JSON.parse() and to turn an object into a JSON string you use JSON.stringify()

3. ERB: Stands for Embedded RuBy. It is an engine that is needed so the developer can use Ruby code within HTML code. If I am understanding correctly to run Ruby funcitonality and logic within your HTML you use the <% %> tags. To display any Ruby information to the user you use <%= %>.

4. Params: Short for parameter. It is a way to pass additional information when a user queries a database. The 3 different kinds of params are user supplied parameters, routing parameters and default parameters.

5. API: Stands for Application Programming Interface. This allows two applications to exchange data and functionality easily and securly. Modern API's are standardized and adhere to certain security and governance standards. They also have their own development cycle of designing, testing, building, managing and versioning. 
