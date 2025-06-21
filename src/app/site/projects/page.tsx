"use client";

import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Keljhani",
    description:
      "A cross-platform app for salons offering booking, notifications, and real-time updates.",
    tech: ["React Native", "Redux", "Firebase"],
    image: "/projectpage.jpeg",
    appLink: {
      ios: "kk",
      android: "kkkk",
    },
  },
  {
    title: "Qwaiting Queue Manager",
    description:
      "Queue management system with real-time wait time estimation for clients.",
    tech: ["React Native", "Node.js", "Socket.io"],
    image: "/projectpage.jpeg",
  },
  {
    title: "Smart Review App",
    description:
      "Collect real-time customer feedback for service quality improvements.",
    tech: ["React Native", "Context API"],
    image: "/projectpage.jpeg",
  },
  {
    title: "Spark Resto App",
    description:
      "Restaurant table and reservation system with real-time occupancy tracking.",
    tech: ["React Native", "Firebase"],
    image: "/projectpage.jpeg",
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            // <div className="project-card" key={index}>
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="project-image"
                width={300} // or a size that matches your layout
                height={250} // adjust as needed
                layout="responsive" // or use 'intrinsic', 'fill', etc. depending on layout
              />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.appLink && (
                <div className="store-links">
                  {project.appLink.android && (
                    <a
                      href={project.appLink.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-button android"
                    >
                      Play Store
                    </a>
                  )}
                  {project.appLink.ios && (
                    <a
                      href={project.appLink.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-button ios"
                    >
                      App Store
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
