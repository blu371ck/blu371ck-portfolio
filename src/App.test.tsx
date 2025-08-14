import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App Component', () => {
    it('renders the main heading', () => {
        render(<App/>);
        const headingElement = screen.getByText(/Hello, React \+ TypeScript \+ Tailwind/i);
        expect(headingElement).toBeInTheDocument();
    })
})