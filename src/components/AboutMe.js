import React from 'react';
import profilePicture from './IDpic.jpeg'; 
import resumePDF from './D.Darafeja_CV_eng.pdf'; // Ensure the image is in the correct folder

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img 
            src={profilePicture} 
            alt="Profile" 
            className="max-w-sm max-h-80 rounded-lg shadow-lg" 
          />
        </div>

        {/* About Me Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Hi, I'm Dana</h2>
          <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="mailto:dana.darafeja@gmail.com" 
              className="inline-block px-8 py-3 text-lg font-semibold bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
            >
              Hire Me
            </a>
            <a 
              href={resumePDF}  // Ensure your CV file is in the public folder
              className="inline-block px-8 py-3 text-lg font-semibold bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
