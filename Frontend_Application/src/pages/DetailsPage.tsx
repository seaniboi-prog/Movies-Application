import React, { useState, useEffect, useMemo } from 'react'
import MovieDetails from '../components/MovieDetails';
import { Movie } from '../models';
import NavigationBar from '../components/NavigationBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import jsonObject from '../data/movie.mock-data.json'

const DetailsPage:React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>();

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    }
    
    const movieId = useLocation().state.id;

    // const MOVIE_REST_API = `http://localhost:8080/api/v1/movie/${movieId}`

    const loadJsonObjectAnother = (): Promise<Movie[]> => {
        const hmm: Movie[] = jsonObject as Movie[];
        return new Promise((res) => res(hmm));
    };

    useEffect(() => {
        loadJsonObjectAnother().then(res => {
            setMovies(prev => [...res]);
        });

        document.documentElement.scrollTo({
            top: 0,
            left: 0,
        });
    }, [])

    const chosenMovie = useMemo(() => {
        return movies?.find(i => i.id === movieId);
    }, [movies, movieId]) 

    return (
    <div>
        <NavigationBar>
            <span className='button__home' onClick={() => navigateToHome()}>
                <AiFillHome className='home__icon'/>
            </span>
        </NavigationBar>
        <h1 className='movie__big__title'>{chosenMovie?.name}</h1>
        <div className='details__page'>
            <div className='movie__big__img'>
                <img src={process.env.PUBLIC_URL + `movie_images/${chosenMovie?.img}`}
                className='big__img'
                alt={chosenMovie?.key}
                width='250px'
                />
            </div>
            <MovieDetails chosenMovie={chosenMovie}/>
        </div>
    </div>
    );
}

export default DetailsPage