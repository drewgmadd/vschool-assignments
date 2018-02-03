import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav-link" to="/">About</Link>
      <Link className="nav-link" to="/build">Build</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar;
