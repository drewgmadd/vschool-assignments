import React, {Component} from "react";

import {connect} from "react-redux";



import {addStudent, getStudents} from "../../../../../redux/classDetail";


class Student extends Component{
  constructor(){
    super();
    this.state = {
      name: {
        first: "",
        middle: "",
        last: ""
      }
    }
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.props.getStudents();
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleAddStudent(e) {
    this.props.addStudent(this.state);
    console.log(this.state);
  }
  render() {
    const studentsInClass = this.props.students.map(student=>{
      console.log(student.name.first)
      return (
        <h3 className="student" key={student._id}>{student.name.first} {student.name.last}</h3>
      )
    })
    return (
      <div>
        <input type="text"
          value={this.state.name.first}
          name="first"
          onChange={this.handleChange}
          placeholder="Add a name here"/>
        <input type="text"
          value={this.state.name.last}
          name="last"
          onChange={this.handleChange}
          placeholder="last name"/>
        <button onClick={this.handleAddStudent}>Add Student</button>
        {studentsInClass}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {addStudent, getStudents})(Student);
