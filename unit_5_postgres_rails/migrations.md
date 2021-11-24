# Rails Migrations
Updating or changing the Model in our Database

Think of the model like a Table columns and rows. On the columns we have the different pieces of data we are keeping track of for our instances of the class. On the rows we have the instances themselves. 
So User table can have: name, age, birthday, likes, posts. So each user must fill out each of these columns. Perfect We understand that much. How about when we need to add, subtract or change columns from our table.


# What is a migration
A migration is a file that is generated through a rails command that specifically allow us to make updates to our the database

-- snake_case
$ rails generate migration add_item_to_schedule

-- PascalCase
$ rails generate migration AddItmeToSchedule



# Commands 
 ### make the app
$ rails new instrument_app -d postgresql -T
 ### cd into app
$ cd instrument_app
 ### create database
$ rails db:create   
      In the event of an issue 
$ rails db:drop to delete the DB (BE SUPER CAREFUL)
 ### create model
$ rails g model Instrument 
 ### migrate model
$ rails db:migrate
 ### create migration
$ rails g migration add_item_to_table
  
  ## Jump into the rails files
  ### add code to change method
     add_column :table, :column, :datatype
     add_column :instruments, :type, :string
     add_column :instruments, :name, :string
     add_column :instruments, :inventory, :number
 ### migrate
$ rails db:migrate

$ rails c 
Instrument.create type:"wind", name:"saxophone", inventory:3
Instrument.create type:"string", name:"guitar", inventory:25
Instrument.create type:"string", name:"piano", inventory:2
Instrument.create type:"percussion", name:"drums", inventory:5

$ Instrument.all

$ exit
## drop back to the project
 ### create migration
$ rails g migration rename_column_in_instruments

### add code to change method
  rename_column :table_name, :column_name, :new_column_name 
 ### migrate
$ rails db:migrate

## jump over to console
$ rails c

$ Instrument.all
$ Instrument.first

$ exit

 ### create migration

$ rails g migration add_column_to_instrument

    add_column :instruments, :price, :number

 ### migrate
$ rails db:migrate

