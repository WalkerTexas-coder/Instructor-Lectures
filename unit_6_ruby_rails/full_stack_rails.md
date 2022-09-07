# RESTFUL ROUTES
# CRUD Action Read
    $ rails new full_stack_app -d postgresql -T
    $ cd full_stack_app
    $ rails db:create
    $ rails g controller Hike
    $ rails g model Hike name:string description:string hiked:boolean 

## Index Method

### Controller
  ```ruby
  def index
      @hikes = Hike.all
  end
  ```
### Route
  ```ruby
  get 'hikes' => 'hike#index'
  ```
### View
  <h1> All hikes</h1>
  <% @hikes.map do |value| %>
    <%= value %>
  <% end %>

# _____________________
## Show Method
### Controller
  ```ruby
  def show
  dynamic_id = params[:id]
  @hike = Hike.find(dynamic_id)
  end
  ```

### Route
  ```ruby
  get 'hikes/:id' => 'hike#show'
  ```

### View
  /index.html.erb
  ```html
  <h1> Let's go on a hike </h1>
  <%= @hike.name %>
  <%= @hike.description %>
  have you been on this hike? 
  <%= @hike.hiked %>
```


# _____________________
## link_to
> some way to get to this url dynamically
> index.html.erb

    <h1> All Hiking trails</h1>

    <% @hikes.map do |value| %>
        <%= link_to value.name, "hikes/#{value.id}" %>
    <% end  %>

### routes.rb update with alias "as"
```ruby
get 'hikes' => 'hike#index', as: 'hikes'
get 'hikes/:id' => 'hike#show', as: 'hike'
```

to use the alias we append the rails built in keyword _path

> index.html.erb
```html
    <h1> All hikes</h1>

    <% @hikes.map do |value| %>
        <%= link_to value.name, hike_path(value) %>
    <%end  %>
```
> show.html.erb
```html
  <h1> Let's go on a hike </h1>
  <%= @hike.name %>
  <%= @hike.description %>
  have you been on this hike? 
  <%= @hike.hiked %>
  <%= link_to 'back to all hikes', hikes_path %>

```
# _____________________
# CRUD Action Create
## New Method
### Controller
```ruby
    def new
    end
```
### Route
```ruby
    get '/hikes/new' => 'hike#new"
```
> this requires us to use the word "new" in our url to access this route. We can see that for the show method we are passing a symbol. 

> lets set up this route with the alias new_hike
```ruby
    get '/hikes/new' => 'hike#new', as: 'new_hike'
```

### OLD View
> index.html.erb
    
<p><%= link_to 'Create a New Hike', new_hike_path%></p>

> new.html.erb
certainty 


 <h3>Add a New Hike</h3> 
 <%= form_with url: '/hikes', local: true do |form| %> 

   <%= form.label :name %> 
   <%= form.text_field :name %> 

   <br> %>
   <%= form.label :description %> 
   <%= form.text_field :description %> 

   <br> %>
   <%= form.submit 'Add Hike' %> 
 <% end %> 



# _____________________

## Create Method
### Controller
```ruby
def create
    @hike = Hike.create(
      name: params[:title],
      description: params[:content]
    )
end
### Route
### View
```
> notes
We need something to happen when our user successfully posts something to our database. Becuase just staying on the same page with nothing isn't quite helpful
We can see that the index page is already updated so lets just leverage that in our favor.
I want to set up a condtional that looks at the data we are sending into our database and responds accordingly. If the data is valid according to my model validations then send me over to the index page if it's not then bring me back to this new page.

### Controller (part two)
```ruby
if @hike.valid
    redirect_to hikes_path
else
    redirect_to new_hike_path
end
```
# _____________________


## Strong Params
### Private method
are methods defined under the private keyword. Private methods can only be used within the class definition; they’re for internal usage. The only way to have external access to a private method is to call it within a public method. so the private method splits the class in two. everything above it can be seen by things outside of this class explictly and and anything inside it can only be seen by other methods in the class.


```ruby
  private

def hike_params
    params.require(:hike).permit(:name, :description)
end
```

## Update Create Method

```ruby
def create
  @hike = Hike.create(hike_params)
  if @hike.valid?
    redirect_to hikes_path
  else
    redirect_to new_hike_path
  end
end
```
## SHare error that we get in server when we try to submit new hikes


## Update New
we are going to use the keyword new to instantiate a blank hash of our class that we can fill in the value for and call on that hash in our form.

```ruby
  def new
    @hike = Hike.new
  end
```

new.html.erb
```
<%= form_with model: @hike do |form| %> 

   <%= form.label :name %> 
   <%= form.text_field :name %> 

   <br> %>
   <%= form.label :description %> 
   <%= form.text_field :description %> 

   <br> %>
   <%= form.submit 'Add Hike' %> 
 <% end %> 
 ```

 ### Trouble shoot and chillin'



# _____________________
# CRUD Action Update
## Edit Method
is similar to new and create in that edit will require a form and a request to update the database.

### Controller
lets grab the code from show because we are going to need a specific item we are editing.

```ruby
def edit
  @hike = Hike.find(params[:id])
end
```
### Route
```ruby
 get 'hikes/:id/edit' => 'hikes#edit', as: 'edit_hike'
```

### View
>edit.html.erb

    ~~Make double sure to watch this part in prep~~

    form_with model: @hike, method: :patch do |form|  
                                        ^

    copy and paste the for_with from new and update the names to edit

    we are not posting this request we are updating this request

    This works without the method patch as of right now but it might be a thing to trouble shoot with students.

> show.html.erb
<h1> Individual hikes</h1>
<%= @hike.name %>

<p><%= link_to 'Edit Hike', edit_hike_path(@hike) %></p>


# _____________________
## Update method
### Controller
```ruby
def update
    dynamic_id = params[:id]
    @hike = Hike.find(dynamic_id)
    @hike.update(hike_params)
end
```
### Route
```ruby
    patch 'hikes/:id' => 'hike#update'
```
### View
### Controller (part two)
```ruby
def update
    dynamic_id = params[:id]
    @hike = Hike.find(dynamic_id)
    @hike.update(hike_params)
    if @hike.valid
        redirect_to hike_path(@hike)
    else
        redirect_to edit_hike_path(@hike <- maybe)
    end
end
```


# _____________________
# CRUD Action Delete
## Destroy Method
The destroy method should remove an item for our database but only after a prompt to keep it a bit more safe 
### Controller
```ruby
  def destroy
    @hike = Hike.find(params[:id])
    
    if @hike.destroy
     redirect_to hikes_path
    end
  end
```
### Route
```ruby
delete 'exercises/:id' => 'exercise#destroy', as: 'delete_exercise'
```
### View
<%= button_to 'Delete item', delete_hike_path(@exercise), method: :delete, form: { data: { 'turbo-confirm': 'Are you sure?' } } %>