import React, { useState, useEffect, useMemo} from 'react'
import MovieDetails from '../components/MovieDetails';
import { Movie } from '../models';
import jsonObject from '../data/movie.mock-data.json'
import NavigationBar from '../components/NavigationBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'

const DetailsPage:React.FC = () => {
    const [movie, setMovie] = useState<Movie>();

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    }
    
    const movieId = useLocation().state.id;

    // const loadJsonObjectAnother = (): Promise<Movie[]> => {
    //     const hmm: Movie[] = jsonObject as Movie[];
    //     return new Promise((res) => res(hmm));
    // };

    
    const MOVIE_REST_API = `http://localhost:8080/api/v1/movie/${movieId}`

    let chosenMovie:Movie;

    useEffect(() => {
        // fill movies
        // loadJsonObjectAnother().then(res => {
        //     setMovies(prev => [...res]);
        // });
        console.log(MOVIE_REST_API)
        fetch(MOVIE_REST_API, {
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
            .then(response => response.json())
            .then(responseData => setMovie(responseData))
            .catch(ex => {
                console.log('Respnse parsing failed. Error: ', ex);
            })

        document.documentElement.scrollTo({
            top: 0,
            left: 0,
        });
    }, [])

    return (
    <div>
        <NavigationBar>
            <span className='button__home' onClick={() => navigateToHome()}>
                <AiFillHome className='home__icon'/>
            </span>
        </NavigationBar>
        <h1 className='movie__big__title'>{movie?.name}</h1>
        <div className='details__page'>
            <div className='movie__big__img'>
                <img src={process.env.PUBLIC_URL + `movie_images/${movie?.img}`}
                className='big__img'
                alt={movie?.key}
                width='250px'
                />
            </div>
            <MovieDetails chosenMovie={movie}/>
        </div>
    </div>
    );
}

export default DetailsPage