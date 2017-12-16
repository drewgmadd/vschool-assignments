import React, {Component} from "react";

import {connect} from "react-redux";

import NameGenerator from "./NameGenerator";
import GroupGenerator from "./GroupGenerator";
import Timer from "./Timer";

class TeachingTools extends Component {
  render() {
    return (
      <div>
        <NameGenerator/>
        <GroupGenerator/>
        <Timer/>
      </div>
    )
  }
}

export default connect(null, null)(TeachingTools);
