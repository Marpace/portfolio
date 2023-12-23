import Hero from '../components/home/Hero';
import About from "../components/home/About";
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';
import Navigation from '../components/home/Navigation';

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