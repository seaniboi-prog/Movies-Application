import React from 'react'
import MovieList from '../components/MovieList';
import NavigationBar from '../components/NavigationBar';

const MainPage:React.FC = () => {
    return (
    <div>
        <NavigationBar/>
        <MovieList/>
    </div>
    );
}

export default MainPage