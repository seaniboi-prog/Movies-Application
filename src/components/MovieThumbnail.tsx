import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Movie } from '../models';
import './mainPage.scss';

interface Props {
    movie: Movie;
}

const MovieThumbnail:React.FC<Props> = ({movie}:Props) => {

    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate('/details', {state:{id: movie.id}})
    }

    return (
    <span className='movie__thumbnail' onClick={() => navigateToDetail()}>
            <img
                src={process.env.PUBLIC_URL + `movie_images/${movie.img}`}
                alt={movie.key}
            />
            <div>{movie.name}</div>
    </span>
    );
}

export default MovieThumbnail