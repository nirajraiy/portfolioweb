"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./stylesHomePage/Navbar.module.css";
// import Buttons from "./Buttons";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();
  const pathname = usePathname();
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const navigate = (path: string) => {
    router.push(path);
    setDrawerOpen(false);
    setActiveLink(path);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/site/about", label: "About" },
    { path: "/site/skills", label: "Skills" },
    { path: "/site/projects", label: "Projects" },
    { path: "/site/experience", label: "Experience" },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "#ffa500",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className={styles.logo} 
        onClick={() => navigate("/")}
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.logoText}>Niraj</span>
        <span className={styles.logoAccent}>Rai</span>
        <div className={styles.logoSubtitle}>Developer</div>
      </motion.div>

      <motion.ul 
        className={styles.navLinks}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, index) => (
          <motion.li 
            key={item.path}
            className={`${styles.navItem} ${activeLink === item.path ? styles.active : ''}`}
            onClick={() => navigate(item.path)}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div 
        className={styles.navActions}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className={styles.contactBtn}
          onClick={() => navigate("/site/contact")}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(255, 165, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Contact Me</span>
        </motion.button>
        
        <motion.div 
          className={styles.socialLinks}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href="https://github.com/nirajraiy" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/niraj-rai-03a5b4181/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.button
        className={styles.hamburger}
        onClick={() => setDrawerOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span 
          animate={drawerOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span 
          animate={drawerOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span 
          animate={drawerOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />

            <motion.div
              className={styles.drawer}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) setDrawerOpen(false);
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className={styles.drawerHeader}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.button
                  className={styles.closeIcon}
                  onClick={() => setDrawerOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
                <motion.div
                  className={styles.drawerLogo}
                  onClick={() => navigate("/")}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={styles.logoText}>Niraj</span>
                  <span className={styles.logoAccent}>Rai</span>
                </motion.div>
              </motion.div>

              <motion.ul 
                className={styles.drawerLinks}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.path}
                    className={`${styles.drawerLink} ${activeLink === item.path ? styles.active : ''}`}
                    onClick={() => navigate(item.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.li>
                ))}
                
                <motion.div 
                  className={styles.drawerActions}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    className={styles.drawerContactBtn}
                    onClick={() => navigate("/site/contact")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </motion.button>
                  
                  <motion.div 
                    className={styles.drawerSocial}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.a 
                      href="https://github.com/nirajraiy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/niraj-rai-03a5b4181/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
