const Card = ({
    poster,
    titulo,
    idioma
}) => {

    return (
        <div className="flex justify-center w-46 px-5">
            <article className="flex w-72 flex-col justify-center">
                <h3 className="text-sm w-full h-fit p-0 text-start align-middle text-white">{titulo}</h3>
                <figure className="w-full mx-auto"> 
                    <img className="lg:w-full lg:h-96 md:w-20 md:h-10" src={poster} alt="" />
                </figure>
                <span className="text-xs w-full text-center bg-violeta px-2 rounded-bl-md py-1 rounded-br-md text-white">English</span>
            </article>
        </div>
    )
}
export default Card