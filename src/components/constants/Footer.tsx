import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./stylesHomePage/Footer.css"; // assuming you're using regular CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Niraj Rai – Senior React & Next.js
          Developer
        </p>
        <div className="footer-icons">
          <a
            href="https://github.com/nirajraiy"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon github" size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/niraj-rai-03a5b4181/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" size={20} />
          </a>
          <a href="mailto:nirajraibxr657@gmail.com" aria-label="Email">
            <FaEnvelope className="icon email" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
