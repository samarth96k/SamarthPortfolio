import React from "react";

const projects = [
  {
    title: "Indian States Game",
    categories: ["Frontend"],
    status: null,
    learned:
      "Built interactive UI with Python, Tkinter, and JS logic to manage score and highlight missing states.",
    role: "Solo Project",
    image: "",
    github: "https://github.com/samarth96k/Indian-States-Game",
    live: "https://samarth96k.github.io/Indian-States-Game/",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Tkinter"],
    desc:
      "An interactive learning game that helps students learn Indian states, with score tracking and a final summary highlighting unguessed states in red.",
    date: "2023",
  },

  {
    title: "Driver Drowsiness Detection System",
    categories: ["Machine Learning", "Computer Vision"],
    status: null,
    learned:
      "Implemented real-time detection using OpenCV, YOLO, Vision Transformer, and integrated Google Health API for heartbeat analysis.",
    role: "Team Project",
    image: "/images/driver-drowsiness.png",
    github: "https://github.com/samarth96k/Driver_Drowsiness_Detection",
    live: null,
    tech: [
      "Python",
      "Machine Learning",
      "OpenCV",
      "YOLO",
      "Vision Transformer",
    ],
    desc:
      "A real-time driver drowsiness detection system using computer vision, ML models, and Google Health API data to analyze eye closure, yawning, and heart-rate patterns. Achieves ~92% accuracy and triggers alarms and emergency alerts during prolonged drowsiness.",
    date: "2023",
  },

  {
    title: "Portfolio Website",
    categories: ["Frontend", "React"],
    status: null,
    learned:
      "Built a responsive portfolio using React, improving component-based design and CSS styling skills.",
    role: "Solo Project",
    image: "/images/portfolio.png",
    github: "https://github.com/samarth96k/portfolio",
    live: "https://samarth96k.github.io/portfolio",
    tech: ["React", "JavaScript", "CSS"],
    desc:
      "A modern, responsive personal portfolio showcasing my projects, skills, and experience, built with React for smooth UI interactions.",
    date: "2024",
  },

  {
    title: "Drum App",
    categories: ["Frontend"],
    status: null,
    learned:
      "Practiced JS event listeners and DOM manipulation to create interactive audio-based UI.",
    role: "Solo Project",
    image: "/images/drum-app.png",
    github: "https://github.com/samarth96k/Drum-Game",
    live: "https://samarth96k.github.io/Drum-Game/",
    tech: ["HTML", "CSS", "JavaScript"],
    desc:
      "A simple yet impactful frontend project that simulates a virtual drum kit using clicks and keyboard events. Built to practice JS fundamentals like event listeners and DOM interactions, and boosted my confidence in frontend development.",
    date: "2023",
  },

  {
    title: "CGPA Calculator App",
    categories: ["Frontend", "JavaScript"],
    status: null,
    learned:
      "Handled edge cases like missing grades/credits while computing results, improving logic and DOM manipulation skills.",
    role: "Solo Project",
    image: "/images/cgpa-calculator.png",
    github: "https://github.com/samarth96k/cgpa-calc-test",
    live: "https://samarth96k.github.io/cgpa-calc-test/",
    tech: ["HTML", "CSS", "JavaScript"],
    desc:
      "A browser-based CGPA calculator that handles edge cases like missing grades or credits while computing results accurately. Built with clean JS logic to ensure seamless validation and error handling.",
    date: "2025",
  },

  {
    title: "Blog Project",
    categories: ["Full Stack", "Backend"],
    status: null,
    learned:
      "Implemented dynamic views with Node.js, Express, and EJS. Learned modal-based UI and prepared for multi-user authentication.",
    role: "Solo Project",
    image: "/images/blog-project.png",
    github: "https://github.com/samarth96k/Blog-Project",
    live: null,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS"],
    desc:
      "A full-stack blogging platform built with Node.js, Express, and EJS, featuring dynamic views and a modal-based interface for creating new posts. Designed to refine backend fundamentals and frontend skills, with upcoming support for multi-user authentication.",
    date: "2025",
  },

  // ========================= FEATURED PROJECTS =========================

  {
    title: "LedgerCore",
    categories: ["Backend", "FinTech", "System Design"],
    status: null,
    learned:
      "Designed a production-oriented double-entry ledger with ACID transactions, row-level locking, idempotency, immutable ledger entries, and asynchronous transaction processing.",
    role: "Solo Project",
    image: "/images/ledgercore.png",
    github: "https://github.com/samarth96k/LedgerCore",
    live: null,
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
    desc:
      "A fintech-grade double-entry ledger and wallet system designed for atomic, duplicate-safe money transfers. Uses immutable ledger entries instead of mutable balances, PostgreSQL transactions and row-level locking for concurrency safety, idempotency keys for retry-safe operations, and Redis with BullMQ for asynchronous processing and reconciliation.",
    date: "2026",
  },

  {
    title: "CodeSentinal",
    categories: ["AI", "Developer Tools", "GitHub Automation"],
    status: null,
    learned:
      "Built an AI-powered GitHub workflow that combines LLM reasoning with repository context to automate pull-request reviews and maintain an evolving project wiki.",
    role: "Solo Project",
    image: "/images/codesentinal.png",
    github:
      "https://github.com/samarth96k/CodeSentinal/tree/package-github-action-phase2",
    live: null,
    tech: [
      "TypeScript",
      "Node.js",
      "GitHub Actions",
      "Octokit",
      "Gemini API",
    ],
    desc:
      "An AI-powered GitHub PR reviewer that analyzes code changes using Gemini and repository-specific context. Integrates with GitHub Actions and Octokit to automatically review pull requests, generate architecture-aware feedback, and maintain a repository wiki covering coding conventions, architecture, and database structure.",
    date: "2026",
  },

  {
    title: "Forever Soles",
    categories: ["Full Stack", "E-Commerce", "Backend"],
    status: null,
    learned:
      "Built a complete MERN e-commerce platform while working with authentication, payment gateways, cloud image storage, Redis caching, Docker, and AI-powered features.",
    role: "Solo Project",
    image: "/images/forever-soles.png",
    github: "https://github.com/samarth96k/ECommerceApp",
    live: "https://foreversolesfrontend.vercel.app/",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Cloudinary",
      "JWT",
      "Stripe",
      "Razorpay",
    ],
    desc:
      "A full-stack e-commerce platform built with the MERN stack featuring secure JWT authentication, product and order management, Cloudinary image storage, Redis caching, and integrated Stripe and Razorpay payments. Designed with a scalable backend architecture and enhanced with AI-powered capabilities.",
    date: "2026",
  },
];

export default projects;