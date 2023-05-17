import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <h3>Destination</h3>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <h3>Travel Isnpiration</h3>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <h3>Travel Info</h3>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <h3>Map</h3>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <h3>About us</h3>
            </Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TravelPH
            </Link>
          </div>
          <small className="website-rights">EuLoCombo TravelPH © 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
