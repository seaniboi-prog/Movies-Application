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
    <div className='movie__thumbnail'>
            <div className='movie__box'>
                <img
                    src={process.env.PUBLIC_URL + `movie_images/${movie.img}`}
                    alt={movie.key}
                    onClick={() => navigateToDetail()}
                    className='movie__image'
                />
                <p className='movie__title'>{movie.name}</p>
            </div>
    </div>
    );
}

export default MovieThumbnail