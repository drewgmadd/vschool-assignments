import React from "react";
import Logo from "./Logo";
import "./nav.css";

function Navbar() {
  const styles = {block:
  {
    width: "100%",
    height: "100px",
    background: "linear-gradient(20deg, rgba(222,231,111, 0.1), rgba(0, 136, 8, 0.3) 40%, rgba(2444,245,233, 0.6))",
    position: "fixed",
    top: 0,
    zIndex: 0
  },
  text: {
    display: "inline-block",
    float: "right",
    marginRight: "4%",
    marginTop: "50px",
    transform: "translateY(-50%)",
    fontFamily: "arial"
  }
}
  return (
    <div style={styles.block}>
      <Logo/>
      <h3 style={styles.text}>Home</h3>
      <h3 style={styles.text}>Contact</h3>
    </div>
  )
}

export default Navbar;
