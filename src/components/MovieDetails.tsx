import React from 'react'
import { Movie } from '../models';
import './detailsPage.scss';
import { AiFillInfoCircle,  AiFillStar} from 'react-icons/ai'
import { MdOutlineAccessTimeFilled, MdCategory} from 'react-icons/md'

interface Props {
    chosenMovie:Movie | undefined;
}

const MovieDetails:React.FC<Props> = ({ chosenMovie } : Props) => {
    return (
    <div className='movie__info__box'>
        <span className='movie__description'>
            <AiFillInfoCircle/>
            Description: {chosenMovie?.description}
        </span>
        <br/>
        <span className='movie__rating'>
            <AiFillStar/>
            Rating: {chosenMovie?.rate}
        </span>
        <br/>
        <span className='movie__length'>
            <MdOutlineAccessTimeFilled/>
            Length: {chosenMovie?.length}
        </span>
        <br/>
        <span className='movie__genres'>
            <MdCategory/>
            Genres: 
            <ul>
                { chosenMovie?.genres.map(g => <li>{g[0].toUpperCase() + g.slice(1)} </li>) }
            </ul>
        </span>
    </div>
    );
}

export default MovieDetails