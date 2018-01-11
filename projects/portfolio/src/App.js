import React from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BodyContainer from "./Components/BodyContainer";

import "./app.css";
function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={BodyContainer}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;
