"use client";

import Image from "next/image";
import styles from "./styles/Hero.module.css";
import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaDownload,
  FaCode,
  FaMobile,
  FaRocket,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Hero() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: true });

  // Prevent Hero from fading out on scroll (opacity stays 1)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, 1]); // stays visible

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(percentage);
    }
  };

  return (
    <motion.section
      ref={heroRef}
      className={styles.hero}
      style={{ y, opacity }}
    >
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingShape1}
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className={styles.floatingShape2}
          animate={{
            rotate: -360,
            y: [0, 20, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className={styles.floatingShape3}
          animate={{
            rotate: 360,
            x: [0, 30, 0],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      <motion.div
        className={styles.left}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <FaCode className={styles.icon} />
          <span>Senior React Native Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting Digital <br />
          <span className={styles.gradientText}>Excellence</span> <br />
          Through Mobile & <br />
          Web Innovation
        </motion.h1>

        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p>
            I architect and develop enterprise-grade mobile applications using React Native,
            TypeScript, and modern development practices. With 2.5+ years of experience,
            I&apos;ve delivered 10+ production apps serving 50K+ users with 99.7% crash-free performance.
          </p>
        </motion.div>

        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
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

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.button
            className={styles.primaryBtn}
            onClick={() => {
              const win = window.open("/cv/NirajResume.html", "_blank");
              setTimeout(() => {
                win?.print();
              }, 200);
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 165, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            <span>Download Resume</span>
          </motion.button>

          <motion.button
            className={styles.secondaryBtn}
            onClick={toggleAudio}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 165, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span>Listen to Introduction</span>
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.audioProgress}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className={styles.progressContainer}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>

        <audio
          ref={audioRef}
          src="/selfIntro.m4a"
          onTimeUpdate={handleTimeUpdate}
        />

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            className={styles.statCard}
            onClick={() => router.push("/site/experience")}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.statIcon}>
              <FaRocket />
            </div>
            <div className={styles.statContent}>
              <strong>2.5+</strong>
              <span>Years Experience</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.statCard}
            onClick={() => router.push("/site/projects?section=completed")}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.statIcon}>
              <FaCode />
            </div>
            <div className={styles.statContent}>
              <strong>10+</strong>
              <span>Apps Delivered</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.statCard}
            onClick={() => router.push("/site/projects?section=running")}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.statIcon}>
              <FaMobile />
            </div>
            <div className={styles.statContent}>
              <strong>20K+</strong>
              <span>Active Users</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.div
          className={styles.imageContainer}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className={styles.imageFrame}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* <Image
                src="/nirajImage.png"
                alt="Niraj Rai"
                width={300}
                height={400}
                style={{ objectFit: "cover" }}
                priority
              /> */}
              <Image
  src="/nirajImage.png"
  alt="Niraj Rai"
  width={220}
  height={220}
  style={{ objectFit: "cover" }}
  priority
/>
            </motion.div>
          </div>

          <motion.div
            className={styles.floatingElements}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className={styles.orbit}></div>
            <div className={styles.orbit}></div>
            <div className={styles.orbit}></div>
          </motion.div>

          <motion.div
            className={styles.techStack}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className={styles.techItem}>React Native</div>
            <div className={styles.techItem}>TypeScript</div>
            <div className={styles.techItem}>Firebase</div>
            <div className={styles.techItem}>Redux</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}



// "use client";

// import Image from "next/image";
// import styles from "./styles/Hero.module.css";
// import { useState, useRef, useEffect } from "react";
// import { FaPlay, FaPause, FaDownload, FaCode, FaMobile, FaRocket, FaGithub, FaLinkedin } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";

// export default function Hero() {
//   const router = useRouter();
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const heroRef = useRef<HTMLElement>(null);
//   const isInView = useInView(heroRef, { once: true });

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         const x = (e.clientX - rect.left - rect.width / 2) / 20;
//         const y = (e.clientY - rect.top - rect.height / 2) / 20;
//         setMousePosition({ x, y });
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const toggleAudio = () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     const audio = audioRef.current;
//     if (audio && audio.duration) {
//       const percentage = (audio.currentTime / audio.duration) * 100;
//       setProgress(percentage);
//     }
//   };

//   return (
//     <motion.section 
//       ref={heroRef}
//       className={styles.hero}
//       style={{ y, opacity }}
//     >
//       {/* Animated Background Elements */}
//       <div className={styles.backgroundElements}>
//         <motion.div 
//           className={styles.floatingShape1}
//           animate={{ 
//             rotate: 360,
//             y: [0, -20, 0],
//           }}
//           transition={{ 
//             rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//             y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
//           }}
//         />
//         <motion.div 
//           className={styles.floatingShape2}
//           animate={{ 
//             rotate: -360,
//             y: [0, 20, 0],
//           }}
//           transition={{ 
//             rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//             y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
//           }}
//         />
//         <motion.div 
//           className={styles.floatingShape3}
//           animate={{ 
//             rotate: 360,
//             x: [0, 30, 0],
//           }}
//           transition={{ 
//             rotate: { duration: 30, repeat: Infinity, ease: "linear" },
//             x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
//           }}
//         />
//       </div>

//       <motion.div 
//         className={styles.left}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <motion.div 
//           className={styles.badge}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           <FaCode className={styles.icon} />
//           <span>Senior React Native Developer</span>
//         </motion.div>

//         <motion.h1 
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           Crafting Digital <br />
//           <span className={styles.gradientText}>Excellence</span> <br />
//           Through Mobile & <br />
//           Web Innovation
//         </motion.h1>

//         <motion.div 
//           className={styles.description}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           <p>
//             I architect and develop enterprise-grade mobile applications using React Native, 
//             TypeScript, and modern development practices. With 2.5+ years of experience, 
//             I've delivered 10+ production apps serving 50K+ users with 99.7% crash-free performance.
//           </p>
//         </motion.div>

//         <motion.div 
//           className={styles.socialLinks}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//         >
//           <motion.a 
//             href="https://github.com/nirajraiy" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.1, rotate: 5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaGithub />
//           </motion.a>
//           <motion.a 
//             href="https://www.linkedin.com/in/niraj-rai-03a5b4181/" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.1, rotate: -5 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaLinkedin />
//           </motion.a>
//         </motion.div>

//         <motion.div 
//           className={styles.buttons}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ delay: 1.0, duration: 0.6 }}
//         >
//           <motion.button
//             className={styles.primaryBtn}
//             onClick={() => {
//               const win = window.open("/cv/NirajResume.html", "_blank");
//               setTimeout(() => {
//                 win?.print();
//               }, 200);
//             }}
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 10px 30px rgba(255, 165, 0, 0.4)"
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaDownload />
//             <span>Download Resume</span>
//           </motion.button>
          
//           <motion.button 
//             className={styles.secondaryBtn}
//             onClick={toggleAudio}
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: "0 10px 30px rgba(255, 165, 0, 0.4)"
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {isPlaying ? <FaPause /> : <FaPlay />}
//             <span>Listen to Introduction</span>
//           </motion.button>
//         </motion.div>

//         <motion.div 
//           className={styles.audioProgress}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//         >
//           <div className={styles.progressContainer}>
//             <div
//               className={styles.progressBar}
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </motion.div>

//         <audio
//           ref={audioRef}
//           src="/selfIntro.m4a"
//           onTimeUpdate={handleTimeUpdate}
//         />

//         <motion.div 
//           className={styles.stats}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ delay: 1.4, duration: 0.6 }}
//         >
//           <motion.div 
//             className={styles.statCard}
//             onClick={() => router.push("/site/experience")}
//             whileHover={{ scale: 1.05, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className={styles.statIcon}>
//               <FaRocket />
//             </div>
//             <div className={styles.statContent}>
//               <strong>2.5+</strong>
//               <span>Years Experience</span>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             className={styles.statCard}
//             onClick={() => router.push("/site/projects?section=completed")}
//             whileHover={{ scale: 1.05, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className={styles.statIcon}>
//               <FaCode />
//             </div>
//             <div className={styles.statContent}>
//               <strong>10+</strong>
//               <span>Apps Delivered</span>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             className={styles.statCard}
//             onClick={() => router.push("/site/projects?section=running")}
//             whileHover={{ scale: 1.05, y: -5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className={styles.statIcon}>
//               <FaMobile />
//             </div>
//             <div className={styles.statContent}>
//               <strong>50K+</strong>
//               <span>Active Users</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       <motion.div 
//         className={styles.right}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ delay: 0.8, duration: 0.8 }}
//       >
//         <motion.div 
//           className={styles.imageContainer}
//           style={{
//             transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
//           }}
//         >
//           <div className={styles.imageFrame}>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Image
//                 src="/nirajImage.png"
//                 alt="Niraj Rai"
//                 width={300}
//                 height={400}
//                 style={{ objectFit: "cover" }}
//                 priority
//               />
//             </motion.div>
//           </div>
          
//           <motion.div 
//             className={styles.floatingElements}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           >
//             <div className={styles.orbit}></div>
//             <div className={styles.orbit}></div>
//             <div className={styles.orbit}></div>
//           </motion.div>
          
//           <motion.div 
//             className={styles.techStack}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
//             transition={{ delay: 1.5, duration: 0.5 }}
//           >
//             <div className={styles.techItem}>React Native</div>
//             <div className={styles.techItem}>TypeScript</div>
//             <div className={styles.techItem}>Firebase</div>
//             <div className={styles.techItem}>Redux</div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// }