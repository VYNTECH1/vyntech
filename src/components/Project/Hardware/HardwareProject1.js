import React from 'react';
import './HardwareProject1.css'; // CSS file for styling

function SoftwareProject1() {
  return (
    <div className="project-detail-container">
      {/* Image */}
      <img
        src="/path-to-your-image/image.jpg" // Replace with the correct path to your image
        alt="Hardware Project 1"
        className="project-image"
      />

      {/* Title */}
      <h1>Hardware Project 1</h1>

      {/* Description */}
      <p>
        This is a detailed description of Hardtware Project 1. The project focuses on 
        delivering innovative solutions using modern technologies. It incorporates 
        features like advanced analytics, real-time processing, and an intuitive user 
        interface to enhance productivity and user experience.
      </p>
    </div>
  );
}

export default SoftwareProject1;
