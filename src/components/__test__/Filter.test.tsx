import Filter from '../Filter'

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';

describe('Filter Component Tests', () => {

    const genreValue:string = "All";
    const dummyGenres:string[] = ["Genre1", "Genre2", "Genre3"];

    const renderComponent = () => {
        render(<Filter filterQuery={genreValue} setFilterQ={()=>{}} genreTypes={dummyGenres} />);
    }

    beforeEach(renderComponent);

    afterEach(cleanup);

    it("Renders Filter Component correctly", () => {
        const filterComponent:HTMLElement = screen.getByTestId('filter');
        expect(filterComponent).toBeInTheDocument();
        expect(filterComponent).toHaveTextContent("Genre");
    });

    it("Renders select element correclty", () => {
        const selectElement:HTMLElement = screen.getByTestId('filter-select');
        expect(selectElement).toBeInTheDocument();
    });

    it("Renders option elements correclty", () => {
        const allElement:HTMLElement = screen.getByTestId('all-option');
        expect(allElement).toBeInTheDocument();
        expect(allElement).toHaveTextContent("All");
        expect(allElement.getAttribute('value')).toBe('all');

        const optionElements:HTMLElement[] = screen.getAllByTestId('list-option');
        expect(optionElements).toHaveLength(dummyGenres.length);
    });

    it("Matches Snapshot", () => {
        const tree = renderer.create(<Filter filterQuery={genreValue} setFilterQ={()=>{}} genreTypes={dummyGenres}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});