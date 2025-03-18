import React from 'react';
import './Styles/Footer.css';
import { MessageSquare } from 'lucide-react';
import NewsletterBox from './Newsletter.jsx'; 
import './Styles/Newsletter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>Company Name</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aut? Dolore nemo nisi unde ipsum odit fugiat, neque libero harum recusandae eaque obcaecati reprehenderit quibusdam veniam distinctio quam nulla totam.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <div className="underline"></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About-Us.jsx">About Us</a></li>
            <li><a href="/Why-Us.jsx">Why Us</a></li>
            <li><a href="/Our-Services.jsx">Our Services</a></li>
            <li><a href="/Contact.jsx">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <NewsletterBox/>
          <div className="social-icons">
            <a href="#" className="social-icon">
              {/* Facebook Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon">
              {/* Twitter Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon">
              {/* WhatsApp Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon">
              {/* Instagram Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Company Name © 2025 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;