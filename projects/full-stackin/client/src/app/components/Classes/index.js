import React, {Component} from "react";

import ClassForm from "./ClassForm";
import ClassList from "./ClassList";
import "./classes.css";

class Classes extends Component{
  render() {
    return (
      <div>
        <ClassForm/>
        <ClassList/>
      </div>
    )
  }
}

export default Classes;
