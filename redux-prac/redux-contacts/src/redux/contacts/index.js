import axios from "axios";
//reducer for contacts specifically
//all my action creators
export function addContact(contact){
    return {
      type: "ADD_CONTACT",
      contact
    }
}
export function getAllTodos() {
  return function (dispatch)  {
    axios.get("https://api.vschool.io/bob/todo").then(response => {
      dispatch({
        type: "GET_ALL_TODOS",
        todos: response.data})
    }).catch(err => {
                // handle errors
      alert("error");
    })
  }
}
export default function reducer (prevState = [], action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...prevState, action.contact];
    case "GET_ALL_TODOS":
      return action.todos;
    default:
      return prevState;
  }
}
