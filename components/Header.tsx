
import React, { useState } from 'react';
import type { Page } from '../App';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '학교소개' },
  ];

  const NavLink: React.FC<{ page: Page; label: string }> = ({ page, label }) => (
    <button
      onClick={() => {
        setActivePage(page);
        setIsMenuOpen(false);
      }}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        activePage === page
          ? 'text-green-600 border-b-2 border-green-600'
          : 'text-gray-600 hover:text-green-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => setActivePage('home')} className="flex-shrink-0 flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 12h-4c-1.1 0-2 .9-2 2v2H6v-2c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v2h-2v-2c0-1.1-.9-2-2-2m5-3h-2V6h2v3M5 9V6h2v3H5m7-7c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2M9 4c-.55 0-1 .45-1 1v3h1V4H9m6 0h-1v4h1V5c0-.55-.45-1-1-1m-1 16h-2v-3h2v3z"/>
               </svg>
              <span className="text-xl font-bold text-gray-800">바이브코딩 학교</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink key={item.id} page={item.id as Page} label={item.label} />
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map(item => (
                <NavLink key={item.id} page={item.id as Page} label={item.label} />
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
