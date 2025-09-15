import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import "./MovieListContainer.css"

const MovieListContainer = () =>{

    const movies =useSelector(store => store.movies)
    console.log("movie:"+ movies.nowPlayingMovies)
    
    return(
    <div className="Movie-list">
    <div className="Movie-list-inner">
    <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies || []}/>
    <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies || []}/>
    <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies || []}/>
    <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies || []}/>
    <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies || []}/>
    </div>
    </div>)
}

export default MovieListContainer;