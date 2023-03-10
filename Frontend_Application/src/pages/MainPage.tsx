import React, { useState, useMemo, useEffect } from 'react'
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import Filter from '../components/Filter';
import { Movie } from '../models';
import NavigationBar from '../components/NavigationBar';

const MainPage:React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [filterQuery, setFilterQ] = useState<string>("all");
    const [movies, setMovies] = useState<Movie[]>([]);

    const MOVIES_REST_API = 'http://localhost:8080/api/v1/movies'

    useEffect(() => {
        fetch(MOVIES_REST_API, {
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
            .then(response => response.json())
            .then(responseData => setMovies(responseData))
            .catch(ex => {
                console.log('Respnse parsing failed. Error: ', ex);
            })
    }, []);

    
    const genreTypes:string[] = useMemo(() => {
        let genreTypes:string[] = [];
        movies.forEach(movie => {
            genreTypes.push(...movie.genres)
        });
        genreTypes = genreTypes.filter((item, index) => genreTypes.indexOf(item) === index);
        return genreTypes;
    }, [movies]);
    

    const filteredMovies = useMemo(() => {
        const search_q:Movie[] = movies.filter( movie => 
            movie.name.toLowerCase().includes(query.toLowerCase())
        );

        if(filterQuery !== "all") {
            return search_q.filter( movie => {
                return movie.genres.includes(filterQuery.toLowerCase())
            })
        } 
        else return search_q;
        
    }, [movies, query, filterQuery]);

    return (
    <div data-testid='mainPage'>
        <NavigationBar>
            <Search query={query} setQuery={setQuery}/>
            <Filter filterQuery={filterQuery} setFilterQ={setFilterQ} genreTypes={genreTypes}/>
        </NavigationBar>
        <MovieList movies={filteredMovies}/>
    </div>
    );
}

export default MainPage