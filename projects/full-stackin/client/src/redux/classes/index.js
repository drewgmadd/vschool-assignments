import axios from "axios";

export function getClasses() {
  return dispatch => {
    axios.get("/classes")
      .then(response=>{
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
        })
      })
  }
}

export default function reducer(prevState = [], action) {
  switch( action.type) {
    case "GET_CLASSES":
      return action.data;
    case "ADD_CLASS":
       return [...prevState, ];
    default:
      return prevState;
  }
}
