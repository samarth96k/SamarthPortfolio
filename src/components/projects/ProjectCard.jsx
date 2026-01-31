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
          <div className="overlay glass-overlay">
            <div>
              <h3 className="limelight-regular projectTitle" style={{fontFamily:"Aquire"}}>{title}</h3>
              <p className="status-badge">{status}</p>
            </div>

            <div className="tech">
              {tech.map((t, i) => (
                <TechElement key={i} tech={t} />
              ))}
            </div>

            <div className="actions">
              {github && (
                <a href={github} target="_blank" onClick={(e) => e.stopPropagation()} className="google-sans-code">
                  GitHub
                </a>
              )}
              {live && (
                <a href={live} target="_blank" onClick={(e) => e.stopPropagation()}>
                  Live
                </a>
              )}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="card-back glass-back">
          <h3 className="limelight-regular">{title}</h3>
          <p>{desc}</p>
          <p><strong>Role:</strong> {role}</p>
          <p><strong>Learned:</strong> {learned}</p>
          <p><strong>Date:</strong> {date}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
