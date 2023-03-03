import React, { useState, useEffect, useMemo} from 'react'
import MovieDetails from '../components/MovieDetails';
import { Movie } from '../models';
import jsonObject from '../data/movie.mock-data.json'
import NavigationBar from '../components/NavigationBar';

const DetailsPage:React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const loadJsonObjectAnother = (): Promise<Movie[]> => {
        const hmm: Movie[] = jsonObject as Movie[];
        return new Promise((res) => res(hmm));
    };

    useEffect(() => {
        // fill movies
        loadJsonObjectAnother().then(res => {
            setMovies(prev => [...res]);
        });
    }, [])

    const chosenMovie = useMemo(() => {
        return movies.find(i => i.id === 4);
    }, [movies]) 

    return (
    <div>
        <NavigationBar/>
        <h1 className='movie__title'>{chosenMovie?.name}</h1>
        <div className='movie__big__img'>
            <img src={process.env.PUBLIC_URL + `movie_images/${chosenMovie?.img}`}
            className='thumbnail__image'
            alt={chosenMovie?.key}/>
        </div>
        <MovieDetails chosenMovie={chosenMovie}/>
    </div>
    );
}

export default DetailsPage