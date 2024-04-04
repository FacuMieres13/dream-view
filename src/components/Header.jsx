import logo from '../../public/media/dream-view-logo.svg';
const Header = () => {
  return (
    <div className="bg-fondoHeader bg-opacity-50 flex flex-col md:flex-row w-full">
      <figure className='w-full md:w-1/2 flex justify-center items-center p-4'>
        <img className="h-12" src={logo} alt="Descripción de la imagen" />
      </figure>
      <nav className='w-full lg:justify-center md:w-1/2 flex justify-around items-center'>
        <a className='text-white font-inter py-2 md:mx-10' href="#destacadas">Destacadas</a>
        <a className='text-white font-inter py-2 md:mx-10' href="#cartelera">Cartelera</a>
        <a className='p-2 bg-violeta rounded-md text-white font-inter md:mx-10 my-2 md:mt-0' href="#resenar">Reseñar</a>
      </nav>
    </div>
  );
};

export default Header;
