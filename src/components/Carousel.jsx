import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { IoIosStar } from "react-icons/io";
import resena from '../../public/media/resena.svg'
import trailer from '../../public/media/trailer.svg'
const Carousel = ({ peliculas }) => {
  const peliculasDestacadas = peliculas.sort((a, b) => b.rating - a.rating).slice(0, 3);

  const [currentMovie, setCurrentMovie] = useState(peliculasDestacadas[0]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentMovie(peliculasDestacadas[newIndex]);
  };

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentMovie(peliculasDestacadas[newIndex]);

  };

  return (
    <div id='destacadas' className='mb:h-[680px] sm:h-[580px] w-full m-auto relative group'>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${currentMovie?.poster})`
        }}
        className='w-full h-full bg-center bg-cover duration-500 relative flex items-center justify-center'
      >
        <div className='w-screen mb:flex-col sm:flex-row backdrop-blur-sm h-full flex items-center justify-center'>
          <div className='relative w-60 p-0 m-0'>
            <div className='absolute -top-5 -left-10 flex flex-col justify-center text-white items-center rounded-md p-1 w-20 bg-violeta'>
              <IoIosStar />
              <span className='text-sm'>
                {currentMovie?.rating}
                <span className='text-xs'>
                  /10
                </span>
              </span>
              <span className='font-bold'>IMDB</span>
            </div>
            <img className='w-72' src={currentMovie?.poster} alt="" />
            <span className='block  py-2 text-center sm:hidden text-md w-full text-white'>{currentMovie?.title}</span>

          </div>
          <div className='flex flex-col mb:30 sm:h-56 align-middle w-96'>
            <div className='mb:hidden sm:block bg-fondoSinopsis w-full h-fit bg-opacity-60 p-4 rounded-tr-md rounded-br-md border-t-4 border-r-4 border-b-4 border-violeta'>
              <h1 className='text-3xl w-80 text-black'>{currentMovie?.title}</h1>
              <hr className='w-80  border-black mb:hidden sm:block' />
              <p className='w-80 h-full mb:hidden sm:block'>{currentMovie?.description}</p>
            </div>
            <div className='flex h-full justify-around items-center mt-5'>
              <section className='flex flex-col items-center justify-center'>
                <a className='flex flex-col items-center bg-violeta rounded-md w-10 h-10' href={currentMovie?.url} target="_blank" rel="noopener noreferrer">
                  <img src={trailer} alt="Reseña" className="w-full h-full border-l-2 border-b-2 border-violeta rounded-md" />
                </a>
                <p className='text-white'>Ver trailer</p>
              </section>
              <section className='flex flex-col items-center justify-center'>
                <a className='flex flex-col items-center  rounded-md w-10 h-10' href='#resena'>
                  <img src={resena} alt="Reseña" className="w-full  border-l-2 bg-violeta border-b-2  border-violeta rounded-md" />
                </a>
                <p className='text-white'>Dejar Reseña</p>
              </section>
            </div>
          </div>
        </div>


      </div>
      {currentIndex !== 0 &&
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
      }
      {currentIndex !== peliculasDestacadas.length - 1 &&
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      }
    </div>
  );
};

export default Carousel;
