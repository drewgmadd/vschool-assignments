import React from "react";
import {Link} from "react-router-dom";

import "./landingPage.css";

function LandingPage(){
  return (
    <div className="landingBlock">
      <img className="apple" src="http://sweetclipart.com/multisite/sweetclipart/files/apple_red_1_clipart.png" alt="An apple"/>
      <Link className="enter" to="/classes">Enter</Link>
    </div>
  )
}

export default LandingPage;
