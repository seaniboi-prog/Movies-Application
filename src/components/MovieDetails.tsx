import React from 'react'
import { Movie } from '../models';
import './detailsPage.scss';

interface Props {
    chosenMovie:Movie | undefined;
}

const MovieDetails:React.FC<Props> = ({ chosenMovie } : Props) => {
    return (
    <div className='movie__info__box'>
        <span className='movie__description'>
            Description: {chosenMovie?.description}
        </span>
        <br/>
        <span className='movie__rating'>
            Rating: {chosenMovie?.rate}
        </span>
        <br/>
        <span className='movie__length'>
            Length: {chosenMovie?.length}
        </span>
        <br/>
        <span className='movie__genres'>
            Genres: 
            <ul>
                { chosenMovie?.genres.map(g => <li>{g[0].toUpperCase() + g.slice(1)} </li>) }
            </ul>
        </span>
    </div>
    );
}

export default MovieDetails