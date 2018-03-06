import React from "react";

import Title from "./title/";
import Intro from "./intro/";
import Projects from "./projects/";
import Contact from "./contact/";


function Main() {
  return (
    <div>
      <Title/>
      <Intro/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Main;
