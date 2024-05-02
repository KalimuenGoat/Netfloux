import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/App.css";
import "../style/movie.css";
import Header from './Header'

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "4dcc21464991fe06bb4ceb635c4a803b";
      const response = await fetch(
        `https://api.themoviedb.org/3/serie/${id}?api_key=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };

    fetchData();
  }, [id]);

}