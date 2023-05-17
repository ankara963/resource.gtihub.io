import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Cards from "./Cards";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
      <video loop muted autoPlay className="hero-video">
        <source src="/images/Homepage Video.mp4" type="video/mp4" />
      </video>
        
        <h1 className="h1-1">Discover <span className="dispnone">paradise</span></h1>
        <h1 className="h1-2"><span className="dispnone">in the</span> Philippines</h1>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            EXPLORE NOW!
          </Button>
        </div>
      </div>
      
    </>
  );
}

export default HeroSection;
