import React, { useState, useMemo } from 'react'
import MovieList from '../components/MovieList';
import NavigationBar from '../components/NavigationBar';
import { Movie } from '../models';

const MainPage:React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [filterQuery, setFilterQ] = useState<string>("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genreTypes, setGenreT] = useState<string[]>([]);

    console.log(query);


    const filteredMovies = useMemo(() => {
        const search_q:Movie[] = movies.filter( movie => 
            movie.key.toLowerCase().includes(query.toLowerCase())
        );

        return search_q.filter( movie => {
            return movie.genres.includes(filterQuery.toLowerCase())
        })
    }, [movies, query, filterQuery]);

    return (
    <div>
        <NavigationBar query={query} setQuery={setQuery} filterQuery={filterQuery} setFilterQ={setFilterQ} genreTypes={genreTypes}/>
        <MovieList movies={filteredMovies}/>
    </div>
    );
}

export default MainPage