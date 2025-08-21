import React, { useState, useEffect } from 'react';
import socThreatImage from './assets/soc_threat_hunting.png';
import diskForensics from './assets/disk_forensics.png';
import securityAutomation from './assets/security_automation.png';
import pentest from './assets/pentest.png';
import malwareAnalysis from './assets/malwareAnalysis.png';
import tooling from './assets/tooling.png';


const projectData = [
    {
        title: "Digital Forensics",
        image: diskForensics,
        summary: "I possess comprehensive skills in digital forensics, covering the acquisition, preservation, and analysis of digital evidence across various platforms. My experience includes conducting in-depth examinations of disk images, memory captures, and network traffic to uncover artifacts, reconstruct events, and identify indicators of compromise.",
        subCategories: [
            {
                title: "Disk Forensics",
                projects: [
                    { title: "Forensic Investigation into Trojan Application", url: "https://github.com/blu371ck/DFIR-Challenge-Trojanized-Application-Analysis" },
                    { title: "Forensic Investigation into Illegal User Activity", url: "https://github.com/blu371ck/DFIR-User-Activity-Investigation" }
                ]
            },
            {
                title: "Memory Forensics",
                projects: [
                    { title: "Memory Forensics Case Study: BlackEnergy v2", url: "https://github.com/blu371ck/Memory-Forensics-BlackEnergy-Malware-Analysis" },
                    { title: "Memory Forensics Case Study: Metasploit Meterpreter Payload", url: "https://github.com/blu371ck/Memory-Forensics-Meterpreter-Payload" }
                ]
            },
            {
                title: "Network Forensics",
                projects: [
                    { title: "Network Forensic Analysis of Obfuscated PowerShell Attack", url: "https://github.com/blu371ck/Network-Forensic-Analysis-Obfuscated-PowerShell-MultiStage" }, 
                    { title: "Network Forensic Analysis of a Stealthy Malware Attack", url: "https://github.com/blu371ck/Network-Forensic-Analysis-Obfuscated-PowerShell-MultiStage" },
                    { title: "Network Forensic Analysis of a Remote Access Trojan (RAT) Infection", url: "https://github.com/blu371ck/Network-Forensic-Analysis-RAT" },
                    { title: "Network Forensic Analysis of SQLi Web Attack", url: "https://github.com/blu371ck/Network-Forensic-Analysis-SQLi-Web-Attack" }
                ]
            }
        ]
    },
    {
        title: "SOC Analysis & Threat Hunting",
        image: socThreatImage,
        summary: "My work in threat hunting focuses on proactively identifying and analyzing adversary tactics to bolster organizational defenses. This involves creating lab environments to simulate real-world attacks, allowing me to hunt for indicators of compromise (IOCs) and test defensive strategies using SIEM and EDR tools.",
        projects: [
            { title: "Security Operations & Threat Hunting Homelab", url: "https://github.com/blu371ck/Security-Operations-Threat-Hunting-Homelab" },
            { title: "Splunk Boss of the SOC V1", url: "#" },
            { title: "Splunk Boss of the SOC V2", url: "#" },
            { title: "Splunk Boss of the SOC V3", url: "#" }
        ]
    },
    {
        title: "SOAR",
        image: securityAutomation,
        summary: "My expertise in SOAR is centered on creating autonomous systems that enhance threat detection and accelerate incident response. I specialize in developing automated workflows within cloud environments, primarily AWS, to neutralize threats identified by services like GuardDuty.",
        projects: [
            { title: "Cloud Warden – Automated AWS Threat Detection and Response", url: "https://github.com/blu371ck/AWS-GuardDuty-Lambda-SOAR" }
        ]
    },
    {
        title: "Malware Analysis",
        image: malwareAnalysis,
        summary: "I analyze malicious software to understand its behavior, origin, and impact. This involves reverse-engineering, sandboxing, and code analysis to uncover functionality, identify indicators of compromise (IOCs), and develop effective countermeasures and detection signatures.",
        projects: [
            { title: "Placeholder Project Title", url: "#" },
            { title: "Placeholder Project Title", url: "#" }
        ]
    },
    {
        title: "Scripting/Tooling",
        image: tooling,
        summary: "I develop custom scripts and tools to automate security tasks, streamline workflows, and enhance defensive capabilities. My projects in this area focus on creating practical solutions for common cybersecurity challenges, from data parsing and analysis to automated system hardening.",
        projects: [
            { title: "Placeholder Project Title", url: "#" },
            { title: "Placeholder Project Title", url: "#" }
        ]
    },
    {
        title: "Penetration Testing",
        image: pentest,
        summary: "To build the strongest defense, you must deeply understand the offense. This section showcases my skills in offensive security, where I adopt an adversarial mindset to identify, exploit, and report security vulnerabilities. Each project demonstrates a methodical approach to penetration testing, from reconnaissance and exploitation to post-exploitation and reporting, reinforcing my ability to strengthen security postures from the inside out.",
        projects: [
            { title: "Placeholder Project title", url: "#" },
            { title: "Placeholder Project title", url: "#" }
        ]
    }
];

// --- INTERFACES (No changes here) ---
interface Project {
    title: string;
    url: string;
}

interface SubCategory {
    title: string;
    projects: Project[];
}

interface ProjectCategory {
    title: string;
    image: string;
    summary: string;
    projects?: Project[];
    subCategories?: SubCategory[];
}

// --- PROJECT MODAL (No changes here) ---
const ProjectModal = ({ category, onClose }: { category: ProjectCategory | null; onClose: () => void; }) => {
    if (!category) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 transition-opacity duration-300">
            <div className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
                <div className="p-8 flex-grow overflow-y-auto text-gray-300 text-left">
                    <h3 className="text-4xl font-bold mb-4 text-white">{category.title}</h3>
                    <hr className="border-gray-600 mb-6" />
                    <p className="text-lg mb-8">{category.summary}</p>
                    {category.subCategories ? (
                        <div className="space-y-6">
                            {category.subCategories.map(subCat => (
                                <div key={subCat.title}>
                                    <h4 className="text-2xl font-semibold mb-3 text-white">{subCat.title}</h4>
                                    <ul className="space-y-2 list-disc list-inside">
                                        {subCat.projects.map(project => (
                                            <li key={project.title}>
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{project.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h4 className="text-2xl font-semibold mb-3 text-white">Relevant Projects:</h4>
                            <ul className="space-y-2 list-disc list-inside">
                                {category.projects?.map(project => (
                                    <li key={project.title}>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{project.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
    );
};

// --- PROJECT CARD (No changes here) ---
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

// --- MAIN PROJECTS COMPONENT ---
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
            {/* --- GRID LAYOUT UPDATED --- */}
            {/* Changed lg:grid-cols-4 to lg:grid-cols-3 for the 3x2 grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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