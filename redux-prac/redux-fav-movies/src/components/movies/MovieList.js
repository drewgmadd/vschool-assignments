import React from "react";

import {connect} from "react-redux";

import Movie from "./Movie";

function MovieList(props) {
  const movies = props.movies.map(
    (movie, i) => <Movie movie={movie.movie}/>)
  return (
   <ul>
     {movies}
   </ul>
  )
}

 function mapStateToProps(state){
   return state;
 }

 export default connect(mapStateToProps, null)(MovieList)
