import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      size: "Tenor ($350.00)",
      topWood: "Western Red Cedar",
      backAndSides: "Wenge",
      tuners: "Chrome",
      markerDots: "Mother of Pearl",
      rosette: "None",
      backStrip: "None",
      laserEtching: "None",
      tuning: "High G"
    }
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(e) {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  mapSelection(selection) {
    return selection.map((item, i)=><option name={item} key={i} value={item}>{item}</option>)
  }

  render() {
    return (
      <form className="build-form">
        <h5>Size</h5>
        <select name="size" onChange={this.handleSelection} className="select">
          {this.mapSelection(["Tenor ($350.00)", "Concert ($325.00)", "Concert Pineapple ($325.00)"])}
        </select>
        <h5>Top Wood</h5>
        <select name="topWood" onChange={this.handleSelection} className="select">
          {this.mapSelection(["Western Red Cedar", "Engelmann Spruce"])}
        </select>
        <h5>Back and Side Wood</h5>
        <select name="backAndSides" onChange={this.handleSelection} className="select">
          {this.mapSelection(["Wenge", "Babinga", "Mahogany"])}
        </select>
        <h5>Tuners</h5>
        <select name="tuners" onChange={this.handleSelection} className="select">
          {this.mapSelection(["Chrome", "Black Chrome (+$15.00)", "Gold (+$20.00)", "Chrome w/ Mother of Pearl (+$10.00)", "Gold w/ Mother of Pearl (+$20.00)"])}
        </select>
        <h5>Marker Dots</h5>
        <select name="markerDots" onChange={this.handleSelection} className="select">
          {this.mapSelection(["Mother of Pearl", "Black Mother of Pearl", "Paua Abalone"])}
        </select>
        <h5>Rosette</h5>
        <select name="rosette" onChange={this.handleSelection} className="select">
          {this.mapSelection(["None", "Mother of Pearl (+$20.00)", "Paua Abalone (+$20.00)"])}
        </select>
        <h5>Backstrip</h5>
        <select name="backStrip" onChange={this.handleSelection} className="select">
          {this.mapSelection(["None", "Zipper (+$25.00)", "D-28 (+$25.00)"])}
        </select>
        <h5>Laser Etching</h5>
        <select name="laserEtching" onChange={this.handleSelection} className="select">
          {this.mapSelection(["None", "Top +($35.00)", "Headstock (+$25.00)", "Top & Headstock (+$50.00)"])}
        </select>
        <h5>Tuning</h5>
        <select name="tuning" onChange={this.handleSelection} className="select">
          {this.mapSelection(["High G", "Low G"])}
        </select>
        <button>Buy!</button>
      </form>
    )
  }
}

export default Form;
