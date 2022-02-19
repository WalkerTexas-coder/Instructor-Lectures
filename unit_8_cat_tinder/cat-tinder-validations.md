# Valdiations 



## TDD
Write a meaningful Test

```Ruby
RSpec.describe Cat, type: :model do
  it "should validate name" do
    cat = Cat.create
    # If cat's name field is empty throw an error
    expect(cat.errors[:name]).to_not be_empty
  end
end
```

Watch it fail in the ways we need it too.


```Ruby
1 example, 1 failure

Failures:

  1) Cat should validate name
     Failure/Error: expect(cat.errors[:name]).to_not be_empty
       expected `[].empty?` to return false, got true
```


Then we will write the validation that checks for the presence of the symbol we are passing


```Ruby
class Cat < ApplicationRecord
  validates :name, presence: true
end
```


```Ruby
it "doesn't create a cat without a name" do
   cat_params = {
     cat: {
       age: 2,
       enjoys: 'Walks in the park',
       image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
     }
   }
   # Send the request to the  server
   post '/cats', params: cat_params
   # expect an error if the cat_params does not have a name
   expect(response.status).to eq 422
   # Convert the JSON response into a Ruby Hash
   json = JSON.parse(response.body)
   # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
   expect(json['name']).to include "can't be blank"
end
```


```Ruby
Failures:

  1) Cats does not create a cat without a name
     Failure/Error: expect(response.status).to eq 422

      expected: 422
          got: 200

      (compared using ==)
    # ./spec/requests/cats_request_spec.rb:40:in `block (2 levels) in <main>'
```


```Ruby
def create
  cat = Cat.create(cat_params)
  if cat.valid?
    render json: cat
   else
     render json: cat.errors, status: 422
   end
end
```