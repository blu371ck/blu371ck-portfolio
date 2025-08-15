import React, { useState, useEffect, useRef } from 'react';
import Navigation from "./components/Navigation/Navigation";
import RoleAnimator from './components/RoleAnimator/RoleAnimator';
import CyberBackground from './components/CyberBackground/CyberBackground';
import SocialLinks from './components/Utility/SocialLinks';
import Projects from './components/Projects/Projects';

// A reusable navigation icon component
const NavIcon = ({ path }: { path: string }) => (
  <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// A reusable component for the scroll down indicator
const ScrollDownIndicator = ({ text }: { text: string }) => (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
            <p className="mb-2 text-gray-400">{text}</p>
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
);


const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Refs for the sections to observe
  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  // State to control the visibility (and fade effect) of sections
  const [isMainVisible, setMainVisible] = useState(true);
  const [isAboutVisible, setAboutVisible] = useState(false);
  const [isProjectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === mainRef.current) {
            setMainVisible(entry.isIntersecting);
          } else if (entry.target === aboutRef.current) {
            setAboutVisible(entry.isIntersecting);
          } else if (entry.target === projectsRef.current) {
            setProjectsVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (mainRef.current) observer.unobserve(mainRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <div className="relative bg-black font-sans text-white">
      <CyberBackground />
      
      <Navigation>
        <ul className="space-y-2">
          <li><a href="#main" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"><NavIcon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /><span className="ml-3 whitespace-nowrap text-gray-300 group-hover:text-blue-600">Home</span></a></li>
          <li><a href="#about-me" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"><NavIcon path="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /><span className="ml-3 whitespace-nowrap text-gray-300 group-hover:text-blue-600">About Me</span></a></li>
          <li><a href="#projects" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"><NavIcon path="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A10.99 10.99 0 0012 12a10.99 10.99 0 00-3-7.303M15 21a9 9 0 00-3-14.975" /><span className="ml-3 whitespace-nowrap text-gray-300 group-hover:text-blue-600">My Projects</span></a></li>
        </ul>
      </Navigation>

      <main
        id="main"
        ref={mainRef}
        className={`relative h-screen flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out z-10 md:px-0 ${isNavOpen ? 'md:ml-64' : 'md:ml-20'} ${isMainVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-9xl font-bold tracking-tight font-sub-header text-gray-300">
            Andrew McKenzie
          </h1>
          <div className="mt-4 flex items-center text-3xl md:text-5xl font-light text-gray-300 font-sub-header">
            <p className="mr-4">Cyber</p>
            <RoleAnimator />
          </div>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
        <ScrollDownIndicator text="About Me" />
      </main>

      <section
        id="about-me"
        ref={aboutRef}
        className={`relative h-screen flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out z-10 px-4 md:px-0 ${isNavOpen ? 'md:ml-64' : 'md:ml-20'} ${isAboutVisible ? 'opacity-100' : 'opacity-0'}`}
      >
          <div className="max-w-4xl mx-auto">
              <h2 className="text-6xl font-bold text-gray-300 font-sub-header mb-8">About Me</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  My journey into cybersecurity wasn't a straight line, but a path forged from a deep-seated curiosity for how things work—and how they can be broken. Starting in system administration, I gained a foundational understanding of the infrastructure that powers our digital world. However, I was always drawn to the unseen battles happening on the network, the intricate dance between attacker and defender.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mt-4">
                  This fascination led me to specialize in defensive cybersecurity. For me, it's not just about reacting to threats; it's about proactive defense, threat hunting, and building resilient systems. From conducting network forensic analyses to architecting automated threat response systems in the cloud, my passion lies in turning the tables on adversaries. Building my own security homelab was a pivotal moment, allowing me to simulate real-world attacks and hone my skills in a controlled environment. I believe the best defense is a deep understanding of the offense, and I thrive on the constant challenge of staying one step ahead.
              </p>
          </div>
          <ScrollDownIndicator text="My Projects" />
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className={`relative min-h-screen flex flex-col items-center justify-center py-20 transition-opacity duration-1000 ease-in-out z-10 ${isNavOpen ? 'md:ml-64' : 'md:ml-20'} ${isProjectsVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <Projects />
        <ScrollDownIndicator text="Contact Me" />
      </section>

    </div>
  );
};
export default App;
