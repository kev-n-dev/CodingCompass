import React from 'react';

const AboutPage = () => {
  return (
    <>
      <section className="about-me-container">
        <h1>About Coding Compass</h1>
        <p>Welcome to Coding Compass! <br/>This blog is a chronicle of my journey as a software developer, constantly learning and exploring new technologies.<br/>
           Coding Compass was created to guide and inspire fellow developers,
            providing valuable insights and resources them navigate their own paths.
            <br/>Here, you’ll find my experiences, projects, and tips to aid you in your coding journey.</p>
      </section>
      
      <section className="about-me-container">
        <h2>About Kevin Christopher</h2>
        <p>Hello! <br/>I'm Kevin Christopher, a passionate software developer dedicated to building innovative solutions and creating user-friendly experiences.<br/>
         My expertise spans various programming languages and frameworks, including React, JavaScript, Python, and more. I thrive on tackling challenging projects that push me to grow professionally.</p>
        <p>When I'm not immersed in code, I love exploring the great outdoors, diving into a good book, or experimenting with new recipes in the kitchen.</p>
        <p>Join me on this journey as we explore the ever-evolving world of software development together.</p>
      </section>
      <div  className="about-me-container" >
      <div className="social-links">
        <h2>Connect with Me</h2>
        <ul>
          <li>
            <a href="https://github.com/kev-n-dev" target="_blank" rel="noopener noreferrer">
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
      
    </>
  );
};

export default AboutPage;
