import React, { useEffect, useRef } from "react";
import techstackdata from "./techstackdata";
import "./techstack.css";

function TechStack() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("skill-show");
          }
        });
      },
      { threshold: 0.25 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills">
      <h1 className="skills-title" style={{fontFamily:"Aquire"}}>My Skills</h1>
      <p className="skills-subtitle inknut-antiqua-semibold">
        Skill levels are based on real project usage, not tutorials.
      </p>

      <div className="skills-grid">
        {techstackdata.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="skill-card skill-hidden slide-top"
          >
            <img src={item.link} alt={item.skill} />
            <h3 className="inknut-antiqua-bold">{item.skill}</h3>
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
