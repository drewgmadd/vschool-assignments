import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo=><Todo info={todo} delete={props.delete} key={todo._id}/>)}
    </ul>
  )
}

export default TodoList;
