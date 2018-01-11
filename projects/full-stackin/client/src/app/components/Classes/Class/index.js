import React, {Component} from "react";

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {updateClass, getClasses} from "../../../../redux/classes";



class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.oneclass.title,
      grade: this.props.oneclass.grade,
      numberOfStudents: this.props.oneclass.numberOfStudents
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick(e) {
    console.log(this.state.grade, this.props.oneclass._id)
    this.props.updateClass(this.props.oneclass._id, this.state.grade);
  }


  render(){
    return (
      <div className="class-card">
        <h1 className="class-title">{this.props.oneclass.title}</h1>
        <h3 className="grade-title">Grade: {this.props.oneclass.grade}</h3>
        <input
          className="grade-input"
          name="grade"
          value={this.state.grade}
          onChange={this.handleChange}/>
        <button
          onClick={this.handleClick}
        >Change Grade</button>
        <h3>Number of Students: {this.props.oneclass.numberOfStudents}</h3>
        <button onClick={()=>this.props.removeClass(this.props.oneclass._id)}>Remove Class</button>
        <Link className="class-link" to="/class-detail">Go to Class Page</Link>
      </div>
  )}
}
function mapStatetoProps(state) {
  return state;
}
export default connect(mapStatetoProps, {updateClass, getClasses})(Class);
