import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Welcome!!</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Smart</p>
            <div className="log"></div>
          </div>
          <p className="hero-text">Farm Starts Here</p>
        </div>
        <div className="hero-latest-btn">
          <div>Look Out!</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className="hero-right">
        <div className="flip-card">
          <div className="card-front"></div>
          <div className="card-back">
            Welcome to Greencart!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
