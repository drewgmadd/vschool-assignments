import axios from "axios";



export function getStudents() {
  return dispatch => {
    axios.get("/students")
      .then(response => {
        dispatch({
          type: "GET_STUDENTS",
          data: response.data
        });
      });
  }
}

export function addStudent(newStudent) {
  return dispatch => {
    axios.post("/students", newStudent)
      .then(response => {
        dispatch({
          type: "ADD_STUDENT",
          data: response.data
        });
      });
  }
}

export function removeStudent(id) {
  return dispatch => {
    axios.delete(`/students/${id}`)
      .then(response => {
        dispatch({
          type: "REMOVE_STUDENT",
          data: response.data
        });
      });
  }
}

export default function reducer(prevState= [], action) {
  switch(action.type) {
    case "GET_STUDENTS":
      return action.data;
    case "ADD_STUDENT":
      return [...prevState, action.data];
    case "REMOVE_STUDENT":
      return prevState.filter(student => student._id !== action.data._id);
    default:
      return prevState;
  }
}
