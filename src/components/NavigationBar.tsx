import React from 'react'
import Filter from './Filter';
import Search from './Search'
import './styles.scss'

interface Props {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    filterQuery: string;
    setFilterQ: React.Dispatch<React.SetStateAction<string>>;
    genreTypes: string[];
}

const NavigationBar:React.FC<Props> = ({query, setQuery, filterQuery, setFilterQ, genreTypes} : Props) => {
    return (
    <div>
        <Search query={query} setQuery={setQuery}/>
        <Filter filterQuery={filterQuery} setFilterQ={setFilterQ} genreTypes={genreTypes}/>
        Hehe
    </div>
    )
}

export default NavigationBar