import React, { Component} from 'react'
import './App.css';
import ContactForm from './components/ContactForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      form: null
    }
  }
 handleFormSubmit = (newContact) => {
   this.setState({ form: newContact })
 }
  render(){
    
  return (
    <>
      <h1>Hello World</h1>
      <ContactForm handleFormSubmit={this.handleFormSubmit} />
      {this.state.form && (
        <div>
          <p>Contact Name {this.state.form.contactName}</p>
          <p>Contact Email {this.state.form.contactEmail}</p>
          <p>Contact Number {this.state.form.phoneNumber}</p>
        </div>
      )}
    </>
  );
}
}

export default App;
