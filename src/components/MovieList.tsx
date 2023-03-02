import React from 'react'
import { Movie } from '../models';
import MovieThumbnail from './MovieThumbnail';
import './styles.scss'

interface Props {
    movies: Movie[];
}

const MovieList:React.FC<Props> = ({movies}: Props) => {
    return (
    <div>
        { movies.map(movie => <MovieThumbnail movie={movie}/>) }
    </div>
    );
}

export default MovieList