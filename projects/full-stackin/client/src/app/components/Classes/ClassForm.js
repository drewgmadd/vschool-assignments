import React, {Component} from "react";
import {connect} from "react-redux";

import {addClass} from "../../../redux/classes";

class ClassForm extends Component{
constructor() {
  super();
  this.state = {
    title: "",
    grade: 0,
    numberOfStudents: 0,
    classes: []
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
  this.props.addClass(this.state);
  this.setState({
    title: "",
    grade: 0,
    numberOfStudents: 0,
    classes: []
  })
}


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
          type="text"
          placeholder="Class title"/>
        <input
          value={this.state.grade}
          onChange={this.handleChange}
          name="grade"
          type="number"
          placeholder="Grade"/>
        <input
          value={this.state.numberOfStudents}
          onChange={this.handleChange}
          name="numberOfStudents"
          type="number"
          placeholder="Number of Students"/>
        <button>Submit Class</button>
      </form>
    )
  }
}
function mapStatetoProps(state) {
  return state;
}

export default connect(mapStatetoProps, {addClass})(ClassForm);
