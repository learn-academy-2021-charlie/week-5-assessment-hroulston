# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

SQL stands for structured query language. It allows developers to access and manipulate relational databases.


2. What the PostgreSQL query that would return all the content in a particular table?

SELECT *
FROM table_name

3. What is the command to create a new Rails application with a PostgreSQL database?

$rails new app_name -d postgresql -T


4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

$rails g model Meals breakfast:string lunch:string dinner:string


5. What is a migration? Why would you use one?

Migrations are used to modify a database through changing/adding columns or adjusting data types. When you type $rails db:migrate it creates a table within the schema


6. What is the command to generate a migration file?
$rails g migration action_utilized_to_adjust_table


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention to generate a Rails model is Uppercase and singular. The table created by this command will be snake_cased and singular as well.



8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema holds the current the shape of the database. It also contains any information on creations and updates that have been made. You should never modify the schema directly. Schema was made to be read only representation of the most current database.

9. What is the Rails console?
A place within the terminal that allows a developer to interact with their database. It is an irb (interactive ruby) that is built around the rails environment


10. What is the Rails console command to see all the content in a particular table?

$Classname.all
