import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  // Use effect to trigger the video disappearance and message display after 3 seconds
  useEffect(() => {
    // Hide the video after 3 seconds and show the welcome message
    setTimeout(() => {
      setShowVideo(false);  // Hide video
      setShowMessage(true); // Show welcome message
    }, 3000);  // 3 seconds delay
  }, []);

  return (
    <div className="landing-page">
      <div className="video-container">
        {/* Only show the video if showVideo is true */}
        {showVideo && (
          <video
            className="landing-video"
            src="/images/video.mp4"  
            autoPlay
            loop
            muted
            type="video/mp4"
            playsInline
            preload="auto"  
          />
        )}
      </div>

      <div className={`welcome-message ${showMessage ? 'show' : ''}`}>
        <img src="/images/image8.jpg" alt="Welcome" className="welcome-photo" /> {/* Add your image */}
        <h1>VYN Tech Private Limited</h1>
        <p>Your journey to innovation begins here!</p>
        <button className="enter-btn" onClick={() => navigate('/home')}>
          Explore
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
