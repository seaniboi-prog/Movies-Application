import React from 'react'

interface Props {
    filterQuery: string;
    setFilterQ: React.Dispatch<React.SetStateAction<string>>;
    genreTypes: string[];
}

const Filter:React.FC<Props> = ({filterQuery, setFilterQ, genreTypes}: Props) => {



    return (
    <select>
       { genreTypes.map(g => <option value={g}>g[0].toUpperCase() + g.slice(1)</option>) } 
    </select>
    );
}

export default Filter;