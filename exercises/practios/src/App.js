import React, {Component} from "react";
import Person from "./Person";
import axios from "axios";

class App extends Component{
  constructor() {
    super()
    this.state = {
      people: []
    }
  }
    componentDidMount(){
      axios.get("https://swapi.co/api/people").then((response)=>{
        this.setState({people: response.data.results})
      })
    }

  render() {
    return this.state.people.map((person)=>{
        return <Person info={person}/>
    })
  }
}

export default App;
