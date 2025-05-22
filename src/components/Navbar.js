import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
     
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

    
      const sections = ['about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-sm 
      ${scrolled ? 'bg-white/95 shadow-lg py-2' : 'bg-white/80 py-4'}`}>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-4 left-1/4 w-20 h-20 rounded-full bg-portfolio-light/10 blur-xl"></div>
        <div className="absolute -bottom-4 right-1/4 w-24 h-24 rounded-full bg-portfolio-accent/10 blur-xl"></div>
        {scrolled && (
          <>
            <div className="absolute top-1/2 left-10 w-2 h-2 rounded-full bg-portfolio-accent/40 animate-pulse"></div>
            <div className="absolute top-1/3 right-16 w-2 h-2 rounded-full bg-portfolio-light/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </>
        )}
      </div>

      <div className="container mx-auto flex justify-between items-center px-6 relative">
        
        <a 
          href="#about" 
          className="text-xl font-bold relative group overflow-hidden"
        >
          <span className="bg-gradient-to-r from-portfolio-dark to-portfolio-light bg-clip-text text-transparent
                          transition-all duration-300 group-hover:bg-gradient-to-r 
                          group-hover:from-portfolio-accent group-hover:to-portfolio-dark">
            Port<span className="relative">f<span className="absolute -top-1 -right-1 w-2 h-2 bg-portfolio-accent/70 rounded-full blur-sm group-hover:animate-ping"></span></span>olio
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-portfolio-light via-portfolio-dark to-portfolio-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          <span className="absolute inset-0 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></span>
        </a>
        
        
        <ul className="hidden md:flex space-x-6">
          {[
            { href: '#about', text: 'About' },
            { href: '#projects', text: 'Projects' },
            { href: '#skills', text: 'Skills' },
            { href: '#contact', text: 'Contact' }
          ].map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={`relative py-2 px-4 font-medium group overflow-hidden rounded-full
                  ${activeSection === link.href.substring(1) 
                    ? 'text-portfolio-dark' 
                    : 'text-portfolio-dark/70 hover:text-portfolio-dark'
                  } transition-all duration-300 hover:shadow-sm`}
              >
                <span className="relative z-10">{link.text}</span>
                
                <span className={`absolute inset-0 bg-gradient-to-r from-portfolio-light/20 to-portfolio-accent/20 rounded-full -z-10 transform origin-left transition-all duration-300
                  ${activeSection === link.href.substring(1) 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-x-0 group-hover:opacity-70 group-hover:scale-100'
                  }`}>
                </span>
                
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-portfolio-accent rounded-full"></span>
                )}
               
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-portfolio-light via-portfolio-dark to-portfolio-accent transition-all duration-300 
                  ${activeSection === link.href.substring(1) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                  }`}>
                </span>
              </a>
            </li>
          ))}
        </ul>

        
        <a 
          href="/components/DanaDarafejaCV.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center ml-6 px-4 py-2 bg-gradient-to-r from-portfolio-dark to-portfolio-accent text-white rounded-full font-medium tracking-wide text-sm transform hover:scale-105 transition-all duration-300 hover:shadow-md group"
        >
          <span className="relative z-10">Resume</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        
        
        <button 
          onClick={toggleMenu}
          className="block md:hidden relative w-10 h-10 rounded-full group"
          aria-label="Toggle menu"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-portfolio-light/30 to-portfolio-accent/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 flex flex-col space-y-1.5">
            <span className={`w-full h-0.5 bg-portfolio-dark transform transition-transform duration-300 origin-left ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-portfolio-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-portfolio-dark transform transition-transform duration-300 origin-left ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
          </div>
        </button>

        
        <div className={`absolute top-full left-0 w-full bg-white/95 shadow-lg rounded-b-xl backdrop-blur-sm transform origin-top transition-all duration-300 z-40 overflow-hidden ${
          isMenuOpen ? 'scale-y-100 opacity-100 max-h-96' : 'scale-y-0 opacity-0 max-h-0'
        }`}>
          <div className="px-6 py-4">
            <ul className="flex flex-col space-y-3">
              {[
                { href: '#about', text: 'About' },
                { href: '#projects', text: 'Projects' },
                { href: '#skills', text: 'Skills' },
                { href: '#contact', text: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg font-medium group relative overflow-hidden ${
                      activeSection === link.href.substring(1) 
                        ? 'text-portfolio-dark bg-portfolio-accent/10' 
                        : 'text-portfolio-dark/70 hover:text-portfolio-dark hover:bg-portfolio-light/10'
                    } transition-all duration-300`}
                  >
                    {link.text}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-portfolio-light to-portfolio-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/components/DanaDarafejaCV.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-3 mt-2 bg-gradient-to-r from-portfolio-dark to-portfolio-accent text-white rounded-lg font-medium text-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Resume
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
     
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-0.5 bg-gradient-to-r from-portfolio-accent via-portfolio-light to-portfolio-dark opacity-30 animate-shimmer bg-[length:200%_100%]"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-portfolio-light/30 to-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;
