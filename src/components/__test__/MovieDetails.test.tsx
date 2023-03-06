// import React from 'react'
// import ReactDOM from 'react-dom'
import MovieDetails from '../MovieDetails'

import { Movie } from '../../models';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

describe('Movie Thumbnail Component Tests', () => {

    const dummyMovie:Movie = {
        id: 1,
        key: "key",
        name: "name",
        description: "description",
        genres: ["Genre1", "Genre2", "Genre3"],
        rate: "rate",
        length: "length",
        img: "img.jpg"
    }

    const renderComponent = () => {
        render(<MovieDetails chosenMovie={dummyMovie} />);
    }

    beforeEach(renderComponent);

    afterEach(cleanup);

    it("Renders Movie thumbnail correctly", () => {
        expect(screen.getByTestId('infoBox')).toBeInTheDocument();
    });

    // it("Renders Movie image correctly", () => {
    //     const imageElement:HTMLElement = screen.getByTestId('movieImage');
    //     expect(imageElement).toBeInTheDocument();
    //     expect(imageElement.getAttribute('alt')).toBe(dummyMovie.key);
    //     expect(imageElement.getAttribute('src')).toBe("movie_images/"+dummyMovie.img);
    // });

    // it("Renders Movie title correctly", () => {
    //     const titleElement:HTMLElement = screen.getByTestId('movieTitle');
    //     expect(titleElement).toBeInTheDocument();
    //     expect(titleElement).toHaveTextContent(dummyMovie.name);
    // });

    // it("Matches Snapshot", () => {
    //     const tree = renderer.create(<MovieDetails chosenMovie={dummyMovie}/>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // })
});