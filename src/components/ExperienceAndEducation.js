import React, { useState, useEffect } from 'react';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/solid';

const experienceData = [
  {
    id: 1,
    role: 'Trainee/Intern',
    company: 'Upmann GmbH & Co. KG',
    duration: 'Nov 2022 - May 2023',
    description: 'Creation of specifications for energy management software, research and selection of suitable software, implementation of such software and LoRaWAN network.',
  },
  {
    id: 2,
    role: 'Trainee/Intern',
    company: 'TUV NORD Baltic Energy Efficiency Department',
    duration: 'July 2019 - August 2019',
    description: 'Taking part in analysis and compilation of data in the energy efficiency field, researching and studying about LoRa equipment and software.',
  },
  {
    id: 3,
    role: 'Laboratory Assistant',
    company: 'Riga Technical University Faculty of Materials Science and Applied Chemistry Polymeric Institute',
    duration: 'July 2018 - August 2018',
    description: 'Participating in the testing of new polymeric materials.',
  }
];

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Communication and Information Engineering',
    school: 'Rhine-Waal University of Applied Sciences',
    duration: 'Sep 2019 - Present',
    description: 'Currently pursuing a degree in Communication and Information Engineering.',
  },
  {
    id: 2,
    degree: 'Latvian Certificate of General Secondary Education',
    school: 'Riga Technical University Engineering High School',
    duration: 'Sep 2016 - June 2019',
    description: 'Graduated with a focus on engineering principles and practices.',
  },
];

const ExperienceAndEducation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience-education');
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
    <section id="experience-education" className="py-24 bg-white relative overflow-hidden">
      {/* background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-portfolio-light/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="absolute top-1/4 right-10 w-20 h-20 border-2 border-portfolio-dark/10 rounded-md rotate-45 opacity-60 animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 border-2 border-portfolio-light/20 rounded-full opacity-60 animate-spin-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-portfolio-dark inline-block relative">
            Experience & Education
            <div className="absolute -inset-x-6 -inset-y-2 bg-portfolio-accent/10 rounded-full blur-md -z-10"></div>
            <div className="flex items-center absolute -bottom-3 left-0 right-0">
              <div className="h-0.5 w-12 bg-portfolio-dark/70 rounded-full"></div>
              <div className="h-2 w-2 bg-portfolio-accent mx-2 rounded-full animate-pulse-slow"></div>
              <div className="h-0.5 flex-grow bg-portfolio-dark/30 rounded-full"></div>
            </div>
          </h2>
          <p className="text-center text-portfolio-dark/80 mt-6 max-w-2xl mx-auto">
            A glimpse into my professional journey and educational background.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-portfolio-dark relative inline-block">
              Experience
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-portfolio-dark/30"></span>
            </h3>
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHovered(`exp-${exp.id}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  
                  <div className="absolute top-0 left-4 h-full w-0.5 bg-portfolio-light"></div>
                  <div className={`absolute top-1.5 left-4 w-3 h-3 rounded-full bg-white border-2 transform -translate-x-[6px] z-10 transition-all duration-300 ${
                    hovered === `exp-${exp.id}` ? 'scale-150 border-portfolio-dark' : 'border-portfolio-light'
                  }`}></div>
                  
                  
                  <div className={`ml-10 p-5 bg-white rounded-lg transition-all duration-300 ${
                    hovered === `exp-${exp.id}` 
                      ? 'shadow-lg border-portfolio-dark/30 -translate-y-1' 
                      : 'shadow-md border-gray-200 translate-y-0'
                  } border`}>
                    
                    <div className={`mb-3 transition-all duration-300 ${
                      hovered === `exp-${exp.id}` ? 'scale-110' : 'scale-100'
                    }`}>
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                        hovered === `exp-${exp.id}` 
                          ? 'bg-portfolio-dark text-white' 
                          : 'bg-portfolio-light/30 text-portfolio-dark'
                      }`}>
                        <BriefcaseIcon className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-portfolio-dark">{exp.role}</h4>
                    <p className="text-sm text-portfolio-dark/70 mb-2">{exp.company} | {exp.duration}</p>
                    <div className={`w-10 h-0.5 mb-3 transition-all duration-300 ${
                      hovered === `exp-${exp.id}` 
                        ? 'w-20 bg-portfolio-dark' 
                        : 'bg-portfolio-light'
                    }`}></div>
                    <p className="text-portfolio-dark/90">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-portfolio-dark relative inline-block">
              Education
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-portfolio-dark/30"></span>
            </h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index * 200) + 400}ms` }}
                  onMouseEnter={() => setHovered(`edu-${edu.id}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                 
                  <div className="absolute top-0 left-4 h-full w-0.5 bg-portfolio-light"></div>
                  <div className={`absolute top-1.5 left-4 w-3 h-3 rounded-full bg-white border-2 transform -translate-x-[6px] z-10 transition-all duration-300 ${
                    hovered === `edu-${edu.id}` ? 'scale-150 border-portfolio-dark' : 'border-portfolio-light'
                  }`}></div>
                  
             
                  <div className={`ml-10 p-5 bg-white rounded-lg transition-all duration-300 ${
                    hovered === `edu-${edu.id}` 
                      ? 'shadow-lg border-portfolio-dark/30 -translate-y-1' 
                      : 'shadow-md border-gray-200 translate-y-0'
                  } border`}>
                
                    <div className={`mb-3 transition-all duration-300 ${
                      hovered === `edu-${edu.id}` ? 'scale-110' : 'scale-100'
                    }`}>
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                        hovered === `edu-${edu.id}` 
                          ? 'bg-portfolio-dark text-white' 
                          : 'bg-portfolio-accent/50 text-portfolio-dark'
                      }`}>
                        <AcademicCapIcon className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-portfolio-dark">{edu.degree}</h4>
                    <p className="text-sm text-portfolio-dark/70 mb-2">{edu.school} | {edu.duration}</p>
                    <div className={`w-10 h-0.5 mb-3 transition-all duration-300 ${
                      hovered === `edu-${edu.id}` 
                        ? 'w-20 bg-portfolio-dark' 
                        : 'bg-portfolio-accent'
                    }`}></div>
                    <p className="text-portfolio-dark/90">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
