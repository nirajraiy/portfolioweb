"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaDownload,
  FaArrowRight,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaLayerGroup,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaCodeBranch,
} from "react-icons/fa";
import styles from "./AboutSection.module.css";
import { openResume } from "@/lib/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const facts = [
  { icon: <FaBriefcase />, label: "Current role", value: "React Native Developer, Stellen Infotech" },
  { icon: <FaMapMarkerAlt />, label: "Based in", value: "Mohali, Punjab · Open to relocation" },
  { icon: <FaGraduationCap />, label: "Education", value: "B.Tech Computer Science, 2023" },
];

const principles = [
  {
    icon: <FaLayerGroup />,
    title: "Architecture first",
    text: "MVVM, Clean Architecture and shared TypeScript contracts keep codebases easy to grow — six white-label apps share one core.",
  },
  {
    icon: <FaBolt />,
    title: "Performance obsessed",
    text: "Hermes, Metro tuning and native modules cut JS bundle size by 50% and app startup time by 35%.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Built for production",
    text: "Offline-first data, crash monitoring and automated testing keep apps at 99.7% crash-free sessions.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Ship continuously",
    text: "CI/CD with Bitrise, Fastlane, GitHub Actions and EAS moved releases from monthly to every two weeks.",
  },
  {
    icon: <FaUsers />,
    title: "Ownership mindset",
    text: "Sole owner of Qwaiting, Spark Resto and Smart Reviews — from first commit to store release and support.",
  },
];

const journey = [
  { year: "2024 – Now", title: "React Native Developer", org: "Stellen Infotech" },
  { year: "2023", title: "React Native Developer (Trainee)", org: "Dev Technosys" },
  { year: "2022 – 23", title: "Associate Software Engineer (Trainee)", org: "HabileLabs" },
  { year: "2019 – 23", title: "B.Tech, Computer Science", org: "Arya College of Engineering" },
];

export default function AboutClient() {
  return (
    <section className={`page-shell ${styles.about}`}>
      <div className="page-inner">
        <div className={styles.hero}>
          <motion.div className={styles.photoCol} variants={fadeUp} initial="hidden" animate="visible">
            <div className={styles.photo}>
              <Image
                src="/nirajImage.png"
                alt="Niraj Rai - React Native & Mobile Application Developer"
                fill
                priority
                sizes="(max-width: 900px) 80vw, 380px"
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
              />
            </div>
            <div className={styles.facts}>
              {facts.map((f) => (
                <div key={f.label} className={styles.fact}>
                  <span className={styles.factIcon}>{f.icon}</span>
                  <div>
                    <small>{f.label}</small>
                    <p>{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.story}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
          >
            <span className="eyebrow">About me</span>
            <h1 className="section-title">
              I turn ideas into <span className="accent">apps people use</span> every day.
            </h1>
            <p className={styles.lead}>
              I&apos;m Niraj Rai, a React Native developer with 3+ years of experience building and shipping
              production Android, iOS and web products. I&apos;ve delivered 14 apps that now serve 20,000+
              active users — queue systems in service centres, POS terminals in restaurants, feedback kiosks
              and healthcare tools.
            </p>
            <p>
              I enjoy the whole journey: shaping the architecture, crafting smooth UI with Reanimated, writing
              Kotlin and Swift when a native module is needed, wiring real-time updates with Pusher and Firebase,
              and owning CI/CD all the way to the App Store and Google Play. Alongside mobile, I build
              companion dashboards in React, Next.js and Vite.
            </p>
            <p>
              Outside of shipping features, I sharpen problem-solving with data structures and algorithms —
              1,000+ problems solved on LeetCode and GeeksforGeeks.
            </p>

            <div className={styles.ctas}>
              <button type="button" className="btn-primary" onClick={() => openResume()}>
                <FaDownload /> Download résumé
              </button>
              <Link href="/site/contact" className="btn-ghost">
                Get in touch <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className={styles.section}>
          <div className="section-head">
            <span className="eyebrow">How I work</span>
            <h2 className="section-title">
              Principles behind <span className="accent">every release</span>
            </h2>
          </div>
          <div className={styles.principles}>
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                className={styles.principle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className={styles.principleIcon}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className="section-head">
            <span className="eyebrow">Journey</span>
            <h2 className="section-title">
              How I <span className="accent">got here</span>
            </h2>
          </div>
          <ol className={styles.journey}>
            {journey.map((j, i) => (
              <motion.li
                key={j.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
              >
                <span className={styles.year}>{j.year}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.org}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
