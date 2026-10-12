"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaTools,
  FaUsers,
  FaReact,
  FaVial,
  FaServer,
  FaSitemap,
  FaPlug,
} from "react-icons/fa";
import "./styles.css";

const coreStack = [
  { name: "React Native", note: "Primary · 3+ yrs" },
  { name: "TypeScript", note: "Daily driver" },
  { name: "Redux Toolkit", note: "State & data" },
  { name: "Kotlin", note: "Android native" },
  { name: "Swift", note: "iOS / tvOS native" },
  { name: "Next.js", note: "Web & admin" },
];

const skillCategories = [
  {
    icon: <FaCode />,
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Kotlin", "Swift", "Java", "HTML5", "CSS3"],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile",
    skills: ["React Native", "Android", "iOS", "Android TV / tvOS", "React Navigation", "Reanimated", "Gesture Handler", "Hermes", "Native Modules"],
  },
  {
    icon: <FaReact />,
    title: "Web",
    skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "Responsive UI"],
  },
  {
    icon: <FaServer />,
    title: "State management",
    skills: ["Redux Toolkit", "RTK Query", "React Query", "Zustand", "Context API"],
  },
  {
    icon: <FaDatabase />,
    title: "Data & storage",
    skills: ["SQLite", "Realm", "AsyncStorage", "Secure Storage", "Offline-first sync", "Firebase"],
  },
  {
    icon: <FaPlug />,
    title: "APIs & integrations",
    skills: ["REST APIs", "OAuth 2.0", "JWT", "Pusher", "WebSocket", "Firebase FCM", "Google Maps", "Deep Linking", "Razorpay", "In-app purchases", "Thermal printer SDKs"],
  },
  {
    icon: <FaSitemap />,
    title: "Architecture",
    skills: ["MVVM", "Clean Architecture", "SOLID", "TurboModules", "Fabric", "White-label apps"],
  },
  {
    icon: <FaTools />,
    title: "CI/CD & release",
    skills: ["Fastlane", "Bitrise", "GitHub Actions", "EAS Build", "App Store Connect", "Google Play Console"],
  },
  {
    icon: <FaVial />,
    title: "Testing & quality",
    skills: ["Jest", "Detox (E2E)", "Unit & integration tests", "Crashlytics", "Performance profiling"],
  },
  {
    icon: <FaUsers />,
    title: "Ways of working",
    skills: ["Agile / Scrum", "Jira", "Git", "Code review", "Technical documentation", "Product ownership"],
  },
];

const impact = [
  { value: "50%", label: "Smaller JS bundle via Hermes & Metro tuning" },
  { value: "35%", label: "Faster app startup" },
  { value: "2×", label: "Release cadence — monthly to biweekly" },
  { value: "99.7%", label: "Crash-free sessions in production" },
];

export default function SkillsClient() {
  return (
    <section className="page-shell skills-page">
      <div className="page-inner">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Skills</span>
          <h1 className="section-title">
            The toolkit behind <span className="accent">14 production apps</span>
          </h1>
          <p className="section-subtitle">
            A mobile-first stack, battle-tested across iOS, Android, Android TV, tvOS and the web.
          </p>
        </motion.header>

        <motion.div
          className="core-stack"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {coreStack.map((s) => (
            <div key={s.name} className="core-item">
              <strong>{s.name}</strong>
              <span>{s.note}</span>
            </div>
          ))}
        </motion.div>

        <div className="skill-grid">
          {skillCategories.map((c, i) => (
            <motion.div
              key={c.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
            >
              <div className="skill-card-head">
                <span className="skill-icon">{c.icon}</span>
                <h2>{c.title}</h2>
              </div>
              <ul className="skill-chips">
                {c.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="impact">
          <h2>Skills, measured in results</h2>
          <div className="impact-grid">
            {impact.map((m) => (
              <div key={m.label} className="impact-item">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
