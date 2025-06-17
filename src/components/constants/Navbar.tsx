// "use client";
// import { useState } from "react";
// import styles from "./stylesHomePage/Navbar.module.css";

// export default function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         Niraj <span>Rai</span>
//       </div>

//       <ul className={styles.navLinks}>
//         <li >Home</li>
//         <li>About Me</li>
//         <li>Skills</li>
//         <li>Projects</li>
//         <li>Experience</li>
//       </ul>

//       <button className={styles.contactBtn}>Contact Us</button>

//       {/* Mobile Hamburger Icon */}
//       <div className={styles.hamburger} onClick={() => setDrawerOpen(true)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* Mobile Drawer */}
//       <div
//         className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
//       >
//         <div className={styles.drawerHeader}>
//           <div
//             className={styles.closeIcon}
//             onClick={() => setDrawerOpen(false)}
//           >
//             &#10005;
//           </div>
//           <div className={styles.drawerLogo}>
//             Niraj <span>Rai</span>
//           </div>
//         </div>

//         <ul className={styles.drawerLinks}>
//           <li onClick={() => setDrawerOpen(false)}>Home</li>
//           <li onClick={() => setDrawerOpen(false)}>About Us</li>
//           <li onClick={() => setDrawerOpen(false)}>Portfolio</li>
//           <li onClick={() => setDrawerOpen(false)}>Services</li>
//           <li onClick={() => setDrawerOpen(false)}>Pricing</li>
//           <li
//             onClick={() => setDrawerOpen(false)}
//             className={styles.drawerContactBtn}
//           >
//             Contact Us
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }





"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./stylesHomePage/Navbar.module.css";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
    setDrawerOpen(false); // close drawer on mobile
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        Niraj <span>Rai</span>
      </div>

      {/* Desktop Nav Links */}
      <ul className={styles.navLinks}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/site/about")}>About Me</li>
        <li onClick={() => navigate("/site/skills")}>Skills</li>
        <li onClick={() => navigate("/site/projects")}>Projects</li>
        <li onClick={() => navigate("/site/experience")}>Experience</li>
      </ul>

      <button className={styles.contactBtn} onClick={() => navigate("/site/contact")}>
        Contact Us
      </button>

      {/* Mobile Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setDrawerOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.closeIcon} onClick={() => setDrawerOpen(false)}>
            &#10005;
          </div>
          <div className={styles.drawerLogo} onClick={() => navigate("/")}>
            Niraj <span>Rai</span>
          </div>
        </div>

        <ul className={styles.drawerLinks}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/site/about")}>About Me</li>
          <li onClick={() => navigate("/site/skills")}>Skills</li>
          <li onClick={() => navigate("/site/projects")}>Projects</li>
          <li onClick={() => navigate("/site/experience")}>Experience</li>
          <li
            onClick={() => navigate("/site/contact")}
            className={styles.drawerContactBtn}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
}
