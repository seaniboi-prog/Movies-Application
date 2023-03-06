// import React from 'react'
// import ReactDOM from 'react-dom'
import MovieThumbnail from '../MovieThumbnail';
import { Movie } from '../../models';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import * as router from 'react-router'

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

    const mockNavigate = jest.fn()

    const renderComponent = () => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate);
        render(<MovieThumbnail movie={dummyMovie} />);
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

    // it("Redirects to Details Page after clicking", () => {
    //     expect(mockNavigate).toHaveBeenCalledWith('/details');
    // });

    it("Matches Snapshot", () => {
        const tree = renderer.create(<MovieThumbnail movie={dummyMovie}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});