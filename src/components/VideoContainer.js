import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const VideoContainer = () =>{

    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(!movies) return 

    const mainMovie  = movies[0];
    console.log(mainMovie)

    const {title,overview} = mainMovie
    const {id} = mainMovie

    return(<div>
        <VideoTitle title = {title} overview = {overview}/>
        <VideoBackground movie_id = {id}/>
    </div>)
}

export default VideoContainer;