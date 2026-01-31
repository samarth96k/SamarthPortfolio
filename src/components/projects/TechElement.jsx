import React from "react";
import "./techekement.css"

export default function TechElement({ tech }) {
  return (
    <span className="tech-element glass-tech google-sans-code">
      {tech}
    </span>
  );
}
