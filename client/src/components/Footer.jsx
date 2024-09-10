import React from "react";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-links">
          <Link to="/privacy-policy" className="footer-item">
            Privacy Policy
          </Link>
          <Link to="/contact" className="footer-item">
            Contact
          </Link>
          <Link to="/about" className="footer-item">
            About
          </Link>
        </nav>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            className="social-icon"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            className="social-icon"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
