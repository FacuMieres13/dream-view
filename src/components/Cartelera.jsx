import Card from "./Card";

const Cartelera = ({ peliculas }) => {
  return (
    <div className="bg-fondoCartelera w-full">
      <h2 className="text-left pl-10 font-bold text-2xl text-white p-6">En cartelera</h2>
      <div className="cartelera grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 gap-2 w-full mx-auto px-4 pb-2">
        {Array.isArray(peliculas) && peliculas.map((pelicula, i) => (
          <Card key={i} poster={pelicula.poster} titulo={pelicula.title} />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;