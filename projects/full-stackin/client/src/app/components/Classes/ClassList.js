import React, {Component} from "react";
import {connect} from "react-redux";

import {getClasses, addClass} from "../../../redux/classes";

class ClassList extends Component{
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
componentDidMount() {
  this.props.getClasses();
  console.log(this.state.classes);
}
handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}
handleSubmit(e) {
  console.log(this.props.classes)
  e.preventDefault();
  this.props.addClass(this.state);
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
          placeholder="Number of Students"/>
        <button>Submit Class</button>
      </form>
    )
  }
}
function mapStatetoProps(state) {
  return state;
}

export default connect(mapStatetoProps, {getClasses, addClass})(ClassList);
