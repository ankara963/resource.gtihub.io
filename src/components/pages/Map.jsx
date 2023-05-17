import React from "react";
import PhTrivia from "../PhTrivia";
import GoogleMaps from "./GoogleMaps";

function Map() {
  return (
    <>
      <div className="container-md">
        <PhTrivia />
        
    <h1>Check which exciting tourist location is nearby</h1>

        <GoogleMaps />
      </div>
    </>
  );
}

export default Map;
