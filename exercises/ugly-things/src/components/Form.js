import React, {Component} from "react";
import {connect} from "react-redux";
import {addInfo} from "../redux/uglythings";

class Form extends Component{
  constructor(){
    super();
    this.state = {
      title: "",
      url: "",
      description: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addInfo(this.state);
    this.setState({
      title: "",
      url: "",
      description: ""
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
        <input name="url" value={this.state.url} onChange={this.handleChange} placeholder="URL"/>
        <input name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description"/>
        <button>Submit Ugly Thing</button>
      </form>
    )
  }
}
export default connect(null, {addInfo})(Form);
