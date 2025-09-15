import MovieCard from "./MovieCard";
import "./MovieList.css"

const MovieList = ({title,movies}) =>{
    console.log(movies)
    return(
<div className="Outer-container">

    <h1>{title}</h1>
    <div className="movie-list-outer">
        <div className="movie-list">
            {
                movies.map(
                (movie) =>
                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                )
            }
        </div>
    </div>
</div>)
}

export default MovieList;