import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideNav from './SideNav';

const MockNavContent = () => (
  <ul>
    <li><a href="/">Dashboard</a></li>
  </ul>
);

describe('SideNav Component', () => {
  it('renders closed by default and hides content', () => {
    render(
      <SideNav isOpen={false} onToggle={() => {}}>
        <MockNavContent />
      </SideNav>
    );
    
    const navElement = screen.getByRole('navigation', { hidden: true });
    
    expect(navElement).toHaveClass('opacity-0', 'pointer-events-none');
    expect(navElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('shows content when open', () => {
    render(
      <SideNav isOpen={true} onToggle={() => {}}>
        <MockNavContent />
      </SideNav>
    );
    
    const navElement = screen.getByRole('navigation');
    
    expect(navElement).toBeVisible();
    expect(navElement).not.toHaveClass('pointer-events-none');
    expect(navElement).toHaveAttribute('aria-hidden', 'false');

    const linkElement = screen.getByText('Dashboard');
    expect(linkElement).toBeVisible();
  });

  it('calls the onToggle function when the button is clicked', () => {
    const handleToggle = jest.fn();

    render(
      <SideNav isOpen={false} onToggle={handleToggle}>
        <MockNavContent />
      </SideNav>
    );
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});