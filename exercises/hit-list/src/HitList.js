import React, {Component} from "react";
import Person from "./Person";
import axios from "axios";

class HitList extends Component{
  constructor(){
    super();
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    axios.get("http://api.vschool.io:6543/hitlist.json").then((response)=>{
      this.setState({people: response.data})
    })
  }
  render() {
    return this.state.people.map((person, i)=>{
      return <Person name={person.name} image={person.image} key={person+i}/>
    })
  }
}

export default HitList;
