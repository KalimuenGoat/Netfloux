import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/App.css";

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
    <div>
      {movie ? (
        <>
          <div>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`Affiche de ${movie.title}`}
            />
          </div>
          <div>
            <div>
              <div>{movie.vote_average}</div>
              <div>{movie.release_date}</div>
              <div>{movie.runtime}</div>
              <div>{movie.adult && "Pegi 18"}</div>
              <p>{movie.overview}</p>
            </div>
            <div>
              <div>
                {movie.production_companies &&
                  movie.production_companies.map((company, index) => (
                    <p key={index}>{company.name}</p>
                  ))}
              </div>
              <div>
                {movie.genres &&
                  movie.genres.map((genre, index) => (
                    <p key={index}>{genre.name}</p>
                  ))}
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
