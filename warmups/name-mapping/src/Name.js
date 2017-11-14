import React from "react";

class Name extends React.Component {
  render() {
    const styles = {
      container : {
        height: "70px",
        width: "175px",
        backgroundColor: "lightgray",
        display: "inline-block",
        margin: "5px",
        border: "2px solid green"
      },
      text: {
        marginTop: "15px",
        marginLeft: "50%",
        transform: "translateX(-50%)"
      }
    }
    return (
      <div  style={styles.container}>
        <h1 style={styles.text}>{this.props.name}</h1>
      </div>
    )
  }
}

export default Name;
