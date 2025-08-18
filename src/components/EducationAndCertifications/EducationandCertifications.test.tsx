import React from "react";
import EducationAndCertifications, { educationData, certificationData } from "./EducationAndCertifications";
import { render, screen } from '@testing-library/react';


describe('EducationAndCertifications Component', () => {

    it('renders the main heading', () => {
        render(<EducationAndCertifications />);
        expect(screen.getByRole('heading', { name: /education & certifications/i })).toBeInTheDocument();
    });

    it('renders all education entries correctly', () => {
        render(<EducationAndCertifications />);
        expect(screen.getByText('Master of Science')).toBeInTheDocument();
        expect(screen.getAllByText('Cybersecurity and Information Assurance')).toHaveLength(2);
        expect(screen.getAllByText('Bachelor of Science')).toHaveLength(1);
    });

    it('renders the validation links for Credly and LinkedIn', () => {
        render(<EducationAndCertifications />);
        const credlyLink = screen.getByRole('link', { name: /credly/i });
        const linkedInLink = screen.getByRole('link', { name: /linkedin/i });

        expect(credlyLink).toBeInTheDocument();
        expect(credlyLink).toHaveAttribute('href', 'https://www.credly.com/users/mckenzie.andrew');
        
        expect(linkedInLink).toBeInTheDocument();
        expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/mckenzie-andrew/');
    });

    it('renders all certification images', () => {
        render(<EducationAndCertifications />);
        const allImages = screen.getAllByRole('img');
        const certImages = allImages.filter(img => (img as HTMLImageElement).alt !== 'University Logo');
        
        expect(certImages.length).toBe(certificationData.length);
        expect(screen.getByAltText('CompTIA Security+')).toBeInTheDocument();
    });

});
