import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/solid';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    duration: '2016 - 2020',
    description: 'Graduated with honors, focusing on software development.',
  },
  {
    id: 2,
    degree: 'High School Diploma',
    school: 'Springfield High School',
    duration: '2012 - 2016',
    description: 'Excelled in computer science and mathematics.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Education</h2>
        <div className="space-y-12">
          {educationData.map((edu) => (
            <div key={edu.id} className="flex items-start space-x-4">
              <AcademicCapIcon className="h-12 w-12 text-gray-700" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-sm text-gray-500">{edu.school} | {edu.duration}</p>
                <p className="text-md text-gray-600 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
