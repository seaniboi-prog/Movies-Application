import React from 'react'
import { Movie } from '../models';
import './detailsPage.scss';
import { AiFillStar} from 'react-icons/ai'
import { MdOutlineAccessTimeFilled, MdCategory} from 'react-icons/md'

interface Props {
    chosenMovie:Movie | undefined;
}

const MovieDetails:React.FC<Props> = ({ chosenMovie } : Props) => {

    return (
    <div className='movie__info__box'>

        <div className='movie__info__line'>
            <p>{chosenMovie?.description}</p>
        </div>

        <div className='movie__info__line'>
            <AiFillStar className='detail__icon'/>
            <div>{chosenMovie?.rate}</div>
        </div>

        <div className='movie__info__line'>
            <MdOutlineAccessTimeFilled className='detail__icon'/>
            <div>{chosenMovie?.length}</div>
        </div>

        <div className='movie__info__line'>
            <MdCategory className='detail__icon'/>
            <div>{chosenMovie?.genres.map(g => g[0].toUpperCase() + g.slice(1)).join(', ')}</div>
        </div>
    </div>
    );
}

export default MovieDetails