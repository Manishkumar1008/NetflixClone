
import {  useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

import "./videoBackground.css"


const VideoBackground = ({movie_id}) =>{

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)

    useMovieTrailer(movie_id)

    return (
    <div>
        <iframe 
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen></iframe>
    </div>
    )
}

export default VideoBackground;