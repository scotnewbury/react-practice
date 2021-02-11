import React from 'react';
import './VideoBackground.css';
import bgVideo from '../assets/video/mountain-and-fog.mp4';

const VideoBackground = () => {
  return (
    <video autoPlay loop muted className='video'>
      <source src={bgVideo} type='video/mp4' />   
    </video>
  )
}

export default VideoBackground;