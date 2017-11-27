import React, {Component} from "react";
import ColorBlock from "./ColorBlock";
import axios from "axios";

class Color extends Component {
constructor() {
  super();
  this.state = {
    color: ''
  }
}
componentDidUpdate() {
  axios.get("http://www.colr.org/json/color/random").then(response => {
    this.setState({color: response.data})
  })
}
  render(){
  return (
    <div>
      <h1>Hello</h1>
      <ColorBlock/>
    </div>
  )
}
}

export default Color;
