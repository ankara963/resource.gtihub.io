import React from "react";
import "./Destination.css";
import GroupIslandCard from "../GroupIslandCard";
import CardList from "../CardWithModal";
import Button from "../Button";
import MyCards from "../MyCards";
import MyCardList from "../trials/MySearchBar";

function Destination() {
  return (
    <>
      {/* my searchbar */}
      <div className="destination-hero-container">
        <img className="hero-image" src="./images/7.jpg" alt="hero-image" />
        <h1 className="h11">Explore Philippines's</h1>
        <h1 className="h12">BREATH TAKING PLACES</h1>
        <div className="hero-btns">
         
        </div>
        
      </div>
      
        <MyCards />
        <MyCardList />
      
   
      
      
    </>
  );
}
export default Destination;
