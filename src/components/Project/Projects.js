import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link here
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      {/* Navbar */}
      <nav className="navbar">
      <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="about-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="gallery-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="projects-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="collaborations-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="contactus-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
      </nav>

      {/* Projects Content */}
      <div className="projects">
        <h1>Our Projects</h1>
        <div className="project-categories">
          <div className="category">
            <h2>Software Projects</h2>
            <p>Explore our cutting-edge software projects.</p>
            <Link to="/projects/Software" className="project-link">View Software Projects</Link>
          </div>
          <div className="category">
            <h2>Hardware Projects</h2>
            <p>Discover our innovative hardware projects.</p>
            <Link to="/projects/Hardware" className="project-link">View Hardware Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
