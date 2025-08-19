import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';

// Mock lucide-react icons to simplify testing
jest.mock('lucide-react', () => ({
  Home: () => <div data-testid="home-icon" />,
  User: () => <div data-testid="user-icon" />,
  FolderCog: () => <div data-testid="folder-icon" />,
  Wrench: () => <div data-testid="wrench-icon" />,
  GraduationCap: () => <div data-testid="grad-cap-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
}));

describe('Navigation Component', () => {

    it('renders all desktop navigation links correctly', () => {
        render(<Navigation />);
        const desktopNav = screen.getByTestId('desktop-nav');
        // Check for links only within the desktop navigation
        expect(within(desktopNav).getByLabelText('Home')).toBeInTheDocument();
        expect(within(desktopNav).getByLabelText('About Me')).toBeInTheDocument();
    });

    it('renders all mobile navigation links correctly', () => {
        render(<Navigation />);
        const mobileNav = screen.getByTestId('mobile-nav');
        // Check for links only within the mobile navigation
        expect(within(mobileNav).getByLabelText('Home')).toBeInTheDocument();
        expect(within(mobileNav).getByLabelText('About Me')).toBeInTheDocument();
    });

    it('opens and closes the mobile menu on button click', () => {
        render(<Navigation />);
        const mobileMenu = screen.getByTestId('mobile-nav');
        const openButton = screen.getByLabelText('Open mobile menu');

        // Menu should be hidden initially
        expect(mobileMenu).toHaveClass('-translate-x-full');

        // Open the menu
        fireEvent.click(openButton);
        expect(mobileMenu).toHaveClass('translate-x-0');
    });
});