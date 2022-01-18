# Views Routes Controllers 
### Alright in this talk we have a lot of moving parts and they all need to work in harmony for our goals to be accomplished. By the end of the day y'all will be maestro's 

Today were gonna be dealing with three major parts we need to keep track of our
1. Views - What can be seen by our user 
2. Routes - How our user gets somewhere where they can see something
3. Controllers - What our user will end up seeing or doing with what they see
4. Params - How our user can see different things and interact with different things

In the past we've made SPA's -- Single page app's good interview vocab word -- you can navigate to the site and do everything without linking to another page. Today we are going to make multi page websites. 

# Getting Started
As always we are going ot need a to make a rails app
```
    $ rails new food_app -d postgresql -T -G

    $ rails db:create

    $ rails g controller Food
```
- The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.
        
      create  app/controllers/food_controller.rb
      invoke  erb
      create    app/views/food
      invoke  helper
      create    app/helpers/food_helper.rb
      invoke  assets
      invoke    scss
      create      app/assets/stylesheets/food.scss
      
### Review the files
 $ code .

Let's keep a tidy application - for today I am going to delete the scss file and the helper file as I won't be needing them

 > delete app/assets/stylesheets/food.scss
 > delete app/helpers/food_helper.rb
 
# Overview
- Understanding the basics of creating a request response cycle in Rails

- Generating a view for the user

- Navigating between views

# Learning Objectives
- Understanding the anatomy of a Rails route
    - Identifying the 
        - url
        - the controller
        - the method

- Using generate to create a controller
    Creating methods in the controller

- Creating a view with html.erb

- Linking between views
 link_to

# Vocabulary
controller
view
routes
erb

# Rails Response 
    In order to respond to a server request Rails has three tools that work together like an orchestra

    The Controller
    The Routes
    The Views

    We are going to look at each of these and set them up to work together. 



# The Controller
The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.

```
    $ rails g controller Food
```

The controller does a lot for us as developers it does this by coordinating the creation of different files including style sheets, helpers, and a ruby controller.

### The controller:
 - is responsible for routing external requests to internal actions. It handles people-friendly URL's extremely well
 - manages caching
 - manages helper modules, which extend the capabilities of the view templates without bulking up their code
 - manages sessions, giving users the impression of an ongoing interaction with our applications

but the file we are going to be working today is

/controllers/concerns/food_controller.rb
```ruby
def nachos
        render html: 'Austins favorite food is nachos'
 end
```
So we've made and named a method now we need to connect our method to the URL 

# The Routes
In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A routes.rb file in the config folder is created when you run rails new. This file is intended to house all valid urls in your application.
```ruby
get '/name_of_route' => 'name_of_controller#name_of_method'

get '/nachos' => 'food#nachos'
```

SPEND EXTRA TIME SHOWING THIS AND HOW IT CONNECTS THE CONTROLLER TO THE URL
 - HTTP VERB  get, put, post, delete
 - URL
 - Name of Controller
 - Name of Method in Controller

    ### WHAT IF WE ADDED ANOTHER ROUTE TO OUR FILE WHAT WOULD WE NEED TO DO?

 ### Let's go back to the controller and add the necessary method in the controller. 
```ruby
def new_food
    render html: "____s favorite food is _____"
end
```
So we've bounced back once lets bounce again over to routes 

## Root_to

In routes I want to make a landing page for my user so they see what they want as soon as they navigate to my site so in my routes I am going to add my root
```
root'food#nachos'
```

# Recap 1
So to recap so far we have
- made an app
- created a db
- generated a controller
- set up our controller
- set up some routes
- bounced back and fourth a bit making methods and routes
- rooted one of our routes

-- break --

# The View
So far our routes and controllers are only returning a basic string from the controller method. But, we probably want to make more complex views.

The generate command creates a directory in the app/views named after our controller. 



So we go into app/views/the_name_of_our_controller
and we create a file called... 

```
...views/food/nachos.html.erb 
```


This references the name of the method in the controller
 - erb extension stands for embedded ruby. It means
 - that these views can have Ruby values in them and even evaluate some Ruby logic!


inside the file we are going to have new syntax to learn which is how we embed our ruby

this file also takes html tags so all you html wizards can have fun in here

```ruby
<%= Ruby code goes here %>

<h1> I LOVE NACHOS SO MUCH </h1>
```
But Austin, I hear you saying, How do we get these html.erb files to show up? How does rails know which one is which? Great question

We need to bounce back over to our controller and tell our controller that these views exist

```ruby
## add the render to controller 
    def nachos
        render 'nachos.html.erb'
    end
```
## We while were here lets add an instance variable
```ruby
    def nachos
        render 'nachos.html.erb'
        @our_nachos = "We love to put: Cheese, black beans, rotel and Avocado on our nachos"
    end
```

/views/food/nachos.html.erb

```ruby
<%= @our_nachos %>
```

We can call on this instance variable now in our new ruby tags inside the html.erb associated with this method.

We have done a lot so far-- so good on y'all for sticking with me we have one thing left to do

typing into the url the different pages is wack-- lets make some links
bounce back to our ERB files and inside them we 
can put 

```ruby
/views/food/home.html.erb
<%= link_to "Nachos", "/nachos" %>
<%= link_to "other food", "/other_food" %>

/views/food/nachos.html.erb
<%= link_to "Home", "/" %>

/views/food/other_food.html.erb
<%= link_to "Home", "/" %>
```


boom we have an app that has links and different pages and even could use a db if we wanted 

So to recap so far we have
1. made an app
2. created a db
3. generated a controller
4. set up our controller
5. set up some routes
6. bounced back and fourth a bit making methods and routes
7. rooted one of our routes
8. made a couple of views
9. mapped our controller to our views
10. we set up instance variables in our methods that our views can call on
11. we linked our views together

ROUTES VIEWS AND CONTROLLERS have a lot of little parts. They all work harmoniously. If you run write down the step you are taking and as you run into issues trouble shoot by checking the pathways of the flow of information