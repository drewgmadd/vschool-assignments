import React, {Component} from "react";

class Form extends Component{
  constructor() {
    super();
    this.state = {
      locations: {
        one: "Portland, OR",
        two: "San Diego, CA",
        three: "Brooklyn, NY"
      },
      gender: {
        one: "Male",
        two: "Female"
      },
      diet: {
        veg: "Vegetarian",
        kosh: "Kosher",
        gf: "Gluten-Free"
      }
    }
  }
  handleSubmit() {
    this.preventDefault()
      alert(this.state)

  }
  render() {
    return (
      <form>
        <h3>Name: </h3>
        <input name="fName" placeholder="first" /><input placeholder="last" type="text" />
        <h3>Age: </h3><input type="number"/>
        <h3>Gender: </h3><input type="radio"/><label>{this.state.gender.one}</label>
        <input type="radio"/><label>{this.state.gender.two}</label>
        <h3>Destination: </h3>
        <select>
          <option>{this.state.locations.one}</option>
          <option>{this.state.locations.two}</option>
          <option>{this.state.locations.three}</option>
        </select>
        <h3>Dietary Restrictions</h3>
        <select>
          <option>{this.state.diet.veg}</option>
          <option>{this.state.diet.kosh}</option>
          <option>{this.state.diet.gf}</option>
        </select><br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;
