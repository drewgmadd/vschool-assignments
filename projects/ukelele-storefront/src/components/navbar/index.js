import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">About</Link>
      <Link to="/build">Build</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar;
