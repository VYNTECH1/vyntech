import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Collaborations.css';

function Collaborations() {
  const navigate = useNavigate();

  return (
    <div className="collaborations-page">
      {/* Navbar */}
      <nav className="navbar">
        <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="about-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="gallery-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="projects-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="collaborations-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="contactus-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
      </nav>

      {/* Main content */}
      <div className="collaborations-container">
        <h1>Collaborations</h1>
        <p>Explore our partnerships and collaborative projects.</p>

        {/* Clickable Logo for the Collaboration */}
        <a href="/collaboration1" className="company-logo-container">
          <img 
            src="path-to-company-logo.png" 
            alt="Company Logo" 
            className="company-logo" 
          />
        </a>
      </div>
    </div>
  );
}

export default Collaborations;
