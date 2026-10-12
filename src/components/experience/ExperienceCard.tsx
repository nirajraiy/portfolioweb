"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Experience } from "@/types/experience";
import styles from "./ExperienceCard.module.css";

type Props = {
  data: Experience;
  index?: number;
};

export default function ExperienceCard({ data, index = 0 }: Props) {
  const isCurrent = /present/i.test(data.duration);

  return (
    <motion.article
      className={`${styles.card} ${isCurrent ? styles.currentCard : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
    >
      <span className={`${styles.node} ${isCurrent ? styles.nodeLive : ""}`} aria-hidden />

      <header className={styles.header}>
        <div>
          <div className={styles.badges}>
            {data.type && <span className={styles.type}>{data.type}</span>}
            {isCurrent && <span className={styles.current}>Current</span>}
          </div>
          <h2 className={styles.role}>{data.role}</h2>
          <div className={styles.company}>{data.company}</div>
        </div>
        <div className={styles.sideMeta}>
          <span>
            <FaCalendarAlt /> {data.duration}
          </span>
          <span>
            <FaMapMarkerAlt /> {data.location}
          </span>
        </div>
      </header>

      {data.summary && <p className={styles.summary}>{data.summary}</p>}

      <ul className={styles.list}>
        {data.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>

      {data.achievements?.length ? (
        <div className={styles.achievements}>
          {data.achievements.map((a) => (
            <span key={a} className={styles.achievement}>
              {a}
            </span>
          ))}
        </div>
      ) : null}

      <div className={styles.techWrap}>
        {data.technologies.map((t) => (
          <span key={t} className={styles.tech}>
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
