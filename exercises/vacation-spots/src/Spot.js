import React from "react";

function Spot(props) {
  const styles = {
    height: "200px",
    width: "250px",
    backgroundColor: props.background,
    display: "inline-block",
    margin: "15px",
    verticalAlign: "top",
    border: "2px solid black",
    borderRadius: "10px"
  }
  return (
    <div style={styles} className="block">
      <h2>Location: {props.location}</h2>
      <h3>Price: {props.price}</h3>
      <h3>Time to go: {props.timeToGo}</h3>
      <h3>{props.priceSymbols}</h3>
    </div>
  )
}

export default Spot;
