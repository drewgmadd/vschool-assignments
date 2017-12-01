import React from "react";
import Intro from "./Intro";
import Description from "./Description";

function BodyContainer() {
  const styles = {
    mainBlock: {
      marginTop: "150px",
      marginLeft: "5%"
    }
  }
  return (
    <div style={styles.mainBlock}>
      <Intro/>
      <Description/>
    </div>
  )
}

export default BodyContainer;
