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
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Java", level: 80 },
        { name: "Kotlin", level: 75 },
        { name: "C/C++", level: 70 }
      ]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 95 },
        { name: "iOS Development", level: 85 },
        { name: "Android Development", level: 90 },
        { name: "React Navigation", level: 90 },
        { name: "Redux Toolkit", level: 88 }
      ]
    },
    {
      icon: <FaReact />,
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Context API", level: 85 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      icon: <FaServer />,
      title: "Backend & APIs",
      skills: [
        { name: "Next.js API Routes", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Database & Storage",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "SQLite", level: 70 },
        { name: "AsyncStorage", level: 90 }
      ]
    },
    {
      icon: <FaTools />,
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Bitrise CI/CD", level: 85 },
        { name: "Fastlane", level: 80 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      icon: <FaUsers />,
      title: "Soft Skills",
      skills: [
        { name: "Team Collaboration", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Agile Development", level: 85 },
        { name: "Code Review", level: 88 }
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
              <h3>2.5+ Years</h3>
              <p>Professional Development Experience</p>
            </div>
          </div>
          <div className="summary-card">
            <FaMobile className="summary-icon" />
            <div className="summary-content">
              <h3>10+ Apps</h3>
              <p>Delivered to Production</p>
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