export default function reducer(prevState = [], action){
  switch(action.type){
    case "ADD_INFO":
      return [...prevState, action.info]
    case "REMOVE_INFO":
      return [...prevState].filter((info)=>{
        return info.title !== action.title
      });
    default:
      return prevState;
  }
}
export function removeInfo(info){
  return {
    type: "REMOVE_INFO",
    info
  }
}
export function addInfo(info){
  return {
    type: "ADD_INFO",
    info
  }
}
