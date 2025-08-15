import React, { useState } from 'react';

const Navigation = ({ children }: { children: React.ReactNode }) => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 w-full backdrop-blur-xl h-16 z-30 border-b border-gray-200/10">
        <div className="flex items-center justify-between h-full px-4">
          <div className="text-xl font-bold text-gray-300">AM</div>
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div data-testid="mobile-menu" className={`fixed top-16 left-0 w-full z-20 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <nav className="p-4">{children}</nav>
      </div>

      {/* Side Navigation (Visible on medium screens and up) */}
      <aside className={`hidden md:flex fixed top-0 left-0 h-screen shadow-xl transition-all duration-300 ease-in-out z-20 ${isSideNavOpen ? 'w-64' : 'w-20'}`} aria-label="Sidebar">
        <div className="h-full flex flex-col">
          <nav data-testid="desktop-nav-content" className={`flex-1 px-4 py-4 transition-opacity duration-300 ${isSideNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden={!isSideNavOpen}>
            {children}
          </nav>
        </div>
      </aside>
      
      {/* Side Nav Toggle Button (Visible on medium screens and up) */}
      <button onClick={() => setSideNavOpen(!isSideNavOpen)} className={`hidden md:flex fixed top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 ease-in-out z-30 ${isSideNavOpen ? 'left-52' : 'left-5'}`} aria-label={isSideNavOpen ? 'Close navigation' : 'Open navigation'} title={isSideNavOpen ? 'Close navigation' : 'Open navigation'}>
        <div className="relative w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" className={`absolute inset-0 w-6 h-6 text-gray-300 transition-transform duration-300 ease-in-out ${isSideNavOpen ? 'transform rotate-180 opacity-0' : 'transform rotate-0 opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className={`absolute inset-0 w-6 h-6 text-gray-300 transition-transform duration-300 ease-in-out ${isSideNavOpen ? 'transform rotate-0 opacity-100' : 'transform -rotate-180 opacity-0'}`} fill="none" viewBox="0 0 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </div>
      </button>
    </>
  );
};

export default Navigation;