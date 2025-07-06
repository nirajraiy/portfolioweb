"use client";

import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the TypeScript interfaces
interface AppLink {
  android?: string;
  ios?: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  appLink?: AppLink;
}

// Lived Projects
const livedProjects: Project[] = [
  {
    title: "Portfolio website",
    description:
      "A personal portfolio website showcasing developer details, contact information, alert notifications, project highlights, technical skills, and professional experience—all in a clean and responsive layout.",
    tech: ["Next js", "Typescript", "mailer", "Database", "Rest API", "Vercel"],
    image: "/projectpage.jpeg",
    appLink: {
      android: "https://portfolioweb-phi-one.vercel.app/", // Replace with actual link
    },
  },
  {
    title: "Smart Reviews – Review Management App(Offline/online app)",
    description:
      "A comprehensive review management app designed to help businesses collect, monitor, and respond to customer feedback from multiple channels. Features include custom ratings, team collaboration, detailed analytics, and automated review requests to boost online reputation and drive growth.",
    tech: [
      "React Native",
      "Context API",
      "Cli",
      "Javascript",
      "Rest Api",
      "Universal Printer",
    ],
    image: "/projectpage.jpeg",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.smartreviews&hl=en_IN", // replace with actual link
      ios: "https://apps.apple.com/us/app/shrivra-smart-reviews/id6738766927",
    },
  },
  {
    title: "Spark Resto – Restaurant Order Management App(Offline/online app)",
    description:
      "A powerful restaurant order management app designed to streamline order taking, real-time tracking, and kitchen communication. Features include table-side ordering, customizable menus, centralized dashboard, takeaway options, and comprehensive analytics to boost operational efficiency and customer satisfaction.",
    tech: [
      "React Native",
      "javaScript",
      "RestApi",
      "Context API",
      "Cli",
      "sql Lite",
      "Universal Printer",
    ],
    image: "/projectpage.jpeg",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.sparkresto&hl=en_IN", // update if needed
      ios: "https://apps.apple.com/us/app/spark-resto/id6740860532",
    },
  },
  {
    title: "After Life App",
    description:
      "An all-in-one estate planning mobile app designed to simplify the process of creating and managing Wills. Offers expert Shariah-compliant guidance, robust security, comprehensive asset management, and seamless integration—ensuring your legacy is protected and updated with ease.",
    tech: ["React Native", "TypeScript", "Redux", "REST API", "Cli"],
    image: "/projectpage.jpeg",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.stellenafterlife", // Replace with actual link
      ios: "",
    },
  },
  {
    title: "Smart Salon Check-In App",
    description:
      "A user-friendly in-salon app designed to streamline walk-in bookings and quick check-ins for pre-booked clients. Optimized for tablets and kiosks, it reduces wait times and enhances customer experience with secure, fast, and organized appointment management.",
    tech: ["React Native", "Context API", "TypeScript", "cli", "Rest API"],
    image: "/projectpage.jpeg",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.salonistcheckin&hl=en_IN", // Add link if available
      ios: "https://apps.apple.com/us/app/salonist-checkin/id6746629343", // Add link if available
    },
  },

  {
    title: "Harir Luxury Beauté Salon",
    description:
      "A cross-platform mobile application for a high-end women's salon offering a luxury beauty experience. The app features elegant service listings, booking form with email notifications, and a design that reflects the premium nature of the brand.",
    tech: ["React Native", "Javascript", "Redux", "cli", "Rest API"],
    image: "/projectpage.jpeg",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.harir&hl=en_IN",
      ios: "https://apps.apple.com/us/app/harirluxury/id6550916125",
    },
  },
  {
    title: "Keljhani Beauty Salon",
    description:
      "A mobile app designed for a full-service beauty salon, offering appointment booking, service listings, and client engagement features. The app allows users to explore grooming and wellness services, book appointments, and receive updates via push notifications.",
    tech: [
      "React Native",
      "JavaScript",
      "Redux",
      "cli",
      "Rest API",
      "Push Notifications",
    ],
    image: "/projectpage.jpeg",
    appLink: {
      android: "", // replace with actual link if different
      ios: "https://apps.apple.com/us/app/keljhani/id6738165759",
    },
  },
  {
    title: "Baylen De Louis App",
    description:
      "A complete salon mobile app offering a full range of beauty and relaxation services. Designed to provide a smooth user experience for booking appointments, browsing services like spa treatments, haircuts, bridal makeup, nail care, and more—all delivered by skilled professionals in a serene salon environment.",
    tech: [
      "React Native",
      "Javsscript",
      "Redux",
      "cli",
      "Rest API",
      "Google Login",
    ],
    image: "/projectpage.jpeg",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.baylendelouis&hl=en_IN", // Replace with actual link
      ios: "",
    },
  },
  {
    title: "Istilong Pinoy Hair Salon App",
    description:
      "A user-friendly mobile app offering a range of personalized beauty services including stylish haircuts, vibrant colors, and rejuvenating massages. Designed to provide a seamless booking experience while keeping users updated on the latest salon trends and promotions.",
    tech: [
      "React Native",
      "Javascript",
      "Redux",
      "Cli",
      "Rest API",
      "Google Login",
    ],
    image: "/projectpage.jpeg",
    appLink: {
      android:
        "https://play.google.com/store/apps/details?id=com.istilongpinoyhairsalon&hl=en_IN", // Replace with actual link if available
      ios: "", // Add when available
    },
  },
];

// Running Projects (dummy)
const runningProjects: Project[] = [
  {
    title: "Qwaiting App",
    description:
      "Qwaiting is a smart, multi-platform queue management system that streamlines customer service across mobile, iPads, self-service kiosks, and TV displays. Built with React Native, REST APIs, and Pusher, it offers real-time queue tracking, appointment scheduling, and live notifications — delivering a seamless experience for both customers and staff.",
    tech: [
      "React Native",
      "Javascript",
      "RestApi",
      "Pusher",
      "Universal Printer",
      "VideoPlayer",
    ],
    image: "/projectpage.jpeg",
  },
  {
    title: "Qwaiting Display App",
    description:
      "The Qwaiting Display App is a dedicated screen interface designed to show real-time queue status and service-related videos in customer-facing areas. Built with Kotlin and powered by Pusher for live updates, it continuously displays the current token number, service counter, and queue status. Using ExoPlayer, it also plays client-specific videos related to services, instructions, or promotions—ensuring customers stay informed and engaged while waiting.",
    tech: ["Android Development", "Kotlin", "Pusher", "XML", "ExoPlayer"],
    image: "/projectpage.jpeg",
  },
  {
    title: "Docon App",
    description: "Docon App is a comprehensive Hospital Management System designed to streamline and automate hospital operations. It integrates patient registration, appointment scheduling, electronic medical records (EMR), billing, and staff management into a unified platform. Built for efficiency and accuracy, Docon App enhances communication between patients, doctors, and administrative staff, improving overall healthcare delivery.",
    tech: [
      "React Native",
      "Javascript",
      "RestApi",
      "Redux",
      "Cli",
      "Stripe Payment Gateway"
    ],
    image: "/projectpage.jpeg",
  },
   {
    title: "SkyBurd App",
    description: "",
     tech: [
      "React Native",
      "Typescript",
      "RestApi",
      "Redux",
      "Cli",
    ],
    image: "/projectpage.jpeg",
  },
  {
    title: "Idp",
    description: "A smart and efficient Queue Management System (QMS) designed to streamline both appointment booking and walk-in customer management for businesses such as salons, clinics, wellness centers, and service providers. This system is built to enhance the user experience by minimizing wait times, reducing manual scheduling errors, and improving staff efficiency.em",
     tech: [
      "React Native",
      "Javascript",
      "RestApi",
      "Redux",
      "Cli",
      "Pusher",
      "Push Notification"
    ],
    image: "/projectpage.jpeg",
  },
  {
    title: "AppointEze App",
    description: "AppoitEze App is a powerful and easy-to-use mobile solution designed for salons, spas, beauty parlors, and wellness centers to manage their day-to-day operations effortlessly. From appointment scheduling to billing, staff coordination to inventory tracking — AppoitEze brings every essential business function into one smart app. Built with modern salon owners in mind, AppoitEze helps streamline workflows, reduce no-shows, and enhance client satisfaction — whether you're managing a single location or multiple branches.",
     tech: [
      "React Native",
      "Typescript",
      "RestApi",
      "Redux",
      "Cli",
    ],
    image: "/projectpage.jpeg",
  },
  {
    title: "Zayada App",
    description: "Zayada App is an all-in-one platform designed to help businesses manage sales processes and track project progress step by step. From lead generation to final delivery, the app gives teams complete visibility and control over every stage of the sales pipeline and project lifecycle.",
     tech: [
      "React Native",
      "Typescript",
      "RestApi",
      "Context API",
      "Cli",
    ],
    image: "/projectpage.jpeg",
  },
  {
    title: "AwebstarRoom",
    description: "AwebstarRoom is a modern meeting room management solution designed to help teams and organizations efficiently schedule, check, and visit meetings across shared workspaces. The system allows users to view real-time room availability, book meeting slots, and check the current status of any meeting room to avoid conflicts or overlaps.",
     tech: [
      "React Native",
      "Javascript",
      "RestApi",
      "Redux",
      "Cli",
      "Pusher",
      "Push Notification"
    ],
    image: "/projectpage.jpeg",
  },
  {
    title: "AwebstarVisitor App",
    description: "Awebstar Visitor is a modern and secure digital visitor management app designed to replace outdated paper logbooks. It simplifies and automates the process of registering, tracking, and managing visitors in any workplace or facility — enhancing security, professionalism, and efficiency. Whether you're managing an office, hospital, school, or government building, Awebstar Visitor ensures a seamless check-in experience for guests while giving admins full control and visibility over entry and exit data.",
     tech: [
      "React Native",
      "Javascript",
      "RestApi",
      "Redux",
      "Cli",
    ],
    image: "/projectpage.jpeg",
  },
    {
    title: "WideStar App",
    description: "WideStar App is a simple and user-friendly mobile app that allows customers to easily book appointments and reserve service slots with their favorite businesses — whether it’s a salon, clinic, fitness center, spa, or any service-based provider. With just a few taps, users can browse available time slots, choose a service, select their preferred provider, and confirm a booking — all in real time.",
     tech: [
      "React Native",
      "Javascript",
      "RestApi",
      "Redux",
      "Cli",
      "Pay Stack"
    ],
    image: "/projectpage.jpeg",
  },

  

];

const ProjectsPage: React.FC = () => {
  const renderProjects = (projects: Project[]) =>
    projects.map((project, index) => (
      <motion.div
        className="project-card"
        key={index}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          className="project-image"
          width={250}
          height={200}
          layout="responsive"
        />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tech.map((tag, i) => (
            <span className="tag" key={i}>
              {tag}
            </span>
          ))}
        </div>
        {project.appLink && (
          <div className="store-links">
            {project.appLink.android && project.title == "Portfolio website" ? (
              <a
                href={project.appLink.android}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button android"
              >
                Web App
              </a>
            ) : (
              <a
                href={project.appLink.android}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button android"
              >
                Play Store
              </a>
            )}
            {project.appLink.ios && (
              <a
                href={project.appLink.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button ios"
              >
                App Store
              </a>
            )}
          </div>
        )}
      </motion.div>
    ));

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>

        <h2 className="projects-subtitle">✅ Lived Projects</h2>
        <div className="projects-grid">{renderProjects(livedProjects)}</div>

        <h2 className="projects-subtitle">🚧 Running Projects</h2>
        <div className="projects-grid">{renderProjects(runningProjects)}</div>
      </div>
    </section>
  );
};

export default ProjectsPage;

// "use client";

// import React from "react";
// import "./styles.css";
// import { motion } from "framer-motion";
// import Image from "next/image";

// //   lived  projects

// const livedProjects  = [
//   {
//     title: "Smart Reviews – Review Management App(Offline/online app)",
//     description:
//       "A comprehensive review management app designed to help businesses collect, monitor, and respond to customer feedback from multiple channels. Features include custom ratings, team collaboration, detailed analytics, and automated review requests to boost online reputation and drive growth.",
//     tech: [
//       "React Native",
//       "Context API",
//       "Cli",
//       "Javascript",
//       "Rest Api",
//       "Universal Printer",
//     ],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android:
//         "https://play.google.com/store/apps/details?id=com.smartreviews&hl=en_IN", // replace with actual link
//       ios: "https://apps.apple.com/us/app/shrivra-smart-reviews/id6738766927",
//     },
//   },
//   {
//     title: "Spark Resto – Restaurant Order Management App(Offline/online app)",
//     description:
//       "A powerful restaurant order management app designed to streamline order taking, real-time tracking, and kitchen communication. Features include table-side ordering, customizable menus, centralized dashboard, takeaway options, and comprehensive analytics to boost operational efficiency and customer satisfaction.",
//     tech: [
//       "React Native",
//       "javaScript",
//       "RestApi",
//       "Context API",
//       "Cli",
//       "sql Lite",
//       "Universal Printer",
//     ],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android:
//         "https://play.google.com/store/apps/details?id=com.sparkresto&hl=en_IN", // update if needed
//       ios: "https://apps.apple.com/us/app/spark-resto/id6740860532",
//     },
//   },
//   {
//   title: "After Life App",
//   description:
//     "An all-in-one estate planning mobile app designed to simplify the process of creating and managing Wills. Offers expert Shariah-compliant guidance, robust security, comprehensive asset management, and seamless integration—ensuring your legacy is protected and updated with ease.",
//   tech: [
//     "React Native",
//     "TypeScript",
//     "Redux",
//     "REST API",
//     "Cli",
//   ],
//   image: "/projectpage.jpeg",
//   appLink: {
//     android:
//       "https://play.google.com/store/apps/details?id=com.stellenafterlife", // Replace with actual link
//     ios: "",
//   },
// },
//   {
//     title: "Smart Salon Check-In App",
//     description:
//       "A user-friendly in-salon app designed to streamline walk-in bookings and quick check-ins for pre-booked clients. Optimized for tablets and kiosks, it reduces wait times and enhances customer experience with secure, fast, and organized appointment management.",
//     tech: ["React Native", "Context API", "TypeScript", "cli", "Rest API"],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android:
//         "https://play.google.com/store/apps/details?id=com.salonistcheckin&hl=en_IN", // Add link if available
//       ios: "https://apps.apple.com/us/app/salonist-checkin/id6746629343", // Add link if available
//     },
//   },

//   {
//     title: "Harir Luxury Beauté Salon",
//     description:
//       "A cross-platform mobile application for a high-end women's salon offering a luxury beauty experience. The app features elegant service listings, booking form with email notifications, and a design that reflects the premium nature of the brand.",
//     tech: ["React Native", "Javascript", "Redux", "cli", "Rest API"],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android:
//         "https://play.google.com/store/apps/details?id=com.harir&hl=en_IN",
//       ios: "https://apps.apple.com/us/app/harirluxury/id6550916125",
//     },
//   },
//   {
//     title: "Keljhani Beauty Salon",
//     description:
//       "A mobile app designed for a full-service beauty salon, offering appointment booking, service listings, and client engagement features. The app allows users to explore grooming and wellness services, book appointments, and receive updates via push notifications.",
//     tech: [
//       "React Native",
//       "JavaScript",
//       "Redux",
//       "cli",
//       "Rest API",
//       "Push Notifications",
//     ],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android: "", // replace with actual link if different
//       ios: "https://apps.apple.com/us/app/keljhani/id6738165759",
//     },
//   },
//   {
//     title: "Baylen De Louis App",
//     description:
//       "A complete salon mobile app offering a full range of beauty and relaxation services. Designed to provide a smooth user experience for booking appointments, browsing services like spa treatments, haircuts, bridal makeup, nail care, and more—all delivered by skilled professionals in a serene salon environment.",
//     tech: [
//       "React Native",
//       "Javsscript",
//       "Redux",
//       "cli",
//       "Rest API",
//       "Google Login",
//     ],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android:
//         "https://play.google.com/store/apps/details?id=com.baylendelouis&hl=en_IN", // Replace with actual link
//       ios: "",
//     },
//   },
//   {
//     title: "Istilong Pinoy Hair Salon App",
//     description:
//       "A user-friendly mobile app offering a range of personalized beauty services including stylish haircuts, vibrant colors, and rejuvenating massages. Designed to provide a seamless booking experience while keeping users updated on the latest salon trends and promotions.",
//     tech: [
//       "React Native",
//       "Javascript",
//       "Redux",
//       "Cli",
//       "Rest API",
//       "Google Login",
//     ],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android:
//         "https://play.google.com/store/apps/details?id=com.istilongpinoyhairsalon&hl=en_IN", // Replace with actual link if available
//       ios: "", // Add when available
//     },
//   },
// ];

// // Dummy Running Projects
// const runningProjects = [
//   {
//     title: "Wellness 360 – Health and Fitness Companion",
//     description:
//       "A mobile app under development focused on holistic wellness, combining fitness tracking, meditation, meal planning, and daily goal setting.",
//     tech: ["React Native", "TypeScript", "Redux Toolkit", "GraphQL"],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android: "",
//       ios: "",
//     },
//   },
//   {
//     title: "EduSpark LMS – Learning Management System",
//     description:
//       "An educational platform in progress to deliver interactive courses, real-time progress tracking, and certification for learners and institutions.",
//     tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
//     image: "/projectpage.jpeg",
//     appLink: {
//       android: "",
//       ios: "",
//     },
//   },
// ];

// const ProjectsPage = () => {
//   return (
//     <section className="projects-section">
//       <div className="projects-container">
//         <h1 className="projects-title">Projects</h1>
//         <div className="projects-grid">
//           {livedProjects .map((project, index) => (
//             // <div className="project-card" key={index}>
//             <motion.div
//               className="project-card"
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 className="project-image"
//                 width={300} // or a size that matches your layout
//                 height={250} // adjust as needed
//                 layout="responsive" // or use 'intrinsic', 'fill', etc. depending on layout
//               />
//               <h2>{project.title}</h2>
//               <p>{project.description}</p>
//               <div className="tech-tags">
//                 {project.tech.map((tag, i) => (
//                   <span className="tag" key={i}>
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               {project.appLink && (
//                 <div className="store-links">
//                   {project.appLink.android && (
//                     <a
//                       href={project.appLink.android}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="store-button android"
//                     >
//                       Play Store
//                     </a>
//                   )}
//                   {project.appLink.ios && (
//                     <a
//                       href={project.appLink.ios}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="store-button ios"
//                     >
//                       App Store
//                     </a>
//                   )}
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsPage;
