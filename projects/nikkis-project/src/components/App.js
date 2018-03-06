import React from "react";
import {Switch, Route} from "react-router-dom";

import NicuGraphic from "./topGraphic/NicuGraphic";
import Links from "./links/";
import Background from "./background/";
import Methods from "./methods/";
import Results from "./results/";
import Discussion from "./discussion/";
import "./app.css";

function App() {
  return (
    <main>
      <NicuGraphic/>
      <Links/>
      <Switch>
        <Route path="/background" component={Background}/>
        <Route path="/methods" component={Methods}/>
        <Route path="/results" component={Results}/>
        <Route path="/discussion" component={Discussion}/>
      </Switch>
    </main>
  )
}

export default App;
