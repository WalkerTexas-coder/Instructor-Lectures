RECAP: Where are we at? 
We have a front end that has visualization and functionality of creating and potentially updating cats. This front end is built in react.
We also have a back end complete with a database , endpoints and validations. Our api has full crud functionality. It's built in Rails. What we need to do today is connect these two pieces.

fetch : the tool we use to make requests from our front end  to our back end api. FETCH is a method that takes an argument of a url or some kin dof location: it also can take information with it of a package of data.  it starts a request to wherever we send it and returns a promise to us. immediately the returned promise is "pending"

Promise: a promise is a JavaScript object that can be in one of three states.
- The promise starts as pending 
- can become fulfilled-- Meaning we received a payload of data
- can become rejected-- something about our fetch was rejected


```javascript
readCat = () => {
    
}

createCat = (newCat) => {
    console.log(newCat)
}

updateCat = (editCat, id) => {
    console.log(editCat)
}

deleteCat = (id) => {
    console.log(id)
}
```


```javascript
constructor(props){
  super(props)
  this.state = {
    // remove the mock cats and start with an empty array
    cats: []
  }
}

componentDidMount(){
  this.readCat()
}
```

//what we need to do is set up our fetch to "hit" our api endpoint of index and since our backend will be running on localhost 3000 we'll want 3000/ ... what?
```javascript
readCat = () => {
    
    fetch("http://localhost:3000/cats") // <-- this is the request


    .then(response => response.json())
    .then(catArray => this.setState({cats : catArray}))
    // from here we are going to handle our errors, for now we are just  
    .catch(errors => console.log("Cat read errors", errors))
}
```

whats going to be different is that in our fetch request  we are going to pass two arguments 
   > fetch(argument1, argument2)
    like last time the the first argument will be the url the request should go too, but the second argument is going to be an object with all the information we need. Becuase if we are going to create a cat in our database we have to send that cat over from this side-- on top of that we have to let the API know what kind of information it should be getting and what to do with the information. So our object is going to have three keys Body, Headers, and Method. 

```javascript
createCat = (newCat) => {
    
  fetch("http://localhost:3000/cats", {
   // Body will have our new cat/ our cat_params but we are going to set it up with JSON
    body: JSON.stringify(newCat),
       // headers: if you remeber in post man we had to add in headers-- the key value pairs of content type and application json. We are going to do the same thing here so headers will be an object with those key values
    headers: {
      "Content-Type": "application/json"
    },
        // method is the HTTP verb that we want our endpoint to associate with the data we are sending over so we can hit the correct endpoint
    method: "POST"
  })
  .then(response =>  response.json())
  // when we are thinking about this payload-- theres nothing really that we should be getting back. this request has been sent to update the database. So this payload isn't really important to us but we can use it to refeesh our data. 
  .then(payload => this.readCat())

  .catch(errors => console.log("Cat create errors:", errors))
}

updateCat = (cat, id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    // converting an object to a string
    body: JSON.stringify(cat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "PATCH"
  })
  .then(response =>  response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("Cat update errors:", errors))
}

deleteCat = (id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("delete errors:", errors))
}
```