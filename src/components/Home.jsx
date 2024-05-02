import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../style/App.css';
import { Link } from 'react-router-dom';

const MovieAPI = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const apiKey = '4dcc21464991fe06bb4ceb635c4a803b';
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const data = await response.json();
        setMovies(data.results);
      };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1>
          {movies[0] && movies[0].title ? movies[0].title : 'Titre non disponible'}
        </h1>
        <img src={movies[0] && movies[0].poster_path ? `https://image.tmdb.org/t/p/w500${movies[0].poster_path}` : 'Pas de photo'} alt="Affiche du film" />
      </div>
      <div>
          <h1>Les films du moment</h1>
          <div className="movies-list">
            {movies.map(movie => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <div className="movie-item">
                    {movie.backdrop_path && (
                      <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={`Affiche de ${movie.title}`}
                      />
                    )}
                  </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default MovieAPI;