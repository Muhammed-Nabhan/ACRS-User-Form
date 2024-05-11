import React from 'react';
import loadingImage from './CRIME.png'; // Import the image

const LoadingPage = () => (
  <div className="loading-page">
    {/* Use the img tag to display the image */}
    <img src={loadingImage} alt="Loading" />
    <span class="loader"></span>
  </div>
  
);

export default LoadingPage;