import React, {Component} from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import NameGenerator from "./NameGenerator";
import GroupGenerator from "./GroupGenerator";
import Timer from "./Timer";
import "./teachingTools.css";

class TeachingTools extends Component {
  render() {
    return (
      <div>
        <NameGenerator/>
        <GroupGenerator/>
        <Timer/>
        <Link className="back" to="/classes">Back</Link>
      </div>
    )
  }
}

export default connect(null, null)(TeachingTools);
