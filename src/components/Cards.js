import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <>
      <div className="title-h1">
        <h1>Choose Your Travel Destination!</h1>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h1>Choose Luzon</h1>
            <ul className="cards__items">
              <CardItem
                src="/images/l1.jpg"
                text="Banaue Rice Terraces"
                path="/SearchBar"
              />
              <CardItem
                src="/images/l10.jpg"
                text="Sagada"
                path="/Destination"
              />
              <CardItem
                src="/images/l2.jpg"
                text="Mount Pulag"
                path="/Destination"
              />
              <CardItem
                src="/images/l3.jpg"
                text="Baguio City"
                path="/Destination"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/l9.jpg"
                text="Batanes"
                path="/Destination"
              />
              <CardItem
                src="/images/l4.jpg"
                text="Vigan City"
                path="/Destination"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/l8.jpg"
                text="Pagudpud"
                path="/Destination"
              />
              <CardItem
                src="/images/l5.jpg"
                text="Mayon Volcano"
                path="/Destination"
              />
              <CardItem
                src="/images/l6.jpg"
                text="Anawangin Cove"
                path="/Destination"
              />
              <CardItem
                src="/images/l7.jpg"
                text="Coron Island"
                path="/Destination"
              />
            </ul>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h1>Choose Visayas</h1>
            <ul className="cards__items">
              <CardItem
                src="/images/b1.jpg"
                text="Boracay Island"
                path="/Destination"
              />

              <CardItem
                src="/images/b2.jpg"
                text="Chocolate Hills"
                path="/Destination"
              />

              <CardItem
                src="/images/b3.jpg"
                text="Sumilon Island"
                path="/Destination"
              />

              <CardItem
                src="/images/b4.jpg"
                text="Kalanggaman Island"
                path="/Destination"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/b5.jpg"
                text="Osmeña Peak"
                path="/Destination"
              />

              <CardItem
                src="/images/b6.jpg"
                text="Sohoton Cave"
                path="/Destination"
              />

              <CardItem
                src="/images/b7.jpg"
                text="Canigao Island"
                path="/Destination"
              />

              <CardItem
                src="/images/b8.jpg"
                text="Bantayan Island"
                path="/Destination"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/kawasan.jpg"
                text="Kawasan Falls"
                path="/Destination"
              />

              <CardItem
                src="/images/b10.jpg"
                text="Apo Island"
                path="/Destination"
              />
            </ul>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h1>Choose Mindanao</h1>
            <ul className="cards__items">
              <CardItem
                src="/images/m1.jpg"
                text="Siargao Island"
                path="/Destination"
              />

              <CardItem
                src="/images/m2.jpg"
                text="Camiguin Island"
                path="/Destination"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/m3.jpg"
                text="Enchanted River"
                path="/Destination"
              />

              <CardItem
                src="/images/m4.jpg"
                text="Tinuy-an Falls"
                path="/Destination"
              />

              <CardItem
                src="/images/m5.jpg"
                text="Mount Apo"
                path="/Destination"
              />

              <CardItem
                src="/images/m6.jpg"
                text="Samal Island"
                path="/Destination"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/m7.jpg"
                text="Dahican Beach"
                path="/Destination"
              />

              <CardItem
                src="/images/m8.jpg"
                text="Asik-Asik Falls"
                path="/Destination"
              />

              <CardItem
                src="/images/m9.jpg"
                text="Britania Islands"
                path="/Destination"
              />

              <CardItem
                src="/images/m10.jpg"
                text="Lake Sebu"
                path="/Destination"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
