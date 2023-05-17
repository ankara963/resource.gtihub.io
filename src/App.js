import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Destination from "./components/pages/Destination";
import TravelIsnpiration from "./components/pages/TravelIsnpiration";
import TravelInfo from "./components/pages/TravelInfo";
import News from "./components/pages/News";
import Events from "./components/pages/Events";
import Map from "./components/pages/Map";
import Home from "./components/pages/Home";
import GoogleMaps from "./components/pages/GoogleMaps";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/TravelInspiration" element={<TravelIsnpiration />} />
          <Route path="/TravelInfo" element={<TravelInfo />} />
          <Route path="/News" element={<News />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Map" element={<Map />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
