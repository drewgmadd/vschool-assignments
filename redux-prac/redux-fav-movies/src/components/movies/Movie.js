import React, {Component} from "react";
class Movie extends Component{
  render() {
    return (
      <div>
        <li>{this.props.movie}</li>
        <button>delete</button>
      </div>
    )
  }
}

export default Movie;
