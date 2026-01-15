import React from "react";
import techstackdata from "./techstackdata";
import "./techstack.css";

function TechStack() {
  return (
    <section className="skills">
      <h1 className="skills-title">My Skills</h1>

      <p className="skills-subtitle">
        Skill levels are based on real project usage, not tutorials.
      </p>

      <div className="skills-grid">
        {techstackdata.map((item, index) => (
          <div className="skill-card" key={index}>
            <img src={item.link} alt={item.skill} />
            <h3>{item.skill}</h3>
            <span className={`skill-level ${item.level.toLowerCase()}`}>
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
