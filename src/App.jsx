import './App.css'
import Opening_page from './components/opening page/opening_page'
import About from "./components/about/about"
import TechStack from './components/techstack/TechStack.jsx'
import Experience from './components/experience/Experience.jsx'
import Education from './components/education/education'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import ScrollStack, { ScrollStackItem } from './components/featured_projects/ScrollStack';
import LiquidEther from './components/extraComponents/LiquidEther'

function App() {
  return (
    <>
      {/* BACKGROUND */}
      <div className="background-layer">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
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
          <section style={{ padding: '1.5rem 3rem' }}>
            <h1>Featured Projects</h1>
          </section>

          <ScrollStack>
            <ScrollStackItem>
              <img src="github.svg" alt="" class="scrollstackimg"/>
              <h2>Card One</h2>
              <p>This is the first card.</p>
            </ScrollStackItem>

            <ScrollStackItem>
              <h2>Card Two</h2>
              <p>No JS. No shimmer. Pure CSS.</p>
            </ScrollStackItem>

            <ScrollStackItem>
              <h2>Card Three</h2>
              <p>Submission safe.</p>
            </ScrollStackItem>
          </ScrollStack>
        </>
        <Experience />
        <h1>Education</h1>
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>

    </>
  )
}

export default App
