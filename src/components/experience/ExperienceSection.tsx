"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import experiences from "@/data/experienceData";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline";
import styles from "./ExperienceSection.module.css";
import { openResume } from "@/lib/resume";

export default function ExperienceSection() {
  return (
    <section className="page-shell" aria-labelledby="experience-heading">
      <div className="page-inner">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Experience</span>
          <h1 id="experience-heading" className="section-title">
            3+ years of <span className="accent">shipping to production</span>
          </h1>
          <p className="section-subtitle">
            From trainee to sole owner of multiple live products — here&apos;s where I&apos;ve worked and
            what I delivered.
          </p>
          <div className={styles.actions}>
            <button type="button" className="btn-primary" onClick={() => openResume()}>
              <FaDownload /> Download résumé
            </button>
          </div>
        </motion.header>

        <ExperienceTimeline>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} data={exp} index={i} />
          ))}
        </ExperienceTimeline>
      </div>
    </section>
  );
}
