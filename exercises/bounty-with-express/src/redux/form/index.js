export default function reducer(prevState = [], action) {
  switch (action.type){
    case "ADD_DATA":
      return [action.info, ...prevState]
    default:
      return prevState;
  }
}

export function addData(info) {
  return {
    type: "ADD_DATA",
    info
  }
}
