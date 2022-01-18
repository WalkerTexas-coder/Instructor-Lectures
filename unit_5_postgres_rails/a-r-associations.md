Active record associations 

Whats the point of databases?
The problem of persistent data storage

There are two types of digital information: input and output data. Users provide the input data. Computers provide output data. But a computer's CPU can't compute anything or produce output data without the user's input. 

Users can enter the input data directly into a computer. However, they have found early on in the computer-era that continually entering data manually is time- and energy-prohibitive. One short-term solution is computer memory, also known as random access memory (RAM). But its storage capacity and memory retention are limited. Read-only memory (ROM) is, as the name suggests, the data can only be read but not necessarily edited. They control a computer's basic functionality. 

Although advances have been made in computer memory, with other forms of short term memory, When a computer powers down, so does the RAM's ability to retain data. The solution? Data storage. 

With data storage space, users can save data onto a device. And should the computer power down, the data is retained. And instead of manually entering data into a computer, users can instruct the computer to pull data from storage devices. Computers can read input data from various sources as needed, and it can then create and save the output to the same sources or other storage locations. Users can also share data storage with others. 

The kind of database we are learning about is a relational database. The Idea of a relational database was first described by a man named Edgar Frank Codd, while working for IBM. The idea of a relational model for databases revolutionized the way we took in data and really unlocked a lot of the way the world works today. 


### Rails supports six types of associations:

belongs_to
has_one
has_many
has_many :through
has_one :through
has_and_belongs_to_many
The combination of relationships are described as:

one-to-many
one-to-one
many-to-many

For today's example we are going to 




# Rails commands 
 $ rails new blog_app -d postgresql -T
 $ cd my_app
 $ rails db:create
#### Lets checkout the schema
 $ rails server
 $ rails generate model User user_name:string email:string

#### Lets checkout the new model file that was created 

 $ rails db:migrate

 #### Lets checkout the schema

 $ rails c
> User.create user_name: "wizard_kicker", email: "ikickwizards@gmail.com"
> User.create user_name: "reddit_user45678", email: "spam@spam.com"
> User.all
=> #<ActiveRecord::Relation [#<Person id: 1, name: "Joe", phone: "555-3456", created_at: "2020-03-04 18:52:19", updated_at: "2020-03-04 18:52:19">, #<Person id: 2, name: "Jane", phone: "555-7890", created_at: "2020-03-04 18:52:27", updated_at: "2020-03-04 18:52:27">]>


 $ rails generate model BlogPost bleongs_to :use

#### Lets checkout the new model file that was created alongside our user

 $ rails db:migrate

 #### Lets checkout the schema

## Updating the Class 
What we need to do next is let our Models know that they will have a relationship with another table 


Inside of the APP FOLDER IN THE MODELS FOLDER

```ruby
class User < ApplicationRecord
  has_many :blog_posts
#   PLURAL Symbol
end


class BlogPost < ApplicationRecord
  belongs_to :user
#   SINGULAR symbol
end
```

To create a new entry of an blogpost, we have to assign it to an instance of user. An blogpost entry cannot exist unless it is attached to a User. To make our first User's blog post we first create a variable to store the entry of one user.

# console commands
 $ rails c
> kicker = User.first
> p kicker

### next we need a somewhat familiar but new style of entry for our data

we need the variable
dot
table_name-- but lowercase, snake_cased and plural 
dot
create

We do not provide the foreign key but rather the convention is to let rails apply the foreign key for us.

> kicker.blog_posts.create title:"My trip to Scotland", post:"You would not believe the different kinds of wizards they have in Scotland, I found a whole train of them.", image_url:"https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-UK-Scotland-GlenfinnanViaduct_351622814-1440x823-1.jpg" 

> kicker.blog_posts.create title:"My trip to Washington" post:"Iheard there was a group of wizards in washinton but turns out they're not real wizards... or were they." image_url:"https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1200px-Washington_Wizards_logo.svg.png" 

