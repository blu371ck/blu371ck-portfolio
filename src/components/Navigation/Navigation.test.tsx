import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation, { navLinks } from './Navigation'; 

describe('Navigation Component', () => {

    it('renders all navigation links with the correct icons', () => {
        render(<Navigation />);
        navLinks.forEach(link => {
            const navLink = screen.getByLabelText(link.name);
            expect(navLink).toBeInTheDocument();
        });
    });

    it('all links have the correct href attribute for scrolling', () => {
        render(<Navigation />);
        navLinks.forEach(link => {
            const navLink = screen.getByLabelText(link.name);
            expect(navLink).toHaveAttribute('href', link.href);
        });
    });

    it('shows a tooltip with the section name on hover', () => {
        render(<Navigation />);
        const homeLink = screen.getByLabelText('Home');
        
        const tooltip = screen.getByText('Home');
        fireEvent.mouseEnter(homeLink);
        expect(tooltip).toBeVisible();
    });

});