// import React from 'react'
// import ReactDOM from 'react-dom'
import NavigationBar from '../NavigationBar'


import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';

describe('Search Component Tests', () => {

    const title:string = "Movie Gallery";

    const renderComponent = () => {
        render(<NavigationBar />);
    }

    beforeEach(renderComponent);

    afterEach(cleanup);

    it("Renders Search Component correctly", () => {
        const navComponent:HTMLElement = screen.getByTestId('navigation');
        expect(navComponent).toBeInTheDocument();
    });

    it("Renders title div correctly", () => {
        const titleElement:HTMLElement = screen.getByTestId('nav-title');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent(title);
    });

    it("Matches Snapshot", () => {
        const tree = renderer.create(<NavigationBar />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});