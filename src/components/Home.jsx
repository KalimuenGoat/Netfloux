import React, { useEffect, useState } from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';

const MovieAPIComponent = () => {
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
                    {movie.poster_path && (
                      <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`Affiche de ${movie.title}`}
                      />
                    )}
                    <h2>{movie.title}</h2>
                  </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
};

export default MovieAPIComponent;