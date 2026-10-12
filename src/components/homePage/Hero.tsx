"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaApple,
  FaGooglePlay,
  FaMobileAlt,
  FaCubes,
  FaRocket,
} from "react-icons/fa";
import styles from "./styles/Hero.module.css";
import { projects, featuredProjects, qwaitingSuite } from "@/data/projects";
import { openResume } from "@/lib/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "14", label: "Apps shipped" },
  { value: "20K+", label: "Active users" },
  { value: "99.7%", label: "Crash-free sessions" },
];

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Cross-platform apps",
    text: "React Native + TypeScript apps for iOS and Android from a single, maintainable codebase.",
  },
  {
    icon: <FaCubes />,
    title: "Native when it matters",
    text: "Kotlin and Swift modules, printer SDKs, Android TV and tvOS apps when JavaScript isn't enough.",
  },
  {
    icon: <FaRocket />,
    title: "Ship & scale",
    text: "CI/CD with Fastlane, Bitrise and EAS, store releases, crash monitoring and performance tuning.",
  },
];

const floatingIcons = ["adlyfe", "qwaiting-staff", "spark-resto", "smart-review", "addpeople"];

export default function Hero() {
  const iconApps = projects.filter((p) => p.icon);
  const latest = featuredProjects.find((p) => p.badge);
  const others = featuredProjects.filter((p) => p !== latest);
  const floaters = floatingIcons
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p?.icon));

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.glowA} aria-hidden />
        <div className={styles.glowB} aria-hidden />
        <div className={styles.grid} aria-hidden />

        <div className={styles.inner}>
          <div className={styles.left}>
            <motion.div className={styles.available} variants={fadeUp} custom={0} initial="hidden" animate="visible">
              <span className={styles.dot} />
              Open to React Native roles · Mohali / Remote
            </motion.div>

            <motion.h1 className={styles.hello} variants={fadeUp} custom={1} initial="hidden" animate="visible">
              Hi, I&apos;m Niraj Rai — React Native Developer
            </motion.h1>

            <motion.p className={styles.title} variants={fadeUp} custom={2} initial="hidden" animate="visible">
              I build mobile apps <span className={styles.accent}>people rely on</span> every day.
            </motion.p>

            <motion.p className={styles.lead} variants={fadeUp} custom={3} initial="hidden" animate="visible">
              3+ years designing, building and shipping production iOS and Android apps with React Native,
              TypeScript, Kotlin and Swift. Most recently shipped AdLyfe, a family health app, and sole owner
              of Qwaiting, Spark Resto and Smart Reviews — used by clinics, restaurants and service centres
              across 20,000+ users.
            </motion.p>

            <motion.div className={styles.ctas} variants={fadeUp} custom={4} initial="hidden" animate="visible">
              <Link href="/site/projects" className="btn-primary">
                View my apps <FaArrowRight />
              </Link>
              <button type="button" className="btn-ghost" onClick={() => openResume()}>
                <FaDownload /> Download résumé
              </button>
            </motion.div>

            <motion.div className={styles.socials} variants={fadeUp} custom={5} initial="hidden" animate="visible">
              <a href="https://github.com/nirajraiy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/nirajrai7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:nirajraibxr657@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <span className={styles.socialDivider} />
              <span className={styles.stores}>
                <FaApple /> <FaGooglePlay /> Published on both stores
              </span>
            </motion.div>
          </div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.portraitWrap}>
              <div className={styles.portraitRing} aria-hidden />
              <div className={styles.portrait}>
                <Image
                  src="/nirajImage.png"
                  alt="Niraj Rai - React Native & Mobile Application Developer"
                  fill
                  priority
                  sizes="(max-width: 900px) 70vw, 360px"
                  style={{ objectFit: "cover", objectPosition: "center 18%" }}
                />
              </div>

              {floaters.map((p, i) => (
                <motion.div
                  key={p.slug}
                  className={`${styles.floatIcon} ${styles[`float${i}`]}`}
                  animate={{ y: [0, i % 2 ? 10 : -10, 0] }}
                  transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src={p.icon!} alt={`${p.title} icon`} width={64} height={64} />
                </motion.div>
              ))}

              <motion.div
                className={styles.badgeCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <strong>14 apps live</strong>
                <span>App Store &amp; Google Play</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className={styles.marqueeSection} aria-label="Apps shipped">
        <p className={styles.marqueeLabel}>Apps I&apos;ve shipped to the App Store &amp; Google Play</p>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...iconApps, ...iconApps].map((p, i) => (
              <Link
                key={`${p.slug}-${i}`}
                href={`/site/projects#${p.slug}`}
                className={styles.marqueeItem}
                aria-hidden={i >= iconApps.length}
                tabIndex={i >= iconApps.length ? -1 : 0}
              >
                <Image src={p.icon!} alt="" width={44} height={44} />
                <span>{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <div className="section-head">
          <span className="eyebrow">What I do</span>
          <h2 className="section-title">
            From idea to <span className="accent">store release</span>
          </h2>
          <p className="section-subtitle">
            I own the whole lifecycle — architecture, UI, native integrations, CI/CD and store releases —
            so products ship faster and stay stable in production.
          </p>
        </div>
        <div className={styles.services}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.serviceIcon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <div className="section-head">
          <span className="eyebrow">Featured work</span>
          <h2 className="section-title">
            Products I&apos;ve <span className="accent">built &amp; shipped</span>
          </h2>
        </div>
        {latest?.icon && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/site/projects#${latest.slug}`} className={styles.latestCard}>
              <div className={styles.latestInfo}>
                <span className={styles.newPill}>{latest.badge}</span>
                <div className={styles.featureTop}>
                  <Image src={latest.icon} alt={`${latest.title} icon`} width={72} height={72} className={styles.featureIcon} />
                  <div>
                    <h3>{latest.title}</h3>
                    <span>{latest.category}</span>
                  </div>
                </div>
                <p>{latest.tagline}</p>
                <ul className={styles.latestHighlights}>
                  {latest.highlights?.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <span className={styles.featureLink}>
                  <FaApple /> Live on the App Store · View app <FaArrowRight />
                </span>
              </div>
              <div className={styles.latestShots}>
                {latest.screenshots?.map((src, i) => (
                  <div key={src} className={styles.latestShot}>
                    <Image src={src} alt={`${latest.title} screenshot ${i + 1}`} fill sizes="160px" style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </Link>
          </motion.div>
        )}

        <div className={styles.featured}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/site/projects#qwaiting-suite" className={`${styles.featureCard} ${styles.suiteCard}`}>
              <div className={styles.suiteIcons}>
                {qwaitingSuite.map((p) => (
                  <Image key={p.slug} src={p.icon!} alt="" width={40} height={40} className={styles.featureIcon} />
                ))}
              </div>
              <div className={styles.featureTop}>
                <div>
                  <h3>Qwaiting Suite</h3>
                  <span>{qwaitingSuite.length} dedicated apps</span>
                </div>
              </div>
              <p>Staff, kiosk, Java queue &amp; appointment and TV display apps — customised per client.</p>
              <div className={styles.featureFoot}>
                <span>
                  <FaApple />
                  <FaGooglePlay />
                </span>
                <span className={styles.featureLink}>
                  View suite <FaArrowRight />
                </span>
              </div>
            </Link>
          </motion.div>
          {others.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i + 1) * 0.08, duration: 0.5 }}
            >
              <Link href={`/site/projects#${p.slug}`} className={styles.featureCard}>
                <div className={styles.featureTop}>
                  <Image src={p.icon!} alt={`${p.title} icon`} width={60} height={60} className={styles.featureIcon} />
                  <div>
                    <h3>{p.title}</h3>
                    <span>{p.category}</span>
                  </div>
                </div>
                <p>{p.tagline}</p>
                <div className={styles.featureFoot}>
                  <span>
                    {p.appLink?.ios && <FaApple />}
                    {p.appLink?.android && <FaGooglePlay />}
                  </span>
                  <span className={styles.featureLink}>
                    View app <FaArrowRight />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.ctaInner}>
          <h2>Have an app idea or an open React Native role?</h2>
          <p>I&apos;m available for full-time roles and select freelance projects. Let&apos;s build something people love to use.</p>
          <div className={styles.ctas}>
            <Link href="/site/contact" className="btn-primary">
              Let&apos;s talk <FaArrowRight />
            </Link>
            <Link href="/site/experience" className="btn-ghost">
              See my experience
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
