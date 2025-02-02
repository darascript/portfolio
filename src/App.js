import React from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header'; 

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ExperienceAndEducation />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
