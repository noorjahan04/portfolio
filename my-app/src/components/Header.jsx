import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../assets/Noor_Jahan_Resume.pdf';

const Header = ({ darkMode, toggleDarkMode, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add/remove "menu-open" class on body
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const handleResumeClick = () => {
    window.open(resumePDF, "_blank");
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Noor_Jahan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

          {/* Resume Button */}
          <button
            className="resume-btn"
            onClick={() => {
              handleResumeClick();
              setMenuOpen(false);
            }}
          >
            RESUME
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
