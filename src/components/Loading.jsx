
import loadingGif from '../../public/media/loading.gif';

const Loading = () => {

    return (
        <div className="flex justify-center w-full h-screen bg-fondoResena items-center">
            <img className='w-32' src={loadingGif} alt="loading..." />
        </div>
    )
}
export default Loading