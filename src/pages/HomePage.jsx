import React from 'react';
import VideoBackground from '../components/VideoBackground';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepagestyle">
      <div className="showcase">
        <VideoBackground />
        <h1>The Home Page</h1>
      </div>
    </div>
  )
};
export default HomePage;