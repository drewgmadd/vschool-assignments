import React, {Component} from "react";

import {connect} from "react-redux";

import {getStudents} from "../../../../../redux/classDetail";

class NameGenerator extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      showName: false
    }
    this.handleGenerateName = this.handleGenerateName.bind(this);
  }
  componentDidMount() {
    this.props.getStudents();
  }
  handleGenerateName(e) {
    this.setState({
      showName: true
    })
  }
  render() {
    let randomIndex = Math.floor(Math.random()*this.props.students.length);
    let displayName = this.state.showName?<h3 className="name-display">{this.props.students[randomIndex].name.first}</h3>:null

    return (
      <div className="name-generator">
        <h3 className="name-title">Random Name Generator</h3>
        <button
          className="name-button"
          onClick={this.handleGenerateName}>Click for Random Student</button>
        {displayName}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getStudents})(NameGenerator);
