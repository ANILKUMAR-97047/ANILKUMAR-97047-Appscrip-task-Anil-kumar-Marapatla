import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter and Contact Section */}
      <div className="footer-top">
        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className="email-container">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="email-input"
            />
            <button className="subscribe-btn">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-section">
          <h2>CONTACT US</h2>
          <p className="contact-info">+44 221 133 5360</p>
          <p className="contact-info">customercare@mettamuse.com</p>
          
          <h2>CURRENCY</h2>
          <div className="currency-selector">
            <img src="/api/placeholder/24/24" alt="USD flag" className="currency-flag" />
            <span>USD</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is available
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="footer-links-container">
        {/* Brand Section */}
        <div className="footer-column">
          <h2>mettā muse</h2>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/stories">Stories</a></li>
            <li><a href="/artisans">Artisans</a></li>
            <li><a href="/boutiques">Boutiques</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h2>QUICK LINKS</h2>
          <ul className="footer-links">
            <li><a href="/orders">Orders & Shipping</a></li>
            <li><a href="/seller">Join/Login as a Seller</a></li>
            <li><a href="/payment">Payment & Pricing</a></li>
            <li><a href="/returns">Return & Refunds</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-column">
          <h2>FOLLOW US</h2>
          <div className="social-links">
            <a href="https://instagram.com" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/appscrip" className="social-icon">
              <Linkedin size={24} />
            </a>
          </div>
          

          <h2>mettā muse ACCEPTS</h2>
          <div className="payment-methods">
            <img src="/api/placeholder/48/32" alt="Google Pay" />
            <img src="/api/placeholder/48/32" alt="Mastercard" />
            <img src="/api/placeholder/48/32" alt="PayPal" />
            <img src="/api/placeholder/48/32" alt="American Express" />
            <img src="/api/placeholder/48/32" alt="Apple Pay" />
            <img src="/api/placeholder/48/32" alt="Shop Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;