"use client";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  FaApple,
  FaGooglePlay,
  FaCheckCircle,
  FaTools,
  FaMobileAlt,
  FaStar,
  FaTicketAlt,
  FaUserTie,
  FaTv,
  FaSlidersH,
} from "react-icons/fa";
import { projects, qwaitingSuite } from "@/data/projects";
import { Project } from "@/types/project";
import type { StoreDataMap, StoreInfo } from "@/lib/storeData";
import "./styles.css";

type Filter = "all" | "live" | "development";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All apps" },
  { id: "live", label: "Live on stores" },
  { id: "development", label: "In development" },
];

const monthYear = new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric", timeZone: "UTC" });

function StoreMeta({ info, project }: { info?: StoreInfo; project: Project }) {
  if (!info) return null;
  return (
    <div className="store-meta" aria-label="Live App Store details">
      {info.ratingCount > 0 && (
        <span className="store-rating">
          <FaStar /> {info.rating.toFixed(1)} <small>({info.ratingCount})</small>
        </span>
      )}
      <span>v{info.version}</span>
      <span>Updated {monthYear.format(new Date(info.updatedAt))}</span>
      <span>
        {project.tech.includes("tvOS") ? "tvOS" : "iOS"} {info.minimumOs}+
      </span>
    </div>
  );
}

function StoreButtons({ project }: { project: Project }) {
  if (!project.appLink) return null;
  return (
    <div className="store-row">
      {project.appLink.ios && (
        <a
          href={project.appLink.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="store-btn"
          aria-label={`${project.title} on the App Store`}
        >
          <FaApple className="store-btn-icon" />
          <span>
            <small>Download on the</small>
            App Store
          </span>
        </a>
      )}
      {project.appLink.android && (
        <a
          href={project.appLink.android}
          target="_blank"
          rel="noopener noreferrer"
          className="store-btn"
          aria-label={`${project.title} on Google Play`}
        >
          <FaGooglePlay className="store-btn-icon" />
          <span>
            <small>Get it on</small>
            Google Play
          </span>
        </a>
      )}
    </div>
  );
}

function AppIcon({ project, size }: { project: Project; size: number }) {
  if (project.icon) {
    return (
      <Image
        src={project.icon}
        alt={`${project.title} app icon`}
        width={size}
        height={size}
        className="app-icon"
        style={{ width: size, height: size }}
      />
    );
  }
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="app-icon app-icon-fallback" style={{ width: size, height: size }} aria-hidden>
      {initials}
    </div>
  );
}

function Screenshots({ project }: { project: Project }) {
  if (!project.screenshots?.length) {
    return (
      <div className="shots shots-empty">
        <FaMobileAlt />
        <span>Screens coming soon</span>
      </div>
    );
  }
  const landscape = project.orientation === "landscape";
  return (
    <div className={`shots ${landscape ? "shots-landscape" : "shots-portrait"}`}>
      {project.screenshots.map((src, i) => (
        <div className="shot" key={src}>
          <Image
            src={src}
            alt={`${project.title} screenshot ${i + 1}`}
            fill
            sizes={landscape ? "(max-width: 768px) 80vw, 360px" : "(max-width: 768px) 40vw, 180px"}
            className="shot-img"
          />
        </div>
      ))}
    </div>
  );
}

function FeaturedCard({ project, index, info }: { project: Project; index: number; info?: StoreInfo }) {
  return (
    <motion.article
      className={`spotlight ${index % 2 ? "spotlight-reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="spotlight-info">
        <div className="app-head">
          <AppIcon project={project} size={72} />
          <div>
            <div className="app-meta">
              {project.badge && <span className="pill-new">{project.badge}</span>}
              <span>{info?.genre ?? project.category}</span>
              {project.role && <span className="pill-owner">{project.role}</span>}
            </div>
            <h3 className="app-title">{project.title}</h3>
          </div>
        </div>
        <p className="app-tagline">{project.tagline}</p>
        <StoreMeta info={info} project={project} />
        <p className="app-desc">{project.description}</p>

        {project.highlights && (
          <ul className="highlights">
            {project.highlights.map((h) => (
              <li key={h}>
                <FaCheckCircle />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="chips">
          {project.tech.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <StoreButtons project={project} />
      </div>

      <div className="spotlight-media">
        <Screenshots project={project} />
      </div>
    </motion.article>
  );
}

function AppCard({ project, info }: { project: Project; info?: StoreInfo }) {
  const landscape = project.orientation === "landscape";
  const covers = project.screenshots?.slice(0, landscape ? 1 : 3) ?? [];
  return (
    <motion.article
      layout
      id={project.slug}
      className="app-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35 }}
    >
      <div className={`card-cover ${landscape ? "cover-landscape" : "cover-portrait"}`}>
        {covers.length ? (
          covers.map((src, i) => (
            <div className="cover-frame" key={src}>
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                sizes={landscape ? "(max-width: 768px) 100vw, 380px" : "130px"}
                className="cover-img"
              />
            </div>
          ))
        ) : (
          <div className="cover-empty">
            <FaTools />
            <span>In active development</span>
          </div>
        )}
        <span className={`status ${project.status}`}>
          {project.status === "live" ? "Live" : "Building"}
        </span>
      </div>

      <div className="card-body">
        <div className="app-head small">
          <AppIcon project={project} size={52} />
          <div>
            <div className="app-meta">
              {project.badge && <span className="pill-new">{project.badge}</span>}
              <span>{info?.genre ?? project.category}</span>
              {project.role && <span className="pill-owner">{project.role}</span>}
            </div>
            <h3 className="app-title">{project.title}</h3>
          </div>
        </div>
        <StoreMeta info={info} project={project} />
        <p className="card-desc">{project.description}</p>
        <div className="chips">
          {project.tech.slice(0, 4).map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <StoreButtons project={project} />
      </div>
    </motion.article>
  );
}

const suiteFlow = [
  { icon: <FaTicketAlt />, title: "Customer takes a token", text: "Kiosk apps book a queue or appointment and print a ticket through multiple thermal-printer SDKs." },
  { icon: <FaUserTie />, title: "Staff call & serve", text: "Agents call the next token, mark attended and handle no-shows or appointments." },
  { icon: <FaTv />, title: "Displays update live", text: "Android TV and Apple TV boards show now-serving and missed tokens via Pusher." },
];

const clientCustomisations = [
  "Client branding — logos, colours and ticket layouts",
  "Per-client counters, services and queue rules",
  "Printer SDKs and kiosk hardware per site (Java & React Native)",
  "Feature modules enhanced to each client's workflow",
];

function QwaitingSuite({ store }: { store: StoreDataMap }) {
  return (
    <section className="suite" id="qwaiting-suite" aria-labelledby="suite-title">
      <div className="suite-head">
        <div>
          <div className="app-meta">
            <span>Product suite</span>
            <span className="pill-owner">Built, modified &amp; maintained</span>
          </div>
          <h2 id="suite-title" className="suite-title">
            Qwaiting — {qwaitingSuite.length} dedicated apps, one queue system
          </h2>
          <p className="suite-lead">
            A complete queue-management platform for service centres. Instead of one app doing everything,
            each user gets a dedicated app — staff, customer kiosks, the native Java queue &amp; appointment app
            and in-venue TV displays — all synced in real time. Each client deployment is customised and
            enhanced for their branding, printer hardware and workflow.
          </p>
        </div>
        <div className="suite-stats">
          <div><strong>20K+</strong><span>Users across suite</span></div>
          <div><strong>35%</strong><span>Lower wait time</span></div>
          <div><strong>{qwaitingSuite.length}</strong><span>Dedicated apps</span></div>
        </div>
      </div>

      <div className="suite-apps">
        {qwaitingSuite.map((p, i) => {
          const info = store[p.slug];
          return (
            <motion.article
              key={p.slug}
              id={p.slug}
              className="suite-app"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div className={`suite-shot ${p.orientation === "landscape" ? "landscape" : "portrait"}`}>
                {p.screenshots?.[0] && (
                  <Image
                    src={p.screenshots[0]}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="cover-img"
                  />
                )}
                {p.role && p.role !== "Sole owner" && <span className="suite-role">{p.role}</span>}
              </div>
              <div className="suite-app-body">
                <span className="suite-audience">{p.audience}</span>
                <div className="app-head small">
                  <AppIcon project={p} size={44} />
                  <h3 className="app-title">{p.title.replace(/^Qwaiting\s*[–-]?\s*/, "")}</h3>
                </div>
                <StoreMeta info={info} project={p} />
                <p className="card-desc">{p.tagline}</p>
                <div className="chips">
                  {p.tech.slice(0, 3).map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
                <StoreButtons project={p} />
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="suite-bottom">
        <div className="suite-flow">
          <h3>How the apps work together</h3>
          <ol>
            {suiteFlow.map((f, i) => (
              <li key={f.title}>
                <span className="flow-icon">{f.icon}</span>
                <div>
                  <strong>{i + 1}. {f.title}</strong>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="suite-custom">
          <h3><FaSlidersH /> Customised &amp; enhanced per client</h3>
          <ul>
            {clientCustomisations.map((c) => (
              <li key={c}><FaCheckCircle />{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectsPageContent({ store }: { store: StoreDataMap }) {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const section = searchParams.get("section");
    if (section === "running") setFilter("development");
    if (section === "completed") setFilter("live");
    if (section) {
      document.getElementById("all-apps")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  const featured = projects.filter((p) => p.featured);
  const liveCount = projects.filter((p) => p.status === "live").length;
  const devCount = projects.length - liveCount;
  const iconWall = projects.filter((p) => p.icon);

  const visible = useMemo(
    () => projects.filter((p) => !p.featured && !p.suite && (filter === "all" || p.status === filter)),
    [filter]
  );

  return (
    <section className="page-shell projects-page">
      <div className="page-inner">
        <motion.header
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Portfolio</span>
          <h1 className="section-title">
            Apps I&apos;ve built &amp; <span className="accent">shipped to the stores</span>
          </h1>
          <p className="section-subtitle">
            Production React Native, Kotlin and Swift apps used every day by restaurants, clinics,
            salons and service centres — designed, built, released and maintained end to end.
          </p>
        </motion.header>

        <motion.div
          className="icon-wall"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {iconWall.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="icon-wall-item" title={p.title}>
              <Image src={p.icon!} alt={p.title} width={56} height={56} />
            </a>
          ))}
        </motion.div>

        <div className="stat-strip">
          <div>
            <strong>{liveCount}</strong>
            <span>Live store listings</span>
          </div>
          <div>
            <strong>20K+</strong>
            <span>Active users</span>
          </div>
          <div>
            <strong>99.7%</strong>
            <span>Crash-free sessions</span>
          </div>
          <div>
            <strong>{devCount}</strong>
            <span>In development</span>
          </div>
        </div>

        <div className="block-head">
          <h2>Flagship products</h2>
          <p>Highlighted products, newest first — from architecture to App Store release.</p>
        </div>
        <div className="spotlight-list">
          {featured.map((p, i) => (
            <div id={p.slug} key={p.slug}>
              <FeaturedCard project={p} index={i} info={store[p.slug]} />
            </div>
          ))}
        </div>

        <div className="block-head">
          <h2>Qwaiting product suite</h2>
          <p>Multiple dedicated apps I built and maintain for one queue-management platform.</p>
        </div>
        <QwaitingSuite store={store} />

        <div className="block-head" id="all-apps">
          <h2>More apps</h2>
          <div className="filter-tabs" role="tablist" aria-label="Filter apps">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={`filter-tab ${filter === f.id ? "active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="app-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <AppCard key={p.slug} project={p} info={store[p.slug]} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProjectsClient({ store = {} }: { store?: StoreDataMap }) {
  return (
    <Suspense fallback={<div className="page-shell" />}>
      <ProjectsPageContent store={store} />
    </Suspense>
  );
}
