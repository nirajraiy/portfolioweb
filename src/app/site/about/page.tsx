
"use client";
import styles from "./AboutSection.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left: Profile Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/nirajImage.png"
            alt="Niraj Rai"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Right: Info */}
        <div className={styles.info}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            I am a <strong>Senior Software Developer</strong> with a focus on
            building robust, scalable, and user-friendly applications. With a
            passion for cross-platform experiences and performance optimization,
            I specialize in delivering high-quality products that align with
            industry standards and user expectations.
          </p>

          <ul className={styles.skills}>
            <li>
              ✅ Expert in <strong> React Native </strong> for cross-platform app
              development
            </li>
            <li>
              ✅ Native Android development using <strong>Kotlin</strong> &{" "}
              <strong> XML UI </strong>
            </li>
            <li>
              ✅ Full-stack web applications with{" "}
              <strong> Next.js (React)</strong>
            </li>
          </ul>

          <p className={styles.note}>
            I strive to build accessible, performant, and scalable applications
            that meet modern development standards and deliver a seamless user
            experience.
          </p>

          <a
            href="/cv/NirajResume.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadCV}
          >
            📄 Download CV as PDF
          </a>
        </div>
      </div>
    </section>
  );
}
