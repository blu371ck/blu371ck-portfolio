import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';

const projectsProjectData = [
    {
        title: "Digital Forensics",
        image: "https://storage.googleapis.com/gemini-prod-us-east1-159a/images/03807212-085f-42d8-a836-821e251658a2.png",
        summary: "Investigating digital evidence from disk and memory...",
        projects: [
            { title: "Trojanized Application & Malware Analysis", url: "https://github.com/blu371ck/DFIR-Challenge-Trojanized-Application-Analysis" },
            { title: "Memory Forensics Case Study: BlackEnergy v2", url: "https://github.com/blu371ck/Memory-Forensics-BlackEnergy-Malware-Analysis" }
        ]
    },
    {
        title: "Network Forensics",
        image: "https://storage.googleapis.com/gemini-prod-us-east1-159a/images/330b661d-720c-4b36-a5b8-3e4736f595f5.png",
        summary: "Analyzing network traffic to detect and investigate malicious activity...",
        projects: [
            { title: "Network Forensic Analysis of a Stealthy Malware Attack", url: "https://github.com/blu371ck/Network-Forensic-Analysis-Obfuscated-PowerShell-MultiStage" },
        ]
    },
    {
        title: "SOC Analysis & Threat Hunting",
        image: "https://storage.googleapis.com/gemini-prod-us-east1-159a/images/9405c10a-4a4a-4c22-9231-92b0394e5025.png",
        summary: "Proactively searching for threats within an environment...",
        projects: [
            { title: "Security Operations & Threat Hunting Homelab", url: "https://github.com/blu371ck/Security-Operations-Threat-Hunting-Homelab" }
        ]
    },
    {
        title: "SOAR",
        image: "https://storage.googleapis.com/gemini-prod-us-east1-159a/images/362548a3-2c1b-4172-8254-84c249a09325.png",
        summary: "Automating the response to security incidents...",
        projects: [
            { title: "Cloud Warden – Automated AWS Threat Detection and Response", url: "https://github.com/blu371ck/AWS-GuardDuty-Lambda-SOAR" }
        ]
    }
];

interface Project { title: string; url: string; }
interface ProjectCategory { title: string; image: string; summary: string; projects: Project[]; }

const ProjectModal = ({ category, onClose }: { category: ProjectCategory | null; onClose: () => void; }) => {
    if (!category) return null;
    return (
        <div data-testid="project-modal">
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <ul>
                {category.projects.map(p => <li key={p.title}><a href={p.url}>{p.title}</a></li>)}
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

const ProjectCard = ({ category, onClick }: { category: ProjectCategory; onClick: () => void; }) => (
    <div onClick={onClick} data-testid={`project-card-${category.title}`}>
        <h3>{category.title}</h3>
    </div>
);

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<ProjectCategory | null>(null);
    return (
        <div>
            <h2>My Projects</h2>
            <div>
                {projectsProjectData.map(category => (
                    <ProjectCard key={category.title} category={category} onClick={() => setSelectedCategory(category)} />
                ))}
            </div>
            <ProjectModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
        </div>
    );
};

describe('Projects Component', () => {
    it('renders the main heading and project cards', () => {
        render(<Projects />);
        expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument();
        expect(screen.getByText('Digital Forensics')).toBeInTheDocument();
    });

    it('opens and displays the correct modal content when a card is clicked', () => {
        render(<Projects />);
        
        expect(screen.queryByTestId('project-modal')).not.toBeInTheDocument();

        fireEvent.click(screen.getByTestId('project-card-Digital Forensics'));
        
        const modal = screen.getByTestId('project-modal');
        expect(modal).toBeInTheDocument();
        
        expect(within(modal).getByRole('heading', { name: 'Digital Forensics' })).toBeInTheDocument();
        expect(within(modal).getByText('Investigating digital evidence from disk and memory...')).toBeInTheDocument();
        expect(within(modal).getByText('Trojanized Application & Malware Analysis')).toBeInTheDocument();
    });
});