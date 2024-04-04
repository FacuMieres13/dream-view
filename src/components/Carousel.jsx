import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import  resena  from '../../public/media/resena.svg'
import  trailer  from '../../public/media/trailer.svg'
const Carousel = ({ peliculas}) => {
  const posters = peliculas.map(pelicula => pelicula.poster);
  const titles = peliculas.map(pelicula => pelicula.title);
  const descriptions = peliculas.map(pelicula => pelicula.description);
  const trailers = peliculas.map(pelicula => pelicula.url);
  console.log('Posters:', posters);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? posters.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === posters.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[580px] w-full m-auto relative group'>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${posters[currentIndex]})`,
        }}
        className='w-full h-full bg-center bg-cover duration-500 relative flex items-center justify-center'
      >
        <div className='w-screen  flex items-center justify-center'>
          <div className='w-60 p-0 m-0'>
            <img className='w-10' src={posters[currentIndex]} alt="" />
            <img className='w-72' src={posters[currentIndex]} alt="" />
          </div>
          <div className='flex flex-col h-56 align-middle w-96'>
            <div className='bg-fondoSinopsis w-full h-fit bg-opacity-60 p-4 rounded-tr-md rounded-br-md border-t-4 border-r-4 border-b-4 border-violeta'>
              <h1 className='text-3xl w-80 text-black'>{titles[currentIndex]}</h1>
              <hr className='w-80  border-black' />
              <p className='w-80 h-full'>{descriptions[currentIndex]}</p>
            </div>
            <div className='flex h-full justify-around items-center mt-0'>
            <section className='flex flex-col items-center justify-center'>
                <a className='flex flex-col items-center' href={trailers[currentIndex]} target="_blank" rel="noopener noreferrer">
                  <img src={trailer} alt="Reseña" className="w-16 drop-shadow-2xl drop-shadow-white h-20" />
                  <p className='text-white'>Ver trailer</p>
                </a>
              </section>
              <section className='flex flex-col items-center justify-center'>
                <a  className='flex flex-col items-center justify-start' href="#">
                  <img src={resena} alt="Reseña" className="w-16 drop-shadow-2xl drop-shadow-white h-20" />
                  <p className='text-white p-0'>Dejar Reseña</p>
                </a>
              </section>
            </div>
          </div>
        </div>


      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Carousel;
