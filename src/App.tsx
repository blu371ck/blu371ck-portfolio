import React, { useState } from 'react';
import SideNav from "./components/SideNav/SideNav";
import RoleAnimator from './components/RoleAnimator/RoleAnimator';

const NavIcon = ({ path }: { path: string }) => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dirt-500 font-sans text-white">
      <SideNav isOpen={isNavOpen} onToggle={() => setIsNavOpen(!isNavOpen)}>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group">
              <NavIcon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              <span className="ml-3 whitespace-nowrap group-hover:text-blue-600">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group">
              <NavIcon path="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              <span className="ml-3 whitespace-nowrap group-hover:text-blue-600">
                E-commerce
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group">
              <NavIcon path="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A10.99 10.99 0 0012 12a10.99 10.99 0 00-3-7.303M15 21a9 9 0 00-3-14.975" />
              <span className="ml-3 whitespace-nowrap group-hover:text-blue-600">
                Users
              </span>
            </a>
          </li>
        </ul>
      </SideNav>

      <main className={`h-screen flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out ${isNavOpen ? 'ml-64' : 'ml-20'}`}>
        <h1 className="text-6xl font-bold tracking-tight">
          Andrew McKenzie
        </h1>
        <div className="mt-4 flex items-center text-3xl font-light text-gray-300">
          <p className="mr-3">Cyber</p>
          <RoleAnimator />
        </div>
      </main>
    </div>
  );
};

export default App;