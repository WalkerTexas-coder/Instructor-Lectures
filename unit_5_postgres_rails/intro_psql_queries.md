We are moving into back end development today!

Everything that exists as technology shares something in common. All technology is an attempt to answer some kind of question or need. If you want to understand a technology at its core you need to first know what question it is trying to answer. Most of the problems I find students encountering with this next section is first not understanding why we even care about what we are doing. So it is with life, if you don't know the question the answer often doesn't make sense. 

So IF databases - being a place we can store data - are the answer then what is the question?


> pull up a piece of paper: What is data? 

> How do we hang onto data long term?


# Classes

What's the purpose of a class? 
 - reusable code 
 - we don't eat the recipe book 
 - we create as much food as we want using the recipe 

What we do with the code that our classes makes is where databases come in? 

Can we set up a class that represents something that is complicated in a simplified way? 

  What about a learn student?
  Lets create a quick sheets document where we create some rows and collect some data about our learn students
   
   first names | cohort code | year
   _______________________________
    Austin     | Bravo       | 2020
    Charlean   | Delta       | 2021
    Student    | Bravo       | 2022
    Student    | Bravo       | 2022

This is the same representation as if I had written the code in ruby

```ruby
class Student
  def initialize
    @first_name = name
    @cohort = @cohort
  end
```

# Primary Keys
How do I keep track of individuals with the same first name in the same cohort? 
Once I even taught a cohort where we had to students named john b. 


```ruby
p Student.new => #4r2kj34g2kj3brvk2
```
In Rails, every row of a table has a primary key named "id", and that ID is guaranteed to be unique. This prevents problems like two Person instances being confused for each other because they have the same name. We can always tell them apart by their ID.

   first names | cohorts
   _______________________________
  1  Austin     | Bravo 2020
  2  Charlean   | Delta 2021
  3  Student    | Bravo 2022
  4  Student    | Bravo 2022


  Each row will be unique in its values but will have the same keys. 

# Models

  Thinking in real life what is a model? I am talking about things here not people. 
  - train model
  - landscape model
  - 
  A model is a simplified representation of something else. 
  Another way to put this is a model is similar to a class in that it describes the structure of the data of a representation

## Instance
  Each row of will be an instance of the model class



> pull up a piece of paper: What is data? 

> How do we hang onto data long term?

> How can we make long term data accessible? 

> How can we manipulate the kind of data that is returned without manipulating the data itself? 

# SQL 
 - Mysql 
 - Sql lite
 - PostgreSQL - flavor of SQL that has an oop approach
  since ruby is is very OOP 
  postgres is very common pair for OOP languages
    -reddit
    - instagram
    - spotify
    - nasa space station
  Storing data is one of the first things computers we desgined to be good at.
  the punch cards your parents talk about were the data and program storage themsleves
  Postgres was created at the university of CA Berkley as part of a goverment contract for creating large scalable relational data storage. The issue being the relational databases up and to that point had a lot of glaring bugs that hadn't been resolved. The project was released to the public in 1986 and by 1994 had taken the form that we are mostly familiar with today. 

# Version
Check the version of PostgreSQL on your machine:

 $ psql --version
\l - lists all the dbs
exit to get back to file structure


# PGAdmin - user interface for making queries to a PostgreSQL db

Any password - SDlearn123
Click into the side menu until you get to country
Tool >> Query Tool

# Queries 

A query can either be a request for data results from your database or for action on the data, or for both.



NOTE: It is best practice to write the Postgres keywords in uppercase, but the Postgres program is not case sensitive. It is also convention to allow each section of the query its own line.

## Select From

The most basic query keywords are Select and from. Select highlights what datasets we are looking for and from tells the database which table/ model/ class we are looking at. 

```sql
SELECT *       <-- means all columns
FROM country;
```
I want to talk about the philosophy of specific quires really quick. When we are in class most of our databases are not very large and don't have huge amounts of data. The point tof queries are to be able to request specific data from a database and nothing extra. SOme databases can be huge, like for instance the billion users on Facebook and all of their posts from forever. I do not want to try to download all of that data every single time a user uses my application I want just the few users and posts that my user should be seeing at anytime. 


part of being a good developer is creating requests that only get the data we are looking for.


So  to start the process of being more specific in our queries we can select different column_headers to return so that we are not looking at data that we don't need. 
A column header is the name of the cloumn of data back in our excel or google sheet file. 

```sql
SELECT name, population, surfacearea
FROM country;
```
## Limit 
 Limit only gives us the first selected instances in the database according the the query we have created
```sql
SELECT name, region, continent
FROM country
LIMIT 5;
```

## Where 
  ### =, !=, >, <, >=, <=, BETWEEN, LIKE, and IN, NOT, AND, OR.

  ### Passing strings
  - Wildcard operator '%' to represent any string character that might come before it. 


    ```sql
    SELECT name, population, governmentform
    FROM country
    WHERE governmentform = 'Monarchy'


    SELECT name, population, governmentform
    FROM country
    WHERE governmentform
    IN ('Monarchy', 'Republic')
    ```

  ### Like
  - Like takes a new line 
  - Most helpful to use with strings
  
    ```sql
    SELECT name, population, governmentform
    FROM country
    WHERE governmentform
    LIKE '%onarchy';
    ```



  
## Order By
You can order the result set of a query by adding an ORDER BY clause. 

```sql
SELECT name, population
FROM country
ORDER BY population;

SELECT name, population
FROM country
ORDER BY population DESC;

SELECT name, population
FROM country
ORDER BY population DESC
Limit 10;
```
You can also use this in combination with a where clause to reduce the total amount of data that comes back

```sql
SELECT name, region, indepyear, continent
FROM country
WHERE continent NOT LIKE '%America'
ORDER BY indepyear DESC;
```

### As Alias cloumns 
```sql
SELECT name, surfacearea, population,
WHERE population != 0
population/surfacearea as population_density
FROM country


## Group By
 - Aggregate functions
  - function means an input and an output
  - aggregate means formed by making calculations on a set of data
  - I am skipping this because at this point we should have some friend brains 