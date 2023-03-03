import React from 'react'
import { Movie } from '../models';
import './mainPage.scss';

interface Props {
    movie: Movie;
}

const MovieThumbnail:React.FC<Props> = ({movie}:Props) => {

    return (
    <span className='movie__thumbnail'>
        <img
            src={process.env.PUBLIC_URL + `movie_images/${movie.img}`}
            className='thumbnail__image'
            alt={movie.key}
        />
        <p className='thumbnail__title'>
            {movie.name}
        </p>
    </span>
    );
}

export default MovieThumbnail