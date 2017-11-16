import React, {Component} from "react";

class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      gender: '',
      location: '',
      age: 0,
      veg: 'Vegitarian',
      kosh: false,
      gf: false,
      destination: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault()
      alert(`Name: ${this.state.fName} ${this.state.lName} Age: ${this.state.age} Gender: ${this.state.gender} Destination: ${this.state.destination}
        Dietary Restrictions: ${this.state}`)
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <form>
        <h3>Name: </h3>
        <input onChange={this.handleInputChange} name="fName" placeholder="first" value={this.state.fName} />
        <input onChange={this.handleInputChange} name="lName" placeholder="last" value={this.state.lName}/>
        <h3>Age: </h3><input onChange={this.handleInputChange} name="age" type="number"/>
        <h3>Gender: </h3><input name="gender" onChange={this.handleInputChange} type="radio" value="Male"/>Male
        <input name="gender" onChange={this.handleInputChange} type="radio" value="Female"/>Female
        <h3>Destination: </h3>
          <input name="destination" onChange={this.handleInputChange} type="radio" value="Portland, OR"/>Portland, OR
          <input name="destination" onChange={this.handleInputChange} type="radio" value="San Diego, Ca"/>San Diego, CA
          <input name="destination" onChange={this.handleInputChange} type="radio" value="Brooklyn, NY"/>Brooklyn, NA

        <h3>Dietary Restrictions</h3>
          <input name="none" value="None" onChange={this.handleInputChange} type="checkbox"/>None
          <input name="veg" value="Vegitarian" onChange={this.handleInputChange} type="checkbox"/>Vegetarian
          <input name="kosh" value="Kosher" onChange={this.handleInputChange} type="checkbox"/>Kosher
          <input name="gf" value="Gluten-free" onChange={this.handleInputChange} type="checkbox"/>Gluten-Free
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;
