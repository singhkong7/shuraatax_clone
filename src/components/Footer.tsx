import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left - Brand Info */}
        <div className="footer-section">
          <img src="https://www.shuraatax.com/public/assets/images/shuraa_tax_logo_wg.webp?v=2.11.2" alt="Shuraa Logo" className="footer-logo" />
          <p>
            A group of experienced and qualified tax agents, accountants, auditors & finance
            advisors based in Dubai, UAE.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Middle - Explore */}
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Right - Useful Links */}
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Accounting & Bookkeeping</a></li>
            <li><a href="#">VAT Consultancy Services</a></li>
            <li><a href="#">UAE Corporate Tax</a></li>
            <li><a href="#">Payroll Services</a></li>
            <li><a href="#">Add-On Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
             <h4>Get in Touch</h4>
          <p>📞 +971 44081900</p>
          <p>✉ info@shuraatax.com</p>
          <p>📍 601 Sheikh Zayed Road, 6th Floor, Aspin Commercial Tower – Dubai</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="textColor_first">
        Copyright © {new Date().getFullYear()} <p className='footer_bottom_link'>Shuraa Tax Accounting & Auditing.</p> All Rights Reserved. Designed By <p className="footer_bottom_link">
        Shuraa Digital</p>
        </p>
        <p className="textColor-second">
            Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
