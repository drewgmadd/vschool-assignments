import React, {Component} from "react";
import {connect} from "react-redux";

import {getStudents} from "../../../../../redux/classDetail";

class GroupGenerator extends Component {
  constructor() {
    super();
    this.state = {
      stuents: [],
      groupSize: 2,
      showGroups: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleMakeGroup = this.handleMakeGroup.bind(this);
  }
  componentDidMount(){
    this.props.getStudents();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleMakeGroup(e) {
    let groupSize = this.state.groupSize
    console.log(groupSize);
  }
  render() {
    return (
      <div className="group-generator">
        <h3 className="group-title">Random Group Generator</h3>
        <p className="group-question">How many per group?</p>
        <input
          className="group-input"
          value={this.state.groupSize}
          name="groupSize"
          type="number"
          onChange={this.handleChange}/>
        <button onClick={this.handleMakeGroup}>Click to make groups</button>
        <ul>

        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getStudents})(GroupGenerator);
