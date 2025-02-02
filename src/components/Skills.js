import React, { useState } from 'react';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaPython, FaCuttlefish } from 'react-icons/fa'; // Importing icons

const skillsData = [
  { name: 'JavaScript', icon: <FaJs />, level: 3 },
  { name: 'React', icon: <FaReact />, level: 4 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 3 },
  { name: 'C++', icon: <FaCuttlefish />, level: 4 },
  { name: 'MongoDB', icon: <FaDatabase />, level: 2 },
  { name: 'Java', icon: <FaJava />, level: 3 },
  { name: 'Spring Boot', icon: <FaJava />, level: 2 },
  { name: 'Python', icon: <FaPython />, level: 3 },
  { name: 'SQL', icon: <FaDatabase />, level: 2 },
];

const SkillLevel = ({ level }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full ${index < level ? 'bg-green-500' : 'bg-gray-300'}`} // Smaller circles
      ></div>
    ))}
  </div>
);

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skillsData.map((skill, idx) => (
            <div 
              key={idx} 
              className="relative p-3 border border-gray-200 rounded-lg transition-all duration-300" // Transition effect
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Solid Background on Hover */}
              <div 
                className={`absolute inset-0 bg-gray-200 rounded-lg transition-opacity duration-300 ${hoveredSkill === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              ></div>
              
              {/* Skill Level Circles positioned above the icon and text */}
              {hoveredSkill === idx && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-white border border-gray-300 p-2 rounded-lg shadow-lg">
                    <SkillLevel level={skill.level} />
                  </div>
                </div>
              )}
              
              {/* Skill Icon and Name with adjusted z-index to be behind the hover effect */}
              <div className="flex items-center mb-1 relative z-0"> 
                <span className="text-xl mr-2">{skill.icon}</span> 
                <span className="text-md font-bold text-gray-700">{skill.name}</span> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
