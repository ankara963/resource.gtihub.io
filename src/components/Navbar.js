import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TravelPH
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Destination"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/TravelInspiration"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Travel Inspiration
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/TravelInfo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Travel Info
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Map" className="nav-links" onClick={closeMobileMenu}>
                Map
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
