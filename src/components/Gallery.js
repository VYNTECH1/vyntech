import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const navigate = useNavigate();

  // Use the image path relative to the public folder
  const images = ['/images/image2.jpg']; // Image path from public folder

  return (
    <div className="gallery-page">
      {/* Navbar */}
      <nav className="navbar">
        <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="about-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="gallery-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="projects-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="collaborations-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="contactus-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
      </nav>

      {/* Gallery Content */}
      <div className="gallery-container">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
