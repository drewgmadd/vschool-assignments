import React from "react";

function Movie(props) {
  return (
    <div>
      <li>{props.movie}</li>
      <button>delete</button>
    </div>
  )
}

export default Movie;
