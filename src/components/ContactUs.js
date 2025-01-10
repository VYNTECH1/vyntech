import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="contactus-page">
      {/* Navbar */}
      <nav className="navbar">
      <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="about-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="gallery-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="projects-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="collaborations-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="contactus-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
      </nav>

      {/* Contact Us Content */}
      <div className="contactus-container">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Please reach out with any questions, feedback, or inquiries.</p>
        <p>You can fill out our contact form by clicking the link below:</p>
        <a 
          href="https://forms.office.com/r/G8xab53jy4" // Replace with your actual Google Form link
          target="_blank" 
          rel="noopener noreferrer"
          className="contactus-link"
        >
          Fill out our Contact Form
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
