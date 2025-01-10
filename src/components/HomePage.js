import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import image6 from './image6.jpg'; // Import logo image
import image9 from './image9.jpg'; // Import background image

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container" style={{ backgroundImage: `url(${image9})` }}>
      <div className="logo-container">
        <img src={image6} alt="Logo" className="logo" />
      </div>
      <h1 className="page-title">VYN Tech Private Limited</h1>
      <div className="buttons-container">
        <button className="nav-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="nav-btn" onClick={() => navigate('/aboutus')}>About Us</button>
        <button className="nav-btn" onClick={() => navigate('/gallery')}>Gallery</button>
        <button className="nav-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="nav-btn" onClick={() => navigate('/collaborations')}>Collaborations</button>
        <button className="nav-btn" onClick={() => navigate('/contactus')}>Contact Us</button>
      </div>
    </div>
  );
};

export default HomePage;
