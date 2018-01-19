import React, {Component} from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {getClasses, removeClass} from "../../../redux/classes";

import Class from "./Class";

class ClassList extends Component{
constructor() {
  super();
  this.state = {
    classes: []
  }
}
componentDidMount() {
  this.props.getClasses()
}


  render() {
    const classes = JSON.parse(localStorage.getItem("classes")).map(oneClass=>{
      return (
        <Class
          key={oneClass._id}
          oneclass={oneClass}
          removeClass={this.props.removeClass}/>
      )
    })
    return (
      <div>
        {classes}
        <Link to="./">Back</Link>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {getClasses, removeClass})(ClassList);
