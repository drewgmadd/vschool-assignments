import React, {Component} from "react";

class Score extends Component{

  render(props) {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.props.game}</h2>
      </div>
    )
  }
}

export default Score;
