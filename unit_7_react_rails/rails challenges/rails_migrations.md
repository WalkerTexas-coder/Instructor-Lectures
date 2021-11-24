# Rails Migrations
Migrations are a tool that we are need in our tool kit early on. Migrations serve a a larger purpose the bigger the scope of our project becomes. If I make a small app where I just want my friends names and thier phone numbers -- thats fine. The moment I also want to add the address instead of starting over from scratch I can use a migration.  The specific job of Active record migrations is to allow us to make changes to our data structure after we have initlized our database. 

# What is a Migration 
A migration is a file that is generated through a rails command that will allow you to make changes to the database. This can include (but not limited to) editing a column's name or data type, adding a new column or removing a column.

# Naming Conventions
 - Migration names are PascalCased or snake_cased
 - Migration names start with an action that describes the purpose of the migration (i.e. create, add, remove, etc)
 - The migration name ends with the name of the table (add_item_to_schedule)

rails generate migration add_item_to_schedule || rails generate migration AddItemToSchedule

# Creating a Migration
the process of creating a migration is similar to what we did yesterday but it adds on a couple of steps. The set up is all the same -- we need to make a model for our DB that lives on our rails app. from there if we want to update the model or make change sto it we follow the migrations work flow.

# Commands 
--New project--
$ rails new migrations_practice -d postgresql -T

--cd into new project--
$ cd migrations_practice

--Rails DataBase create--
$ rails db:create

--rails g model Schedule ( CAPITALIZED "S" FOR MODEL TABLE) --
$ rails generate model Schedule

-- run the rails server --
$ rails server

-- new tab rails console --
$ rails c

# Migration commands 
$ rails g migration AddItemToSchedule
add_column :schedules, :description, :string

### deleting a migration
check over the code and make sure we dont have any errors if we do this a moment to delete the file and try again.

# Migrating our data base
once we know our migration file is what we want it to be we can run 

$ rails db:migrate
-----
$ rails s
-----
$ rails c
-----
and then look at our DB




# Links 
https://edgeguides.rubyonrails.org/active_record_migrations.html

# Lets do this process a coupole more times

### Syntax in migration file 
  add_column :table, :column, :datatype
  change_column :table_name, :column_name, :type, **options
  rename_column :table_name, :column_name, :new_column_name
  remove_column :table_name, :column_name






- Rails Data Types
:binary
:boolean
:date
:datetime
:decimal
:float
:integer
:bigint
:primary_key
:references
:string
:text
:time
:timestamp

 - PostgresQL Extras
:hstore
:json
:jsonb
:array
:cidr_address
:ip_address
:mac_address
