import React from 'react';
import { Search, Heart, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <FaReact className="logo-small" />
        </div>
        
        <div className="center-logo">
          LOGO
        </div>

        <div className="utility-icons">
          <button className="icon-button">
            <Search size={24} />
          </button>
          <button className="icon-button">
            <Heart size={24} />
          </button>
          <button className="icon-button">
            <ShoppingBag size={24} />
          </button>
          <button className="icon-button">
            <User size={24} />
          </button>
          <button className="language-selector">
            ENG
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <nav className="main-nav">
        <ul className="nav-links">
          <li className='underline-hover'><a href="/">HOME</a></li>
          <li className='underline-hover'><a href="/products">PRODUCTS</a></li>
          <li className='underline-hover'><a href="/contact">CONTACT US</a></li>
          <li className='underline-hover'><a href="https://appscrip.com/about/">ABOUT</a></li>
          <li className='underline-hover'><a href="/stories">STORIES</a></li>
        </ul>
      </nav>

      <div className="hero-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
    </header>
  );
};

export default Header;
