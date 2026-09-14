import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "React Native Developer",
    company: "Stellen Infotech",
    duration: "Jan 2024 – Present",
    location: "Mohali, India",
    type: "Full-time",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Pusher",
      "REST APIs",
      "MVVM",
      "Clean Architecture"
    ],
    responsibilities: [
      "Sole owner of the Qwaiting suite (Staff, Customer, Display TV): architecture, development, store releases, production support, and continuous maintenance",
      "Sole owner of Spark Resto and Smart Review — built both products and remain accountable for features, releases, and day-to-day ownership on Android and iOS",
      "Shipped 6 white-label React Native apps in TypeScript (Redux Toolkit, MVVM, Clean Architecture) to 20,000+ users; cut time-to-market by ~40% via reusable modules",
      "Delivered companion web / admin surfaces in React.js, Next.js, and Vite with shared TypeScript contracts across mobile and web",
      "Owned CI/CD with Bitrise, Fastlane, GitHub Actions, and EAS Build; moved release cadence from monthly to biweekly"
    ],
    achievements: [
      "12 Production Apps Shipped",
      "20K+ Active Users",
      "99.7% Crash-Free Sessions",
      "50% JS Bundle Size Reduction",
      "35% Startup Performance Improvement"
    ],
    stats: [
      { label: "Apps", value: "12" },
      { label: "Users", value: "20K+" },
      { label: "Crash-Free", value: "99.7%" }
    ]
  },

  {
    id: 2,
    role: "React Native Developer (Trainee)",
    company: "Dev Technosys Pvt. Ltd.",
    duration: "April 2023 – September 2023",
    location: "Jaipur, India",
    type: "Training",
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "REST APIs",
      "OAuth / JWT",
      "Agile"
    ],
    responsibilities: [
      "Owned React Native feature modules spanning REST APIs, navigation, and state management through development and QA",
      "Implemented OAuth / JWT authentication, responsive UI, and offline-capable flows for more reliable sessions",
      "Delivered in Agile / Scrum with Jira, sprint planning, Git, and peer code review"
    ],
    achievements: [
      "Feature Module Ownership",
      "Authentication Implementation",
      "Agile Team Collaboration"
    ],
    stats: [{ label: "Projects", value: "3+" }]
  },

  {
    id: 3,
    role: "Associate Software Engineer (Trainee)",
    company: "HabileLabs Private Limited",
    duration: "Nov 2022 – March 2023",
    location: "Jaipur, India",
    type: "Training",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Vite",
      "Next.js",
      "Node.js",
      "REST APIs"
    ],
    responsibilities: [
      "Built web features with HTML, CSS, JavaScript, React.js, Vite, Next.js, Node.js, and REST APIs",
      "Practiced SDLC, Git version control, and technical documentation in Agile sprints"
    ],
    achievements: [
      "Full-Stack Web Development",
      "Version Control Mastery",
      "Agile Methodology"
    ],
    stats: [{ label: "Technologies", value: "8+" }]
  }
];

export default experiences;
