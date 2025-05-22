import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ user: 0, computer: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const choices = ['Rock', 'Paper', 'Scissors'];
  const choiceIcons = {
    'Rock': '✊',
    'Paper': '✋',
    'Scissors': '✌️'
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        const position = element.getBoundingClientRect();
        // Enhanced visibility detection with threshold for better animation timing
        if (position.top < window.innerHeight - 200 && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.getElementById('contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        
       
        if (e.clientY > rect.top && e.clientY < rect.bottom) {
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          setMousePosition({ x, y });
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const playGame = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);

    
    let newScore = {...score};
    
    if (choice === computerRandomChoice) {
      setResult("It's a draw!"); 
    } else if (
      (choice === 'Rock' && computerRandomChoice === 'Scissors') ||
      (choice === 'Paper' && computerRandomChoice === 'Rock') ||
      (choice === 'Scissors' && computerRandomChoice === 'Paper')
    ) {
      setResult('You win! 🎉'); 
      newScore.user += 1;
    } else {
      setResult('You lose! 😢 I win!'); 
      newScore.computer += 1;
    }
    
    setScore(newScore);
  };

  const resetGame = () => {
    setScore({ user: 0, computer: 0 });
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/*  background */}
      <div 
        className="absolute top-20 right-40 w-96 h-96 bg-portfolio-light/15 rounded-full blur-3xl animate-pulse-slow"
        style={{ 
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          transition: 'transform 0.3s ease-out' 
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-40 w-80 h-80 bg-portfolio-accent/15 rounded-full blur-3xl animate-pulse-slow" 
        style={{ 
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      
      <div className="absolute top-1/4 left-20 w-16 h-16 border-2 border-portfolio-dark/10 rounded-full opacity-50 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-10 w-24 h-24 border-2 border-portfolio-accent/20 rounded-full rotate-12 opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl font-bold text-portfolio-dark inline-block relative">
              Contact Me
              <div className="absolute -inset-x-6 -inset-y-2 bg-portfolio-accent/10 rounded-full blur-md -z-10"></div>
              <div className="flex items-center absolute -bottom-3 left-0 right-0">
                <div className="h-0.5 w-12 bg-portfolio-dark/70 rounded-full"></div>
                <div className="h-2 w-2 bg-portfolio-accent mx-2 rounded-full animate-pulse-slow"></div>
                <div className="h-0.5 flex-grow bg-portfolio-dark/30 rounded-full"></div>
              </div>
            </h2>   
          </div>
          <p className="text-center text-portfolio-dark/80 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out!
          </p>
        </div>
        
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          
          <div className="max-w-3xl mx-auto">
           
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group mb-8">
             
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-diagonal from-portfolio-light/20 to-transparent opacity-60 rounded-bl-full -mt-10 -mr-10 group-hover:bg-gradient-diagonal group-hover:from-portfolio-accent/20 group-hover:to-transparent transition-colors duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-portfolio-dark relative inline-block">
                Connect With Me
                <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-portfolio-light to-portfolio-dark transition-all duration-700"></span>
              </h3>
              
              <div className="space-y-6 relative z-10">
                <a
                  href="mailto:dana.darafeja@gmail.com"
                  className="flex items-center group/link"
                >
                  <div className="bg-white border border-gray-200 p-3 rounded-lg mr-4 group-hover/link:bg-portfolio-dark group-hover/link:border-portfolio-dark transition-all duration-300 shadow-md relative overflow-hidden">
                   
                    <div className="absolute inset-0 bg-portfolio-accent/20 scale-0 group-hover/link:scale-100 transition-transform duration-300 rounded-lg"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-dark group-hover/link:text-white transition-colors duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-portfolio-dark group-hover/link:text-portfolio-dark/80 transition-colors duration-300 relative overflow-hidden">
                    <span>dana.darafeja@gmail.com</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-dark/30 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/dana-darafeja-92b22224a/"
                  className="flex items-center group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white border border-gray-200 p-3 rounded-lg mr-4 group-hover/link:bg-portfolio-dark group-hover/link:border-portfolio-dark transition-all duration-300 shadow-md relative overflow-hidden">
                 
                    <div className="absolute inset-0 bg-portfolio-accent/20 scale-0 group-hover/link:scale-100 transition-transform duration-300 rounded-lg"></div>
                    <i className="fab fa-linkedin-in h-6 w-6 text-portfolio-dark group-hover/link:text-white transition-colors duration-300 flex items-center justify-center relative z-10"></i>
                  </div>
                  <span className="text-portfolio-dark group-hover/link:text-portfolio-dark/80 transition-colors duration-300 relative overflow-hidden">
                    <span>LinkedIn Profile</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-dark/30 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                </a>
                
                <a
                  href="https://github.com/darascript/"
                  className="flex items-center group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white border border-gray-200 p-3 rounded-lg mr-4 group-hover/link:bg-portfolio-dark group-hover/link:border-portfolio-dark transition-all duration-300 shadow-md relative overflow-hidden">
                   
                    <div className="absolute inset-0 bg-portfolio-accent/20 scale-0 group-hover/link:scale-100 transition-transform duration-300 rounded-lg"></div>
                    <i className="fab fa-github h-6 w-6 text-portfolio-dark group-hover/link:text-white transition-colors duration-300 flex items-center justify-center relative z-10"></i>
                  </div>
                  <span className="text-portfolio-dark group-hover/link:text-portfolio-dark/80 transition-colors duration-300 relative overflow-hidden">
                    <span>GitHub Profile</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-dark/30 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </div>
            </div>
            
          
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-portfolio-light/20 rounded-full group-hover:bg-portfolio-accent/20 transition-colors duration-500 animate-pulse-slow"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-portfolio-accent/20 rounded-full group-hover:bg-portfolio-light/20 transition-colors duration-500 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
              
              <h3 className="text-xl font-bold text-center text-portfolio-dark mb-6 relative inline-block">
                Let's Play Rock, Paper, Scissors!
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-portfolio-accent to-portfolio-light animate-shimmer bg-[length:200%_100%]"></span>
              </h3>
              
      
              <div className="flex justify-center mb-8 relative z-10">
                <div className="px-8 py-4 bg-white border border-gray-200 rounded-lg shadow-md flex items-center group-hover:shadow-lg transition-all duration-300">
                  <div className="text-portfolio-dark text-center mr-8 relative">
                    <div className="absolute -inset-4 -z-10 bg-portfolio-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-y-0 group-hover:scale-y-100 transform-gpu"></div>
                    <div className="text-sm uppercase tracking-wide mb-1 font-medium">You</div>
                    <div className="text-3xl font-bold text-portfolio-dark group-hover:text-portfolio-dark/90 transition-colors duration-300">{score.user}</div>
                  </div>
                  <div className="text-portfolio-dark/50 mx-2 text-xl font-light">vs</div>
                  <div className="text-portfolio-dark text-center ml-8 relative">
                    <div className="absolute -inset-4 -z-10 bg-portfolio-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-y-0 group-hover:scale-y-100 transform-gpu"></div>
                    <div className="text-sm uppercase tracking-wide mb-1 font-medium">Computer</div>
                    <div className="text-3xl font-bold text-portfolio-dark group-hover:text-portfolio-dark/90 transition-colors duration-300">{score.computer}</div>
                  </div>
                </div>
              </div>
              
             
              <div className="flex justify-center mb-8 relative z-10">
                {choices.map((choice) => (
                  <button
                    key={choice}
                    onClick={() => playGame(choice)}
                    className="mx-3 w-16 h-16 flex items-center justify-center bg-white text-2xl rounded-full shadow-md border border-gray-200 hover:border-portfolio-dark hover:text-portfolio-dark transition-all duration-300 transform hover:scale-110 group/btn relative"
                    title={choice}
                    aria-label={`Choose ${choice}`}
                  >
                    <span className="absolute inset-0 bg-portfolio-dark/5 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 border border-portfolio-dark/40 rounded-full opacity-0 group-hover/btn:opacity-100 scale-0 group-hover/btn:scale-100 transition-all duration-300 -z-10"></span>
                    <span className="relative z-10">{choiceIcons[choice]}</span>
                  </button>
                ))}
              </div>
              
             
              {userChoice && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md mb-6 relative z-10 animate-slide-in">
                  <div className="flex justify-center space-x-16 mb-4">
                    <div className="text-center">
                      <div className="text-sm uppercase tracking-wide text-portfolio-dark/70 mb-2">You chose:</div>
                      <div className="text-4xl mb-2 transform transition-transform duration-500 hover:scale-125 hover:rotate-6">{choiceIcons[userChoice]}</div>
                      <div className="text-sm text-portfolio-dark">{userChoice}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm uppercase tracking-wide text-portfolio-dark/70 mb-2">Computer chose:</div>
                      <div className="text-4xl mb-2 transform transition-transform duration-500 hover:scale-125 hover:-rotate-6">{choiceIcons[computerChoice]}</div>
                      <div className="text-sm text-portfolio-dark">{computerChoice}</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-portfolio-light/30 via-portfolio-dark/20 to-portfolio-accent/30 rounded-md opacity-70 animate-pulse-slow"></div>
                    <p className="text-xl font-bold text-center text-portfolio-dark py-3 relative z-10">{result}</p>
                  </div>
                </div>
              )}
              
           
              {(score.user > 0 || score.computer > 0) && (
                <div className="mt-6 text-center relative z-10">
                  <button
                    onClick={resetGame}
                    className="px-5 py-2 bg-white border border-portfolio-dark text-portfolio-dark rounded-md hover:bg-portfolio-dark hover:text-white transition-all duration-300 text-sm transform hover:scale-105 shadow-sm relative overflow-hidden group/reset"
                  >
                    <span className="absolute inset-0 w-0 h-full bg-portfolio-dark/10 transition-all duration-300 group-hover/reset:w-full"></span>
                    <span className="relative z-10">Reset Game</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      

      <div className="mt-24 border-t border-gray-200 relative overflow-hidden">
      
        <div className="absolute top-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-portfolio-dark/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-portfolio-dark/30 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a href="https://github.com/darascript/" target="_blank" rel="noopener noreferrer" className="social-icon-link group relative">
                  <span className="absolute inset-0 bg-portfolio-light/30 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                  <i className="fab fa-github text-xl text-portfolio-dark transition-transform duration-300 relative z-10 group-hover:scale-110"></i>
                </a>
                <a href="https://www.linkedin.com/in/dana-darafeja-92b22224a/" target="_blank" rel="noopener noreferrer" className="social-icon-link group relative">
                  <span className="absolute inset-0 bg-portfolio-light/30 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                  <i className="fab fa-linkedin text-xl text-portfolio-dark transition-transform duration-300 relative z-10 group-hover:scale-110"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* back to top button */}
          <div className="flex justify-center mt-8">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-portfolio-dark/30 text-portfolio-dark hover:bg-portfolio-dark hover:text-white transition-all duration-300 group"
              aria-label="Back to top"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
