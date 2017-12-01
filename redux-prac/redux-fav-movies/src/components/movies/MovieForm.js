import React, {Component} from "react";
import {addMovie} from "../../redux/movies";
import {connect} from "react-redux";

class MovieForm extends Component{
  constructor() {
    super();
    this.state = {
      movie: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addMovie(this.state);
    this.setState({
      movie: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          value={this.state.movie}
          placeholder="Movie Title Here"
          name="movie"
          onChange={this.handleInput}/>
        <button>Add Movie</button>
      </form>
    )
  }
}

export default connect(null, {addMovie})(MovieForm);
