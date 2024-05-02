import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Movie from "./components/Movie";
import HomeSeries from "./components/HomeSeries";
import HomeFilms from "./components/HomeFilms";
import HomeNotés from "./components/HomeNotés";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/series" element={<HomeSeries />} />
        <Route path="/films" element={<HomeFilms />} />
        <Route path="/notés" element={<HomeNotés />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 