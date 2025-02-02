import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
       
        <a href="#home" className="text-2xl font-bold text-gray-900">.</a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-lg text-gray-700 hover:text-gray-900 transition">About</a>
          <a href="#skills" className="text-lg text-gray-700 hover:text-gray-900 transition">Skills</a>
          <a href="#experience-education" className="text-lg text-gray-700 hover:text-gray-900 transition">Experience & Education</a>
          <a href="#projects" className="text-lg text-gray-700 hover:text-gray-900 transition">Projects</a>
          <a href="#contact" className="text-lg text-gray-700 hover:text-gray-900 transition">Contact</a>
        </nav>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button id="menu-btn" className="text-gray-900 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
