import React from "react";
import {Switch, Route} from "react-router-dom";

import LandingPage from "./LandingPage";
import Classes from "./Classes";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/classes" component={Classes}/>
    </Switch>
  )
}
