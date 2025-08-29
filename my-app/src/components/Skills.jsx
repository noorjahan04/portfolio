import React from 'react';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'JavaScript', image: 'https://icon2.cleanpng.com/20180810/ekz/11448a7a96ee808a3cdbaf0df9570976.webp' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', image: 'https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png' },
    { name: 'Babel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg' },
    { name: 'npm', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'vite', image: 'https://vitejs.dev/logo.svg' }
  ];

  const tools = [
    { name: 'Notion', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png' },
    { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vercel', image: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Netlify', image: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>MY SKILLS <span className="arrow">→</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img src={skill.image} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <h2>TOOLS <span className="arrow">→</span></h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">
                <img src={tool.image} alt={tool.name} />
              </div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;