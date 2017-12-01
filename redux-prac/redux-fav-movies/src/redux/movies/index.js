export function addMovie(movie) {
  return {
    type: "ADD_MOVIE",
    movie
  }
}

export default function reducer(prevState = [], action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...prevState, action.movie];
    default:
      return prevState;  
  }
}
