import React from "react";
import "./styles.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">Technical Skills</h1>

        <div className="skill-category">
          <h2>Languages</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>Kotlin (Basic)</li>
            <li>C/C++</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Frontend</h2>
          <ul>
            <li>React Native (iOS & Android)</li>
            <li>Next.js</li>
            <li>React.js</li>
            <li>HTML, CSS</li>
            <li>Redux, Context API</li>
            <li>Native Android Development (XML)</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Backend</h2>
          <ul>
            <li>Next.js Server Actions / API Routes</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Database</h2>
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
          </ul>
        </div>

         <div className="skill-category">
          <h2>Tools & Platforms</h2>
          <ul>
            <li>Git</li>
            <li>Postman, Swagger</li>
            <li>Firebase (Auth, Notification)</li>
            <li>Vercel</li>
          </ul>
        </div>


        <div className="skill-category">
          <h2>Soft Skills</h2>
          <ul>
            <li>Strong communication</li>
            <li>Team collaboration</li>
            <li>Problem-solving</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
