import React, {Component} from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      game: "",
      date: "",
      score: 0,
      message: "false"
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    // const target = e.target;
    // const value = target.type === "checkbox" ? target.checked: target.value;
    this.setState({[e.target.name]: e.target.value})

  }
  render(){
    return (
      <form>
        <div>
          <span>Name: </span><input name="name" onChange={this.handleInputChange} value={this.state.name}/>
        </div>
        <div>
          <span>Game: </span><input name="game" onChange={this.handleInputChange} value={this.state.game}/>
        </div>
        <div>
          <span>Date Played: </span><input type="date" name="date" onChange={this.handleInputChange} value={this.state.date}/>
        </div>
        <div>
          <span>Score Acheived: </span><input name="score" onChange={this.handleInputChange} value={this.state.score}/>
        </div>
        <div>
          <span>Display Message?</span><input type="checkbox"/>
        </div>
      </form>
    )
  }
}

export default Form;
