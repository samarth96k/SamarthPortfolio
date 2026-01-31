import React, { useEffect, useRef } from "react";
import "./about.css";

const title = "About Me";
const desc =
  "Hello there! I’m Samarth, a third-year B.Tech student at VIT, pursuing Computer Science and Engineering. I enjoy exploring new technologies, building projects, and learning by doing. I love collaborating with new people and working on ideas that challenge me and help me grow. This portfolio is a small showcase of my journey, skills, and the projects I’ve worked on so far. I like to read books of different genres and explore about space! How facinating it is to watch to a universe which is evolving forever and is limitless just like human potentiel! Hope you enjoy exploring my work!";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("about-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="about-div about-animate">
      <div className="about-left about-slide-left">
        <div className="about-pic">
          <img src="IMG_1775.jpeg" alt="" className="about-pic-tag" />
        </div>
      </div>

      <div className="about-right about-slide-right">
        <div className="about-title" style={{ fontFamily: "Aquire" }}>
          <h1>{title}</h1>
        </div>
        <div className="about-desc inknut-antiqua-regular">{desc}</div>
      </div>
    </div>
  );
}

export default About;
