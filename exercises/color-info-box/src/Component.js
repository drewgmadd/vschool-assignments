import React from "react";
import "./App.css";

class Component extends React.Component {
  render() {
    const styles = {  box:  {
      display: "inline-block",
      height: "200px",
      width: "20%",
      backgroundColor: this.props.background,
      border: "1px solid black",
      verticalAlign: "bottom"
    },
    info: {
      display: "inline-block",
      marginLeft: "5px",
    },
    title: {
      textAlign: "center"
    }}
  return (
    <div style={styles.box} className="box">
      <h1 style={styles.title} className="text title">{this.props.title}</h1>
      <h3 style={styles.title} className=" text sub-title">{this.props.subTitle}</h3>
      <p style={styles.info} className="text information">{this.props.info}</p>
    </div>
  );
}
}

export default Component;
