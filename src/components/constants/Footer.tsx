import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./stylesHomePage/Footer.css";

const links = [
  { href: "/site/about", label: "About" },
  { href: "/site/skills", label: "Skills" },
  { href: "/site/projects", label: "Projects" },
  { href: "/site/experience", label: "Experience" },
  { href: "/site/contact", label: "Contact" },
  { href: "/cv/NirajResume.html", label: "Résumé" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Niraj<span>Rai</span>
          </Link>
          <p>React Native developer building iOS &amp; Android apps people rely on every day.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {links.map((l) =>
            l.href.endsWith(".html") ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="footer-icons">
          <a href="https://github.com/nirajraiy" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/nirajrai7/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:nirajraibxr657@gmail.com" aria-label="Email">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Niraj Rai · React Native &amp; Mobile Application Developer
      </div>
    </footer>
  );
};

export default Footer;
