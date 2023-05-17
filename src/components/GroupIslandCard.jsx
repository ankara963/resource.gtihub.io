import React from "react";
import "./GroupIslandCard.css";
import CardItem from "./CardItem";

function GroupIslandCard() {
  return (
    <div className="cardsCont">
      <div className="cardsContainer">
        <div className="cardsWrapper">
          <ul className="cardsItems">
            <CardItem
              className="cardsDesign"
              src="/images/dive.jpg"
              text="DIVE"
              path="/Destination"
            />

            <CardItem
              className="cardsDesign"
              src="/images/l2.jpg"
              text="NATURE"
              path="/Destination"
            />

            <CardItem
              className="cardsDesign"
              src="/images/11.jpg"
              text="SUN & BEACH"
              path="/Destination"
            />

            <CardItem
              className="cardsDesign"
              src="/images/m5.jpg"
              text="ADVENTURE"
              path="/Destination"
            />
            <CardItem
              className="cardsDesign"
              src="/images/food.jpg"
              text="FOOD & HOSPITALITY"
              path="/Destination"
            />

            <CardItem
              className="cardsDesign"
              src="/images/culture.jpg"
              text="EVENTS & CULTURE"
              path="/Destination"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GroupIslandCard;
