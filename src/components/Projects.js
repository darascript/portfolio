import React from 'react';

const projectsData = [
  {
    "id": 1,
    "title": "Dyslexia Reading App",
    "description":
      "An application that provides different reading modes to help people with dyslexia",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-400", "title": "React" },
      { "iconClass": "fab fa-java", "color": "text-orange-400", "title": "Java" },
      
    ],
    "githubLink": "https://github.com/"
  },
  {
    "id": 2,
    "title": "To-Do List",
    "description":
      "In this project I implement CRUD using Express in the backend and React Native for the front as well as user authentication.",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-400", "title": "React" },
      { "iconClass": "fab fa-node", "color": "text-green-500", "title": "Node.js" },
      { "iconClass": "fas fa-database", "color": "text-green-600", "title": "Database" }
    ],
    "githubLink": "https://github.com/"
  },
  {
    "id": 3,
    "title": "Personal Expense Tracker",
    "description":
      "CRUD implementation using Spring Boot and authentication using Spring Boot Security. I also used Java Web Token for session management and React frontend as proxy.",
    "skills": [
      { "iconClass": "fab fa-java", "color": "text-orange-400", "title": "Java" },
      { "iconClass": "fa-solid fa-power-off", "color": "text-green-300", "title": "Docker" },
      { "iconClass": "fab fa-react", "color": "text-cyan-500", "title": "React" }
    ],
    "githubLink": "https://github.com/"
  },
  {
    "id": 4,
    "title": "Book List",
    "description":
      "Descripion",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-400", "title": "React" },
      { "iconClass": "fab fa-node", "color": "text-green-500", "title": "Node.js" },
      { "iconClass": "fas fa-comment-dots", "color": "text-purple-500", "title": "Socket.IO" }
    ],
    "githubLink": "https://github.com/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-12 text-gray-800 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative group bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.title}
                      className={`inline-flex items-center ${skill.color} text-sm font-medium rounded-full py-1 px-3 shadow-md`}
                    >
                      <i className={`${skill.iconClass} mr-2`} /> {skill.title}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 font-semibold hover:text-cyan-400 inline-flex items-center"
                >
                  <i className="fab fa-github mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
