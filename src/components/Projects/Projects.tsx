import React from 'react';
import digitalForensicImage from './assets/digital_forensics.png';
import networkForensicImage from './assets/network_forensics.png';
import socImage from './assets/soc_image.png';
import automationImage from './assets/automation_image.png';

// Define the structure for a single project
export interface Project {
    title: string;
    url: string;
}

// Define the structure for a project category
export interface ProjectCategory {
    title: string;
    image: string;
    summary: string;
    projects: Project[];
}

// Data for all project categories
export const projectData: ProjectCategory[] = [
    {
        title: "Digital Forensics",
        image: digitalForensicImage,
        summary: "Investigating digital evidence from disk and memory to uncover the full story of a security incident. These projects focus on analyzing artifacts left behind by attackers to reconstruct their actions and understand the scope of a compromise.",
        projects: [
            { title: "Trojanized Application & Malware Analysis", url: "https://github.com/blu371ck/DFIR-Challenge-Trojanized-Application-Analysis" },
            { title: "Memory Forensics Case Study: BlackEnergy v2", url: "https://github.com/blu371ck/Memory-Forensics-BlackEnergy-Malware-Analysis" }
        ]
    },
    {
        title: "Network Forensics",
        image: networkForensicImage,
        summary: "Analyzing network traffic to detect and investigate malicious activity. These projects involve dissecting packet captures (PCAPs) to identify attack patterns, trace C2 communications, and understand how adversaries operate on the network.",
        projects: [
            { title: "Network Forensic Analysis of a Stealthy Malware Attack", url: "https://github.com/blu371ck/Network-Forensic-Analysis-Obfuscated-PowerShell-MultiStage" },
            { title: "Network Forensic Analysis of a Remote Access Trojan (RAT) Infection", url: "https://github.com/blu371ck/Network-Forensic-Analysis-RAT" },
            { title: "WarmCookie Backdoor Network Analysis", url: "https://github.com/blu371ck/Network-Forensic-Analysis-WarmCookie-Malware" },
            { title: "Network Forensic Analysis SQLi Web Attack", url: "https://github.com/blu371ck/Network-Forensic-Analysis-SQLi-Web-Attack" }
        ]
    },
    {
        title: "SOC Analysis & Threat Hunting",
        image: socImage,
        summary: "Proactively searching for threats within an environment. This project demonstrates the creation of a lab environment to simulate attacks and hunt for indicators of compromise (IOCs) using SIEM and EDR tools.",
        projects: [
            { title: "Security Operations & Threat Hunting Homelab", url: "https://github.com/blu371ck/Security-Operations-Threat-Hunting-Homelab" }
        ]
    },
    {
        title: "SOAR",
        image: automationImage,
        summary: "Automating the response to security incidents. This project focuses on building a Security Orchestration, Automation, and Response (SOAR) pipeline in AWS to automatically detect and remediate threats found by GuardDuty.",
        projects: [
            { title: "Cloud Warden – Automated AWS Threat Detection and Response", url: "https://github.com/blu371ck/AWS-GuardDuty-Lambda-SOAR" }
        ]
    }
];

// Reusable component for displaying a single project category
export const ProjectCategoryCard = ({ category, reverseLayout = false }: { category: ProjectCategory, reverseLayout?: boolean }) => (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-12 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
        {/* Left side: Image and Title */}
        <div className="w-full md:w-1/2 text-center">
            <h3 className="text-4xl font-bold text-gray-300 mb-4">{category.title}</h3>
            <img 
                src={category.image} 
                alt={category.title} 
                className="rounded-lg shadow-lg mx-auto"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/FF0000/FFFFFF?text=Image+Error'; }}
            />
        </div>
        {/* Right side: Summary and Project Links */}
        <div className="w-full md:w-1/2">
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
                <p className="text-lg text-gray-400 mb-4">{category.summary}</p>
                <ul className="space-y-2">
                    {category.projects.map((project, index) => (
                        <li key={index}>
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
                            >
                                {project.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);


const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl font-bold text-gray-300 font-sub-header mb-12 text-center">My Projects</h2>
            {projectData.map((category, index) => (
                <ProjectCategoryCard key={index} category={category} reverseLayout={index % 2 !== 0} />
            ))}
        </div>
    );
};

export default Projects;
