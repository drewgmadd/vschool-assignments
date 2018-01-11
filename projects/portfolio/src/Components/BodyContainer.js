import React from "react";
import Intro from "./Intro";
import Description from "./Description";
import "./body.css";

function BodyContainer() {

  return (
    <div className="body-container">
      <Intro/>
      <Description/>
    </div>
  )
}

export default BodyContainer;
