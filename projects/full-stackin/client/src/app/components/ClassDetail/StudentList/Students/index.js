import React, {Component} from "react";

import {connect} from "react-redux";



import {getStudents} from "../../../../../redux/classDetail";


class Student extends Component{
  constructor(){
    super();
    this.state = {}
  }
  componentDidMount(){
    this.props.getStudents();
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
        {studentsInClass}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getStudents})(Student);
