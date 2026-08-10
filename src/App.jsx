import "./App.css";
import Opening_page from "./components/opening page/opening_page";
import About from "./components/about/about";
import TechStack from "./components/techstack/TechStack.jsx";
import Experience from "./components/experience/Experience.jsx";
import Education from "./components/education/education";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";
import ScrollStack, {
  ScrollStackItem,
} from "./components/featured_projects/ScrollStack";
import LiquidEther from "./components/extraComponents/LiquidEther";

function App() {
  return (
    <>
      {/* BACKGROUND */}
      <div className="background-layer">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          autoDemo
        />
      </div>
      {/* FOREGROUND CONTENT */}
      <main>
        <Opening_page />
        <About />
        <TechStack />
        <>
          <section style={{ padding: "1.5rem 3rem" }}>
            <h1
              style={{ fontFamily: "Aquire" }}
              className="featuredProjectContainer"
            >
              Featured Projects
            </h1>
          </section>
          <ScrollStack>
            {/* ***********************************PROJECT 1****************************************** */}
            <ScrollStackItem>
              <img
                src="YOUR_IMAGE_PATH_HERE"
                // alt="LedgerCore"
                className="scrollstackimg"
              />

              <h2>LedgerCore</h2>

              <p>
                Engineered a production-oriented double-entry ledger and wallet
                system for atomic and duplicate-safe fund transfers. Implemented
                immutable ledger entries with ACID-compliant PostgreSQL
                transactions, row-level locking, and idempotency keys to prevent
                double spending and ensure correctness under concurrent
                requests. Built asynchronous transaction processing and
                scheduled reconciliation using Redis and BullMQ, with balances
                derived directly from the ledger rather than stored as mutable
                state.
              </p>

              <span className="tech-element glass-tech google-sans-code">
                Node.js
              </span>
              <span className="tech-element glass-tech google-sans-code">
                TypeScript
              </span>
              <span className="tech-element glass-tech google-sans-code">
                PostgreSQL
              </span>
              <span className="tech-element glass-tech google-sans-code">
                Redis
              </span>
              <span className="tech-element glass-tech google-sans-code">
                BullMQ
              </span>

              <br />

              <a
                href="YOUR_LEDGERCORE_GITHUB_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="google-sans-code featured_project_buttons"
              >
                GitHub
              </a>

              <a
                href="YOUR_LEDGERCORE_LIVE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="google-sans-code featured_project_buttons"
              >
                Live
              </a>
            </ScrollStackItem>
            {/* *******************************PROJECT 1*********************************************** */}

            {/* ***********************************PROJECT 2****************************************** */}
            <ScrollStackItem>
              <img
                src="YOUR_IMAGE_PATH_HERE"
                // alt="CodeSentinal"
                className="scrollstackimg"
              />

              <h2>CodeSentinal</h2>

              <p>
                Built an AI-powered GitHub PR review system that automatically
                analyzes pull requests and generates codebase-aware feedback
                using Gemini. Integrated GitHub Actions and Octokit to fetch
                repository files, inspect code changes, and post automated
                reviews directly on pull requests. Designed an evolving
                repository wiki that captures coding conventions, architecture,
                and database context, allowing the LLM to reason about changes
                using project-specific knowledge rather than isolated code.
              </p>

              <span className="tech-element glass-tech google-sans-code">
                TypeScript
              </span>
              <span className="tech-element glass-tech google-sans-code">
                Node.js
              </span>
              <span className="tech-element glass-tech google-sans-code">
                GitHub Actions
              </span>
              <span className="tech-element glass-tech google-sans-code">
                Octokit
              </span>
              <span className="tech-element glass-tech google-sans-code">
                Gemini API
              </span>

              <br />

              <a
                href="https://github.com/samarth96k/CodeSentinal"
                target="_blank"
                rel="noopener noreferrer"
                className="google-sans-code featured_project_buttons"
              >
                GitHub
              </a>

              <a
                href="YOUR_CODESENTINAL_LIVE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="google-sans-code featured_project_buttons"
              >
                Live
              </a>
            </ScrollStackItem>
            {/* *******************************PROJECT 2*********************************************** */}

            {/* ***********************************PROJECT 3****************************************** */}
            <ScrollStackItem>
              <img
                src="YOUR_IMAGE_PATH_HERE"
                // alt="Forever Soles"
                className="scrollstackimg"
              />

              <h2>Forever Soles</h2>

              <p>
                Developed a full-stack e-commerce platform with a scalable MERN
                architecture covering authentication, product management, cart
                and order workflows, and secure payment processing. Integrated
                Stripe and Razorpay for payments, Cloudinary for optimized image
                management, and Redis for caching frequently accessed data.
                Implemented JWT-based authentication and backend APIs while
                incorporating AI-powered capabilities to enhance the overall
                shopping experience.
              </p>

              <span className="tech-element glass-tech google-sans-code">
                React
              </span>
              <span className="tech-element glass-tech google-sans-code">
                Node.js
              </span>
              <span className="tech-element glass-tech google-sans-code">
                MongoDB
              </span>
              <span className="tech-element glass-tech google-sans-code">
                Redis
              </span>
              <span className="tech-element glass-tech google-sans-code">
                Stripe & Razorpay
              </span>

              <br />

              <a
                href="https://github.com/samarth96k/ECommerceApp"
                target="_blank"
                rel="noopener noreferrer"
                className="google-sans-code featured_project_buttons"
              >
                GitHub
              </a>

              <a
                href="https://e-commerce-app-frontend-dusky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="google-sans-code featured_project_buttons"
              >
                Live
              </a>
            </ScrollStackItem>
            {/* *******************************PROJECT 3*********************************************** */}
          </ScrollStack>
        </>
        {/* <Experience /> */}
        <h1 style={{ fontFamily: "Aquire" }} className="education-title">
          Education
        </h1>
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
