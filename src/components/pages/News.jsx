import React from "react";
import Button from "../Button";

function News() {
  return (
    <div className="hero-container">
      <video src="/videos/5.mp4" autoPlay loop muted />
      <h1>Stay In The Know - Get The Latest Travel News And Updates!</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LETS GO
        </Button>
      </div>
    </div>
  );
}

export default News;
