import React, {Component} from "react";
import Information from "./Information";
class Person extends Component{
  render() {
    const styles = {
      image: {
        height: "150px",
        width: "200px",
      },
      block: {
        height: "350px",
        width: "300px",
        backgroundColor: "gray",
        border: "1px solid black",
        borderRadius: "15px",
        textAlign: "center",
        display: "inline-block",
        margin: "10px"
      }
    }

    return (
      <div style={styles.block}>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt="" style={styles.image}/>
        <Information/>
      </div>
    )
  }
}

export default Person
