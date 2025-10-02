"use client";
import { motion } from "framer-motion";
import { FaRocket, FaCode, FaMobile, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import "./styles.css";

const experiences = [
  {
    company: "Stellen Infotech",
    role: "React Native Developer",
    duration: "Jan 2024 – Present",
    location: "Mohali, Punjab, India",
    type: "Full-time",
    description: [
      "Architected and led development of 6 white-label salon booking apps serving 25K+ active users with shared React Native core modules, reducing development time by 40%",
      "Implemented Redux Toolkit with TypeScript and normalized API layer using RTK Query, eliminating 95% of API-related crashes and improving data consistency",
      "Optimized app performance through code splitting, lazy loading, and image compression, achieving 35% faster startup time and 50% smaller bundle size",
      "Established CI/CD pipeline with Bitrise, Fastlane, and EAS Build, enabling automated testing and 2-week release cycles with 99.8% deployment success rate"
    ],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Firebase", "Bitrise", "Fastlane"],
    achievements: ["20 Apps Delivered", "25K+ Users", "99.7% Crash-Free", "40% Faster Development"]
  },
  {
    company: "Dev Technosys Pvt Ltd",
    role: "React Native Trainee",
    duration: "April 2023 – September 2023",
    location: "Malviya Nagar, Jaipur, India",
    type: "Training",
    description: [
      "Built training apps with React Native, integrating REST APIs and React Navigation for cross-platform development",
      "Practiced state management patterns (Redux, Context) and responsive UI design for multiple device types",
      "Contributed features and bug fixes under senior guidance in an agile development environment",
      "Gained hands-on experience with Android Studio, Xcode, and mobile development best practices"
    ],
    technologies: ["React Native", "JavaScript", "Redux", "Context API", "Android Studio", "Xcode"],
    achievements: ["3 Training Projects", "Mobile UI/UX", "API Integration", "Agile Development"]
  },
  {
    company: "HabileLabs Private Limited",
    role: "Associate Software Engineer Trainee",
    duration: "Nov 2022 – March 2023",
    location: "Mansarovar, Jaipur, India",
    type: "Training",
    description: [
      "Completed comprehensive full-stack training covering HTML, CSS, JavaScript, React.js, and Node.js fundamentals",
      "Applied software engineering principles in small-scale project implementations and code reviews",
      "Participated in team-based development practices and version control with Git",
      "Built responsive web applications and learned modern development workflows"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Git"],
    achievements: ["Full-Stack Training", "Web Development", "Git Version Control", "Team Collaboration"]
  }
];

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const getRoleIcon = (role: string) => {
    if (role.includes("React Native")) return <FaMobile />;
    if (role.includes("Engineer")) return <FaCode />;
    return <FaRocket />;
  };

  return (
    <section className="experience-section">
      <motion.div 
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="experience-title" variants={itemVariants}>
          Professional Experience
        </motion.h1>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="experience-header">
                <div className="role-info">
                  <div className="role-icon">
                    {getRoleIcon(exp.role)}
                  </div>
                  <div className="role-details">
                    <h2>{exp.role}</h2>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>
                </div>
                <div className="experience-meta">
                  <div className="duration">
                    <FaCalendar />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="location">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="experience-content">
                <div className="achievements-grid">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div 
                      key={idx}
                      className="achievement-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1) + (idx * 0.05) }}
                    >
                      {achievement}
                    </motion.div>
                  ))}
                </div>

                <div className="experience-description">
                  <h3>Key Responsibilities & Achievements</h3>
                  <ul className="experience-points">
                    {exp.description.map((point, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1) + (i * 0.1) }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-used">
                  <h4>Technologies & Tools</h4>
                  <div className="tech-stack">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + (index * 0.1) + (idx * 0.05) }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="experience-summary"
          variants={itemVariants}
        >
          <div className="summary-card">
            <FaRocket className="summary-icon" />
            <div className="summary-content">
              <h3>2.5+ Years</h3>
              <p>Professional Experience</p>
            </div>
          </div>
          <div className="summary-card">
            <FaCode className="summary-icon" />
            <div className="summary-content">
              <h3>10+ Projects</h3>
              <p>Completed Successfully</p>
            </div>
          </div>
          <div className="summary-card">
            <FaMobile className="summary-icon" />
            <div className="summary-content">
              <h3>50K+ Users</h3>
              <p>Apps in Production</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperiencePage;