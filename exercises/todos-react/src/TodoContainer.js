import React, {Component} from "react";
import TodoForm from "./TodoForm";
import axios from "axios";
import TodoList from "./TodoList";

class TodoContainer extends Component{
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount(){
    axios.get("https://api.vschool.io/andrewmadden/todo").then(response=>{
      this.setState({todos: response.data.reverse()})
    })
  }
  deleteTodo(e){
    e.persist();
    axios.delete("https://api.vschool.io/andrewmadden/todo/" + e.target.id).then((response)=>{
      this.setState((prevState)=>{
        const index = prevState.todos.findIndex(todo=>todo._id === e.target.id);
        prevState.todos.splice(index, 1);
        return {todos: prevState.todos}
      })
    })
  }
  addTodo(info) {
    axios.post("https://api.vschool.io/andrewmadden/todo/", info).then(response=>{
      this.setState(prevState=>{
        const newInfo = response.data;
        const todos = [newInfo, ...prevState.todos];
        return {todos: todos}
      })
    })
  }
  render(){
    return (
      <div>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList/>
      </div>
    )
  }
}

export default TodoContainer;
