import React from 'react'
import { Movie } from '../models';
import './styles.scss'

interface Props {
    movie: Movie;
}

const MovieThumbnail:React.FC<Props> = ({movie}:Props) => {
    return (<div className='movie__thumbnail'>
        {movie.name}
    </div>
    );
}

export default MovieThumbnail