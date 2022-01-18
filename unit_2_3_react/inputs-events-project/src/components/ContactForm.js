import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        contactName: "",
        contactEmail: "",
        phoneNumber: "",
      },
    };
  }
  handleChange = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
handleSubmit = (e) => {
  e.preventDefault()
this.props.handleFormSubmit(this.state.form)
}
  render() {
    console.log(this.state.form);
    return (
      <form>
        <label> Hey I want your Name! </label>
        <input
          type="text"
          name="contactName"
          value={this.state.form.contactName}
          onChange={this.handleChange}
        />
        <br />
        <label> Whats your email?</label>
        <input
          type="text"
          name="contactEmail"
          value={this.state.form.contactEmail}
          onChange={this.handleChange}
        />
        <br />
        <label> Whats your Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={this.state.form.phoneNumber}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" 
        value="Submit" 
        onClick={this.handleSubmit} />
      </form>
    );
  }
}
