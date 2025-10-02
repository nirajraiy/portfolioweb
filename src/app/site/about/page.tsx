"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaCode, FaMobile, FaRocket } from "react-icons/fa";
import styles from "./AboutSection.module.css";

export default function AboutPage() {
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

  const skills = [
    {
      icon: <FaCode />,
      title: "React Native Expert",
      description: "Cross-platform mobile app development with 2.5+ years of experience"
    },
    {
      icon: <FaMobile />,
      title: "Native Development",
      description: "Android development using Kotlin & XML UI for enhanced performance"
    },
    {
      icon: <FaRocket />,
      title: "Full-Stack Solutions",
      description: "Next.js applications with modern development practices"
    }
  ];

  return (
    <section className={styles.about}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Profile Image */}
        <motion.div 
          className={styles.imageWrapper}
          variants={itemVariants}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/nirajImage.png"
              alt="Niraj Rai"
              width={350}
              height={400}
              className={styles.image}
              priority
            />
            <motion.div 
              className={styles.floatingBadge}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaCode />
              <span>Developer</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div 
          className={styles.info}
          variants={itemVariants}
        >
          <motion.div 
            className={styles.badge}
            variants={itemVariants}
          >
            <span>Senior React Native Developer</span>
          </motion.div>

          <h1 className={styles.title}>About Me</h1>
          
          <p className={styles.description}>
            I am a <strong>Senior React Native Developer</strong> with 2.5+ years of experience 
            building enterprise-grade mobile applications. I specialize in creating high-performance, 
            scalable solutions that deliver exceptional user experiences across iOS and Android platforms.
          </p>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className={styles.skillCard}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.skillIcon}>
                  {skill.icon}
                </div>
                <div className={styles.skillContent}>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles.highlight}
            variants={itemVariants}
          >
            <p>
              I strive to build <strong>accessible</strong>, <strong>performant</strong>, and <strong>scalable</strong> applications
              that meet modern development standards and deliver exceptional user experiences.
            </p>
          </motion.div>

          <motion.button
            className={styles.downloadCV}
            onClick={() => {
              const win = window.open("/cv/NirajResume.html", "_blank");
              setTimeout(() => {
                win?.print();
              }, 200);
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 165, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}