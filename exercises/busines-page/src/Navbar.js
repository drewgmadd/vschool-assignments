import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="title">Business Title</h1>
      <div  className="link-list">
        <ul>
          <li className="nav-item products"><a className="link" href="#">Products</a></li>
          <li className="nav-item about"><a className="link" href="#">About</a></li>
          <li className="nav-item contact"><a className="link" href="#">Contact</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar;
