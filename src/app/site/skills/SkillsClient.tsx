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

const SkillsClient = () => {
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
        { name: "Kotlin", level: 85 },
        { name: "Swift", level: 85 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Java", level: 80 }
      ]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Application Development",
      skills: [
        { name: "React Native", level: 95 },
        { name: "Android (Kotlin/XML)", level: 85 },
        { name: "iOS (Swift/SwiftUI)", level: 85 },
        { name: "React Navigation", level: 95 },
        { name: "Reanimated", level: 90 },
        { name: "Gesture Handler", level: 85 },
        { name: "Hermes Engine", level: 85 },
        { name: "Native Modules", level: 80 }
      ]
    },
    {
      icon: <FaReact />,
      title: "Web & Frameworks",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vite", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      icon: <FaServer />,
      title: "State Management",
      skills: [
        { name: "Redux Toolkit", level: 95 },
        { name: "RTK Query", level: 90 },
        { name: "React Query", level: 85 },
        { name: "Zustand", level: 80 },
        { name: "Context API", level: 90 }
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Data & Storage",
      skills: [
        { name: "SQLite", level: 90 },
        { name: "Realm", level: 85 },
        { name: "AsyncStorage", level: 95 },
        { name: "Secure Storage", level: 85 },
        { name: "Offline-First Architecture", level: 90 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      icon: <FaServer />,
      title: "APIs & Integration",
      skills: [
        { name: "REST APIs", level: 95 },
        { name: "OAuth 2.0", level: 85 },
        { name: "JWT", level: 90 },
        { name: "Pusher (Real-time)", level: 85 },
        { name: "WebSocket", level: 85 },
        { name: "Firebase FCM", level: 85 }
      ]
    },
    {
      icon: <FaReact />,
      title: "Architecture & Patterns",
      skills: [
        { name: "MVVM", level: 95 },
        { name: "Clean Architecture", level: 95 },
        { name: "SOLID Principles", level: 90 },
        { name: "TurboModules", level: 80 },
        { name: "Fabric Architecture", level: 80 }
      ]
    },
    {
      icon: <FaTools />,
      title: "DevOps & CI/CD",
      skills: [
        { name: "Bitrise", level: 90 },
        { name: "Fastlane", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "EAS Build", level: 85 },
        { name: "App Store Deploy", level: 90 },
        { name: "Google Play Deploy", level: 90 }
      ]
    },
    {
      icon: <FaFire />,
      title: "Testing & Quality",
      skills: [
        { name: "Jest", level: 90 },
        { name: "Detox (E2E)", level: 85 },
        { name: "Unit Testing", level: 90 },
        { name: "Integration Testing", level: 85 },
        { name: "Crashlytics", level: 85 }
      ]
    },
    {
      icon: <FaUsers />,
      title: "Collaboration & Process",
      skills: [
        { name: "Agile/Scrum", level: 90 },
        { name: "Jira", level: 85 },
        { name: "Git Version Control", level: 95 },
        { name: "Code Review", level: 90 },
        { name: "Technical Leadership", level: 85 }
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
          Technical Skills & Mobile Architecture
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
              <p>Professional Mobile Development Experience</p>
            </div>
          </div>
          <div className="summary-card">
            <FaMobile className="summary-icon" />
            <div className="summary-content">
              <h3>12</h3>
              <p>Mobile Apps Delivered to Production</p>
            </div>
          </div>
          <div className="summary-card">
            <FaUsers className="summary-icon" />
            <div className="summary-content">
              <h3>20K+ Users</h3>
              <p>Served Across Mobile Platforms</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsClient;
