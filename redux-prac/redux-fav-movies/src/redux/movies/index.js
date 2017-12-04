export function addMovie(movie) {
  return {
    type: "ADD_MOVIE",
    movie
  }
}
export function removeMovie(movie) {
  return {
    type: "REMOVE_MOVIE",
    movie
  }
}

export default function reducer(prevState = [], action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...prevState, action.movie];
    case "REMOVE_MOVIE":
      return []  
    default:
      return prevState;
  }
}
