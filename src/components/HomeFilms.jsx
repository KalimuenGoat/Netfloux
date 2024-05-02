import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import playIcon from '../images/play-icon.svg';
import moreInfo from '../images/more-info-icon.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/HomeFilms.css";

const HomeFilms = () => {
  const API_KEY = "4dcc21464991fe06bb4ceb635c4a803b";
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesAndTV = async () => {
      const popular = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const topRated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
      );

      setPopularMovies(popular.data.results);
      setTopRatedMovies(topRated.data.results);
    };

    fetchMoviesAndTV();
  }, []);

  const NextArrow = ({ onClick }) => {
    return <div className="arrow next-films" onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }) => {
    return <div className="arrow prev-films" onClick={onClick}></div>;
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
            {popularMovies[0] && popularMovies[0].title ? popularMovies[0].title : 'Titre non disponible'}
          </h1>
        <img className='cover-home-films' src={popularMovies[0] && popularMovies[0].poster_path ? `https://image.tmdb.org/t/p/w500${popularMovies[0].backdrop_path}` : 'Pas de photo'} alt="Affiche du film" />
        <div className='description-block-films'>
          <h1 className='title-main-movie-films'>
            {popularMovies[0] && popularMovies[0].title ? popularMovies[0].title : 'Titre non disponible'}
          </h1>
          <div className='description-films'>{popularMovies[0] && popularMovies[0].overview ? popularMovies[0].overview : 'Titre non disponible'}</div>
        <div className='buttons-bloc-films'>
          <button className='play-button-films'><img src={playIcon} className='play-icon-films'/>Lecture</button>
          <button className='more-info-button-films'><img src={moreInfo} className='more-info-icon-films'/>Plus d'infos</button>
          </div>
        </div>
      </div>
      <div className="Decalage-films">
        <div>
          <h1>Les films à ne pas manquer</h1>
          <Slider {...settings}>
            {popularMovies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div className="movie-item-films">
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
                <div className="movie-item-films">
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

export default HomeFilms;