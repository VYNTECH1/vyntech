// src/components/HardwareProjects.js
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './HardwareProjects.css';

function HardwareProjects() {
  const navigate = useNavigate();

  return (
    <div className="hardware-projects-container">
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
      <h1>Hardware Projects</h1>
      <div className="hardware-projects-buttons">
        <Link to="/projects/hardware/project1">
          <button>Project 1</button>
        </Link>
      </div>
    </div>
  );
}

export default HardwareProjects;
