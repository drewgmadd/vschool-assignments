import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3>True Love Ukelele's</h3>
      <Link className="nav-link" to="/contact">Contact</Link>
      <Link className="nav-link" to="/build">Build</Link>
      <Link className="nav-link" to="/">About</Link>
    </div>
  )
}

export default Navbar;
