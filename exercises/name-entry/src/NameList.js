import React, {Component} from "react";
import Name from "./Name";
class NameList extends Component{
  constructor() {
    super();
    this.state = {
      input: "",
      names: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteName = this.deleteName.bind(this);
  }
  handleSubmit(){
    this.setState(prevState=>{
      const names = [...prevState.names];
      names.push(prevState.input);
      return {names, input: ""}
    })
  }
  onInputChange(e) {
    this.setState({input: e.target.value})
  }

  deleteName(index) {
    this.setState(prevState=> {
      let names = prevState.names;
      names.splice(index, 1);
      return {names}
    })
  }

  render() {
    let names = this.state.names.map((name, i)=> {
      return <Name name={name} key={name + i} index={i} delete={()=>this.deleteName(i)}/>
    })
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.input}/>
        <button onClick={this.handleSubmit}>Submit</button>
        {names}
      </div>
    )
  }
}


export default NameList;
