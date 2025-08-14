import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; 

describe('App Component', () => {
  it('renders the main name heading', () => {
    render(<App />);
    
    const headingElement = screen.getByText(/Andrew McKenzie/i);
    
    expect(headingElement).toBeInTheDocument();
  });
});