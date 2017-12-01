export default function reducer(prevState = [], action){
  switch(action.type){
    case "ADD_INFO":
      return [...prevState, action.info]
    default:
      return prevState;

  }
}

export function addInfo(info){
  return {
    type: "ADD_INFO",
    info
  }
}
