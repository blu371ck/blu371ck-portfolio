import React from 'react';
import { Home, User, Briefcase, Wrench, GraduationCap, Mail } from 'lucide-react';

export const navLinks = [
    { name: 'Home', href: '#home', Icon: Home },
    { name: 'About Me', href: '#about', Icon: User },
    { name: 'Projects', href: '#projects', Icon: Briefcase },
    { name: 'Skills', href: '#skills', Icon: Wrench },
    { name: 'Education', href: '#education', Icon: GraduationCap },
    { name: 'Contact', href: '#contact', Icon: Mail },
];

const NavLink = ({ name, href, Icon }: { name: string; href: string; Icon: React.ElementType; }) => (
    <a 
        href={href} 
        className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
        aria-label={name}
        onClick={(e) => {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }}
    >
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-white" />
        <span className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {name}
        </span>
    </a>
);

const Navigation = () => {
    return (
        <aside className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center justify-center z-30">
            <nav className="flex flex-col items-center space-y-6">
                {navLinks.map(link => (
                    <NavLink key={link.name} {...link} />
                ))}
            </nav>
        </aside>
    );
};

export default Navigation;
