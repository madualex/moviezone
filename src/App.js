import { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';


const App = () => {
  const API_URL = 'https://www.omdbapi.com?apikey=a4125114'

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text" placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  )
}

export default App