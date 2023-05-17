import React from "react";

const DestinationCard = ({ name, image, description }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DestinationCard;
