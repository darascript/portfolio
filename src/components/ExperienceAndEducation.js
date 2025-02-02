import React from 'react';
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
  return (
    <section id="experience-education" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Experience & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Experience</h3>
            {experienceData.map((exp) => (
              <div key={exp.id} className="flex items-start space-x-4 mb-6">
                <div className="h-8 w-8 flex items-center justify-center text-gray-700"> {/* Consistent wrapper for icons */}
                  <BriefcaseIcon className="h-6 w-6" /> {/* Icon inside the wrapper */}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{exp.role}</h4>
                  <p className="text-sm text-gray-500">{exp.company} | {exp.duration}</p>
                  <p className="text-md text-gray-600 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Education</h3>
            {educationData.map((edu) => (
              <div key={edu.id} className="flex items-start space-x-4 mb-6">
                <div className="h-8 w-8 flex items-center justify-center text-gray-700"> {/* Consistent wrapper for icons */}
                  <AcademicCapIcon className="h-6 w-6" /> {/* Icon inside the wrapper */}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-sm text-gray-500">{edu.school} | {edu.duration}</p>
                  <p className="text-md text-gray-600 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
