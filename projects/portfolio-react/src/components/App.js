import React from "react";

import "./app.css";
import Title from "./title/";
import Intro from "./intro/";
import Projects from "./projects/";
import Contact from "./contact/";

function App() {
  return (
    <main>
      <Title/>
      <Intro/>
      <Projects/>
      <Contact/>     
    </main>

  )
}

export default App;
