import Card from "./Card";
const Cartelera = ({ peliculas }) => { // Recibiendo Peliculas como prop
  return (
    <div className="bg-fondoCartelera w-full">
      <h2 className="text-left pl-10 font-bold text-2xl text-white p-6">En cartelera</h2>
      <div className="cartelera grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 gap-2 w-full mx-auto px-4 pb-2">
        {peliculas.map((peliculas, i) => ( // Mapeando sobre las peliculas recibidas
          <Card key={i} poster={peliculas.poster} titulo={peliculas.title}/> // Usando poster y titulo de cada pelicula
        ))}
      </div>
    </div>
  );
};

export default Cartelera;