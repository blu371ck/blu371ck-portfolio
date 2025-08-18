import React, { useState, useEffect } from 'react';
import socThreatImage from './assets/soc_threat_hunting.png';
import networkForensics from './assets/network_forensics.png';
import diskForensics from './assets/disk_forensics.png';
import securityAutomation from './assets/security_automation.png';

const projectData = [
    {
        title: "Digital Forensics",
        image: diskForensics,
        summary: "Investigating digital evidence from disk and memory to uncover the full story of a security incident. These projects focus on analyzing artifacts left behind by attackers to reconstruct their actions and understand the scope of a compromise.",
        projects: [
            { title: "Trojanized Application & Malware Analysis", url: "https://github.com/blu371ck/DFIR-Challenge-Trojanized-Application-Analysis" },
            { title: "Memory Forensics Case Study: BlackEnergy v2", url: "https://github.com/blu371ck/Memory-Forensics-BlackEnergy-Malware-Analysis" },
            { title: "Forensic Investigation into Illegal User Activity", url: "https://github.com/blu371ck/DFIR-Analysis-Of-Illegal-User-Activity" }
        ]
    },
    {
        title: "Network Forensics",
        image: networkForensics,
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
        image: socThreatImage,
        summary: "Proactively searching for threats within an environment. This project demonstrates the creation of a lab environment to simulate attacks and hunt for indicators of compromise (IOCs) using SIEM and EDR tools.",
        projects: [
            { title: "Security Operations & Threat Hunting Homelab", url: "https://github.com/blu371ck/Security-Operations-Threat-Hunting-Homelab" }
        ]
    },
    {
        title: "SOAR",
        image: securityAutomation,
        summary: "Automating the response to security incidents. This project focuses on building a Security Orchestration, Automation, and Response (SOAR) pipeline in AWS to automatically detect and remediate threats found by GuardDuty.",
        projects: [
            { title: "Cloud Warden – Automated AWS Threat Detection and Response", url: "https://github.com/blu371ck/AWS-GuardDuty-Lambda-SOAR" }
        ]
    }
];

interface Project {
    title: string;
    url: string;
}

interface ProjectCategory {
    title: string;
    image: string;
    summary: string;
    projects: Project[];
}

const ProjectModal = ({ category, onClose }: { category: ProjectCategory | null; onClose: () => void; }) => {
    if (!category) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 transition-opacity duration-300">
            <div className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="p-6 flex-grow overflow-y-auto">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            {category.image}
                            <img src={category.image} alt={category.title} className="rounded-lg w-full h-auto object-cover" />
                        </div>
                        <div className="w-full md:w-1/2 text-gray-300 text-left">
                            <h3 className="text-3xl font-bold mb-4 text-white">{category.title}</h3>
                            <p className="text-lg mb-6">{category.summary}</p>
                            <h4 className="text-xl font-semibold mb-2 text-white">Relevant Projects:</h4>
                            <ul className="space-y-2 list-disc list-inside">
                                {category.projects.map(project => (
                                    <li key={project.title}>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{project.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
    );
};

const ProjectCard = ({ category, onClick }: { category: ProjectCategory; onClick: () => void; }) => (
    <div 
        className="cursor-pointer rounded-lg shadow-lg flex flex-col p-6 text-white relative overflow-hidden bg-gray-900 transition-transform duration-300 hover:scale-105"
        onClick={onClick}
    >
        <div className="flex-grow flex items-center justify-center mb-4">
            <img src={category.image} alt={category.title} className="h-40 w-40 object-contain" />
        </div>
        <h3 className="text-2xl font-bold z-10 relative text-center">{category.title}</h3>
    </div>
);


const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);

    useEffect(() => {
        if (selectedCategory) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedCategory]);


    return (
        <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-200 mb-12 text-center">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {projectData.map(category => (
                    <ProjectCard 
                        key={category.title} 
                        category={category} 
                        onClick={() => setSelectedCategory(category)} 
                    />
                ))}
            </div>
            <ProjectModal 
                category={selectedCategory} 
                onClose={() => setSelectedCategory(null)} 
            />
        </div>
    );
};

export default Projects;
