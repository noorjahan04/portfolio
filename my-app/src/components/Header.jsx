import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h2>Noor<br />Jahan</h2>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger" onClick={handleToggleMenu}>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => { scrollToSection('home'); setMenuOpen(false); }}>HOME</button>
          <button onClick={() => { scrollToSection('about'); setMenuOpen(false); }}>ABOUT</button>
          <button onClick={() => { scrollToSection('skills'); setMenuOpen(false); }}>SKILLS</button>
          <button onClick={() => { scrollToSection('projects'); setMenuOpen(false); }}>PROJECTS</button>
          <button onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}>CONTACT</button>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <img
              src={
                darkMode
                  ? "https://cdn-icons-png.flaticon.com/512/869/869869.png"
                  : "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
              }
              alt="Theme toggle"
              width="20"
              height="20"
            />
          </button>
          <a
            href="https://drive.google.com/uc?export=download&id=1AzsqdXuUc5UsaZlQDffaj6fM-9jOBCdX"
            target="_blank"
            rel="noopener noreferrer"
            download="Noor_Jahan_Resume.pdf"
            className="resume-btn"
            onClick={() => setMenuOpen(false)}
          >
            RESUME
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
