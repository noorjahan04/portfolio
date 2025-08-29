import React from 'react';
import aboutImg from '../assets/about.png'; 

const About = ({ darkMode }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            {/* Use local image */}
            <img src={aboutImg} alt="Noor Jahan" />
          </div>
          <div className="about-text">
            <div className="section-label">KNOW ME HERE</div>
            <h2>✨ SELF-SUMMARY ✨</h2>
            <div className="summary-card">
              <h3>
                <span className="highlight">Noor </span> Jahan
              </h3>
              <h4>Full Stack Web Developer</h4>
              <p>
                Proactive full-stack web developer skilled in JavaScript and MERN stack (MongoDB, Express.js, 
                React.js, Node.js). Collaborative team player translating project requirements into scalable 
                web applications. Exceptional problem-solving and attention to detail, continuously updated 
                with web dev trends for software excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
