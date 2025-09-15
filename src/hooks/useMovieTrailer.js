import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"


const useMovieTrailer = (movie_id) =>{
    //fetching the trailer video and updating it into the store
    
    const dispatch = useDispatch()
    const getTrailer = async() =>{
        console.log(movie_id)
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,API_OPTIONS)
        const json = await data.json()
        console.log(json.results)

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
        console.log(trailer)
    }

    useEffect(()=>{
    if (movie_id) {   // ✅ only call if movie_id is not null/undefined
      getTrailer();
      console.log("called")
    }
    },[movie_id])
}

export default useMovieTrailer;