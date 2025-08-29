import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import heroImg from '../assets/hero.png'; 

const Home = ({ darkMode }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="welcome-badge">WELCOME TO MY WORLD</div>
            <h1>
              Hi, 👋 I'm <span className="highlight">Noor Jahan</span>
            </h1>
            <h2>
              <span className="highlight">an</span> Aspiring Full Stack Developer...
            </h2>
            <p>
             Building seamless web experiences with the MERN stack, passionate about turning ideas into impactful applications.
            </p>
            <div className="social-links">
              <span>Connect with me</span>
              <div className="social-icons">
                <a href="https://github.com/noorjahan04" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/noor-jahan-915987280/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="mailto:noorifms@gmail.com">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image">
            {/* Use imported local image */}
            <img src={heroImg} alt="Developer working" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
