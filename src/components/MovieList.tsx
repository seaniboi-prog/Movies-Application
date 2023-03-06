import React from 'react'
import { Movie } from '../models';
import MovieThumbnail from './MovieThumbnail';
import './mainPage.scss';

interface Props {
    movies: Movie[];
}

const MovieList:React.FC<Props> = ({movies}: Props) => {
    return (
    <div className='movie__list' data-testid="movieList">
        { movies.map(movie => <MovieThumbnail key={movie.id} movie={movie}/>) }
    </div>
    );
}

export default MovieList