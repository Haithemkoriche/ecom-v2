import React from 'react';
import  "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/exclusive_image.png";
import right_logo from "../assets/right_logo.png";
function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
              <div>
                  <div className="hero-hand-icon">
                      <p style={{color: "#994bc2"}} className="new">New</p>
                      <img src={hand_icon} />
                  </div>
                  <p>Collections</p>
                  <p>For Everyone</p>
              </div>
                <div style={{background: "#994bc2"}} className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} />
                </div>
            </div>

            <div className="hero-right">
                <img src={right_logo} />
            </div>
        </div>
    );
}

export default Hero;