// import React from 'react';
// import ReactDOM from 'react-dom';
import Search from '../Search';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';

describe('Search Component Tests', () => {

    let queryValue:string = "";

    const renderComponent = () => {
        render(<Search query={queryValue} setQuery={()=>{}}/>);
    }

    beforeEach(renderComponent);

    afterEach(cleanup);

    it("Renders Search Component correctly", () => {
        const searchComponent:HTMLElement = screen.getByTestId('search');
        expect(searchComponent).toBeInTheDocument();
        expect(searchComponent).toHaveTextContent("Search");
    });

    it("Renders input div correctly", () => {
        const inputElement:HTMLElement = screen.getByTestId('search-input');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.getAttribute('value')).toBe(queryValue);
        expect(inputElement.getAttribute('type')).toBe('search');
        expect(inputElement.getAttribute('placeholder')).toBe('Search for movie...');
    });

    it("Matches Snapshot", () => {
        const tree = renderer.create(<Search query={queryValue} setQuery={()=>{}} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});