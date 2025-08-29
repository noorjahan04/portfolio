import React from 'react';
import { Github } from 'lucide-react';

// Import local images
import project1 from '../assets/project1.png'; 
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Healthy Habit Tracker',
      description:
        'A comprehensive wellness-focused web app to build, track, and maintain positive habits. Features include a real-time dashboard, wellness scoring, mood tracking, smart reminders, and an AI-powered chatbot assistant. Built with Firebase for authentication and real-time data storage.',
      image: project1,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Chart.js'],
      github: 'https://github.com/noorjahan04/projects',
      live: 'https://healthy-habit-tracker.netlify.app/',
    },
    {
      title: 'Volunteer Opportunities Hub',
      description:
        'A dynamic web platform that connects individuals with local volunteer opportunities. Features include an integrated calendar, personalized dashboard, user authentication, reviews, and resource sharing. Built with React, Tailwind CSS, and Firebase to make volunteering accessible and engaging.',
      image: project2,
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Context API'],
      github: 'https://github.com/noorjahan04/project-2',
      live: 'https://volunteer-hub.netlify.app/',
    },
    {
      title: 'QuickMed – Online Medical Shop',
      description:
        'A full-stack online medical store providing home-delivered medicines, OTC products, and healthcare essentials. Features include product browsing, secure authentication, cart & checkout system, real-time updates, and order management with MongoDB Atlas integration.',
      image: project3,
      technologies: [
        'React.js',
        'TailwindCSS',
        'Framer Motion',
        'Node.js',
        'Express.js',
        'MongoDB Atlas',
        'JWT',
      ],
      github: 'https://github.com/noorjahan04/QuickMed_Logistics-and-Transportation',
      live: 'https://myquickmed.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-label">RECENTLY ADDED PROJECT</div>
        <h2>
          MY PROJECTS <span className="arrow">→</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github /> Github
                  </a>
                  <a
                    href={project.live}
                    className="live-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ✓ Go Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
