# Rails
- Ruby language framework
- Full Stack Applications Quickly
  - When DHH, the inventor of rails, first introduced rails at Ruby conf the most famous quote he made was to say "look at how many thing I am not doing"
- MVC Architecture 
  - Model: Memory and money maker, business center of the logic of our application, handles our database. Models are what describe the relationships our databases have to one another. And what kind of things our application will accept from random users. 
  - View: What a user sees, touches, inputs and interacts with. 
  - Controller: Brains, decision maker, traffic signal, managing the interaction between the User and the application 

  - When a user can see something, input data, have that data stored for future reference, retrieve that data, or do something with the data - Full Stack Application 

  - Model

# Rails
$ rails new
-> name for our app
-> what database system we want to use
-> what to do with our testing environment 

 $ rails new rails_intro -d postgresql -T

- rails project names need to be lowercase and ideally snake_case
- rails projects should be singular

- Rails is opinionated - that is to say it's super picky about names, syntax and conventions
  - "convention over configuration"

 $ rails db:create

Running via Spring preloader in process 99135
Created database 'rails_intro_development'
Created database 'rails_intro_test'

# Run Rails 
$ rails server 
OR
$ rails s
