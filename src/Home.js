import Hero from './home/Hero';
import About from "./home/About";
import Skills from './home/Skills';
import Projects from './home/Projects';
import Contact from './home/Contact';
import Footer from './home/Footer';
import Navigation from './home/Navigation';

import {useState} from "react";

function Home() {

  const [currentSection, setCurrentSection] = useState("");


  return (
    <main>
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection} 
      />
      <Hero 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <About 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Skills 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Projects 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Contact 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Footer 
        setCurrentSection={setCurrentSection}
      />
    </main>
  )
}

export default Home;