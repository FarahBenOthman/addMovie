import "./App.css";
import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./Components/MoviesData";
import SearchMovie from "./Components/SearchMovie/SearchMovie";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovie/AddMovie";

import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
