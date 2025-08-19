import React, { useState } from 'react';
import { Home, User, FolderCog, Wrench, GraduationCap, Mail } from 'lucide-react';

export const navLinks = [
    { name: 'Home', href: '#home', Icon: Home },
    { name: 'About Me', href: '#about', Icon: User },
    { name: 'Projects', href: '#projects', Icon: FolderCog },
    { name: 'Skills and Technologies', href: '#skills', Icon: Wrench },
    { name: 'Education and Certifications', href: '#education', Icon: GraduationCap },
    { name: 'Contact', href: '#contact', Icon: Mail },
];


const Navigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navLinks = [
        { name: 'Home', href: '#home', Icon: Home },
        { name: 'About Me', href: '#about', Icon: User },
        { name: 'Projects', href: '#projects', Icon: FolderCog },
        { name: 'Skills', href: '#skills', Icon: Wrench },
        { name: 'Education', href: '#education', Icon: GraduationCap },
        { name: 'Contact', href: '#contact', Icon: Mail },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false); 
    };

    const NavLink = ({ name, href, Icon, isMobile }: { name: string; href: string; Icon: React.ElementType; isMobile?: boolean}) => (
        <a 
            href={href} 
            className={isMobile ? "flex items-center p-4 text-lg text-gray-300 hover:bg-gray-700 rounded-lg" : "group relative flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"}
            aria-label={name}
            onClick={(e) => handleLinkClick(e, href)}
        >
            <Icon className={`w-6 h-6 ${isMobile ? 'mr-4 text-green-400' : 'text-green-400 group-hover:text-white'}`} />
            {isMobile ? name : (
                <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {name}
                </span>
            )}
        </a>
    );

    return (
        <>
            <aside data-testid="desktop-nav" className="fixed top-0 left-0 h-screen w-20 flex-col items-center justify-center z-30 hidden md:flex">
                <nav className="flex flex-col items-center space-y-6">
                    {navLinks.map(link => <NavLink key={link.name} {...link} />)}
                </nav>
            </aside>

            <header className="md:hidden fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm h-16 z-40 flex items-center justify-between px-4">
                 <div className="text-xl font-bold text-htb-500">AM</div>
                 <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-htb-500 z-50" aria-label="Open mobile menu">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                 </button>
            </header>
            
            <div data-testid="mobile-nav" className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 z-30 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <nav className="mt-20 flex flex-col p-4 space-y-4">
                     {navLinks.map(link => <NavLink key={link.name} {...link} isMobile={true} />)}
                </nav>
            </div>
        </>
    );
};

export default Navigation;
