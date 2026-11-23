import React from 'react';
import './HeroSlider.css';
import hero from '../../assets/hero-1.png'; // सही पाथ

const HeroSlider = () => {
  return (
    <div className="hero-section">
        <h1 className='hero-main-title'>Groww Your Wealth</h1>
        <button className='hero-start-btn'>Get Started</button>
      
      <img src={hero} alt="Groww Wealth" className="hero-illustration-img" />
    </div>
  );
};

export default HeroSlider;
