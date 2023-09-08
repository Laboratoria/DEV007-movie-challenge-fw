import styles from "./HomePage.module.css"
import { useEffect, useState } from 'react'

function HomePage() {

    //inicamos data como un array vacio
    const [movies, setMovies] = useState ([]) 

    const movieData = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGFkYzllYTA3YzhkZDM5MDk3NTVkYThhNTIxZWM5ZSIsInN1YiI6IjY0ZjlmMmQwYTg0YTQ3MDEwMGQ0NzI2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IqALVEMnuZvNfWTSWr7q-FSxaAe-mY5XkQsA3fKT6Ss'
            }
            };
        const url = ("https://api.themoviedb.org/3/trending/movie/day?language=en-US")

        const res = await fetch(url,options)
        const data = await res.json()
        console.log(data)
        setMovies(data.results) 
        console.log(movies);
    }
    useEffect(() => {
        //obtengo los datos desde la API 
        movieData()
    }, [])
    return (
        <div>
            {movies.length>0 &&
                //renderizamos data desde un mapeo del array
            movies.map (movie => (
                <div key= {movie.id}> {movie.name}
                    <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {movie.original_title}/>
                    
                </div>
                ))
            }
        </div>
    )
}

export default HomePage