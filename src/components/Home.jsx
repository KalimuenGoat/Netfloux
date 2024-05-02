// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './Header';

// const MovieAPI = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [topRatedMovies, setTopRatedMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const apiKey = '4dcc21464991fe06bb4ceb635c4a803b';
//       const popular = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
//       const topRated = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
//       setPopularMovies(popular.data.results);
//       setTopRatedMovies(topRated.data.results);
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div>
//         <h1>
//           {popularMovies[0] && popularMovies[0].title ? popularMovies[0].title : 'Titre non disponible'}
//         </h1>
//         <img src={popularMovies[0] && popularMovies[0].poster_path ? `https://image.tmdb.org/t/p/w500${popularMovies[0].poster_path}` : 'Pas de photo'} alt="Affiche du film" />
//       </div>
//       <div>
//         <h1>Films populaires</h1>
//         <div className="movies-list">
//           {popularMovies.map(movie => (
//             <Link to={`/movie/${movie.id}`} key={movie.id}>
//               <div className="movie-item">
//                 {movie.backdrop_path && (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//                     alt={`Affiche de ${movie.title}`}
//                   />
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h1>Films les mieux notés</h1>
//         <div className="movies-list">
//           {topRatedMovies.map(movie => (
//             <Link to={`/movie/${movie.id}`} key={movie.id}>
//               <div className="movie-item">
//                 {movie.backdrop_path && (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//                     alt={`Affiche de ${movie.title}`}
//                   />
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieAPI;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  const API_KEY = '4dcc21464991fe06bb4ceb635c4a803b'; 
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [latestMovie, setLatestMovie] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);

  useEffect(() => {
    const fetchMoviesAndTV = async () => {
      const popular = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const topRated = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
      const popularTVShows = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
      const topRatedTVShows = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`);
      
      setPopularMovies(popular.data.results);
      setTopRatedMovies(topRated.data.results);
      setPopularTV(popularTVShows.data.results);
      setTopRatedTV(topRatedTVShows.data.results);
    };

    fetchMoviesAndTV();
  }, []);

  return (
    <div>
      <Header />
      <div>
          <h1>
            {popularMovies[0] && popularMovies[0].title ? popularMovies[0].title : 'Titre non disponible'}
          </h1>
          <img src={popularMovies[0] && popularMovies[0].poster_path ? `https://image.tmdb.org/t/p/w500${popularMovies[0].poster_path}` : 'Pas de photo'} alt="Affiche du film" />
      </div>
      <div>
        <h1>Films populaires</h1>
        <div className="movies-list">
          {popularMovies.map(movie => (
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
      <div>
        <h1>Films les mieux notés</h1>
        <div className="movies-list">
          {topRatedMovies.map(movie => (
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
      <div>
        <h1>Séries TV populaires</h1>
        <div className="movies-list">
          {popularTV.map(tv => (
            <Link to={`/movie/${tv.id}`} key={tv.id}>
              <div className="movie-item">
                {tv.backdrop_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                    alt={`Affiche de ${tv.name}`}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1>Séries TV les mieux notées</h1>
        <div className="movies-list">
          {topRatedTV.map(tv => (
            <Link to={`/movie/${tv.id}`} key={tv.id}>
              <div className="movie-item">
                {tv.backdrop_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                    alt={`Affiche de ${tv.name}`}
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

export default Home;