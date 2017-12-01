import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BodyContainer from "./Body/BodyContainer";
import "./app.css";
function App() {
  return (
    <div>
      <Navbar/>
      <BodyContainer/>
      <Footer/>
    </div>
  )
}

export default App;
