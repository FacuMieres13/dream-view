import React, { useEffect, useState } from "react";
import "./App.css";
import '../src/index.css';
import Carousel from "./components/Carousel";
import Cartelera from "./components/Cartelera";
import Header from './components/Header';
import Resena from "./components/Resena";
import { fetchData } from "./utilities/Peliculas.jsx"
import { peliculas } from "autoprefixer";

const Component = () => {
  const [peliculas, setData] = useState(null);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {

      }
    };
    fetchDataAsync();
  }, []);
}
function App() {
  return (
    <div className="p-0 w-full">
      <Header />
      <Carousel />
      <Cartelera peliculas={peliculas} />
      <Resena />
    </div>
  );
}

export default App;