// src/components/Hero.js
import React from 'react';
import './Hero.css';
import hand_icons from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/latestcollection');
  };

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hend-hero-icone">
            <p>new</p>
            <img src={hand_icons} alt='' />
          </div>
          <p>collection</p>
          <p>for all of them</p>
        </div>
        <div className="hero-lastest-btn" >
          <div className='lts' onClick={handleNavigation} >Latest collection</div>
          <img src={arrow_icon} alt='arrow icon' />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
