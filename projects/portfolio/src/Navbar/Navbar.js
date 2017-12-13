import React from "react";
import Logo from "./Logo";
import "./navbar.css";

function Navbar() {

  return (
    <div  className="box">
      <Logo/>
      <h3 >Home</h3>
      <h3 >Contact</h3>
    </div>
  )
}

export default Navbar;
