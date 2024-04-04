import Card from "./Card";

const Cartelera = () => {
  const peliculas = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      url: "https://www.imdb.com/title/tt0241527",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      description:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      rating: 7.6,
      images: [
        "https://m.media-amazon.com/images/M/MV5BNzQwOGYzNzItNDYzMy00ZThkLTkyNzgtMmY1MTY3ZjY4MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMjI2Njk1MjM0M15BMl5BanBnXkFtZTgwNDUwMTEyMjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTkyMDM1NDA5MV5BMl5BanBnXkFtZTgwMzE0ODAxMTI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTc1MDg0MDgzMV5BMl5BanBnXkFtZTcwOTIzNjUwNA@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BNzQ4NDY2NDYyNF5BMl5BanBnXkFtZTcwNzIzNDc3Mw@@._V1_.jpg",
      ],
      featured: true,
      language: 'English'
    },
    {
        id: 2,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 3,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 4,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 5,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 6,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 7,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 8,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 9,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
    {
        id: 10,
      title: "The Godfather",
      url: "https://www.imdb.com/title/tt0068646",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      rating: 9.2,
      images: [
        "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTk2ODYzODc5MV5BMl5BanBnXkFtZTgwOTU0MzM1MjI@._V1_.jpg",
        "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
      ],
      featured: false,
      language: 'English'
    },
  ];
  return (
    <div className="bg-fondoCartelera w-full">
    <h2 className="text-left pl-10 font-bold text-2xl text-white p-6">En cartelera</h2>
    <div className="cartelera grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 gap-2 w-full mx-auto px-4 pb-2">
      {peliculas.map((pelicula) => (
        <Card key={pelicula.id} poster={pelicula.poster} titulo={pelicula.title} idioma={pelicula.language}/>
      ))}
    </div>
    </div>
    
  );
};

export default Cartelera;
