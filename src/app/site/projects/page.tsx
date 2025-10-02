"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaPlay, FaAppStore, FaGooglePlay, FaExternalLinkAlt, FaCode, FaMobile } from "react-icons/fa";
import "./styles.css";

// Define the TypeScript interfaces
interface AppLink {
  android?: string;
  ios?: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  appLink?: AppLink;
  category: 'completed' | 'running';
  featured?: boolean;
}

// Project data
const projects: Project[] = [
  // Featured Projects
  {
    title: "Smart Review & NPS App",
    description: "A comprehensive review management app designed to help businesses collect, monitor, and respond to customer feedback from multiple channels. Features include custom ratings, team collaboration, detailed analytics, and automated review requests to boost online reputation and drive growth.",
    tech: ["React Native", "TypeScript", "Context API", "REST API", "Universal Printer", "Firebase"],
    image: "/projectpage.jpeg",
    appLink: {
      android: "https://play.google.com/store/apps/details?id=com.smartreviews&hl=en_IN",
      ios: "https://apps.apple.com/us/app/shrivra-smart-reviews/id6738766927",
    },
    category: 'completed',
    featured: true
  },
  {
    title: "Qwaiting Queue Management",
    description: "A smart, multi-platform queue management system that streamlines customer service across mobile, iPads, self-service kiosks, and TV displays. Built with React Native, REST APIs, and Pusher, it offers real-time queue tracking, appointment scheduling, and live notifications.",
    tech: ["React Native", "TypeScript", "REST API", "Pusher", "Universal Printer", "VideoPlayer"],
    image: "/projectpage.jpeg",
    category: 'running',
    featured: true
  },
  {
    title: "Salonist Check-In App",
    description: "A user-friendly in-salon app designed to streamline walk-in bookings and quick check-ins for pre-booked clients. Optimized for tablets and kiosks, it reduces wait times and enhances customer experience with secure, fast, and organized appointment management.",
    tech: ["React Native", "TypeScript", "Context API", "REST API", "Firebase"],
    image: "/projectpage.jpeg",
    appLink: {
      android: "https://play.google.com/store/apps/details?id=com.salonistcheckin&hl=en_IN",
      ios: "https://apps.apple.com/us/app/salonist-checkin/id6746629343",
    },
    category: 'completed',
    featured: true
  },
  // Completed Projects
  {
    title: "Spark Resto - Restaurant Management",
    description: "A powerful restaurant order management app designed to streamline order taking, real-time tracking, and kitchen communication. Features include table-side ordering, customizable menus, centralized dashboard, takeaway options, and comprehensive analytics.",
    tech: ["React Native", "JavaScript", "REST API", "Context API", "SQLite", "Universal Printer"],
    image: "/projectpage.jpeg",
    appLink: {
      android: "https://play.google.com/store/apps/details?id=com.sparkresto&hl=en_IN",
      ios: "https://apps.apple.com/us/app/spark-resto/id6740860532",
    },
    category: 'completed'
  },
  {
    title: "After Life Estate Planning",
    description: "An all-in-one estate planning mobile app designed to simplify the process of creating and managing Wills. Offers expert Shariah-compliant guidance, robust security, comprehensive asset management, and seamless integration.",
    tech: ["React Native", "TypeScript", "Redux", "REST API"],
    image: "/projectpage.jpeg",
    appLink: {
      android: "https://play.google.com/store/apps/details?id=com.stellenafterlife",
    },
    category: 'completed'
  },
  {
    title: "Harir Luxury Beauté Salon",
    description: "A cross-platform mobile application for a high-end women's salon offering a luxury beauty experience. The app features elegant service listings, booking form with email notifications, and a design that reflects the premium nature of the brand.",
    tech: ["React Native", "JavaScript", "Redux", "REST API"],
    image: "/projectpage.jpeg",
    appLink: {
      android: "https://play.google.com/store/apps/details?id=com.harir&hl=en_IN",
      ios: "https://apps.apple.com/us/app/harirluxury/id6550916125",
    },
    category: 'completed'
  },
  {
    title: "Keljhani Beauty Salon",
    description: "A mobile app designed for a full-service beauty salon, offering appointment booking, service listings, and client engagement features. The app allows users to explore grooming and wellness services, book appointments, and receive updates via push notifications.",
    tech: ["React Native", "JavaScript", "Redux", "REST API", "Push Notifications"],
    image: "/projectpage.jpeg",
    appLink: {
      ios: "https://apps.apple.com/us/app/keljhani/id6738165759",
    },
    category: 'completed'
  },
  // Running Projects
  {
    title: "Docon Hospital Management",
    description: "A comprehensive Hospital Management System designed to streamline and automate hospital operations. It integrates patient registration, appointment scheduling, electronic medical records (EMR), billing, and staff management into a unified platform.",
    tech: ["React Native", "TypeScript", "REST API", "Redux", "Stripe Payment Gateway"],
    image: "/projectpage.jpeg",
    category: 'running'
  },
  {
    title: "AppointEze Salon Management",
    description: "A powerful and easy-to-use mobile solution designed for salons, spas, beauty parlors, and wellness centers to manage their day-to-day operations effortlessly. From appointment scheduling to billing, staff coordination to inventory tracking.",
    tech: ["React Native", "TypeScript", "REST API", "Redux"],
    image: "/projectpage.jpeg",
    category: 'running'
  },
  {
    title: "Zayada Sales & Project Tracking",
    description: "An all-in-one platform designed to help businesses manage sales processes and track project progress step by step. From lead generation to final delivery, the app gives teams complete visibility and control over every stage.",
    tech: ["React Native", "TypeScript", "REST API", "Context API"],
    image: "/projectpage.jpeg",
    category: 'running'
  }
];

const ProjectsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const runningRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = searchParams.get("section");

    if (section === "running" && runningRef.current) {
      runningRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "completed" && completedRef.current) {
      completedRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: "easeOut" as const
      }
    }
  };

  const getProjectIcon = (category: string) => {
    return category === 'completed' ? <FaCode /> : <FaMobile />;
  };

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="project-header">
        <div className="project-category">
          <span className="category-icon">
            {getProjectIcon(project.category)}
          </span>
          <span className="category-text">
            {project.category === 'completed' ? 'Completed' : 'In Development'}
          </span>
        </div>
        {project.featured && (
          <div className="featured-badge">
            <FaCode />
            <span>Featured</span>
          </div>
        )}
      </div>

      <div className="project-image-container">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="project-image"
        />
        <div className="project-overlay">
          <div className="overlay-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h2>{project.title}</h2>
        <p className="project-description">{project.description}</p>
        
        <div className="tech-stack">
          <h4>Technologies Used</h4>
          <div className="tech-tags">
            {project.tech.map((tech, i) => (
              <motion.span 
                key={i}
                className="tech-tag"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {project.appLink && (
          <div className="project-links">
            {project.appLink.android && (
              <motion.a
                href={project.appLink.android}
                target="_blank"
                rel="noopener noreferrer"
                className="store-link android"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGooglePlay />
                <span>Play Store</span>
              </motion.a>
            )}
            {project.appLink.ios && (
              <motion.a
                href={project.appLink.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="store-link ios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaAppStore />
                <span>App Store</span>
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  const completedProjects = projects.filter(p => p.category === 'completed');
  const runningProjects = projects.filter(p => p.category === 'running');
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="projects-section">
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="projects-header" variants={itemVariants}>
          <h1>My Projects</h1>
          <p>Explore my portfolio of mobile applications and web projects built with modern technologies</p>
        </motion.div>

        <motion.div 
          className="featured-projects"
          variants={itemVariants}
        >
          <h2>🌟 Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </motion.div>

        <motion.div 
          className="completed-projects"
          variants={itemVariants}
          ref={completedRef}
        >
          <h2>✅ Completed Projects</h2>
          <div className="projects-grid">
            {completedProjects.filter(p => !p.featured).map((project, index) => renderProjectCard(project, index))}
          </div>
        </motion.div>

        <motion.div 
          className="running-projects"
          variants={itemVariants}
          ref={runningRef}
        >
          <h2>🚧 Projects in Development</h2>
          <div className="projects-grid">
            {runningProjects.filter(p => !p.featured).map((project, index) => renderProjectCard(project, index))}
          </div>
        </motion.div>

        <motion.div 
          className="projects-summary"
          variants={itemVariants}
        >
          <div className="summary-card">
            <FaCode className="summary-icon" />
            <div className="summary-content">
              <h3>{completedProjects.length}</h3>
              <p>Completed Projects</p>
            </div>
          </div>
          <div className="summary-card">
            <FaMobile className="summary-icon" />
            <div className="summary-content">
              <h3>{runningProjects.length}</h3>
              <p>In Development</p>
            </div>
          </div>
          <div className="summary-card">
            <FaPlay className="summary-icon" />
            <div className="summary-content">
              <h3>50K+</h3>
              <p>Active Users</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsPage;