import React, { Component} from 'react'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ""
    }
  }
  handleChange = (e) => {

    this.setState({userInput: e.target.value})
  }

  render(){
    console.log(this.state.userInput)
    // destructering userInput from the state object
    const { userInput } = this.state
  return (
    <>
      <h1>Hello World</h1>
      <input 
        type="text"
        //we could have an input with a value of something like" hey check out this input" But then it woudl be useless
        // Instead what we should do is have our input represent what data we are keeping track of for our user
        value={userInput}
        //the way we take in data and store i is an atrribute often called onChange which listens for any changes and does something with them-- anything we want. 
        onChange={this.handleChange}
      />
      


      <p>{userInput}</p>

      <h1>{userInput.split("")}</h1>
      
        
      <h1>{userInput.length}</h1>
      
    </>
  );
}
}

export default App;
