import React, { useState, useEffect } from 'react';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaPython, FaCuttlefish, FaLeaf, FaServer, FaDocker } from 'react-icons/fa';

const skillsData = [
  { name: 'Java', icon: <FaJava />, level: 4 },
  { name: 'C++', icon: <FaCuttlefish />, level: 4 },
  { name: 'Python', icon: <FaPython />, level: 3 },
  { name: 'JavaScript', icon: <FaJs />, level: 2 },
  { name: 'React | React Native', icon: <FaReact />, level: 3 },
  { name: 'Spring Boot', icon: <FaLeaf />, level: 3 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 3 },
  { name: 'MongoDB', icon: <FaServer/>, level: 2 },
  { name: 'SQL', icon: <FaDatabase />, level: 2 },
  { name: 'Docker', icon: <FaDocker />, level: 2 },
];

const SkillLevel = ({ level }) => (
  <div className="flex items-center justify-center space-x-1.5">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index < level 
            ? 'bg-gradient-to-r from-portfolio-dark to-portfolio-dark/80 shadow-inner' 
            : 'bg-gray-200 border border-gray-300'
        } ${index < level ? 'scale-110' : 'scale-90'}`}
      ></div>
    ))}
  </div>
);

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
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
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/*  background */}
      <div className="absolute w-96 h-96 rounded-full bg-portfolio-light/30 -top-20 -right-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-72 h-72 rounded-full bg-portfolio-dark/10 top-40 left-10 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-80 h-80 rounded-full bg-portfolio-accent/30 -bottom-20 -left-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="hidden lg:block absolute top-20 right-20 w-16 h-16 border-2 border-portfolio-dark/10 rounded-full animate-float-slow"></div>
      <div className="hidden lg:block absolute bottom-40 left-20 w-20 h-20 border-2 border-portfolio-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="hidden lg:block absolute bottom-20 right-40 w-12 h-12 border-2 border-portfolio-light/20 rounded-full animate-spin-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative mb-20 text-center">
          <h2 className="text-4xl font-bold text-portfolio-dark inline-block relative">
            Skills
            <div className="absolute -inset-x-6 -inset-y-2 bg-portfolio-accent/10 rounded-full blur-md -z-10"></div>
            <div className="flex items-center absolute -bottom-3 left-0 right-0">
              <div className="h-0.5 w-12 bg-portfolio-dark/70 rounded-full"></div>
              <div className="h-2 w-2 bg-portfolio-accent mx-2 rounded-full animate-pulse-slow"></div>
              <div className="h-0.5 flex-grow bg-portfolio-dark/30 rounded-full"></div>
            </div>
          </h2>          
          <p className="text-center text-portfolio-dark/80 mt-8 mb-12 max-w-2xl mx-auto">
            I've honed my skills in various technologies over the years, always keeping up with the latest trends and best practices in web development.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className={`relative p-6 bg-white rounded-xl overflow-hidden
              transition-all duration-500 transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${idx * 100}ms`,
                boxShadow: hoveredSkill === idx 
                  ? '0 10px 30px -10px rgba(59, 47, 38, 0.2)' 
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
           
              <div 
                className={`absolute inset-0 transition-opacity duration-300 rounded-xl ${
                  hoveredSkill === idx ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: `radial-gradient(circle at ${hoveredSkill === idx ? '50% 30%' : '50% 50%'}, rgba(218, 220, 211, 0.3) 0%, rgba(255, 255, 255, 0) 70%)`
                }}
              ></div>
              
              {/* top right  */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-portfolio-light/20 rounded-bl-full transition-all duration-300 ${
                hoveredSkill === idx ? 'w-24 h-24 bg-portfolio-accent/20' : ''
              }`}></div>
              
              {/* bottom left  */}
              <div className={`absolute bottom-0 left-0 w-0 h-0 bg-portfolio-dark/5 rounded-tr-full transition-all duration-500 ${
                hoveredSkill === idx ? 'w-16 h-16' : ''
              }`}></div>
              
             
              <div className={`absolute inset-0 border border-gray-200 rounded-xl transition-all duration-300 ${
                hoveredSkill === idx ? 'border-portfolio-dark/30' : ''
              }`}></div>
              
              
              <div className="relative z-10">
                {/* skill icon */}
                <div className={`text-4xl mb-4 transition-all duration-300 ${
                  hoveredSkill === idx 
                    ? 'text-portfolio-dark transform scale-110' 
                    : 'text-portfolio-dark/80'
                }`}>
                  <div className="relative">
                    
                    <div className={`absolute inset-0 text-portfolio-accent blur-sm transition-opacity duration-300 ${
                      hoveredSkill === idx ? 'opacity-50' : 'opacity-0'
                    }`}>
                      {skill.icon}
                    </div>
                 
                    <div>{skill.icon}</div>
                  </div>
                </div>
                
               
                <h3 className={`font-bold mb-2 transition-all duration-300 ${
                  hoveredSkill === idx 
                    ? 'text-portfolio-dark text-lg' 
                    : 'text-portfolio-dark/80 text-md'
                }`}>
                  {skill.name}
                </h3>
                
               
                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredSkill === idx ? 'opacity-100 max-h-10 mt-3' : 'opacity-0 max-h-0'
                }`}>
                  <SkillLevel level={skill.level} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
