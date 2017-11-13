import React from "react";

function Footer() {
  const footerStyles =
  {
    width: "100%",
    height: "70px",
    backgroundColor: "#659787",
    position: "relative",
    bottom: "0"
  }
  const footItem = {
    display: "inline-block",
    marginLeft: "15%",
    position: "relative",
    top: "10px"
  }
  return (
    <div className="footer" style={footerStyles}>
      <p className="footer-item" style={footItem}>Ukelele Store</p>
      <p className="footer-item" style={footItem}>12345 One St.  SLC, UT, 11111</p>
      <p className="footer-item" style={footItem}>111-111-1223</p>
    </div>
  )
}

export default Footer
