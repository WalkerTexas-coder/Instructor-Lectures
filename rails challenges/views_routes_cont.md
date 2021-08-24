Alright in this talk we have a lot of moving parts but they all need to work in harmony for our goals to be acomplished. 

Today were gonna be dealing with three major parts we need to keep track of our
1. Routes
2. Views
3. Controllers

In the past we've made SPA's -- Single page apps good interview vocab word -- you can navigate to the site and do eveyrthing without linking to another page. today we are going to make multi page sites. 

# Getting Started
    as always we are going ot need a yo make a rails app
____________________________________________
    $ rails new food_app -d postgresql -T -G

    $ rails db:create

    $ rails g controller Food
    
    $ rails s
____________________________________________

# Overview
Understanding the basics of creating a request response cycle in Rails
Generating a view for the user
Navigating between views
# Learning Objectives
Understanding the anatomy of a Rails route
    Identifyiing the 
        url
        the controller
        the method
Using generate to create a controller
    Creating methods in the controller
Creating a view with html.erb
Linking between views
 link_to
# Vocabulary
controller
view
routes
erb
____________________________________________
# Rails Response 
    In order to respond to a server request Rails has three tools that work together like an orchestra

    The Controller
    The Routes
    The Views

    We are going to look at each of these and set them up to work together. 


First off is the ---
# The Controller
The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.
____________________________________________

    $ rails g controller Food
____________________________________________


The controller does a lot for us as developers it does this by coordinating the creation of different files including style sheets, helpers, and a ruby controller.

### The controller:
 - is responsible for routing external requests to internal actions. It handles people-friendly URLs extremely well
 - manages caching
 - manages helper modules, which extend the capabilities of the view templates without bulking up their code
 - manages sessions, giving users the impression of an ongoing interaction with our applications

but the file we are going to be working today is

/controllers/concerns/food_controller.rb
____________________________________________
def nachos
        render html: 'Austins favorite food is nachos'
 end
____________________________________________
SO we've made and named a method now we need to connect our method to the URL 

# The Route
In order for our Rails server to respond to a request to this url, it needs a particular path and an http verb. A routes.rb file in the config folder is created when you run rails new. This file is intended to house all valid urls in your application.
____________________________________________
get '/name_of_route' => 'name_of_controller#name_of_method'
get '/nachos' => 'food#nachos'
____________________________________________


SPEND EXTRA TIME SHOWING THIS AND HOW IT CONNECTS THE CONTROLLER TO THE URL
 - HTTP VERB  get, put, post, delete
 - URL
 - Name of Controller
 - Name of Method in Controller

    ### WHAT IF WE ADDED ANOTHER ROUTE TO OUR FILE WHAT WOULD WE NEED TO DO?

LETS GO BACK TO THE CONRTROLLER 
and add the nessecary method in the controller. 
____________________________________________
def new_food
    render html: "____s favorite food is _____"
end
____________________________________________

So we've bounced back once lets bounce again over to routes 

### Root_to

In roots I want to make a lnading page for my user so they see what they want as soon as they navigate to my site so in my routes I am going to add my root

## Root
root to: 'food#nachos'

# Recap 1
So to recap so far we have
- made an app
- created a db
- generated a controller
- set up our controller
- set up some routes
- bounced back and fourth a bit making methods and routes
- rooted one of our routes
____________________________________________
____________________________________________

## Now to add the last piece of todays puzzel

# The View
So far our routes and controllers are only returning a basic string from the controller method. But, we probably want to make more complex views.

The generate command creates a directory in the app/views named after our controller. 

### THIS NEXT PART HANGS PEOPLE UP TAKE EXTRA TIME WITH THIS.

So we go into app/views/the_name_of_our_controller
and we create a file called... 
____________________________________________
nachos.html.erb 
____________________________________________



_______ references the name of the method in the controller
 - erb extension stands for embedded ruby. It means
 - that these views can have Ruby values in them and even evaluate some Ruby logic!


inside the file we are going to have new syntax to learn which is how we embed our ruby

this file also tkaes html tags so all you html wizards can have fun in here

____________________________________________
<%= Ruby code goes here %>
<html> </html>
<h1> I LOVE NACHOS SO MUCH </h1>
____________________________________________

But Austin, I hear you saying, How do we get these html.erb files to show up? How does rails know which one is which? Great question

we need to bounce back over to our controller and tell our controller that these views exist
____________________________________________
## add the render to controller 
    def nachos
        render 'nachos.html.erb'
    end
____________________________________________

## We while were here lets add an instance variable

    def nachos
        render 'nachos.html.erb'
        @our_nachos = "We love to put: Cheese, black beans, rotel and Avocado on our nachos"
    end
____________________________________________
/views/food/nachos.html.erb
<%= @our_nachos %>
____________________________________________


We can call on this instance variable now in our new ruby tags inside the html.erb associated with this method.

We have done a lot so far-- so good on yall for sticking with me we have one thing left to do

typing into the url the different pages is wack-- lets make some links
bounce back to our ERB files and inside them we 
can put 
____________________________________________
/views/food/home.html.erb
<%= link_to "Nachos", "/nachos" %>
<%= link_to "other food", "/other_food" %>
____________________________________________
/views/food/nachos.html.erb
<%= link_to "Home", "/" %>
____________________________________________
/views/food/other_food.html.erb
<%= link_to "Home", "/" %>
____________________________________________

boom we have an app that has links and diffrent pages and even could use a db if we wanted 

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

ROUTES VIEWS AND CONTROLLERS have a lot of little parts. They all work harmouniusly. If you run write down the step you are taking and as you run into issues trouble shoot by checking the pathways of the flow of inforamtion