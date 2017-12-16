import React from "react";
import {Switch, Route} from "react-router-dom";

import LandingPage from "./LandingPage";
import Classes from "./Classes";
import ClassDetail from "./ClassDetail";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/classes" component={Classes}/>
      <Route path="/class-detail" component={ClassDetail}/>
    </Switch>
  )
}
