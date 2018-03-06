import React from "react";
import {Link} from "react-router-dom";

function Resume() {
  return (
    <div className="resume">
      <Link to="/">Back</Link>
      <i className="fas fa-arrow-alt-circle-down"></i>
      <div className="resume-image"></div>
    </div>
  )
}

export default Resume;
