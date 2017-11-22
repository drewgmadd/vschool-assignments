import React, {Component} from "react";
import Score from "./Score";
import {FormGroup, FormControl} from "react-bootstrap";
import "./app.css";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      game: "",
      date: "",
      score: 0,
      isMessage: false,
      scores: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    if (e.target.type === "checkbox") {
      this.setState({isMessage: e.target.checked})
    } else {
      this.setState({[e.target.name]: e.target.value})
    }
  }
  trashTalk(e) {
    const phrases = ["No good!", "Next!", "afadsd"];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState=>{
      let trash = this.trashTalk();
      if (!this.state.isMessage) {
        trash = "";
      }
      prevState.scores.push({
        name: prevState.name,
        game: prevState.game,
        date: prevState.date,
        score: prevState.score,
        isMessage: prevState.isMessage,
        talkTrash: trash
      })
      return {scores: prevState.scores};
    });
  }
  render(){
    let display = this.state.scores.map((score, index)=>{
      return <Score key={score + index} score={score}/>
    })
    return (
      <div>
      <FormGroup className="form">
        <h1 className="title">Game Tracker</h1>
          <FormGroup className="nameRow row">
            <span>Name: </span><FormControl name="name" onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup className="gameRow row">
            <span>Game: </span><FormControl name="game" onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup className="dateRow row">
            <span>Date Played: </span><FormControl type="date" name="date" onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup className="scoreRow row">
            <span>Score Acheived: </span><FormControl type="number" name="score" onChange={this.handleInputChange}/>
          </FormGroup>
          <FormGroup className="messageRow row">
            <span>Display Message?</span><FormControl type="checkbox" onChange={this.handleInputChange}/>
          </FormGroup>
          <button className="row" onClick={this.handleSubmit}>Post</button>
      </FormGroup>
      {display}
    </div>
    )
  }
}

export default Form;
