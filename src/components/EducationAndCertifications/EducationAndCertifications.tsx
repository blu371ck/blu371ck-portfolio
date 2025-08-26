import React from 'react';
import wguLogo from "./assets/WGU_Logo_Circle_300x300.png";
import linuxCert from "./assets/LPIC.png";
import dataEngineer from "./assets/awsDataEng.png";
import awsAI from "./assets/aws_ai_pract.png";
import awsSec from "./assets/awsSecurity.png";
import awsSA from "./assets/awsSA.png";
import awsDA from "./assets/awsDataAnalytics.png";
import aPlus from "./assets/comptiaA.png";
import netPlus from "./assets/comptiaNET.png";
import comptiaSEC from "./assets/comptiaSEC.png";
import comptiaPROJ from "./assets/comptiaPROJ.png";
import comptiaCYSA from "./assets/comptiaCYSA.png";
import comptiaPEN from "./assets/comptiaPEN.png";
import ceh from "./assets/CEH.png";
import eces from "./assets/ECES.png";

export const educationData = [
    {
        logoUrl: wguLogo,
        degree: "Master of Science",
        field: "Cybersecurity and Information Assurance"
    },
    {
        logoUrl: wguLogo,
        degree: "Bachelor of Science",
        field: "Cybersecurity and Information Assurance"
    }
];

export const certificationData = [
    { name: 'CompTIA A+', logoUrl: aPlus },
    { name: 'CompTIA Network+', logoUrl: netPlus },
    { name: 'CompTIA Security+', logoUrl: comptiaSEC },
    { name: 'CompTIA Project+', logoUrl: comptiaPROJ },
    { name: 'CompTIA CySA+', logoUrl: comptiaCYSA },
    { name: 'CompTIA PenTest+', logoUrl: comptiaPEN },
    { name: 'LPIC-1', logoUrl: linuxCert },
    { name: 'Certified Ethical Hacker', logoUrl: ceh },
    { name: 'Certified Encryption Specialist', logoUrl: eces },
    { name: 'AWS Data Engineer - Associate', logoUrl: dataEngineer },
    { name: 'AWS AI Practitioner', logoUrl: awsAI },
    { name: 'AWS Solutions Architect – Associate', logoUrl: awsSA },
    { name: 'AWS Data Analytics – Specialty', logoUrl: awsDA },
    { name: 'AWS Security - Specialty', logoUrl: awsSec },
];

const EducationAndCertifications = () => {
    return (
        <div className="w-full max-w-6xl mx-auto text-center">
            <h2 id="education-heading" className="text-5xl font-bold text-gray-200 mb-12">Education & Certifications</h2>
            
            <div className="mb-16">
                {educationData.map((edu, index) => (
                    <div key={index} className="flex items-center justify-center gap-8 mb-8">
                        <img src={edu.logoUrl} alt="Western Governors University logo" className="h-24 w-24 object-contain"/>
                        <div className="text-left text-gray-300">
                            <p className="text-2xl font-bold">{edu.degree}</p>
                            <p className="text-xl">{edu.field}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative my-16">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-htb-500" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-black px-2 text-htb-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" /></svg>
                    </span>
                </div>
            </div>

            <div>
                <p className="text-gray-400 italic mb-8">
                    All certifications can be validated at 
                    <a href="https://www.credly.com/users/mckenzie.andrew" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mx-1 focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm">Credly</a> 
                    and 
                    <a href="https://www.linkedin.com/in/mckenzie-andrew/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1 focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm">LinkedIn</a>.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
                    {certificationData.map(cert => (
                        <div key={cert.name} className="group relative flex flex-col items-center justify-center">
                            <img src={cert.logoUrl} alt={cert.name} className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationAndCertifications;
