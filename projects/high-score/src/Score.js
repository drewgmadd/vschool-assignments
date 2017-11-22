import React from "react";
import "./score.css";

function Score(props) {
  return (
    <div className="box">
      <h1 className="text">Name: {props.score.name}</h1>
      <h3 className="text">Game: {props.score.game}</h3>
      <h3 className="text">score: {props.score.score}</h3>
      <h3 className="text">Date: {props.score.date}</h3>
      <h3 className="text">Trash Talk: {props.score.talkTrash}</h3>
      <button className="btn">delete</button>
    </div>
  )
}

export default Score;
