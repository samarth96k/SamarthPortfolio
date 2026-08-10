import React, { useEffect, useRef } from "react";
import "./about.css";

const title = "About Me";
const desc =
  "I'm Samarth, a third-year Computer Science undergrad at VIT Bhopal, building toward backend and AI engineering. My work sits at the intersection of the two — production-grade systems (transaction integrity, caching, load handling) paired with LLM tooling. I was selected for Amazon ML Summer School 2025, and I learn best by shipping: ForeverSoles (a full-stack retail platform hardened with atomic transactions and Redis caching), CodeSentinel (an AI-powered PR reviewer built on a RAG layer), and a double-entry ledger engine exploring fintech-grade correctness. Outside of code, I read across genres and follow space and astrophysics — mostly because both are good training for sitting with problems that don't resolve quickly."
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
