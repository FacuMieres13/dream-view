import logo from '../../public/media/dream-view-logo.svg';
const Header = () => {
  return (
    <div className="flex sm:flex-row sm:justify-between bg-fondoHeader absolute top-0 w-full z-50 bg-opacity-80">
      <figure className='w-full pl-10 lg:block mb:w-1/2 flex justify-center p-4'>
        <img className="h-12" src={logo} alt="Logo Dream View" />
      </figure>
      <nav className='sm:justify-end mb:w-1/2 flex justify-around items-center'>
        <a className='mb:hidden sm:block text-white font-inter py-2 mb:mx-10' href="#destacadas">Destacadas</a>
        <a className='mb:hidden sm:block text-white font-inter py-2 mb:mx-10' href="#cartelera">Cartelera</a>
        <a className='px-6 py-2 bg-violeta rounded-md text-white font-inter mb:mx-10 my-2 mb:mt-0' href="#resena">Reseñar</a>
      </nav>
    </div>
  );
};

export default Header;
