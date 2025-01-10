// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Projects from './components/Project/Projects';
import SoftwareProjects from './components/Project/Software/SoftwareProjects';
import HardwareProjects from './components/Project/Hardware/HardwareProjects';
import SoftwareProject1 from './components/Project/Software/SoftwareProject1';
import HardwareProject1 from './components/Project/Hardware/HardwareProject1';
import Collaborations from './components/Collaboration/Collaborations';
import LandingPage from './components/LandingPage'; // Import the LandingPage component
import Collaboration1 from './components/Collaboration/Collaboration1'; // Correct the import path

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* HomePage route */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Other routes */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/software" element={<SoftwareProjects />} />
        <Route path="/projects/hardware" element={<HardwareProjects />} />
        <Route path="/projects/software/project1" element={<SoftwareProject1 />} />
        <Route path="/projects/hardware/project1" element={<HardwareProject1 />} />
        <Route path="/collaborations" element={<Collaborations />} />
        
        {/* Collaboration details page */}
        <Route path="/collaboration1" element={<Collaboration1 />} /> {/* Updated path */}
      </Routes>
    </Router>
  );
}

export default App;
