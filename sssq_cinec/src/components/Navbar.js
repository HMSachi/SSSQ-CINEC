import React from "react";
import "../styles/Navbar.css";
import cinec_icon from '../components/assets/cinec.png';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* First Row */}
      <div className="navbar-row top-row">
        <div className="navbar-logo">
                  <img src={cinec_icon} alt="Cinec" />
        </div>
        <div className="navbar-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-actions">
          <input type="text" placeholder="Search..." className="navbar-search" />
          <button className="navbar-btn">Login</button>
        </div>
      </div>

      {/* Second Row */}
      <div className="navbar-row bottom-row">
        <div className="navbar-menu">
          <a href="/portfolio">Portfolio</a>
          <a href="/blog">Blog</a>
          <a href="/events">Events</a>
          <a href="/faq">FAQ</a>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
