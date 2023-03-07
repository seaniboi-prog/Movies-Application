import React from 'react'
import './styles.scss';

interface Props {
    filterQuery: string;
    setFilterQ: React.Dispatch<React.SetStateAction<string>>;
    genreTypes: string[];
}

const Filter:React.FC<Props> = ({filterQuery, setFilterQ, genreTypes}: Props) => {

    return (
    <div className='filter__bar' data-testid='filter'>
        Genre 
        <select 
        value={filterQuery} 
        onChange={e => setFilterQ(e.target.value)}
        data-testid='filter-select'>
            <option data-testid='all-option' value="all">All</option>
        { genreTypes.map(g => <option key={g} data-testid='list-option' value={g}>{g[0].toUpperCase() + g.slice(1)}</option>) } 
        </select>
    </div>
    );
}

export default Filter;