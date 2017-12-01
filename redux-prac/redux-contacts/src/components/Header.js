import React from "react";
const styles = {
  textAlign: "center",
  color: "whitesmoke",
  background: "linear-gradient(to right, #ff5e62, #ff9966)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
export default function Header(props) {
  return (
    <header style={styles}>
      <h1>Contacts</h1>
    </header>
  )
}
