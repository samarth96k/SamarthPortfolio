// import React, { useState } from "react";
// import ProjectCard from "./ProjectCard";
// import "./Projects.css";
// import projects from "./projectsdata";

// function Projects() {
//   const [filter, setFilter] = useState("All");

//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter((p) => p.categories.includes(filter));

//   return (
//     <div className="projects-container glass-section">
//       <div className="projectContainerTitle" style={{fontFamily:"Aquire-bold",fontSize:"50px"}}>
//         My Projects Archive
//       </div>

//       <div className="filters glass-filters inknut-antiqua-light" style={{fontSize:"12px"}}>
//         {["All", "React", "JavaScript", "Frontend", "Machine Learning", "Full Stack"].map(
//           (tag) => (
//             <button
//               key={tag}
//               className={filter === tag ? "active" : ""}
//               onClick={() => setFilter(tag)}
//             >
//               {tag}
//             </button>
//           )
//         )}
//       </div>

//       <p className="libertinus-serif-regular-italic hint-text">
//         (Tap on the cards for more information)
//       </p>

//       <div className="project-grid">
//         {filteredProjects.map((p, idx) => (
//           <ProjectCard
//             key={idx}
//             title={p.title}
//             image={p.image}
//             github={p.github}
//             live={p.live}
//             tech={p.tech}
//             desc={p.desc}
//             date={p.date}
//             categories={p.categories}
//             status={p.status}
//             learned={p.learned}
//             role={p.role}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import projects from "./projectsdata";

function Projects() {
  const [filter, setFilter] = useState("All");
  const itemsRef = useRef([]);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // fade in once
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]); // re-run if filtered projects change

  return (
    <div className="projects-container glass-section">
      <div
        className="projectContainerTitle"
        style={{ fontFamily: "Aquire-bold", fontSize: "50px" }}
      >
        My Projects Archive
      </div>

      <div
        className="filters glass-filters inknut-antiqua-light"
        style={{ fontSize: "12px" }}
      >
        {["All", "React", "JavaScript", "Frontend", "Machine Learning", "Full Stack"].map(
          (tag) => (
            <button
              key={tag}
              className={filter === tag ? "active" : ""}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          )
        )}
      </div>

      <p className="libertinus-serif-regular-italic hint-text">
        (Tap on the cards for more information)
      </p>

      <div className="project-grid">
        {filteredProjects.map((p, idx) => (
          <div
            key={idx}
            ref={(el) => (itemsRef.current[idx] = el)}
            className="fade-card"
          >
            <ProjectCard
              title={p.title}
              image={p.image}
              github={p.github}
              live={p.live}
              tech={p.tech}
              desc={p.desc}
              date={p.date}
              categories={p.categories}
              status={p.status}
              learned={p.learned}
              role={p.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
