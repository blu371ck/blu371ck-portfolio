import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; 

// Mocking the IntersectionObserver for the test environment
// This mock includes the properties required by TypeScript to match the IntersectionObserver interface.
const mockIntersectionObserver = class {
    root: Element | null = null;
    rootMargin: string = '';
    thresholds: readonly number[] = [];

    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }
};

window.IntersectionObserver = mockIntersectionObserver;

describe('App Component', () => {
  it('renders the main name heading', () => {
    render(<App />);
    
    // Find the heading element with the text "Andrew McKenzie"
    const headingElement = screen.getByText(/Andrew McKenzie/i);
    
    // Assert that the element is present in the document
    expect(headingElement).toBeInTheDocument();
  });
});
