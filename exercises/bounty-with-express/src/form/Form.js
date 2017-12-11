import React, {Component} from "react";

class Form extends Component{
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      living: true,
      bountyAmount: 0,
      type: "Jedi"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.firstName)
    this.setState({
      firstName: this.state.firstName
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="firstName" placeholder="first name"/>
        <input onChange={this.handleChange} name="lastName" placeholder="last name"/>
        <span>Check if "taken care of"</span>
        <input onChange={this.handleChange} name="living" type="checkbox"/>
        <input onChange={this.handleChange} name="bountyAmount" type="bounty amount"/>
        <select onChange={this.handleChange} name="type">
          <option>Sith</option>
          <option>Jedi</option>
        </select>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
