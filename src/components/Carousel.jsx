import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import  resena  from '../../public/media/resena.svg'
import  trailer  from '../../public/media/trailer.svg'
const Carousel = ({poster, title, description}) => {
  const posters = poster

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? posters.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === posters.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-[580px] w-full m-auto relative group'>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${posters})`,
        }}
        className='w-full h-full bg-center bg-cover duration-500 relative flex items-center justify-center'
      >
        <div className='w-screen  flex items-center justify-center'>
          <div className='w-60 p-0 m-0'>
            <img className='w-10' src={posters} alt="" />
            <img className='w-72' src={posters} alt="" />
          </div>
          <div className='flex flex-col h-56 align-middle w-96'>
            <div className='bg-fondoSinopsis w-full h-fit bg-opacity-60 p-4 rounded-tr-md rounded-br-md border-t-4 border-r-4 border-b-4 border-violeta'>
              <h1 className='text-3xl w-80 text-black'>{title}</h1>
              <hr className='w-80  border-black' />
              <p className='w-80 h-full'>{description}</p>
            </div>
            <div className='flex h-full justify-around items-center mt-0'>
            <section className='flex flex-col items-center justify-center'>
                <a className='flex flex-col items-center' href="#">
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
