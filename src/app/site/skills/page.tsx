"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaTools, 
  FaUsers, 
  FaReact,
  FaFire,
  FaServer
} from "react-icons/fa";
import "./styles.css";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      }
    }
  };

  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Languages",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Java", level: 80 },
        { name: "Kotlin", level: 80 },
        { name: "Swift", level: 70 }
      ]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Reanimated", level: 85 },
        { name: "Gesture Handler", level: 85 },
        { name: "React Navigation", level: 90 },
        { name: "Hermes", level: 80 }
      ]
    },
    {
      icon: <FaReact />,
      title: "Architecture & Patterns",
      skills: [
        { name: "MVVM", level: 90 },
        { name: "Clean Architecture", level: 90 },
        { name: "SOLID Principles", level: 90 },
        { name: "Design Patterns", level: 85 },
        { name: "Dependency Injection", level: 80 }
      ]
    },
    {
      icon: <FaServer />,
      title: "APIs & Integration",
      skills: [
        { name: "RESTful APIs", level: 95 },
        { name: "OAuth", level: 85 },
        { name: "JWT", level: 85 },
        { name: "Socket.IO", level: 75 },
        { name: "WebSocket", level: 75 }
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Data & Storage",
      skills: [
        { name: "SQLite", level: 85 },
        { name: "Realm", level: 80 },
        { name: "AsyncStorage", level: 90 },
        { name: "Secure Storage", level: 80 },
        { name: "Offline Storage", level: 85 }
      ]
    },
    {
      icon: <FaTools />,
      title: "DevOps & Release",
      skills: [
        { name: "CI/CD", level: 90 },
        { name: "Bitrise", level: 85 },
        { name: "Fastlane", level: 80 },
        { name: "GitHub Actions", level: 80 },
        { name: "Azure DevOps", level: 70 }
      ]
    },
    {
      icon: <FaFire />,
      title: "Testing & Quality",
      skills: [
        { name: "Jest", level: 90 },
        { name: "Detox", level: 80 },
        { name: "Unit Testing", level: 85 },
        { name: "Integration Testing", level: 85 },
        { name: "Crashlytics", level: 80 }
      ]
    },
    {
      icon: <FaUsers />,
      title: "Collaboration & Process",
      skills: [
        { name: "Agile", level: 90 },
        { name: "Scrum", level: 85 },
        { name: "Jira", level: 85 },
        { name: "Stakeholder Management", level: 75 },
        { name: "Product Lifecycle", level: 80 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="skills-title" variants={itemVariants}>
          Technical Skills
        </motion.h1>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h2>{category.title}</h2>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05),
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-summary"
          variants={itemVariants}
        >
          <div className="summary-card">
            <FaFire className="summary-icon" />
            <div className="summary-content">
              <h3>3+ Years</h3>
              <p>Professional Development Experience</p>
            </div>
          </div>
          <div className="summary-card">
            <FaMobile className="summary-icon" />
            <div className="summary-content">
              <h3>12</h3>
              <p>Apps Delivered to Production</p>
            </div>
          </div>
          <div className="summary-card">
            <FaUsers className="summary-icon" />
            <div className="summary-content">
              <h3>20K+ Users</h3>
              <p>Served Across Platforms</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;