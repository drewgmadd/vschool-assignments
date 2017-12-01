import React from "react";

const styles = {
  textAlign: "center",
  background: "linear-gradient(to right, #3494e6, #ec6ead)"
}

export default function Header() {
  return (
    <header style={styles}>
      <h1>Favorite Movies</h1>
    </header>
  )
}
