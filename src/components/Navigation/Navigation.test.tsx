// File: src/components/Navigation/Navigation.test.tsx

import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
// Make sure to import the Navigation component from its actual file location
import Navigation from './Navigation';

// Mock component to pass as children for testing
const MockNavContent = () => (
  <ul>
    <li><a href="/">Dashboard</a></li>
  </ul>
);

describe('Navigation Component', () => {
  describe('Mobile View (Top Navigation)', () => {
    it('renders the top bar with a logo and hamburger menu', () => {
      render(<Navigation><MockNavContent /></Navigation>);
      
      // Check for the logo/initials
      expect(screen.getByText('AM')).toBeInTheDocument();

      // Find the header element first
      const header = screen.getByRole('banner');
      // Then find the button specifically within the header
      const hamburgerButton = within(header).getByRole('button');
      expect(hamburgerButton).toBeInTheDocument();
    });

    it('toggles the mobile dropdown menu on click', () => {
      render(<Navigation><MockNavContent /></Navigation>);
      
      const header = screen.getByRole('banner');
      const hamburgerButton = within(header).getByRole('button');
      const mobileMenu = screen.getByTestId('mobile-menu');

      // Menu should be hidden initially
      expect(mobileMenu).toHaveClass('-translate-y-full');

      // Click to open
      fireEvent.click(hamburgerButton);
      expect(mobileMenu).toHaveClass('translate-y-0');
      expect(within(mobileMenu).getByText('Dashboard')).toBeInTheDocument();

      // Click to close
      fireEvent.click(hamburgerButton);
      expect(mobileMenu).toHaveClass('-translate-y-full');
    });
  });

  describe('Desktop View (Side Navigation)', () => {
    it('renders the side navigation and its toggle button in a closed state', () => {
      render(<Navigation><MockNavContent /></Navigation>);

      // The side navigation <aside> element should be in the document
      const asideElement = screen.getByRole('complementary', { name: /sidebar/i });
      expect(asideElement).toBeInTheDocument();

      // The side nav toggle button should be in the document and start in the "Open" state
      const sideNavToggleButton = screen.getByRole('button', { name: /open navigation/i });
      expect(sideNavToggleButton).toBeInTheDocument();
    });

    it('toggles the side navigation on click', () => {
      render(<Navigation><MockNavContent /></Navigation>);
      
      const sideNavToggleButton = screen.getByRole('button', { name: /open navigation/i });
      const desktopNavContent = screen.getByTestId('desktop-nav-content');

      // Side nav is closed by default, so content is hidden
      expect(desktopNavContent).toHaveClass('opacity-0');
      
      // Click to open
      fireEvent.click(sideNavToggleButton);
      expect(desktopNavContent).toHaveClass('opacity-100');
      // The button's accessible name should now be "Close"
      expect(screen.getByRole('button', { name: /close navigation/i })).toBeInTheDocument();
      
      // Click to close again
      fireEvent.click(sideNavToggleButton);
      expect(desktopNavContent).toHaveClass('opacity-0');
      // The button's name should revert to "Open"
      expect(screen.getByRole('button', { name: /open navigation/i })).toBeInTheDocument();
    });
  });
});
