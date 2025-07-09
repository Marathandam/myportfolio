import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import ProjectsSection from './components/projectsection'
import HackathonSection  from './components/hackathonsection';
import LeetcodeSection  from './components/leetcodesection';
import CurrentProjectsSection from './components/currentprojects';
import ContactSection from './components/ContactSection';
import { ThemeProvider  } from './ThemeContext';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
          <Navbar />
          <Home />
          <ProjectsSection/>
          <HackathonSection/>
          <LeetcodeSection />
          <CurrentProjectsSection />
           <ContactSection />
      </ThemeProvider>
    
    </div>
  );
}

export default App;
