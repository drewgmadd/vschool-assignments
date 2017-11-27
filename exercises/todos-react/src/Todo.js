import React, {Component} from "react";
import axios from "axios";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.info.completed,
      title: props.info.title,
      description: props.info.description,
      isEditVisable: false
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);

  }
  toggleCompleted(){
    axios.put("https://api.vschool.io/andrewmadden/todo/" + this.props.info._id,
    {completed:!this.state.completed}).then(response=>{
      this.setState(prevState=>{
        return {completed: response.data.completed}
      })
    })
  }
  update(e) {
    e.preventDefault();
    axios.put("https://api.vschool.io/andrewmadden/todo/" + this.props.info._id,
    {title: this.state.title,
    description: this.state.description}).then(response=>{
      this.setState({isEditVisable: false})
    })
  }
  updateInputs = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  edit(){
    this.setState(prevState=>{
      return {isEditVisable: !prevState.isEditVisable}
    })
  }
  render(){
    const {title, description, imgURL, price, completed, _id} = this.props.info;
    const lineThrough = {textDecoration: "line-through", color: "rgba(162, 86, 105, 0.3)"}
    return (
        <div>

            {!this.state.isEditVisable ? <div>
                <h3 name="title" style={ this.state.completed ? lineThrough : null }>{this.state.title}</h3>
                <h5>{this.state.description}</h5>
                <button id={_id} onClick={this.props.delete}>Delete</button>Completed?
                <input onChange={this.toggleCompleted} type="checkbox" checked={this.state.completed}/>
            </div>
            :
            <form onSubmit={this.update}>
                <div><input name="title" onChange={this.updateInputs} placeholder="click here to edit title" value={this.state.title}/></div>
                <div><input name="description" onChange={this.updateInputs} placeholder="click here to edit description" value={this.state.description}/></div>
                <button> save </button>
            </form>}
            <button onClick={this.edit}>edit</button>
        </div>
    )
}
}

export default Todo;
