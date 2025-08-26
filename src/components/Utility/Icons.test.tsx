import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './Icons';

describe('LinkedInIcon Component', () => {
  it('renders the icon correctly', () => {
    render(<LinkedInIcon />);
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
  });
});

describe('GitHubIcon Component', () => {
  it('renders the icon correctly', () => {
    render(<GitHubIcon />);
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
  });
});

describe('EmailIcon Component', () => {
  it('renders the icon correctly', () => {
    render(<EmailIcon />);
    expect(screen.getByTestId('email-icon')).toBeInTheDocument();
  });
});
