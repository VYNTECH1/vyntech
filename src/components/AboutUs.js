import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutus-page">
      {/* Navbar */}
      <nav className="navbar">
        <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="about-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="gallery-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="projects-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="collaborations-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="contactus-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
        
      </nav>

      {/* About Us Content */}
      <div className="aboutus-container">
        <h2>About Us</h2>
        <p>
          Welcome to VYN Tech Technologies Private Limited, a leading innovator in 
          technology solutions. We specialize in delivering high-quality products 
          and services tailored to meet the unique needs of our clients.
        </p>
        <p>
          Our team is dedicated to leveraging the latest advancements in technology 
          to create impactful solutions across various industries. With a focus on 
          quality and excellence, we strive to push the boundaries of what’s possible.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;