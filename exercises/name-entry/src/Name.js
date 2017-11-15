import React from "react";

function Name(props) {
  return (
    <div>
      <li>{props.name}</li>
      <button onclick={props.delete}>X</button>
    </div>
  )
}

export default Name;
