import React from 'react';
import './Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-name">COMPANY NAME</h2>
          <p className="footer-copyright">All Rights Reserved, 2025</p>
        </div>
        
        <div className="footer-middle">
          <nav className="footer-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blogs">Our Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-right">
          <div className="footer-social">
            <p>Get to know us</p>
            <div className="social-icons">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="linkedin-icon">in</i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="twitter-icon">X</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;