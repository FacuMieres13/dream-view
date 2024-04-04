import React from 'react'
import StarIcon from '../../public/media/star_popup.svg'
import { IoIosClose } from "react-icons/io";


const Modal = ({
  nombre,
  pelicula,
  cerrarModal
}) => {
  return (
    <div className='absolute top-0 bg-fondoResena backdrop-blur h-full w-full flex justify-center items-center'>
      <div className='h-2/3 w-1/3 flex flex-col justify-center items-center gap-2'>
          <IoIosClose onClick={cerrarModal} className='w-10 h-10 self-end'/>
          <h3 className='p-0 text-base text-greyText font-bold'>Reseña de peliculas</h3>
          <h2 className='p-0 text-lg text-white font-bold'>¡Muchas gracias {nombre}!</h2>
          <figure className='px-4 w-1/4'>
            <img className='w-full' src={StarIcon}alt="" />
          </figure>
          <span className='text-sm text-white font-bold'>Tu reseña sobre la pelicula "{pelicula}" ha sido enviada.</span>
      </div>
    </div>
  )
}

export default Modal;
