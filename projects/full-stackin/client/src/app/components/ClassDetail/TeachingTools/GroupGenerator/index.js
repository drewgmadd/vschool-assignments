import React, {Component} from "react";

class GroupGenerator extends Component {
  constructor() {
    super();
    this.state = {
      groupSize: 2
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>How many per group?</p>
        <input
          value={this.state.groupSize}
          name="numPerGroup"
          type="number"/>
        <ul>

        </ul>
      </div>
    )
  }
}

export default GroupGenerator;
