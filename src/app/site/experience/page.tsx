import "./styles.css";

const experiences = [
  {
    company: "Salonist Technologies",
    role: "React Native Developer",
    duration: "Jan 2024 – Present",
    location: "Mohali, IN",
    description: [
      "Designed and developed cross-platform mobile applications using React Native.",
      "Managed the entire mobile development lifecycle, including planning, development, testing, and deployment.",
      "Successfully published and maintained applications on both the Apple App Store and Google Play Console.",
    ],
  },
  {
    company: "Infoware Solutions",
    role: "React-Native Trainee",
    duration: "April 2023 – September 2023",
    location: "Malviya Nagar, Jaipur, IN",
    description: [
      "Gained hands-on experience in building mobile applications using React Native.",
      "Trained in Android Studio, Xcode, Redux, Context API, and responsive mobile UI design.",
      "Worked in a supportive role as a Junior Developer, contributing to real-time project development under senior guidance.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <h1 className="experience-title">Experience</h1>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <h2>{exp.role}</h2>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="company">{exp.company} — {exp.location}</p>
              <ul className="experience-points">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;



// const ExperiencePage = () => {
//   return (
//     <section>
//     <div className="experience-section">
//       <div className="experience-container">
//         <h1 className="experience-title">Experience</h1>
//         <div className="experience-list">
//           {experiences.map((exp, index) => (
//             <div className="experience-card" key={index}>
//               <div className="experience-header">
//                 <h2>{exp.role}</h2>
//                 <span className="duration">{exp.duration}</span>
//               </div>
//               <h3>{exp.company}</h3>
//               <ul>
//                 {exp.description.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default ExperiencePage;
