import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/header'
import Opening_page from './components/opening page/opening_page'
import Education from './components/education/education'
import Projects from './components/projects/Projects.jsx'
import About from "./components/about/about"
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import TechStack from './components/techstack/TechStack.jsx'
function App() {
  {/* <Header />   */}

  return (
    <div>
      <Opening_page />
      <About /> 
      <TechStack />
      <h1 className='limelight-regular'>Education</h1> 
      <Education />
      <Projects />      
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
