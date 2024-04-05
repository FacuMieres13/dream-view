const Card = ({
    poster,
    titulo,
    idioma
}) => {

    return (
        <div className="flex justify-center w-46 h-full px-5">
            <article className="flex w-72 flex-col justify-between sm:justify-center">
                <h3 className="mb:text-xs sm:text-sm w-full h-16 flex items-center text-left align-bottom text-white">{titulo}</h3>
                <figure className="w-full mx-auto"> 
                    <img className="sm:w-full h-fit sm:h-96 mb:w-full" src={poster} alt="" />
                </figure>
                <span className="text-xs w-full text-center bg-violeta px-2 rounded-bl-md py-1 rounded-br-md text-white">English</span>
            </article>
        </div>
    )
}
export default Card