import React from 'react'
import './mainPage.scss';

interface Props {
    filterQuery: string;
    setFilterQ: React.Dispatch<React.SetStateAction<string>>;
    genreTypes: string[];
}

const Filter:React.FC<Props> = ({filterQuery, setFilterQ, genreTypes}: Props) => {

    return (
    <div className='filter__bar'>
        <select value={filterQuery} onChange={e => setFilterQ(e.target.value)}>
            <option value="all">All</option>
        { genreTypes.map(g => <option value={g}>{g[0].toUpperCase() + g.slice(1)}</option>) } 
        </select>
    </div>
    );
}

export default Filter;