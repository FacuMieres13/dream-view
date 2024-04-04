import React, { useEffect, useState } from "react";
import "./App.css";
import '../src/index.css';
import Carousel from "./components/Carousel";
import Cartelera from "./components/Cartelera";
import Header from './components/Header';
import Resena from "./components/Resena";

const App = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/wtuydev/test-json/main/films.json');
        const data = await response.json();
        const dataFilms = data.movies
        setPeliculas(dataFilms);
        console.log('Data fetched:', dataFilms);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-0 w-full">
      <Header />
      <Carousel />
      <Cartelera peliculas={peliculas} />
      <Resena />
    </div>
  );
};

export default App;