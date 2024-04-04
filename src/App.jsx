// import { useState } from "react";

import "./App.css";
import '../src/index.css';
import Carousel from "./components/Carousel";
import Cartelera from "./components/Cartelera";
import Header from './components/Header';
import Resena from "./components/Resena";

function App() {
  // const [count, setCount] = useState(0);

  return (
      <div className="p-0 w-full">
        <Header/>
        <Carousel/>
        <Cartelera/>
        <Resena/>
      </div>
  );
}
export default App;
