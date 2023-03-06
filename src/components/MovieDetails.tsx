import React from 'react'
import { Movie } from '../models';
import './detailsPage.scss';
import { MdOutlineAccessTimeFilled, MdCategory} from 'react-icons/md'
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im'

interface Props {
    chosenMovie:Movie | undefined;
}

const MovieDetails:React.FC<Props> = ({ chosenMovie } : Props) => {

    const renderStars = (rating: string | undefined) => {

        const emptyStar:JSX.Element = <ImStarEmpty className='detail__icon'/>
        const halfStar:JSX.Element = <ImStarHalf className='detail__icon'/>
        const fullStar:JSX.Element = <ImStarFull className='detail__icon'/>

        switch(Math.round(Number(rating))) {
            case 0:
                return (<>{emptyStar} {emptyStar} {emptyStar} {emptyStar} {emptyStar}</>);
            case 1:
                return (<>{halfStar} {emptyStar} {emptyStar} {emptyStar} {emptyStar}</>);
            case 2:
                return (<>{fullStar} {emptyStar} {emptyStar} {emptyStar} {emptyStar}</>);
            case 3:
                return (<>{fullStar} {halfStar} {emptyStar} {emptyStar} {emptyStar}</>);
            case 4:
                return (<>{fullStar} {fullStar} {emptyStar} {emptyStar} {emptyStar}</>);
            case 5:
                return (<>{fullStar} {fullStar} {halfStar} {emptyStar} {emptyStar}</>);
            case 6:
                return (<>{fullStar} {fullStar} {fullStar} {emptyStar} {emptyStar}</>);
            case 7:
                return (<>{fullStar} {fullStar} {fullStar} {halfStar} {emptyStar}</>);
            case 8:
                return (<>{fullStar} {fullStar} {fullStar} {fullStar} {emptyStar}</>);
            case 9:
                return (<>{fullStar} {fullStar} {fullStar} {fullStar} {halfStar}</>);
            case 10:
                return (<>{fullStar} {fullStar} {fullStar} {fullStar} {fullStar}</>);
            case undefined:
                return (<>{emptyStar} {emptyStar} {emptyStar} {emptyStar} {emptyStar}</>);
            default:
                return (<>{emptyStar} {emptyStar} {emptyStar} {emptyStar} {emptyStar}</>);

        }
    }

    return (
    <div className='movie__info__box' data-testid='infoBox'>

        <div className='movie__info__line'>
            <p data-testid='infoDesc'>{chosenMovie?.description}</p>
        </div>

        <div className='movie__info__rating'>
            {/* <AiFillStar className='detail__icon'/> */}
            {/* <div data-testid='infoRating'>{chosenMovie?.rate}</div> */}
            {renderStars(chosenMovie?.rate)}
        </div>

        <div className='movie__info__line'>
            <MdOutlineAccessTimeFilled className='detail__icon'/>
            <div data-testid='infoLength'>{chosenMovie?.length}</div>
        </div>

        <div className='movie__info__line'>
            <MdCategory className='detail__icon'/>
            <div data-testid='infoGenre'>{chosenMovie?.genres.map(g => g[0].toUpperCase() + g.slice(1)).join(', ')}</div>
        </div>
    </div>
    );
}

export default MovieDetails