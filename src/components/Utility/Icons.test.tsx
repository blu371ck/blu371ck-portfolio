import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './Icons';

describe('LinkedInIcon Component', () => {
  it('renders the icon correctly', () => {
    render(<LinkedInIcon role="img" aria-label="LinkedIn" />);
    expect(screen.getByRole('img', { name: /linkedin/i })).toBeInTheDocument();
  });
});

describe('GitHubIcon Component', () => {
  it('renders the icon correctly', () => {
    render(<GitHubIcon role="img" aria-label="GitHub" />);
    expect(screen.getByRole('img', { name: /github/i })).toBeInTheDocument();
  });
});

describe('EmailIcon Component', () => {
  it('renders the icon correctly', () => {
    render(<EmailIcon role="img" aria-label="Email" />);
    expect(screen.getByRole('img', { name: /email/i })).toBeInTheDocument();
  });
});
