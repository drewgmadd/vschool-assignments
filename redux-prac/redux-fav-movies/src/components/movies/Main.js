import React from "react";

import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

export default function Main(props) {
  return  (
    <main>
      <MovieForm/>
      <MovieList/>
    </main>
  )
}
