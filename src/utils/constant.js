// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGVkOTBiMDUwZDBjMDRkYjg0YmExYTAyMjY5YTY3NSIsIm5iZiI6MTc1NzI0NTA2Mi43MzgsInN1YiI6IjY4YmQ2ZTg2NTM4NTAxNDUxYjRlNWUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZWs2d5r77jm2Ur92pvqMYlGCqCWy_oJZ-zNh34_meU' \
//      --header 'accept: application/json'

export const API_OPTIONS = {
        method:"GET",
        headers :{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGVkOTBiMDUwZDBjMDRkYjg0YmExYTAyMjY5YTY3NSIsIm5iZiI6MTc1NzI0NTA2Mi43MzgsInN1YiI6IjY4YmQ2ZTg2NTM4NTAxNDUxYjRlNWUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZWs2d5r77jm2Ur92pvqMYlGCqCWy_oJZ-zNh34_meU",
            accept: "application/json"
        }
     }


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"