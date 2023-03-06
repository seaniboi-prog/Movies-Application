// import React from 'react'
// import ReactDOM from 'react-dom'
import MovieThumbnail from '../MovieThumbnail';
import { Movie } from '../../models';

import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";


const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({

    ...(jest.requireActual("react-router-dom") as any),

    useNavigate: () => mockNavigate
}));

describe('Movie Thumbnail Component Tests', () => {

    const dummyMovie:Movie = {
        id: 1,
        key: "key",
        name: "name",
        description: "description",
        genres: [],
        rate: "rate",
        length: "length",
        img: "img.jpg"
    }

    const renderComponent = () => {
        render(
        <BrowserRouter>
            <MovieThumbnail movie={dummyMovie} />
        </BrowserRouter>
        );
    }

    beforeEach(renderComponent);

    afterEach(cleanup);

    it("Renders Movie thumbnail correctly", () => {
        expect(screen.getByTestId('movieThumbnail')).toBeInTheDocument();
        expect(screen.getByTestId('movieBox')).toBeInTheDocument();
    });

    it("Renders Movie image correctly", () => {
        const imageElement:HTMLElement = screen.getByTestId('movieImage');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('alt')).toBe(dummyMovie.key);
        expect(imageElement.getAttribute('src')).toBe("movie_images/"+dummyMovie.img);
    });

    it("Renders Movie title correctly", () => {
        const titleElement:HTMLElement = screen.getByTestId('movieTitle');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent(dummyMovie.name);
    });

    it("Redirects to Details Page after clicking", () => {
        const movieBox:HTMLElement = screen.getByTestId('movieBox');
        expect(movieBox).toBeInTheDocument();
        
        fireEvent.click(movieBox);
        expect(mockNavigate).toHaveBeenCalledWith('/details', {state: {id: dummyMovie.id}});
    });

    it("Matches Snapshot", () => {
        const tree = renderer.create(<MovieThumbnail movie={dummyMovie}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});