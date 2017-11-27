import React, {Component} from "react";

class TodoForm extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      description: "",
      price: 0,
      imgURL: "",
      completed: false
    }
    this.updateInputs = this.updateInputs.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  updateInputs(e){
    if (e.tarter.type === "checkbox") {
      this.setState({completed: e.target.checked});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  }
  submitForm(e){
    e.preventDefault();
    this.props.addTodo(this.state)
  }

  render(){
    return (
      <div>
        <form>
          Title: <br/>
          <input/><br/>
          Description:  <br/>
          <input/><br/>
          Price:  <br/>
          <input type="number"/><br/>
          Completed?
          <input type="checkbox"/><br/>
          <button onClick={this.props.addTodo}>Submit</button><br/>
        </form>
    </div>
    )
  }
}

export default TodoForm;
