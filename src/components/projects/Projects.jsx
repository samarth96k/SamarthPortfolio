// import React from "react";
// import { useState } from "react";
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
//     <div className="projects-container">
//       <div className="projectContainerTitle limelight-regular">My Projects Archive</div>
//       <div className="filters">
//         <button onClick={() => setFilter("All")}>All</button>
//         <button onClick={() => setFilter("React")}>React</button>
//         <button onClick={() => setFilter("JavaScript")}>JavaScript</button>
//         <button onClick={() => setFilter("Frontend")}>Frontend</button>
//         <button onClick={() => setFilter("Machine Learning")}>Machine Learning</button>
//         <button onClick={() => setFilter("Full Stack")}>Full Stack</button>
//       </div>
//       <p className="libertinus-serif-regular-italic">Click on the cards for more information</p>
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

import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import projects from "./projectsdata";

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <div className="projects-container">
      <div className="projectContainerTitle limelight-regular">
        My Projects Archive
      </div>

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("React")}>React</button>
        <button onClick={() => setFilter("JavaScript")}>JavaScript</button>
        <button onClick={() => setFilter("Frontend")}>Frontend</button>
        <button onClick={() => setFilter("Machine Learning")}>Machine Learning</button>
        <button onClick={() => setFilter("Full Stack")}>Full Stack</button>
      </div>

      <p className="libertinus-serif-regular-italic">
        Click on the cards for more information
      </p>

      <div className="project-grid">
        {filteredProjects.map((p, idx) => (
          <ProjectCard
            key={idx}
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
        ))}
      </div>
    </div>
  );
}

export default Projects;
