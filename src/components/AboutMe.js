import React, { useState, useEffect } from 'react';
import profilePicture from './IDpic.jpeg'; 
import resumePDF from './DanaDarafejaCV.pdf'; 

const AboutMe = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [hoverButton, setHoverButton] = useState(null);
  
  // fade-in 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-24 bg-white relative overflow-hidden">

      {/* background */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-portfolio-light rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-portfolio-dark rounded-full opacity-5 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-portfolio-accent rounded-full opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-40 w-56 h-56 bg-portfolio-light rounded-full opacity-5 blur-2xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-portfolio-dark/10 rounded-lg rotate-45 animate-float-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-portfolio-light/20 rounded-full animate-spin-reverse"></div>
      
      {/* main container */}
      <div 
        className={`container mx-auto flex flex-col md:flex-row items-center justify-center px-6 transition-all duration-1000 ease-out z-10 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="flex-shrink-0 mb-12 md:mb-0 md:mr-16 relative">
          {/* picture */}
          <div className="absolute inset-0 w-full h-full bg-gradient-conic from-portfolio-light via-white to-portfolio-accent opacity-30 rounded-full blur-sm animate-spin-slow"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-portfolio-light rounded-full opacity-60 animate-pulse-slow"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-portfolio-accent rounded-full opacity-60 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
   
          <div className="rounded-full relative z-10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent via-portfolio-dark to-portfolio-light rounded-full animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-2 rounded-full bg-white animate-spin-reverse opacity-80"></div>
            <div className="rounded-full border-4 border-white shadow-xl overflow-hidden w-64 h-64 flex items-center justify-center transform hover:rotate-3 transition-transform duration-500 relative z-20 m-1">
              <img 
                src={profilePicture} 
                alt="Profile" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
          
   
          {/* icon  */}
          <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-portfolio-dark shadow-xl transform hover:rotate-45 transition-all duration-300 hover:scale-110 z-30 group">
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="text-2xl text-portfolio-dark relative z-10 group-hover:animate-wave">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>
        </div>

   
        {/*  card  */}
        <div className="text-center md:text-left max-w-2xl bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10 backdrop-blur-sm group">
     
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-portfolio-dark/60 rounded-tl-2xl -mt-1 -ml-1 group-hover:border-portfolio-dark transition-colors duration-500"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-portfolio-dark/60 rounded-br-2xl -mb-1 -mr-1 group-hover:border-portfolio-dark transition-colors duration-500"></div>
          <div className="absolute -right-3 -top-3 w-20 h-20 bg-gradient-to-br from-portfolio-light/20 to-portfolio-accent/30 rounded-full blur-md"></div>  
          
          
          <h2 className="text-5xl font-bold mb-4 text-portfolio-dark relative">
            Hi, I'm Dana
            <span className="absolute -top-3 -right-3 w-8 h-8 bg-portfolio-accent rounded-full opacity-70 animate-pulse-slow"></span>
          </h2>
          
          
          <p className="text-2xl text-portfolio-dark mb-6 font-light tracking-wide">
            <span className="relative inline-block group-hover:animate-float transition-all duration-300">
              Full Stack Developer
              <span className="absolute bottom-0 left-0 w-full h-0.5 border-b border-dashed border-portfolio-dark group-hover:border-portfolio-accent transition-colors duration-500"></span>
            </span>
          </p>
          
         
          <div className="flex items-center mb-6">
            <div className="h-0.5 w-16 border-t border-portfolio-dark group-hover:w-28 transition-all duration-500"></div>
            <div className="mx-2 text-xs text-portfolio-dark/70">•</div>
            <div className="h-0.5 w-16 border-t border-portfolio-dark group-hover:w-28 transition-all duration-500"></div>
          </div>
          
          {/* bio  */}
          <p className="text-portfolio-dark mb-8 leading-relaxed text-lg">
            Passionate about building impactful digital experiences, I specialize in creating robust, user-friendly web and mobile applications. With a strong foundation in both frontend and backend technologies, I thrive on solving complex problems and delivering high-quality solutions.
          </p>
          
          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="mailto:dana.darafeja@gmail.com" 
              className="group relative inline-block px-8 py-3 text-lg font-semibold text-white rounded-md shadow-md overflow-hidden w-full sm:w-auto text-center"
              onMouseEnter={() => setHoverButton('hire')}
              onMouseLeave={() => setHoverButton(null)}
            >
              <span className="absolute inset-0 w-full h-full bg-portfolio-dark transform group-hover:scale-102 transition-transform duration-300 rounded-md"></span>
              <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-portfolio-dark to-black group-hover:w-full transition-all duration-500 ease-out rounded-md"></span>
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent rounded-md"></span>
              </span>
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">Hire Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${hoverButton === 'hire' ? 'translate-x-1' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            <a 
              href={resumePDF}  
              className="group relative inline-block px-8 py-3 text-lg font-semibold text-portfolio-dark rounded-md shadow-md overflow-hidden w-full sm:w-auto text-center"
              download
              onMouseEnter={() => setHoverButton('cv')}
              onMouseLeave={() => setHoverButton(null)}
            >
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-portfolio-dark rounded-md transform group-hover:scale-102 transition-transform duration-300"></span>
              <span className="absolute inset-0 w-0 h-full bg-portfolio-accent/30 transition-all duration-300 ease-out group-hover:w-full rounded-md"></span>
              <span className="relative z-10 flex items-center justify-center">
                <span>Download CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-300 ${hoverButton === 'cv' ? 'translate-y-1' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
   
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a href="https://github.com/darascript/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <div className="relative group">
                <span className="absolute -inset-2 bg-portfolio-light/30 rounded-full scale-0 transition-transform group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
                <span className="absolute -inset-3 border border-portfolio-light rounded-full scale-0 transition-transform group-hover:scale-100 opacity-0 group-hover:opacity-30"></span>
                <i className="fab fa-github text-2xl text-portfolio-dark relative z-10 transition-transform group-hover:scale-110 duration-300"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/dana-darafeja-92b22224a/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <div className="relative group">
                <span className="absolute -inset-2 bg-portfolio-light/30 rounded-full scale-0 transition-transform group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
                <span className="absolute -inset-3 border border-portfolio-light rounded-full scale-0 transition-transform group-hover:scale-100 opacity-0 group-hover:opacity-30"></span>
                <i className="fab fa-linkedin text-2xl text-portfolio-dark relative z-10 transition-transform group-hover:scale-110 duration-300"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
