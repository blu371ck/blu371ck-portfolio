import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; 

describe('App Component', () => {
  it('renders the main content area heading', () => {
    render(<App />);
    
    const headingElement = screen.getByText(/Main Content Area/i);
    
    expect(headingElement).toBeInTheDocument();
  });
});
