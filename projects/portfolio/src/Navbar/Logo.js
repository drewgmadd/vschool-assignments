import React from "react";

function Logo() {
  const styles = { box:
    {
      width: "100px",
      height: "100px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      display: "inline-block"
    },
    logo: {
      marginTop: "50px",
      transform: "translateY(-50%)",
      textAlign: "center",
      transition: ".3s all ease-in-out .2s"
    }
  }

  return (
    <div className="box">
      <h1 className="logo" style={styles.logo}>AM</h1>
    </div>
  )
}

export default Logo;
