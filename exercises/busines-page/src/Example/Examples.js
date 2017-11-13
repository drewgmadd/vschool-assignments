import React from "react";
import Example from "./Example";

function Exampleblock() {
  const styles = {
    display: "inline-block",
    float: "right",
    marginRight: "10%"
  }
  return (
    <div style={styles}>
      <h1>Examples of Customs</h1>
      <Example description="A short description of the custom components"/>
      <Example description="Another description explaining custom components"/>
    </div>
  )
}

export default Exampleblock;
