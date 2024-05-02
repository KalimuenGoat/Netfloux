import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/App.css";
import "../style/movie.css";
import Header from './Header'
import playIcon from '../images/play-icon.svg';
import checkIcon from '../images/check-icon.svg'
import likeIcon from '../images/like-icon.svg'

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "4dcc21464991fe06bb4ceb635c4a803b";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };

    fetchData();
  }, [id]);

  return (
    <div className="movie-container">
      <Header />
      {movie ? (
        <>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={`Backdrop of ${movie.title}`}
          />
          <div className="cover-block">
            <div className="movie-header">
              <h1>{movie.title}</h1>
            </div>
            <div className="buttons-block">
              <button className='play-button'><img src={playIcon} className='play-icon'/>Lecture</button>
              <button className="check-button"><img src={checkIcon} className='check-icon'/></button>
              <button className="like-button"><img src={likeIcon} className='like-icon'/></button>
              </div>
          </div>
          <div className="movie-details">
            <div className="movie-info">
              <div className="recommandation"> Recommandé à {movie.vote_average * 10}%
              </div>
              <div>{movie.release_date}</div>
              <div>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}min</div>
              <div>{movie.adult && "Pegi 18"}</div>
              <p className="movie-overview">{movie.overview}</p>
            </div>
            <div className="movie-stats">
              <div className="movie-companies"> Studio :
                <span className="companies-list">
                  {movie.production_companies &&
                  movie.production_companies.map((company) => company.name).join(', ')}
                </span>
              </div>
              <div className="movie-genres"> Genres :
                <span className="genre-list">
                  {movie.genres && movie.genres.map((genre) => genre.name).join(', ')}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
  
};

export default Movie;
