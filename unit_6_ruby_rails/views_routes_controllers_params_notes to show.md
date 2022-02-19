# Routes, Views, Controllers

1. Views
2. Routes
3. Controllers
4. Params 

# Overview
- Understanding the anatomy of a Rails route
  -  Identifying:
       - url
       - the controller
       - the method

- Using the Generate command to create Controller
    - creating methods in the Controller

- Creating Views
    - linking the views to the controller

- Passing Params into the url and having them show up on the screen


# Terminal commands in order
```
$ rails new food_app -d postgresql -T -G
$ rails db:create
$ rails g controller Food
$ rails s
```

### HTTP Verbs 
- Post 
- Get
- Put
- Patch
- Delete

# The Controller
Takes class methods with a specific  naming convention. 

```
    def name_of_method
        Stuff method should know 
        stuff method should do
    end
```

```ruby
    def tacos
        render html: "Austin & Nicole love Torchy's Tacos"
    end
```

# The Route
```ruby
  http_verb '/name_of_route' => 'name_of_controller#name_of_method'
```
```ruby
  http_verb '/tacos' => 'food#tacos'
```

# Overview #1
- made an app
- created a db
- generated a controller
- set up our controller
- methods
- render keyword
- setup our routes
- using HTTP verbs 
- route in single quotes
- hash rocket
- name of controller
- and #
- name of method 

# The View

The generate command has created a folder/ directory in our app/views named after the name of our controller

app/views/food

in here we are going to make a new file with the extension "html.erb"

> app/views/food/method_name.html.erb

> app/views/food/tacos.html.erb

erb stands for "Embedded RuBy". A .html.erb or .erb.html file is HTML with Ruby code embedded in; Rails will evaluate the Ruby to add content to the file dynamically, and will output a "pure" HTML file for rendering.

## ERB tag
this one does not show up
```ruby
<% ruby code goes here %>
<%= ruby code you want to show up %>
```
also takes all HTML tags ever
```
<h1></h1> 
<h2></h2>
<ol></ol>
<p></p>
```

## link_to
/views/controller/home.html.erb
```ruby
<%= link_to "Tacos", "/tacos" %>
<%= link_to "Other method", "/other_method" %>
```
/views/food/tacos.html.erb
```ruby
<%= link_to "Home", "/" %> 
```
## Instance Variables in the Controller

```ruby
class ControllerName < OtherThing
    def method_name
        @instance_variable = ["Data","I", "Want", "Later", ]
    end
end
```

## "each do" in HTML ERB
app/views/ControllerName/method_name.html.erb
```ruby
<ul>  
<li>
<% @instance_variable.each do |value|%>
    <li> <%= value %></li>
<% end %>
</ul>
```

# Overview 2
1. Made an app
2. created a db
3. generated a controller
4. set up routes
5. set up the controller
6. made views - new file /app/views/controller_name/method_name.html.erb
7. controller, view, routes sync'd up
8. Set up instance variables in the controller that we can call on in the views
9. linked our views together
10. mapped over an array variable and displayed its contents


Started with hard coded string
```ruby
def random_food
  @random_food = 'random_food with extra sparkles'
end
```

Refactor to Using Params:
```ruby
def random_food
  @random_food = params[:style]
end

```
> get '/random_food' => 'food#random_food'
Parameter query: we can change the value of the param `:style`
url: http://localhost:3000/random_food?style=bananasfoster


  Refactor to Ensure We Get Params:
```ruby
Rails.application.routes.draw do
  get '/random_food/:style' => 'food#random_food'
end
```
url: http://localhost:3000/random_food/foster

Param hash in console:
Parameters: {"style"=>"foster"}


### Number of Sweaters
```ruby
def quantity
  @random_food_sweater_quantity = params[:number]
end
url: http://localhost:3000/quantity/8
```
Parameters: {"number"=>"8"}
Params are always the data type string


```ruby
def order
  @food_order_quantity = params[:number]
  if @food_order_quantity > 100
    @output = 'a ton of food'
  else
    @output = @food_order_quantity
  end
end
<h3>I have <%= @output %> orders.</h3>
```

Parameters: {"sweaters"=>"snowman", "hoodies"=>"roudolph", "mittens"=>"snowflake"}

# Overview 3
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
12. we set up params to define a variable and display it
13. we did some logic with our params 
    13.a remebering that params are always come to us as a string
14. we can create multiple params by listing them all out in our routes and controllers
15. we create params which are keys to a hash and the value of the key value pair comes from the URL