import React, { useEffect, useState } from 'react';

// Définition du composant App
function App() {
  // Déclaration de l'état movieData avec sa fonction de mise à jour setMovieData
  const [movieData, setMovieData] = useState(null);

  // Déclaration de la fonction asynchrone getData pour récupérer les données de l'API
  const getData = async () => {
    // Appel de l'API avec fetch
    const response = await fetch ("https://api.themoviedb.org/3/movie/550?api_key=c602ae123e3e34c01312fdde0aff619a");
    // Conversion de la réponse en JSON
    const jsonData = await response.json();
    // Affichage des données dans la console
    console.log(jsonData);
    // Mise à jour de l'état movieData avec les données récupérées
    setMovieData(jsonData);
  };

  // Utilisation de l'effet pour appeler getData au chargement du composant
  useEffect(()=>{
    getData();
  }, [])

  // Rendu du composant
  return (
    <div>
      {/* Si movieData est défini, affichage du titre du film */}
      {movieData && <h1>{movieData.title}</h1>}
      {/* Si movieData est défini, affichage de l'aperçu du film */}
      {movieData && <h3>{movieData.overview}</h3>}
    </div>
  );
}

export default App;
