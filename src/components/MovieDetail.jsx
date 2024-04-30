import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/App.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "4dcc21464991fe06bb4ceb635c4a803b";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Chargement des données...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error.message}</div>;
  }

  return (
    <div>
      {/* div avec le titre et l'image bouton de lecture etc */}
      <div>
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={`Affiche de ${movie.title}`}
        />
      </div>
      {/* div globale qui comprend la div avec recommandé à 96%,résumé,date et la deuxième div avec distribution genre */}
      <div>
        {/* div avec recommandé à 96% date durée et pegi */}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.release_date}</div>
          <div>{movie.runtime}</div>
          <div>{movie.adult && "Pegi 18"}</div>
          <p>{movie.overview}</p>
        </div>
        {/* div avec sociét de production et genre */}
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
    </div>
  );
};

export default MovieDetail;
