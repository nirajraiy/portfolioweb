import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "React Native Developer",
    company: "Stellen Infotech",
    duration: "Jan 2024 – Present",
    location: "Mohali, India",
    type: "Full-time",
    summary:
      "Own multiple production products end to end — architecture, development, store releases and production support across Android, iOS and web.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Kotlin",
      "Swift",
      "Firebase",
      "Pusher",
      "Next.js",
      "Fastlane",
      "Bitrise",
    ],
    responsibilities: [
      "Sole owner of the Qwaiting suite (Staff, Customer, Display TV) — architecture, development, App Store / Google Play releases and production support; real-time token updates cut average wait time by 35%.",
      "Built Spark Resto (offline-first restaurant POS) and Smart Reviews (NPS kiosk) from scratch; optimised feedback flows lifted review completion by 25%.",
      "Shipped 6 white-label React Native apps in TypeScript (Redux Toolkit, MVVM, Clean Architecture) to 20,000+ users, cutting time-to-market by ~40% with reusable modules and a shared UI library.",
      "Reduced JS bundle size by 50% and improved startup time by 35% through Hermes, Metro tuning and native modules in Kotlin and Swift.",
      "Owned CI/CD with Bitrise, Fastlane, GitHub Actions and EAS Build, moving releases from monthly to biweekly while sustaining 99.7% crash-free sessions.",
      "Delivered companion web and admin dashboards in React.js, Next.js and Vite with shared TypeScript API contracts.",
    ],
    achievements: ["14 apps shipped", "20K+ active users", "99.7% crash-free", "−50% bundle size", "+35% faster startup"],
    stats: [
      { label: "Apps", value: "14" },
      { label: "Users", value: "20K+" },
      { label: "Crash-free", value: "99.7%" },
    ],
  },
  {
    id: 2,
    role: "React Native Developer (Trainee)",
    company: "Dev Technosys Pvt. Ltd.",
    duration: "Apr 2023 – Sep 2023",
    location: "Jaipur, India",
    type: "Trainee",
    summary: "Built feature modules for client React Native apps inside an Agile delivery team.",
    technologies: ["React Native", "JavaScript", "Redux", "REST APIs", "OAuth / JWT", "Jira"],
    responsibilities: [
      "Owned React Native feature modules spanning REST API integration, navigation flows and state management through development and QA.",
      "Implemented OAuth / JWT authentication, responsive layouts and offline-capable flows for reliable sessions on poor networks.",
      "Delivered in Agile / Scrum with Jira, sprint planning, Git workflows and peer code reviews.",
    ],
    achievements: ["Feature-module ownership", "Auth & offline flows"],
  },
  {
    id: 3,
    role: "Associate Software Engineer (Trainee)",
    company: "HabileLabs Private Limited",
    duration: "Nov 2022 – Mar 2023",
    location: "Jaipur, India",
    type: "Trainee",
    summary: "Started my engineering career building full-stack web features.",
    technologies: ["React.js", "Next.js", "Vite", "Node.js", "JavaScript", "HTML5", "CSS3"],
    responsibilities: [
      "Built web features with React.js, Next.js, Vite, Node.js and REST APIs on full-stack client projects.",
      "Practised SDLC, Git version control, technical documentation and Agile sprints in cross-functional teams.",
    ],
    achievements: ["Full-stack foundations"],
  },
];

export default experiences;
