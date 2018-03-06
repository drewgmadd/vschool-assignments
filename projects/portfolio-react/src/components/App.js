import React from "react";
import {Switch, Route} from "react-router-dom";

import "./app.css";
import Main from "./main";
import Resume from "./resume";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/resume" component={Resume}/>
      </Switch>
    </main>

  )
}

export default App;
