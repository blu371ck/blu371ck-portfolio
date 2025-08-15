import Projects, {projectData} from "./Projects";
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Projects Component', () => {
  
  it('renders the main "My Projects" heading', () => {
    render(<Projects />);
    const headingElement = screen.getByRole('heading', { name: /my projects/i, level: 2 });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders all project category titles', () => {
    render(<Projects />);
    projectData.forEach(category => {
      const categoryTitle = screen.getByRole('heading', { name: category.title, level: 3 });
      expect(categoryTitle).toBeInTheDocument();
    });
  });

  it('renders all project links with the correct href attribute', () => {
    render(<Projects />);
    projectData.forEach(category => {
      category.projects.forEach(project => {
        const linkElement = screen.getByText(project.title);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', project.url);
      });
    });
  });

  it('renders an image for each project category', () => {
    render(<Projects />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(projectData.length);
    projectData.forEach((category, index) => {
        expect(images[index]).toHaveAttribute('alt', category.title);
    });
  });

});