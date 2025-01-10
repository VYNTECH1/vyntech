// src/components/Collaboration/Collaboration1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Collaboration1.css';

// Rename CollaborationDetail to Collaboration1 to match the export
function Collaboration1() {
  const navigate = useNavigate();

  return (
    <div className="Collaboration1-page">
      {/* Navbar */}
      <nav className="navbar">
        <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="about-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="gallery-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="projects-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="collaborations-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="contactus-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
      </nav>

      {/* Collaboration Detail Content */}
      <div className="collaboration1-container">
        <h1>Collaboration with [Company Name]</h1>
        <p>Here, you can present details about the collaboration with this company.</p>
        <p>More information can be added about the project scope, timelines, and other important aspects.</p>
      </div>
    </div>
  );
}

export default Collaboration1; // Export Collaboration1 instead of CollaborationDetail
