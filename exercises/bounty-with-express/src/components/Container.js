import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";

import Form from "./form/Form";
import List from "./list/List"

class Container extends Component{
  constructor(){
    super();
    this.state = {
      bounties: []
    }
  }
  componentDidMount() {
    axios.get("https://api.vschool.io/andrewmadden/todo").then(response=>{
      this.setState({bounties: response.data})
    })
  }
  addData(info) {
    axios.post("https://api.vschool.io/andrewmadden/todo").then(response=>{
      this.setState(prevState=>{
        const newBounty = response.data;
        const newBounties = [newBounty, ...prevState.bounties];
        return {bounties: newBounties}
      })
    })
  }
  render() {
    console.log(this.state)

    return (
      <div>
        <Form addData={this.addData} bounties={this.state}/>
        <List bounties={this.state}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(Container);
