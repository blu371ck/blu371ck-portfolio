import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Navigation from './Navigation';

const MockNavContent = () => (
  <ul>
    <li><a href="/">Dashboard</a></li>
  </ul>
);

describe('Navigation Component', () => {
  describe('Mobile View (Top Navigation)', () => {
    it('renders the top bar with a logo and hamburger menu', () => {
      render(<Navigation><MockNavContent /></Navigation>);
      
      expect(screen.getByText('AM')).toBeInTheDocument();

      const header = screen.getByRole('banner');
      const hamburgerButton = within(header).getByRole('button');
      expect(hamburgerButton).toBeInTheDocument();
    });

    it('toggles the mobile dropdown menu on click', () => {
      render(<Navigation><MockNavContent /></Navigation>);
      
      const header = screen.getByRole('banner');
      const hamburgerButton = within(header).getByRole('button');
      const mobileMenu = screen.getByTestId('mobile-menu');

      expect(mobileMenu).toHaveClass('-translate-y-full');

      fireEvent.click(hamburgerButton);
      expect(mobileMenu).toHaveClass('translate-y-0');
      expect(within(mobileMenu).getByText('Dashboard')).toBeInTheDocument();

      fireEvent.click(hamburgerButton);
      expect(mobileMenu).toHaveClass('-translate-y-full');
    });
  });

  describe('Desktop View (Side Navigation)', () => {
    it('renders the side navigation and its toggle button in a closed state', () => {
      render(<Navigation><MockNavContent /></Navigation>);

      const asideElement = screen.getByRole('complementary', { name: /sidebar/i });
      expect(asideElement).toBeInTheDocument();

      const sideNavToggleButton = screen.getByRole('button', { name: /open navigation/i });
      expect(sideNavToggleButton).toBeInTheDocument();
    });

    it('toggles the side navigation on click', () => {
      render(<Navigation><MockNavContent /></Navigation>);
      
      const sideNavToggleButton = screen.getByRole('button', { name: /open navigation/i });
      const desktopNavContent = screen.getByTestId('desktop-nav-content');

      expect(desktopNavContent).toHaveClass('opacity-0');
      
      fireEvent.click(sideNavToggleButton);
      expect(desktopNavContent).toHaveClass('opacity-100');
      expect(screen.getByRole('button', { name: /close navigation/i })).toBeInTheDocument();
      
      fireEvent.click(sideNavToggleButton);
      expect(desktopNavContent).toHaveClass('opacity-0');
      expect(screen.getByRole('button', { name: /open navigation/i })).toBeInTheDocument();
    });
  });
});
