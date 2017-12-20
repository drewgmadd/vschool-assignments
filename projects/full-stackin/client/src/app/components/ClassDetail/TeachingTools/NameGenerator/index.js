import React, {Component} from "react";

import {connect} from "react-redux";

import {getStudents} from "../../../../../redux/classDetail";

class NameGenerator extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
    this.handleGenerateName = this.handleGenerateName.bind(this);
  }
  componentDidMount() {
    this.props.getStudents();
  }
  handleGenerateName(e) {
    console.log(this.props.students);
    let randomIndex = Math.floor(Math.random()*this.props.students.length);
    console.log(randomIndex);
    return console.log(this.props.students[randomIndex].name.first)
  }
  render() {
    return (
      <div className="name-generator">
        <h3 className="name-title">Random Name Generator</h3>
        <button
          className="name-button"
          onClick={this.handleGenerateName}>Click for Random Student</button>


      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getStudents})(NameGenerator);
