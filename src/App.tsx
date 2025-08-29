import React, { useState, useEffect, useRef } from 'react';
import Navigation from "./components/Navigation/Navigation";
import RoleAnimator from './components/RoleAnimator/RoleAnimator';
import CyberBackground from './components/CyberBackground/CyberBackground';
import SocialLinks from './components/Utility/SocialLinks';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import EducationAndCertifications from './components/EducationAndCertifications/EducationAndCertifications';
import Contact from './components/Contact/Contact';

const ScrollDownIndicator = ({ text }: { text: string }) => (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
            <p className="mb-2 text-gray-400 text-sm">{text}</p>
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
);


const App = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <div className="relative bg-black font-sans text-white md:pl-20">
      <CyberBackground />
      <Navigation />

      <main id="home" ref={mainRef} className={`relative h-screen flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out z-10 px-4 `}>
        <div className="flex-grow flex flex-col items-center justify-center pb-24">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight font-sub-header text-gray-300">Andrew McKenzie</h1>
          <div className="mt-4 flex items-center text-2xl sm:text-3xl md:text-5xl font-light text-gray-300 font-sub-header">
            <p className="mr-4">Cyber</p>
            <RoleAnimator />
          </div>
          <div className="mt-6"><SocialLinks /></div>
        </div>
        <ScrollDownIndicator text="About Me" />
      </main>

      <section id="about" ref={aboutRef} className={`relative h-screen flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out z-10 px-6 `} aria-label="about-heading">
          <div className="max-w-4xl mx-auto pb-24">
              <h2 id="about-heading" className="text-4xl sm:text-4xl md:text-6xl font-bold text-gray-300 mb-8">About Me</h2>
              <div className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed text-left space-y-4">
                <p>My career in cybersecurity began with a foundational role in system administration, where I developed a deep understanding of the digital infrastructure that businesses rely on. This experience ignited my passion for network security and the complex dynamics between attackers and defenders.</p>
                <p>Today, I specialize in defensive cybersecurity, guided by the belief that a deep understanding of offensive tactics is the cornerstone of an effective defense. My initiative-taking approach to learning involves designing and building custom homelab environments to master advanced concepts and test defensive strategies in a practical setting. My core expertise includes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-htb-500">
                  <li><span className="text-gray-400">Digital Forensic Analysis & Threat Detection</span></li>
                  <li><span className="text-gray-400">Translating complex technical findings into actionable intelligence</span></li>
                  <li><span className="text-gray-400">Building and utilizing homelabs to simulate real-world attacks</span></li>
                  <li><span className="text-gray-400">Clear and effective communication for all stakeholders</span></li>
                </ul>
              </div>
              <div className="mt-12 w-1/2 mx-auto h-px bg-gradient-to-r from-transparent via-htb-500 to-transparent"></div>
          </div>
          <ScrollDownIndicator text="My Projects" />
      </section>

      <section id="projects" ref={projectsRef} className={`relative min-h-screen flex flex-col items-center justify-center py-20 transition-opacity duration-1000 ease-in-out z-10 px-4 `} aria-label="projects-heading">
        <div className="w-full pb-24 flex justify-center">
          <Projects />
        </div>
        <ScrollDownIndicator text="Skills" />
      </section>

      <section id="skills" ref={skillsRef} className={`relative min-h-screen flex flex-col items-center justify-center py-20 transition-opacity duration-1000 ease-in-out z-10 px-4 `} aria-label="skills-heading">
        <div className="w-full pb-24 flex justify-center">
          <Skills />
        </div>
        <ScrollDownIndicator text="Education" />
      </section>

      <section id="education" ref={educationRef} className={`relative min-h-screen flex flex-col items-center justify-center py-20 transition-opacity duration-1000 ease-in-out z-10 px-4 `} aria-label="education-heading">
        <div className="w-full pb-24 flex justify-center">
          <EducationAndCertifications />
        </div>
        <ScrollDownIndicator text="Contact Me" />
      </section>

      <section id="contact" ref={contactRef} className={`relative min-h-screen flex flex-col items-center justify-center py-20 transition-opacity duration-1000 ease-in-out z-10 px-4 `} aria-label="contact-heading">
        <Contact />
      </section>
    </div>
  );
};

export default App;