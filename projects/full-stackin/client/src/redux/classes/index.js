import axios from "axios";

export function getClasses() {
  return dispatch => {
    axios.get("/classes")
      .then(response=>{
        console.log(response.data)
        localStorage.setItem("classes", JSON.stringify(response.data));
        dispatch({
          type: "GET_CLASSES",
          data: response.data
        });
      });
  }
}

export function addClass(newClass) {
  return dispatch => {
    axios.post("/classes", newClass)
      .then(response=>{
        dispatch({
          type: "ADD_CLASS",
          data: response.data
        });
      });
  }
}
export function updateClass(id, updatedClass) {
  return dispatch => {
    axios.put(`/classes/${id}`, updatedClass)
      .then(response => {
        dispatch({
          type: "UPDATE_CLASS",
          data: response.data
        });
      });
  }
}
export function removeClass(id) {
  return dispatch => {
    axios.delete(`/classes/${id}`)
      .then(response => {
        dispatch({
          type: "REMOVE_CLASS",
          data: response.data
        });
      });
  }
}

export default function reducer(prevState = [], action) {
  switch( action.type) {
    case "GET_CLASSES":
      return action.data;
    case "ADD_CLASS":
       return [...prevState, action.data];
    case "REMOVE_CLASS":
      let updatedClasses = prevState.filter(oneclass => {
        return oneclass._id !== action.data.foundClass._id
      })
      return updatedClasses;
    case "UPDATE_CLASS":
    console.log(action.data.title);
      return action.data;
    default:
      return prevState;
  }
}
