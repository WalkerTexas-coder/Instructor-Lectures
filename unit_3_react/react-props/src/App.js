import React, { Component } from 'react'
import FlashCard from './components/FlashCard'
import './App.css'

class App extends Component {
  //part one of our class is our constructor which holds our state object
  constructor(props){
    super(props)
    this.state = {
      animalsArray : ["Pandas","Ligers","Black Panthers", "cheetah", "Spider", "Kookaburra", "Wolf", "manBearPig", "Giraffe"],
      randimal: 0
    }
  }

  // part two of our react class is our methods which processes logic for us when they are called
  handleClick = () => {
  //finding the length of the array
  let length = this.state.animalsArray.length
  // creating a random number that uses the lengbth of the array for use later
  let randomNum = Math.floor(Math.random() * length)
  // saves the number in state by overwriting the key:value pair randimal
  this.setState({randimal: randomNum})
}

  // part three of our class is our render method that returns JSX to us so we can display something to our user. We'll use this method to call our component and pass data to it. 
  render() {
    return (
      <>
        {/* {this.state.animalsArray.map(value=>{
         return <FlashCard superman={value}/>
       })} */}

        {/* A react component call is special in that it can take custom attributes called props. These attributes become part of the compononets object. Props can be dynamic or static.*/}
        
          <FlashCard
            superman={this.state.animalsArray[this.state.randimal]}
            click={this.handleClick}
          />
          <FlashCard
            superman={this.state.animalsArray[this.state.randimal]}
            click={this.handleClick}
          />
      </>
    );
  }
}
export default App