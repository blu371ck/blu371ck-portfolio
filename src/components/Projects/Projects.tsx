import React, { useState, useEffect, useRef } from 'react';
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
            { title: "Splunk Boss of the SOC V1 - Walkthrough", url: "https://gist.github.com/blu371ck/85189624df1370c268b5698f10d1259f" },
            { title: "Splunk Boss of the SOC V2 - Walkthrough", url: "https://gist.github.com/blu371ck/a966574f14f5c2b5f6f4b48ef419be7f" }
        ]
    },
    {
        title: "SOAR",
        image: securityAutomation,
        summary: "My expertise in SOAR is centered on creating autonomous systems that enhance threat detection and accelerate incident response. I specialize in developing automated workflows within cloud environments, primarily AWS, to neutralize threats identified by services like GuardDuty.",
        projects: [
            { title: "Automated AWS Threat Detection and Response", url: "https://github.com/blu371ck/AWS-GuardDuty-Lambda-SOAR" }
        ]
    },
    {
        title: "Malware Analysis",
        image: malwareAnalysis,
        summary: "I analyze malicious software to understand its behavior, origin, and impact. This involves reverse-engineering, sandboxing, and code analysis to uncover functionality, identify indicators of compromise (IOCs), and develop effective countermeasures and detection signatures.",
        projects: [
            { title: "Malware Analysis: WannaCry Ransomware", url: "https://github.com/blu371ck/Malware-Analysis-WannaCry-Ransomware" },
            { title: "Malware Analysis: PDF dropper for AgentTesla", url: "https://github.com/blu371ck/Malware-Analysis-PDF-Dropper" }
        ]
    },
    {
        title: "Scripting/Tooling",
        image: tooling,
        summary: "I develop custom scripts and tools to automate security tasks, streamline workflows, and enhance defensive capabilities. My projects in this area focus on creating practical solutions for common cybersecurity challenges, from data parsing and analysis to automated system hardening.",
        projects: [
            { title: "PSVirusTotal: PowerShell Script for VirusTotal API (WIP)", url: "https://github.com/blu371ck/PSVirusTotal" },
            { title: "Example Python Library for Automating GuardDuty Findings", url: "https://github.com/blu371ck/aws-reflex" }
        ]
    },
    {
        title: "Penetration Testing",
        image: pentest,
        summary: "To build the strongest defense, you must deeply understand the offense. This section showcases my skills in offensive security, where I adopt an adversarial mindset to identify, exploit, and report security vulnerabilities. Each project demonstrates a methodical approach to penetration testing, from reconnaissance and exploitation to post-exploitation and reporting, reinforcing my ability to strengthen security postures from the inside out.",
        projects: [
            { title: "Penetration Test Report: Forest", url: "https://github.com/blu371ck/Forest-Penetration-Test-Report/tree/main" },
            { title: "Penetration Test Report: Manager", url: "https://github.com/blu371ck/Manager-Penetration-Test-Report" }
        ]
    }
];

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

const ProjectModal = ({ category, onClose }: { category: ProjectCategory | null; onClose: () => void; }) => {
    if (!category) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 transition-opacity duration-300" role="dialog" aria-modal="true" aria-labelledby='modal-title'>
            <div className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
                <div className="p-8 flex-grow overflow-y-auto text-gray-300 text-left">
                    <h3 id="modal-title" className="text-4xl font-bold mb-4 text-white">{category.title}</h3>
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
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline focus-visible:ring-1 focus-visible:ring-blue-400 rounded-sm">{project.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm" aria-label="Close project details">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
    );
};

const ProjectCard = ({ category, onClick }: { category: ProjectCategory; onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; }) => (
    <button
        className="cursor-pointer rounded-lg shadow-lg flex flex-col p-6 text-white text-left relative overflow-hidden bg-gray-950/65 transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400"
        onClick={onClick}
    >
        <div className="flex-grow flex items-center justify-center mb-4">
            <img src={category.image} alt="" className="h-35 w-30 object-contain" />
        </div>
        <h3 className="text-lg font-bold z-10 relative text-center">{category.title}</h3>
    </button>
);

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const handleCardClick = (category: ProjectCategory, event: React.MouseEvent<HTMLButtonElement>) => {
        triggerRef.current = event.currentTarget;
        setSelectedCategory(category);
    }

    const handleCloseModal = () => {
        setSelectedCategory(null);
        triggerRef.current?.focus();
    }

    useEffect(() => {
        const modalElement = document.querySelector('[role="dialog"]');
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseModal();
            }

            if (event.key === 'Tab' && modalElement) {
                const focusableElements = Array.from(modalElement.querySelectorAll('a, button'));
                const firstElement = focusableElements[0] as HTMLElement;
                const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                if (event.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        event.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        event.preventDefault();
                    }
                }
            }
        };

        if (selectedCategory) {
            document.body.style.overflow = "hidden";
            document.addEventListener('keydown', handleKeyDown);
            const closeButton = modalElement?.querySelector('button');
            closeButton?.focus();
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown);
        };

    }, [selectedCategory]);


    return (
        <div className="w-full max-w-5xl mx-auto">
            <h2 id="project-heading" className="text-5xl font-bold text-gray-200 mb-30 text-center">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map(category => (
                    <ProjectCard
                        key={category.title}
                        category={category}
                        onClick={(e) => handleCardClick(category, e)}
                    />
                ))}
            </div>
            <ProjectModal
                category={selectedCategory}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default Projects;