import React from 'react';

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full transition-all duration-500 z-50 ${scrolled ? 'py-2 bg-white shadow-lg' : 'py-4 bg-white bg-opacity-90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-portfolio-dark relative group"
        >
          <span className="relative z-10 inline-block overflow-hidden">
          
          </span>
          <span className="absolute -inset-1 bg-portfolio-accent/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </a>

        {/* navigation */}
        <nav className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Experience & Education', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/ & /g, '-')}`} 
              className="text-lg relative overflow-hidden group text-portfolio-dark font-medium py-1"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-portfolio-dark/80">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-light via-portfolio-dark to-portfolio-accent transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-portfolio-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </a>
          ))}
        </nav>

        
        <div className="md:hidden">
          <button id="menu-btn" className="text-portfolio-dark focus:outline-none hover:opacity-80 transition-all duration-300 group relative">
            <span className="absolute -inset-3 bg-portfolio-accent/20 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></span>
            <svg
              className="w-6 h-6 relative z-10"
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
