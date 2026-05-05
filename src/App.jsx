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
            <h1 style={{ fontFamily: "Aquire" }}>Featured Projects</h1>
          </section>
          <ScrollStack>
            {/* ***********************************PROJECT 1****************************************** */}
            <ScrollStackItem>
              <img src="../assets/Screenshot 2026-05-05 122107.png" alt="" class="scrollstackimg" />
              <h2>E-Commerce Platform</h2>
              <p>
                Designed a scalable e-commerce system with optimized API handling, concurrent image uploads
                using Promise.all, and seamless payment integration via Razorpay and Stripe.
              </p>
              <span className="tech-element glass-tech google-sans-code">React</span>
              <span className="tech-element glass-tech google-sans-code">Express</span>
              <span className="tech-element glass-tech google-sans-code">Razorpay and Stripe Integration</span>
              <span className="tech-element glass-tech google-sans-code">Cloudinary</span>
              <span className="tech-element glass-tech google-sans-code">JWT</span>
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
            {/* *******************************PROJECT 1*********************************************** */}
            <ScrollStackItem>
              <img src="YOUR_IMAGE_PATH_HERE" alt="" className="scrollstackimg" />
              <h2>Driver Drowsiness Detection</h2>
              <p>
                Built a real-time drowsiness detection system using ResNet-18 and OpenCV,
                achieving high accuracy through facial landmark tracking and live webcam analysis.
              </p>

              <span className="tech-element glass-tech google-sans-code">Python</span>
              <span className="tech-element glass-tech google-sans-code">PyTorch</span>
              <span className="tech-element glass-tech google-sans-code">OpenCV</span>
              <span className="tech-element glass-tech google-sans-code">ResNet-18</span>
              <span className="tech-element glass-tech google-sans-code">Computer Vision</span>

              <br />

              <a
                href="https://github.com/samarth96k/Driver_Drowsiness_Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="google-sans-code featured_project_buttons"
              >
                GitHub
              </a>
              {/* <button className="google-sans-code featured_project_buttons">Live</button> */}
            </ScrollStackItem>
            <ScrollStackItem>
              {/* <h2>Card Three</h2>
              <p>Submission safe.</p> */}
            </ScrollStackItem>
          </ScrollStack>
        </>
        {/* <Experience /> */}
        <h1 style={{fontFamily:"Aquire"}} className='education-title'>Education</h1>
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
