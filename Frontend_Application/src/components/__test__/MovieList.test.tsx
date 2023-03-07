import MovieList from '../MovieList'
import { Movie } from '../../models';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';


const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({

    ...(jest.requireActual("react-router-dom") as any),

    useNavigate: () => mockNavigate
}));

describe('Movie List Component Tests', () => {

    const dummyMovies:Movie[] = [
        {
            id: 1,
            key: "key1",
            name: "name1",
            description: "description1",
            genres: ["Genre1", "Genre2", "Genre3"],
            rate: "rate1",
            length: "length1",
            img: "img1.jpg"
        },
        {
            id: 2,
            key: "key2",
            name: "name2",
            description: "description2",
            genres: ["Genre4", "Genre5", "Genre6"],
            rate: "rate2",
            length: "length2",
            img: "img2.jpg"
        }
    ]

    const renderComponent = () => {
        render(<MovieList movies={dummyMovies} />);
    }

    beforeEach(renderComponent);

    afterEach(cleanup);

    it("Renders Movie List correctly", () => {
        expect(screen.getByTestId('movieList')).toBeInTheDocument();
    });

    it("Renders Movie Thumbnails correctly", () => {
        expect(screen.getAllByTestId("movieThumbnail")).toHaveLength(dummyMovies.length);
    })

    it("Matches Snapshot", () => {
        const tree = renderer.create(<MovieList movies={dummyMovies}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});