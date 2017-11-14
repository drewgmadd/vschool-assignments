import React, {Component} from "react";


class ColorChanger extends Component{
  constructor() {
    super();
    this.state = {
      backgroundColor: "red"
    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState(prevState => {

    })
  }
  render() {
    const styles = {
      width: "200px",
      height: "200px"
    }
    return (
      <div>
        <div style={this.state}></div>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}


export default ColorChanger;
