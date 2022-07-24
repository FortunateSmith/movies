import './App.css';

import NewMovie from "./components/NewMovie";
import NewGenre from "./components/NewGenre";
import MovieList from "./components/MovieList";
import GenreList from "./components/GenreList";


function App() {
  return (
    <div className="App">
      <div class="add_movie_and_genre">
        <NewMovie />
        What's up?
        <NewGenre />
      </div>
        <MovieList />
        <GenreList />
    </div>
  );
}

export default App;
