import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMaps.css"



function GoogleMaps(props) {
  const defaultCenter = {
    lat: 14.5995,
    lng: 120.9842,
  };

  const defaultZoom = 5;

  const [userLocation, setUserLocation] = useState(null);

  function handleGetUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLocation);
        },
        function () {
          alert("Error: The Geolocation service failed.");
        }
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  }

  const markers = [
    {
      lat: 16.4023,
      lng: 120.5960,
      color: "red",
      label: "Baguio",
    },
    {
      lat: 11.2027,
      lng: 119.4179,
      color: "red",
      label: "Palawan El Nido",
    },
    {
      lat: 14.5995,
      lng: 120.9842,
      color: "red",
      label: "Manila",
    },
  ];

  if (userLocation) {
    markers.push({
      lat: userLocation.lat,
      lng: userLocation.lng,
      color: "blue",
      label: "You are here",
    });
  }

  return (
    <div style={{ height: "800px", width: "100%", position: "relative" }} className="mapcont">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD2R3LDm5jmU1SCGT7e8U1-rGjba0QjlRc" }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            color={marker.color}
            label={marker.label}
          />
        ))}
      </GoogleMapReact>
      
      <button onClick={handleGetUserLocation} className="usrbtn" style={{ position: "absolute", top: "10px", left: "10px" }}>My Location</button>
    </div>
  );
}

function Marker({ color, label }) {
  return (
    <div
      style={{
        color: "white",
        background: color,
        padding: "5px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        width: "30px",
        height: "30px",
        border: "2px solid white",
      }}
    >
      {label}
    </div>
  );
}

export default GoogleMaps;
