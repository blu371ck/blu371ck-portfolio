import React, { useState } from 'react';

interface SideNavProps {
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ children, isOpen, onToggle }) => {
  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-screen shadow-xl transition-all duration-300 ease-in-out z-20
          ${isOpen ? 'w-64' : 'w-16 md:w-20'}
        `}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-center h-16 shrink-0">
            <div className={`text-2xl font-bold text-blue-600 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              Logo
            </div>
          </div>
          <nav 
            className={`flex-1 px-4 py-4 transition-opacity duration-300 
              ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
            }
            aria-hidden={!isOpen}
          >
            {children}
          </nav>
        </div>
      </aside>

      <button
        onClick={onToggle}
        className={`
          fixed top-1/2 -translate-y-1/2 bg-gray-800 h-10 w-10
          flex items-center justify-center
          rounded-full
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
          transition-all duration-300 ease-in-out z-30
          ${isOpen ? 'left-52' : 'left-5'}
        `}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        title={isOpen ? 'Close navigation' : 'Open navigation'}
      >
        <div className="relative w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute inset-0 w-6 h-6 text-white transition-transform duration-300 ease-in-out
              ${isOpen ? 'transform rotate-180 opacity-0' : 'transform rotate-0 opacity-100'}`
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute inset-0 w-6 h-6 text-white transition-transform duration-300 ease-in-out
              ${isOpen ? 'transform rotate-0 opacity-100' : 'transform -rotate-180 opacity-0'}`
            }
            fill="none"
            viewBox="0 0 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>
    </>
  );
};

export default SideNav;