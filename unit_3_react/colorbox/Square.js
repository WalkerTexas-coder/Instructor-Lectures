import React, { Component } from "react";
const colors = ["white", "red", "blue", "green", "yellow", "black"]
const squareName = "Square "
export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
 
  changeNumber =() => {
      this.setState({ number: Math.floor(Math.random() * 6)});
  }
  

  render() {
    return (
      
        <div
          className={squareName + colors[this.state.number]}
          onClick={this.changeNumber}
        >
          <h1>COLOR BOX</h1>
        </div>
     
    );
  }
}
