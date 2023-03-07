import MovieDetails from '../MovieDetails'

import { Movie } from '../../models';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

describe('Movie Details Component Tests', () => {

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

    it("Renders Movie Detail box correctly", () => {
        expect(screen.getByTestId('infoBox')).toBeInTheDocument();
    });

    it("Renders Movie lines correctly", () => {
        const lineElements:HTMLElement[] = screen.getAllByTestId('infoLine'); 
        expect(lineElements).toHaveLength(4);
    });

    it("Renders Movie details correctly", () => {
        const descElement:HTMLElement = screen.getByTestId('infoDesc');
        expect(descElement).toBeInTheDocument();
        expect(descElement).toHaveTextContent(dummyMovie.description);

        const lengthElement:HTMLElement = screen.getByTestId('infoLength');
        expect(lengthElement).toBeInTheDocument();
        expect(lengthElement).toHaveTextContent(dummyMovie.length);

        const genreElement:HTMLElement = screen.getByTestId('infoGenres');
        expect(genreElement).toBeInTheDocument();
        expect(genreElement).toHaveTextContent(dummyMovie.genres.map(g => g[0].toUpperCase() + g.slice(1)).join(', '));
    });

    it("Matches Snapshot", () => {
        const tree = renderer.create(<MovieDetails chosenMovie={dummyMovie}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});