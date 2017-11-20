import React, {Component} from "react";

class Information extends Component{
constructor(props) {
  super(props);
  this.state = {
    handleText: ""
  }
  // this.handleCheck = this.handleCheck.bind(this);
}
// handleCheck() {
//     this.setState((prevstate)=>{
//       if (this.handle.checked) {
//         return {handleText: "Handled"}
//       }
//     })
//   }

  render() {
    return (
      <div>
      <h5>Check box if "taken care of"</h5>
      <input value="checked" name="handle" onChange={this.handleCheck} type="checkbox"/>
      <h2>{this.state.handleText}</h2>
    </div>
    )
  }
}

export default Information;
