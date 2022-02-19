# RESTFUL ROUTES
# CRUD Action Read
    $ rails new full_stack_app -d postgresql -T
    $ cd full_stack_app
    $ rails db:create
    $ rails g controller Herb
    $ rails g model Herb name:string watered:boolean 

## Index Method

### Controller
```ruby
def index
    @herbs = Herb.all
end
```
### Route
```ruby
get 'herbs' => 'herb#index'
```
### View
<h1> All herbs</h1>
<% @herbs.map do |value| %>
<%= value %>
<%end  %>

# _____________________
## Show Method
### Controller
```ruby
def show
dynamic_id = params[:id]
@herb = Herb.find(dynamic_id)
end
```

### Route
```ruby
get 'herbs/:id' => 'herb#show'
```

### View
<h1> Individual herbs</h1>
<%= @herb.name %>



# _____________________
## link_to
> some way to get to this url dynamically
> index.html.erb

    <h1> All herbs</h1>

    <% @herbs.map do |value| %>
        <%= link_to value.name, '' %>
    <%end  %>


```ruby
get '/herbs/:id' => 'herb#show', as: 'herb'
```
> index.html.erb
    <h1> All herbs</h1>

    <% @herbs.map do |value| %>
        <%= link_to value.name, herb_path(value) %>
    <%end  %>
# _____________________
# CRUD Action Create
## New Method
### Controller
```ruby
    def new
        @herb = Herb.new
    end
```
### Route
```ruby
    get '/herbs/new' => 'herb#new"
```
> this requires us to use the word "new" in our url to access this route. We can see that for the show method we are passing a symbol. 

> lets set up this route with the alias new_herb
```ruby
    get '/herbs/new' => 'herb#new', as: 'new_herb'
```

### View
> index.html.erb
    
<p><%= link_to 'Create a New Herb', new_herb_path%></p>

> new.html.erb
certainty 
<h2> Create a New Herb </h2>

<%= link_to 'Create a New Herb', new_herb_path%>

### FUTURE AUSTIN GO LOOK AT RECORDING AT NEW WHEN SARAH PULLS UP THE RAILS DOCS AND WRITES IN THE NEW DOCUMENTATION FORM_WITH MODEL ended up helping chelsea 


# _____________________

## Create Method
### Controller
```ruby
def create
    @herb = Herb.create(herb_params)
end
### Route
### View
```
> notes
We need something to happen when our user successfully posts something to our database.Becuase just staying on the same page with nothing isnt quite helpful
We can see that the index page is already updated so lets just leverage that in our favor.

### Controller (part two)
```ruby
if @herb.valid
    redirect_to herbs_path
else
    redirect_to new_herb_path
end
```
# _____________________

## Strong Params
```ruby
def herb_params
    params.require(:herb).permit(:name, :watered)
end
```


# _____________________
# CRUD Action Update
## Edit Method
is similar to new and create in that edit will require a form and a request to update the database.

### Controller
lets grab the code from show abeacus ewe are going to need a specific item we are editing.
```ruby
def edit
dynamic_id = params[:id]
@herb = Herb.find(dynamic_id)
end
```
### Route
```ruby
 get 'herbs/:id/edit' => 'herbs#edit', as: 'edit_herb'
```
### View
>edit.html.erb

    ~~Make double sure to watch this part in prep~~

    form_with model: @herb, method: :patch do |form|  
                                        ^

    copy and paste the for_with from new and update the names to edit

    we are not posting this request we are updating this request

> show.html.erb
<h1> Individual herbs</h1>
<%= @herb.name %>

<p><%= link_to 'Edit Herb', edit_herb_path(@herb) %></p>


# _____________________
## Destroy Update
### Controller
```ruby
def update
    dynamic_id = params[:id]
    @herb = Herb.find(dynamic_id)
    @herb.update(herb_params)
end
```
### Route
```ruby
    patch 'herbs/:id' => 'herb#update'
```
### View
### Controller (part two)
```ruby
def update
    dynamic_id = params[:id]
    @herb = Herb.find(dynamic_id)
    @herb.update(herb_params)
    if @herb.valid
        redirect_to herb_path(@herb)
    else
        redirect_to edit_herb_path(@herb <- maybe)
    end
end
```


# _____________________
# CRUD Action Delete
## Destroy Method
### Controller
### Route
### View