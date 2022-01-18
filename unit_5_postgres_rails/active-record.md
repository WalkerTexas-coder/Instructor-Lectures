# Intro to Active Record

Create a file for documentation in the lectures-notes repo.

At its core, Rails is a collection of gems plus some base code to tie them all together. One of the fundamental gems is Active Record. Active Record is an ORM which stands for Object Relational Mapping. This allow developers to write SQL queries in a language that is not SQL. So Active Record was created by Rails to act as a layer that wraps around the database - in our case Postgres, so that we can write SQL queries in Ruby code.

Active Record is a design pattern that maps rows in a database to objects in a running application. It allows methods to be called on objects (like new, save) and have the changes persisted in the database.

Remember that Ruby is a very, very object-oriented programming language. If we can think about the database in terms of a collection of tables - think of the database as being an Excel file and the tables are all different sheets within that file. A table has rows and columns. Each row has a name and each column has an input of data.

Active Record allows us to treat our database tables as classes. The tables can have relationships with each other in the same way classes can have relationships.

So right now we have a lovely, empty database. So we want to add table. Eventually we will add many tables to our database, but for today, we will add one table. We can think of our database like a big empty room. And by adding a table we are putting a file cabinet in that room. And now we can store documents, or pieces of information in that file cabinet.


### Generate Commands
Adding a table to the database will require two things: 1) A Rails generate command, and 2) some Active Record datatypes. So let's talk about these two things.

1) Remember that Rails is super picky. So if we are going to make structural changes to our app - meaning making files and folders, for the most part we don't do this manually. Rails provides us commands that will add files and other structure to the application so that it is done exactly the right way and named and connected exactly the right way. By using these commands we are allowing Rails to control the structure of the the files we are creating. There is a collection of these types of commands and we will see a lot of them over the next few days.

So the command to create a new table in Postgres is:

$ rails generate model  .....

This command takes arguments.

It takes the argument of the name of the model - so what our table is called, then it takes the name of each column and the datatype of the content that belongs in each column.

So let's start with the name. The name of a model that is passed to the generate command is PascalCase, just like the classes we made in Ruby. And it is always singular.

Let's make an app to keep track of our schedules.

$ rails generate model Schedule  .....

Just a reminder that Rails is super picky about naming conventions. It is just one of those things that we have to accept and get used to. But the cool part is as long as we name the model correctly in the generate command, Rails will create all the other parts and name them appropriately.

So that leads us to the column names and the data type of each column. It is important to think these things through when creating an application. For your Capstone project we will ask to see a diagram of your model layer before you start your code. Because it really does define what your application is going to do.

Our Schedule table is going to have three columns: day, date, and event

Each one of those columns needs a data type.

So let's talk about ActiveRecord datatypes. There are quite a few. The ones we will use regularly are:
- string 255 character limit (I think is equal to 1 byte)
- text allows for more characters, this can be adjusted with some deep level preferences but suffice to say it will be enough for all of our purposes.
- boolean
- integer
- date, datetime, time - make sure you look up the syntax before you use these to make sure you have the right one and the right order

Google this:
[rails 6 activerecord data types](https://michaelsoolee.com/rails-activerecord-data-types/)

I use string for my data types a lot. Because a strings are flexible. When you are deciding on a particular data type in Active Record the goal is to help keep your data clean and safe. So putting parameters on the type of data that can be accepted will help keep you from getting a bunch of junk saved in your database. You never want to give anyone the opportunity to manipulate your database. But I will say that if you are passing a number that you don't intent to use to perform mathematic operations, I would suggest using a string.

So in the Schedule example the rails generate command will look like this: (delta notes 39)

$ rails generate model Schedule day:string date:date event:string

This syntax is particular and a little weird compared to what we are used to.

Cool! So let's look at what we made.

We made a model with a class. And we made a migration.

Migrations create and define the shape of the database. Meaning how many columns do the tables have, and what data types are those tables. If you ever want to change your database, you change it with a migration.

So running this generate command gave us a migration and actually it is the migration that will create the database. So now that we have done the prep work we can tell the migration to get things rolling.

$ rails db:migrate

Now we actually have a database. Because in the db file, we now have a schema. Schemas are a snap shot of the structure of the database. You never alter a schema directly. But it is a good resource to see what is going on in your model layer.

Migration files are time stamped so they act as a log of the changes to the database. It is very normal to accumulate migration files. I think them a little bit like git commits. Just a record of your activity.

### Rails c

So our database has a table, it is represented as a model class in the Rails app. It is time to add some content.

Right now we are going to do all the work in terminal.

Rails has a console just like Ruby has a console, just like node, ruby, and psql have consoles. And we are going to hang out in there a lot.


To enter the Rails console, type $ rails c

Inside the console, we are interacting directly with our database. When you create a database it only lives on your machine. It does not actually live in the Rails app. This is coding in the database using the Rails framework.

**Extra:** Spring is a Rails application preloader. It speeds up development by keeping your application running in the background.

Now we have access to our database and can make queries using ActiveRecord. AR syntax is like a Ruby-flavor of SQL queries.

So the queries called on the database table look just like Ruby methods. So we are going to continue to mix up our brains with more syntax that is the same, yet different.

Remember, Rails treats all the tables in the database as classes. So I have class Schedule.

I can call methods on this class and get information. The first one we can try out is seeing all the instances of our class.

$ Schedule.all

I get back nothing, because well we haven't created instances of our class yet. But you can see that my ActiveRecord query translates into a SQL query.

### Post/Read
Let's add some data.

This is tough because it requires us to use syntax that is very similar to what we used when running the generate command, while being just different enough to be confusing. So take note and be patient with yourself. You will screw up and it will be okay.

Schedule.create and pass in a hash:
```
> Schedule.create day: "Tuesday", date: "2022-01-18", event: "Yoga"
> Schedule.all

> Schedule.create day: "Wednesday", date: "2022-01-19", event: "Intro to Active Record"

> Schedule.create day: "Thursday", date: Date.today, event: "White boarding"
> Schedule.create day: "Friday", date: "2020-01-14", event: "Assessment"

> Schedule.all
```
Looks at what we created. Note that the items all have a primary key. I didn't make a primary key. Rails did. And that is important. We always allow Rails to do that for us. Don't try manipulate that. That is Rails' job and you just let it happen.

Each time we make a request for information our app has to go into the database and load up the information each time. It doesn't exist anywhere but the database until you make a request.

### Read One/Set
Let's think about these Active Record command in terms of our programmer goals which is having full CRUD. So far, we can read all our data, and we can create data. Let's look at a couple other ways we can read the data.

We have some more Active Record query methods at our disposal.

```
> Schedule.first
> Schedule.last

> Schedule.second
> Schedule.third
```
We can also use the primary key to return a particular item. Find is a Ruby array method, but when used by ActiveRecord it looks for the primary ID. Find always takes an integer as its argument.

.find - by id
```
> Schedule.find 2
```

.where - by attribute

Find will bring back a single item whereas where will bring back a collection. As seen by the array of hashes vs a single hash.

Schedule.where day: "Thursday"

If you want the single item, you can extract the single hash from the array.
Schedule.where(day: "Thursday").first

### Update
We can also update content. If we are going to update something, we need to know which item we are going to update. So to pass an update method, we need to save one item as a variable.

yoga = Schedule.find 1

This variable only exists in this instance of the Rails console. If I exit this session, I lose my variable.

$ yoga.update event_date: '2021-06-08'


If you don't know the id of the item you are looking for you can use the where method to look for an item or group of items that meet a particular condition. But the where query returns a set so we need to make sure to extract just one value from the set.

oh = Schedule.where(day: "Thursday").first

### Delete
Delete is a bit like update. We must target a particular item so we know what it is we are intending to delete.

ama = Schedule.find 4
ama.destroy



### Summary
- Active Record lays over the top of your database to be the layer between Rails and Postgres
- Active Record allows you to interact with the database like a class
- Underneath Active Record are just SQL queries
- We can perform all the CRUD actions on Active Record entries
- Just like Ruby, Active Record has a lot of query methods so it is worth googling the action you want to perform