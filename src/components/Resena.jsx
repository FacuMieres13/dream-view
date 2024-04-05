import pop from '../../public/media/pop.svg'
import pop2 from '../../public/media/pop2.svg'
import Modal from './Modal'
import { useState } from 'react'
const Resena = ({ peliculas }) => {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setName] = useState('');
    const [pelicula, setPelicula] = useState('');

    const changeName = (event) => {
        setName(event?.target?.value || '');
    }

    const changePelicula = (event) => {
        console.log(peliculas[event?.target?.value].title)
        setPelicula(peliculas[event?.target?.value].title || '');
    }

    const cerrarModal = () => {
        setShowModal(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(true);
    }

    return (
        <div id="resena" className='Resena relative pt-5 bg-fondoResena text-white w-full'>
            <h3 className="text-left pl-10 text-xl font-bold">Reseña de peliculas</h3>
            <p className="text-left text-s pl-10">Deja tu opinión</p>
            <div className="flex w-full h-screen justify-center relative">
                <img className='absolute h-96 bottom-0 left-0 w-2/6 align-bottom hidden mb:inline-block' src={pop} alt="" />
                <form onSubmit={handleSubmit} className='mb:w-2/3 sm:w-1/3 h-full flex flex-col items-center justify-around'>
                    <div className='w-full h-14'>
                        <fieldset className='w-full h-full border-solid border-2 px-4 py-2 border-violeta rounded-lg'>
                            <legend className='text-xs pr-2 pl-1 font-semibold'>Seleccione película</legend>
                            <select required onChange={changePelicula} className='text-sm text-white font-bold outline-none bg-fondoResena border-none h-full w-full'>
                                <option value="">Seleccione una película</option>
                                {peliculas.map((pelicula, index) => (
                                    <option key={index} value={index}>{pelicula.title}</option>
                                ))}
                            </select>
                        </fieldset>
                    </div>
                    <div className='w-full h-14'>
                        <fieldset className='w-full h-full border-solid border-2 px-4 py-2 border-violeta rounded-lg'>
                            <legend className='text-xs pr-2 pl-1 font-semibold'>Nombre Completo</legend>
                            <input onChange={changeName} className='text-sm font-bold outline-none bg-transparent border-none h-full w-full' type="text" minLength="4" required />
                        </fieldset>
                    </div>
                    <div className='w-full h-14'>
                        <fieldset className='w-full h-full border-solid border-2 px-4 py-2 border-violeta rounded-lg'>
                            <legend className='text-xs pr-2 pl-1 font-semibold'>E-mail</legend>
                            <input className='text-sm font-bold outline-none bg-transparent border-none h-full w-full' type="email" required />
                        </fieldset>
                    </div>
                    <div className='w-full h-52'>
                        <fieldset className='w-full h-full border-solid border-2 px-4 py-2 border-violeta rounded-lg'>
                            <legend className='text-xs pr-2 pl-1 font-semibold'>Reseña</legend>
                            <textarea className='text-sm font-bold outline-none bg-transparent border-none h-full w-full' minLength="10" required></textarea>
                        </fieldset>
                    </div>
                    <div className='flex justify-between'>
                        <button type="submit" className='px-8 mb:px-16 py-2 border-2 font-semibold rounded-md border-violeta m-3'>Finalizar</button>
                        <button className='px-8 mb:px-16 py-2 border-2 font-semibold rounded-md border-violeta m-3' type="reset">Reiniciar</button>
                    </div>
                </form>
                <img className='absolute h-96 bottom-40 right-0 w-2/6 align-middle hidden mb:inline-block' src={pop2} alt="" />
            </div>
            {showModal && <Modal nombre={nombre} pelicula={pelicula} cerrarModal={cerrarModal} />}
        </div>
    )
}
export default Resena