import React, {Component} from "react";

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
  // this.props.getClasses();
  console.log(this.props.classes);
}

// componentWillUpdate() {
//   this.setState({
//     classes: this.props.getClasses()
//   })
// }
  render() {
    const classes = this.props.classes.map(oneClass=>{
      return (
        <Class
          key={oneClass._id}
          oneclass={oneClass}
          removeClass={this.props.removeClass}/>
      )
    })
    console.log(this.props.classes)

    return (
      <div>
        {classes}
      </div>
    )
  }
}
function mapStatetoProps(state) {
  return state;
}

export default connect(mapStatetoProps, {getClasses, removeClass})(ClassList);
