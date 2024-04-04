import "./App.css";
import '../src/index.css';
import Carousel from "./components/Carousel";
import Cartelera from "./components/Cartelera";
import Header from './components/Header';
import Resena from "./components/Resena";
import Peliculas from "./utilities/Peliculas";

function App() {
  return (
    <div className="p-0 w-full">
      <Header/>
      <Carousel/>
      <Cartelera peliculas={Peliculas}/>
      <Resena/>
    </div>
  );
}

export default App;