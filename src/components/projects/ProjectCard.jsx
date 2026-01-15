import { useState } from "react";
import "./ProjectCard.css";
import TechElement from "./TechElement";

function ProjectCard({
  title,
  image,
  github,
  live,
  tech = [],
  desc,
  date,
  categories = [],
  status,
  learned,
  role,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        {/* FRONT */}
        <div
          className="card-front"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="overlay">
            {/* Categories badges */}
            {categories.length > 0 && (
              <div className="categories">
                {categories.map((cat, i) => (
                  <span key={i} className="category-badge">
                    🏷️{cat}
                  </span>
                ))}
              </div>
            )}

            {/* Status badge (only if In Progress) */}
            {status === "In Progress" && (
              <div className="status-badge">⏳{status}❯❯❯❯</div>
            )}

            {/* Title */}
              <h3 className="projectTtile">{title}</h3>
            {/* Tech icons */}
            {tech.length > 0 && (
              <div className="tech">
                {tech.map((icon, i) => (
                  <TechElement tech={icon} key={i} />
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="actions">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
              {live && live !== "Not Hosted As Of Now" && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="card-back">
          <h3>{title}</h3>

          <p className="desc">{desc}</p>

          {/* Optional learned / skills */}
          {learned && (
            <p className="learned">
              <strong>What I learned:</strong> {learned}
            </p>
          )}

          {/* Optional role */}
          {role && (
            <p className="role">
              <strong>Role:</strong> {role}
            </p>
          )}

          <small>Built in {date}</small>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

