import {IMG_CDN_URL} from "../utils/constant"
import "./MovieCard.css"

const MovieCard= ({posterPath}) =>{
    return(<div className="cards">
    <img alt="movie" src={IMG_CDN_URL + posterPath} />
    </div>)
}

export default MovieCard;