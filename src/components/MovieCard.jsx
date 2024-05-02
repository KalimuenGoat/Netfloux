import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/moviecard.css";
import { Link } from 'react-router-dom';

// const MovieCard = () => {
//   const { id } = useParams();
//   const [movieinfo, setMovieData] = useState([]);
//   const fetchData = async () => {
//     const apiKey = "4dcc21464991fe06bb4ceb635c4a803b";
//     const response = await fetch(
//       "https://api.themoviedb.org/3/movie/550?api_key=4dcc21464991fe06bb4ceb635c4a803b"
//     );
//     const data = await response.json();
//     console.log(data);
//     setMovieData(data);
//   };

//   useEffect(() => {
//     fetchData();
//     console.log(movieinfo);
//   }, []);

const MovieCard = ({ movieID}) => {
  const { id } = useParams();
  const [movieinfo, setMovie] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "4dcc21464991fe06bb4ceb635c4a803b";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };

    fetchData();
  }, [movieID]);
  


  return (
    <div className="ContainerHover">
      <div>
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w500${movieinfo.backdrop_path}`}
          alt={`Backdrop of ${movieinfo.title}`}
        />
        <div className="Title">{movieinfo.title}</div>
      </div>
      <div className="Padding">
        {/* div avec bouton et recommandé etc */}
        <div>
          <div className="buttons">
            <button className="play">Lecture</button>
            <button className="info-button">
              {/* rajouter lien vers la page   */}
              <Link to={`/movie/${movieinfo.id}`}>Voir les détails</Link>
            </button>
          </div>
        </div>
        <div className="Text">
          <div className="Vote">{movieinfo.vote_average}</div>
          <div>{movieinfo.adult && "Pegi 18"}</div>
          <div className="genres">
            {movieinfo.genres &&
              movieinfo.genres.map((genre, index) => (
                <p key={index}>{genre.name}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
