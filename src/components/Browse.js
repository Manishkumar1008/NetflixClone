
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MovieListContainer from "./MovieListContainer";
import VideoContainer from "./VideoContainer";

const Browse = () =>{

    useNowPlayingMovies(); //custom hook

    return (<div>
    <VideoContainer />
    <MovieListContainer />
    </div>)
}

export default Browse