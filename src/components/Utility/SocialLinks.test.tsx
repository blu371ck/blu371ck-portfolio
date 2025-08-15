import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

describe('SocialLinks Component', () => {
  it('renders all three social media links with correct hrefs', () => {
    render(<SocialLinks />);
    
    const allLinks = screen.getAllByRole('link');

    const linkedInLink = allLinks.find(link => link.getAttribute('href') === 'https://www.linkedin.com');
    expect(linkedInLink).toBeInTheDocument();

    const githubLink = allLinks.find(link => link.getAttribute('href') === 'https://www.github.com');
    expect(githubLink).toBeInTheDocument();

    const emailLink = allLinks.find(link => link.getAttribute('href') === 'mailto:email@example.com');
    expect(emailLink).toBeInTheDocument();
  });
});