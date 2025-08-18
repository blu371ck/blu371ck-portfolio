import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; 

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
    
    const headingElement = screen.getByText(/Andrew McKenzie/i);
    expect(headingElement).toBeInTheDocument();
  });
});
