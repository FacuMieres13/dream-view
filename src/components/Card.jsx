const Card = ({
    poster,
    titulo,
    idioma
}) => {

    return (
        <div className="flex justify-center px-5">
            <article className="flex flex-col justify-center">
                <h3 className="text-sm h-12 p-0 text-start align-middle text-white">{titulo}</h3>
                <figure className="w-full mx-auto"> 
                    <img className="w-full" src={poster} alt="" />
                </figure>
                <span className="text-xs text-center bg-violeta px-2 rounded-bl-md py-1 rounded-br-md text-white">{idioma}</span>
            </article>
        </div>
    )
}

export default Card