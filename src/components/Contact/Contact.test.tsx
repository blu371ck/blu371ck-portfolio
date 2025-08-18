import React from "react";
import Contact from "./Contact";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('Contact Component', () => {

    it('renders the main heading and introductory text', () => {
        render(<Contact />);
        expect(screen.getByRole('heading', { name: /let's connect/i })).toBeInTheDocument();
        expect(screen.getByText(/i'm always open to discussing new opportunities/i)).toBeInTheDocument();
    });


    it('renders social links with correct href attributes', () => {
        render(<Contact />);
        const socialLinksContainer = screen.getByText('Find me on').parentElement;
        expect(socialLinksContainer).toBeInTheDocument();
        if (socialLinksContainer) {
            const links = socialLinksContainer.querySelectorAll('a');
            expect(links[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/mckenzie-andrew/');
            expect(links[1]).toHaveAttribute('href', 'https://github.com/blu371ck');
        }
    });
});