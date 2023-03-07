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
    <div className='movie__thumbnail' data-testid="movieThumbnail">
            <div className='movie__box' data-testid="movieBox" onClick={() => navigateToDetail()}>
                <img
                    src={process.env.PUBLIC_URL + `movie_images/${movie.img}`}
                    alt={movie.key}
                    className='movie__image'
                    data-testid='movieImage'
                />
                <p className='movie__title' data-testid='movieTitle'>{movie.name}</p>
            </div>
    </div>
    );
}

export default MovieThumbnail