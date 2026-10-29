import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section brand">
          <h2>Nex<span>Mart</span></h2>
          <p>
            Your one-stop destination for the latest fashion,
            electronics, and everyday essentials.
          </p>

          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">< InstagramIcon /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><YouTubeIcon/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <NavLink to="/adminportal">Home</NavLink>
          <NavLink to="/adminportal/products">All Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <NavLink to="">Help Center</NavLink>
          <NavLink to="">Shipping Information</NavLink>
          <NavLink to="">Returns & Refunds</NavLink>
          <NavLink to="">FAQs</NavLink>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Stay Connected</h3>
          <p>Subscribe for updates on new arrivals and special offers.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to NexMart!");
              e.target.reset();
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NexMart. All rights reserved.</p>
        <div>
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
