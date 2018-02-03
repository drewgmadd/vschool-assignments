import React from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "./navbar";
import About from "./about";
import Build from "./build";
import Contact from "./contact";
import "./app.css";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/build" component={Build}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  )
}

export default App;
