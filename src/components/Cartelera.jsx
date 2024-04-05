import Card from "./Card";

const Cartelera = ({ peliculas }) => {
  return (
    <div id="cartelera" className="bg-fondoCartelera w-full pb-10">
      <h2 className="text-left pl-10 font-bold text-2xl text-white p-6">En cartelera</h2>
      <div className="cartelera grid mb:grid-cols-2 sm:grid-cols-5 gap-8 w-full mx-auto px-4 pb-2">
        {Array.isArray(peliculas) && peliculas.map((pelicula, i) => (
          <Card key={i} poster={pelicula.poster} titulo={pelicula.title} />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;