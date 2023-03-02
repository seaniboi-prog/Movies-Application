import React from 'react'
import './styles.scss'

interface Props {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search:React.FC<Props> = ({query, setQuery} : Props) => {

    return (
    <div className='search__bar'>
        Search 
        <input 
            value={query}
            onChange={e => setQuery(e.target.value)}
            type="search"
            placeholder='Search for movie...'
        />
    </div>
    );
}

export default Search