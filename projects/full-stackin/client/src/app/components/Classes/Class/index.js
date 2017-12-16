import React, {Component} from "react";

import {connect} from "react-redux";
import {Link} from "react-router-dom";



class Class extends Component {
  constructor(props) {
    super(props);
    console.log(props, "props")
    // this.state = {
    //   class: {props}
    // }
  }



  render(){
    console.log(this.props.oneclass._id, "id")
    return (
      <div className="class-card">
        <h1>{this.props.oneclass.title}</h1>
        <h3>Grade: {this.props.oneclass._id}</h3>
        <h3>Number of Students: {this.props.oneclass.numberOfStudents}</h3>
        <button onClick={()=>this.props.removeClass(this.props.oneclass._id)}>Remove Class</button>
        <Link to="/class-detail">Go to Class Page</Link>
      </div>
  )}
}
function mapStatetoProps(state) {
  return state;
}
export default connect(mapStatetoProps, null)(Class);
