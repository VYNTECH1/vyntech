// src/components/SoftwareProjects.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SoftwareProjects.css';

function SoftwareProjects() {
  const navigate = useNavigate();

  return (
    <div className="software-projects-container">
      {/* Navbar */}
      <nav className="navbar">
      <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="about-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="gallery-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="projects-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="collaborations-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="contactus-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
      </nav>

      {/* Page Content */}
      <h1>Software Projects</h1>
      <div className="software-projects-buttons">
        <Link to="/projects/software/project1">
          <button>Project 1</button>
        </Link>
      </div>
    </div>
  );
}

export default SoftwareProjects;
