import React from 'react'
import { Movie } from '../models';

interface Props {
    chosenMovie:Movie | undefined;
}

const MovieDetails:React.FC<Props> = ({ chosenMovie } : Props) => {
    return (
    <div>
        <span>Description: {chosenMovie?.description}</span>
        <br/>
        <span>Rating: {chosenMovie?.rate}</span>
        <br/>
        <span>Length: {chosenMovie?.length}</span>
        <br/>
        <span>
            Genres: 
            <ul>
                { chosenMovie?.genres.map(g => <li>{g[0].toUpperCase() + g.slice(1)} </li>) }
            </ul>
        </span>
    </div>
    );
}

export default MovieDetails