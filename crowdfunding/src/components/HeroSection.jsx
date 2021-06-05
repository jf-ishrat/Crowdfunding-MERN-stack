import React from 'react';
import '../App.css';
import './HeroSection.css';


const HeroSection= ()=> {
    return (
        <div className="hero-container">
            <video src="../videos/video-1.mp4" autoplay loop muted />
            <h1>BRING YOUR PROJECT TO LIFE</h1>
            <p>What are you waiting for?</p>

            
        </div>
    );
}

export default HeroSection;
