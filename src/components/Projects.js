import React from 'react';

const projectsData = [
  {
    "id": 1,
    "title": "Dyslexia Reading App",
    "description": "A user-friendly reading application designed to support individuals with dyslexia. It offers customizable reading modes, color contrast adjustments, and font optimizations to enhance reading comfort and comprehension.",
    "skills": [
      { "iconClass": "fab fa-react", "color": "text-cyan-400", "title": "React Native" },
      { "iconClass": "fab fa-java", "color": "text-red-500", "title": "Java" },
      { "iconClass": "fas fa-leaf", "color": "text-green-600", "title": "Spring Boot" }
    ],
    "githubLink": "https://github.com/darascript/dyslexia-reading-app"
  },  
  {
    "id": 2,
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
    "id": 3,
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
    "id": 4,
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
