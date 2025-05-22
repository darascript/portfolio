import React, { useState, useEffect } from 'react';

const projectsData = [
  {
    "id": 1,
    "title": "Dyslexia Reading App",
    "description": "A user-friendly reading application designed to support individuals with dyslexia. It offers customizable reading modes, color contrast adjustments, and font optimizations to enhance reading comfort and comprehension.",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-500", "title": "React Native" },
      { "iconClass": "fab fa-java", "color": "text-red-500", "title": "Java" },
      { "iconClass": "fas fa-leaf", "color": "text-green-600", "title": "Spring Boot" }
    ],
    "githubLink": "https://github.com/darascript/dyslexia-reading-app"
  },  
    {
    "id": 2,
    "title": "Arcades",
    "description": "Arcades is your one-stop destination for a collection of classic arcade games. Built with CSS, JavaScript, and HTML, this app is sure to bring back those nostalgic memories while keeping you entertained for hours!",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-500", "title": "React" },
      { "iconClass": "fab fa-css3-alt", "color": "text-blue-500", "title": "CSS" },
    ],
    "githubLink": "https://github.com/darascript/arcades"
  },  
  {
    "id": 3,
    "title": "Personal Expense Tracker",
    "description": "A personal finance management app that allows users to track their expenses. The app includes features like real-time expense tracking, secure user authentication, and personalized financial insights to help users manage their money more effectively.",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-500", "title": "React" },
      { "iconClass": "fab fa-java", "color": "text-red-500", "title": "Java" },
      { "iconClass": "fas fa-leaf", "color": "text-green-600", "title": "Spring Boot" }
     
    ],
    "githubLink": "https://github.com/darascript/expense-tracker"
  },
  {
    "id": 4,
    "title": "E-Commerce App",
    "description": "A lightweight e-commerce application that allows users to browse products, add items to their cart, and complete secure checkouts. The app features dynamic product listings, real-time search functionality, and a responsive design for seamless shopping experiences across devices.",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-400", "title": "Next.js" },
      { "iconClass": "fab fa-node", "color": "text-green-500", "title": "Node.js" },
      { "iconClass": "fas fa-database", "color": "text-green-600", "title": "Database" }
    ],
    "githubLink": "https://github.com/darascript/ecommerce"
  },
    {
    "id": 5,
    "title": "Book List",
    "description": "A dynamic web application that allows users to add, view, and manage their favorite books with ease. It features a responsive UI, real-time updates, and efficient data handling for an enhanced user experience.",
    "skills": [
      { "iconClass": "fab fa-html5", "color": "text-orange-400", "title": "HTML" },
      { "iconClass": "fab fa-java", "color": "text-red-500", "title": "Java" },
      { "iconClass": "fas fa-leaf", "color": "text-green-600", "title": "Spring Boot" }
    ],
    "githubLink": "https://github.com/darascript/booklist"
  }
  
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* background */}
      <div className="absolute w-96 h-96 rounded-full bg-portfolio-light/30 -top-20 -left-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-72 h-72 rounded-full bg-portfolio-dark/10 top-40 right-10 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-96 h-96 rounded-full bg-portfolio-accent/30 -bottom-20 -right-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
     
      <div className="absolute top-20 left-1/4 w-16 h-16 border-2 border-portfolio-dark/10 rounded-full rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 right-1/4 w-12 h-12 border-2 border-portfolio-accent/20 rounded-full animate-spin-slow opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl font-bold text-portfolio-dark inline-block relative">
            Projects
            <div className="absolute -inset-x-6 -inset-y-2 bg-portfolio-accent/10 rounded-full blur-md -z-10"></div>
            <div className="flex items-center absolute -bottom-3 left-0 right-0">
              <div className="h-0.5 w-5 bg-portfolio-dark/70 rounded-full"></div>
              <div className="h-2 w-2 bg-portfolio-accent mx-2 rounded-full animate-pulse-slow"></div>
              <div className="h-0.5 flex-grow bg-portfolio-dark/30 rounded-full"></div>
            </div>
          </h2>   
          <p className="text-center text-portfolio-dark/80 mt-6 mb-4 max-w-2xl mx-auto">
            Check out some of the applications I've built. Each project showcases different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`relative bg-white p-8 rounded-xl
              group flex flex-col h-full
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: hoveredProject === project.id 
                  ? '0 20px 25px -5px rgba(59, 47, 38, 0.1), 0 10px 10px -5px rgba(59, 47, 38, 0.04)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredProject === project.id ? 'translateY(-12px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* card */}
              <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 rounded-xl border border-portfolio-dark/30"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-portfolio-accent/20 via-transparent to-portfolio-light/20 opacity-70"></div>
              </div>
              
             
              <div className="absolute top-0 right-0 w-28 h-28 bg-portfolio-light/30 rounded-bl-full -mt-px -mr-px transition-all duration-500 group-hover:w-32 group-hover:h-32 opacity-60 group-hover:opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-portfolio-accent/30 rounded-tr-full -mb-px -ml-px transition-all duration-500 group-hover:w-24 group-hover:h-24 opacity-60 group-hover:opacity-80"></div>
              
              
              <div className="absolute -top-5 -left-5 w-16 h-16 flex items-center justify-center z-20">
                <div className="absolute inset-0 rounded-full bg-white shadow-lg"></div>
                <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                  hoveredProject === project.id 
                    ? 'border-portfolio-dark scale-105' 
                    : 'border-portfolio-dark/60'
                }`}></div>
                <div className={`absolute inset-2 rounded-full bg-portfolio-dark transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                <span className={`relative z-10 text-xl font-bold transition-colors duration-500 ${
                  hoveredProject === project.id ? 'text-white' : 'text-portfolio-dark'
                }`}>{project.id}</span>
              </div>
              
                {/* projects */}
              <div className="flex-grow relative z-10">
              
                <h3 className="text-xl font-bold text-portfolio-dark mb-4 border-b border-gray-200 pb-3 group-hover:text-portfolio-dark group-hover:border-portfolio-light transition-colors duration-300">{project.title}</h3>

                <p className="text-portfolio-dark/80 mb-6 leading-relaxed group-hover:text-portfolio-dark/90 transition-colors duration-300">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.title}
                      className="inline-flex items-center bg-white border border-portfolio-light/80 text-portfolio-dark/80 text-sm font-medium rounded-full py-1.5 px-3 shadow-sm transition-all duration-300 group-hover:border-portfolio-dark/30 group-hover:bg-portfolio-accent/10 group-hover:text-portfolio-dark"
                    >
                      <i className={`${skill.iconClass} mr-2`} /> 
                      {skill.title}
                    </span>
                  ))}
                </div>
              </div>
              
              
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-dark font-semibold group-hover:text-portfolio-dark inline-flex items-center transition-all duration-300 mt-2 relative overflow-hidden group/link"
                aria-label={`View ${project.title} on GitHub`}
              >
               
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-light via-portfolio-dark to-portfolio-accent transition-all duration-500 group-hover/link:w-full"></span>
                
                <i className="fab fa-github mr-2" />
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              
              <div className="absolute bottom-3 right-3 flex space-x-1">
                <div className={`w-1.5 h-1.5 rounded-full bg-portfolio-light/70 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-50'
                }`}></div>
                <div className={`w-1.5 h-1.5 rounded-full bg-portfolio-dark/70 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-50'
                }`}></div>
                <div className={`w-1.5 h-1.5 rounded-full bg-portfolio-accent/70 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-50'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
