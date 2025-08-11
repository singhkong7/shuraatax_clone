import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
console.log('isMenuOpen',isMenuOpen)
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
           <img src="https://www.shuraatax.com/public/assets/images/shuraa_tax_logo_wg.webp?v=2.11.2" alt="Shuraa Logo" className="footer-logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className="hamburger"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </div>

        {/* Desktop Nav */}
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        {isMenuOpen?<p onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen ? "cross_icon" : ""}`}>X</p>:null}
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="nav_link">Home</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="nav_link">Blog</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="nav_link">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
