import './App.css';

import NewMovie from "./components/NewMovie";
import NewGenre from "./components/NewGenre";
import MovieList from "./components/MovieList";
import GenreList from "./components/GenreList";


function App() {
  return (
    <div className="App">
      <div class="add_movie_and_genre">
        <NewMovie movies={movies} genres={genres} setMovies={setMovies}/>
        <NewGenre genres={genres} setGenres={setGenres}/>
      </div>
        <MovieList />
        <GenreList />
    </div>
  );
}

export default App;
