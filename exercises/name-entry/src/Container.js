import React, {Component} from "react";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      currentName: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(event) {
    this.setState({name: event.target.value})
  }
  handleSubmit() {
    this.setState({currentName: this.state.name})
    console.log(this.state.name)
  }
  render() {
    return (
      <div>
        <input onChange={this.updateInput}/>
        <button onClick={this.handleSubmit}>Submit</button>
        <h1>{this.state.currentName}</h1>
      </div>
    )
  }
}

export default Container;
