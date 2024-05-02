import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const API_KEY = "4dcc21464991fe06bb4ceb635c4a803b";
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);

  useEffect(() => {
    const fetchMoviesAndTV = async () => {
      const popular = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const topRated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );
      const popularTVShows = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
      );
      const topRatedTVShows = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
      );

      setPopularMovies(popular.data.results);
      setTopRatedMovies(topRated.data.results);
      setPopularTV(popularTVShows.data.results);
      setTopRatedTV(topRatedTVShows.data.results);
    };

    fetchMoviesAndTV();
  }, []);

  const NextArrow = ({ onClick }) => {
    return <div className="arrow next" onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }) => {
    return <div className="arrow prev" onClick={onClick}></div>;
  };

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Header />
      <div>
        <h1>
          {popularMovies[0] && popularMovies[0].title
            ? popularMovies[0].title
            : "Titre non disponible"}
        </h1>
        <img
          src={
            popularMovies[0] && popularMovies[0].poster_path
              ? `https://image.tmdb.org/t/p/w500${popularMovies[0].poster_path}`
              : "Pas de photo"
          }
          alt="Affiche du film"
        />
      </div>
      <div className="Decalage">
        <div>
          <h1>Les films à ne pas manquer</h1>
          <Slider {...settings}>
            {popularMovies.map((movie) => (
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
          </Slider>
        </div>
        <div>
          <h1>Films les mieux notés</h1>
          <Slider {...settings}>
            {topRatedMovies.map((movie) => (
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
          </Slider>
        </div>
        <div>
          <h1>Séries TV populaires</h1>
          <Slider {...settings}>
            {popularTV.map((movie) => (
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
          </Slider>
        </div>
        <div>
          <h1>Séries TV les mieux notées</h1>
          <Slider {...settings}>
            {topRatedTV.map((movie) => (
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
