"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./stylesHomePage/Navbar.module.css";
import Buttons from "./Buttons";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
    setDrawerOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        Niraj <span>Rai</span>
      </div>

      <ul className={styles.navLinks}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/site/about")}>About Me</li>
        <li onClick={() => navigate("/site/skills")}>Skills</li>
        <li onClick={() => navigate("/site/projects")}>Projects</li>
        <li onClick={() => navigate("/site/experience")}>Experience</li>
      </ul>

      <button
        className={styles.contactBtn}
        onClick={() => navigate("/site/contact")}
      >
        Contact Me
      </button>
      {/* DESKTOP ONLY BUTTON */}
      {/* <div className="desktopOnly">
  <Buttons buttonName="Contact Us" onClick={() => navigate("/site/contact")} />
</div> */}

      <div className={styles.hamburger} onClick={() => setDrawerOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer */}
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
              <div className={styles.drawerHeader}>
                <div
                  className={styles.closeIcon}
                  onClick={() => setDrawerOpen(false)}
                >
                  &#10005;
                </div>
                <div
                  className={styles.drawerLogo}
                  onClick={() => navigate("/")}
                >
                  Niraj <span>Rai</span>
                </div>
              </div>

              <ul className={styles.drawerLinks}>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/site/about")}>About Me</li>
                <li onClick={() => navigate("/site/skills")}>Skills</li>
                <li onClick={() => navigate("/site/projects")}>Projects</li>
                <li onClick={() => navigate("/site/experience")}>Experience</li>
                {/* <li
                  onClick={() => navigate("/site/contact")}
                  className={styles.drawerContactBtn}
                >
                  Contact Us
                </li> */}
                <div className="mobileOnly">
                  <Buttons
                    buttonName="Contact Me"
                    onClick={() => navigate("/site/contact")}
                  />
                </div>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
