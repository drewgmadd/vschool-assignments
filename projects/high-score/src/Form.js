import React, {Component} from "react";
import Score from "./Score";
import {FormGroup, FormControl} from "react-bootstrap";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      game: "",
      date: "",
      score: 0,
      message: false,
      scores: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    if (e.target.type === "checkbox") {
      this.setState({message: e.target.checked})
    } else {
      this.setState({[e.target.name]: e.target.value})
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: this.state.name,
      game: this.state.game
    })
  }
  render(){
    return (
      <FormGroup>
          <FormGroup>
            <span>Name: </span><FormControl name="name" onChange={this.handleInputChange} value={this.state.name}/>
          </FormGroup>
          <FormGroup>
            <span>Game: </span><FormControl name="game" onChange={this.handleInputChange} value={this.state.game}/>
          </FormGroup>
          <FormGroup>
            <span>Date Played: </span><FormControl type="date" name="date" onChange={this.handleInputChange} value={this.state.date}/>
          </FormGroup>
          <FormGroup>
            <span>Score Acheived: </span><FormControl type="number" name="score" onChange={this.handleInputChange} value={this.state.score}/>
          </FormGroup>
          <FormGroup>
            <span>Display Message?</span><FormControl type="checkbox" onChange={this.handleInputChange}/>
          </FormGroup>
          <button onClick={this.handleSubmit}>Post</button>
        <Score text={this.state.name} game={this.state.game}/>
      </FormGroup>
    )
  }
}

export default Form;
