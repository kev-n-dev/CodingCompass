import React from 'react';
 
const AboutPage = () => {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="about-me-content">
        <p>
          Hi there! I'm Kevin, christopher, a passionate software developer who is
          constantly learning and exploring new technologies. I have a keen
          interest in building innovative solutions and creating user-friendly
          experiences. 
          </p>
        <p>This blog site is
          going to keep track as I learn and progress in my career and serve as
          a guide for young up and coming developers.
        </p>
        <p>
          I have experience with various programming languages and frameworks,
          including React, JavaScript, Python, and more. I love working on
          challenging projects that push me to grow professionally.
        </p>
        <p>
          When I'm not coding, you can find me exploring the great outdoors,
          reading a good book, or experimenting in the kitchen.
        </p>
      </div>
      <div className="social-links">
        <h2>Connect with Me</h2>
        <ul>
          <li>
            <a href="https://github.com/coding-corps" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kevin-christopher-7537007a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {/* Add more social links here */}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
