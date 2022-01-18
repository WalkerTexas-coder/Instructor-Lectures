# Routes, Views, Controllers

1. Views
2. Routes
3. Controllers
4. Params - 

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

# Recap #1 
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
```
...app/views/food

```
in here we are going to make a new file with the extension "html.erb"
```
...app/views/food/method_name.html.erb

...app/views/food/tacos.html.erb

```
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



Started with hard coded string
```ruby
def christmas
  @christmas_sweater = 'Christmas sweater with extra sparkles'
end
```

Refactor to Using Params:
```ruby
def christmas
  @christmas_sweater = params[:style]
end
```
Parameter query: we can change the value of the param `:style`
url: http://localhost:3000/christmas?style=ugly_sweater


  Refactor to Ensure We Get Params:
```ruby
Rails.application.routes.draw do
  get '/christmas/:style' => 'sweater#christmas'
end
```
url: http://localhost:3000/christmas/ugly

Param hash in console:
Parameters: {"style"=>"ugly"}


### Number of Sweaters
```ruby
def quantity
  @christmas_sweater_quantity = params[:number]
end
url: http://localhost:3000/quantity/8
```
Parameters: {"number"=>"8"}
Params are always the data type string


```ruby
def quantity
  @christmas_sweater_quantity = params[:number]
  if @christmas_sweater_quantity > 10
    @output = 'a drawerful'
  else
    @output = @christmas_sweater_quantity
  end
end
<h3>I have <%= @output %> christmas sweaters.</h3>
```


Parameters: {"sweaters"=>"snowman", "hoodies"=>"roudolph", "mittens"=>"snowflake"}

# Overview 3