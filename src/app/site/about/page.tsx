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
        ease: "easeOut" as const,
      }
    }
  };

  const skills = [
    {
      icon: <FaCode />,
      title: "React Native Expert",
      description: "3+ years shipping production apps with 20K+ active users. Expert in TypeScript, MVVM, and Clean Architecture"
    },
    {
      icon: <FaMobile />,
      title: "Native Development",
      description: "Android (Kotlin/Jetpack) & iOS (Swift/SwiftUI) development with performance optimization and native modules"
    },
    {
      icon: <FaRocket />,
      title: "Full-Stack Solutions",
      description: "React.js, Next.js, Vite web applications with shared TypeScript contracts across mobile and web"
    },
    {
      icon: <FaMobile />,
      title: "Scalable Architecture",
      description: "MVVM pattern, Clean Architecture, SOLID principles, and TurboModules for high-performance apps"
    },
    {
      icon: <FaCode />,
      title: "CI/CD & DevOps",
      description: "Bitrise, Fastlane, GitHub Actions, EAS Build. Reduced release cadence from monthly to biweekly"
    },
    {
      icon: <FaRocket />,
      title: "App Store Mastery",
      description: "12 production apps shipped to App Store & Google Play. 99.7% crash-free sessions, 50% bundle size reduction"
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
            <span>React Native Developer • 3+ Years Experience</span>
          </motion.div>

          <h1 className={styles.title}>About Me</h1>
          
          <p className={styles.description}>
            <strong>React Native Developer</strong> with <strong>3+ years</strong> of hands-on experience building and shipping production-grade Android, iOS, and web products end-to-end. 
            I am a <strong>sole technical owner</strong> of multiple flagship products (Qwaiting, Spark Resto, Smart Review) serving <strong>20,000+ active users</strong>. 
            Deep expertise in <strong>TypeScript, MVVM architecture, Clean Architecture, React Navigation, Firebase, Redux Toolkit, CI/CD, and App Store / Play Store releases</strong>.
            <br/><br/>
            <strong>Key highlights:</strong> Built and shipped <strong>12 production applications</strong>, maintained <strong>99.7% crash-free sessions</strong>, 
            achieved <strong>50% JS bundle size reduction</strong> and <strong>35% startup performance improvement</strong>. 
            Strong depth in native modules (Kotlin, Swift), REST APIs, OAuth/JWT, real-time systems (Pusher), and offline-first architecture.
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
              I focus on building <strong>accessible</strong>, <strong>performant</strong>, and <strong>scalable</strong> applications
              with production-ready architecture, comprehensive CI/CD pipelines, and exceptional user experiences. 
              I own the full lifecycle from concept through App Store deployment and production maintenance.
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