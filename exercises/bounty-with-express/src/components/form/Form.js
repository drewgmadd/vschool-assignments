import React, {Component} from "react";
import {connect} from "react-redux";

import {addData} from "../../redux/form";

import "./form.css";

class Form extends Component{
  constructor() {
    super();
    this.state = {
      title: "",
      lastName: "",
      handled: false,
      bountyAmount: 0,
      type: "Jedi"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.target.type === "checkbox" ?
    this.setState({handled: e.target.checked}):
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.bounties.bounties)
    this.props.addData(this.props.bounties);
    // this.setState({
    //   title: this.state.title
    // })
  }


  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="input" value={this.state.title} onChange={this.handleChange} name="titles" placeholder="first name"/>
        <input className="input" value={this.state.lastName} onChange={this.handleChange} name="lastName" placeholder="last name"/>
        <div className="input" >
          <span>Check if "taken care of"  </span>
          <input onChange={this.handleChange} name="living" type="checkbox"/>
        </div>
        <input className="input" onChange={this.handleChange} name="bountyAmount" type="bounty amount"/>
        <select className="input" onChange={this.handleChange} name="type">
          <option>Sith</option>
          <option>Jedi</option>
        </select>
        <button className="input">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {addData})(Form);
