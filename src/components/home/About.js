import { useEffect, useState, useRef } from "react";
import {useInView} from "react-intersection-observer";

function About(props) {

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  
  const desktop = window.screen.width > 1440 ? true : false

  const [hovered, setHovered] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(null)

  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  function handleMouseEnter() {
    setHovered(true);
  }

  useEffect(() => {
    if(sectionRef.current && titleRef.current) {
      const section = Number(getComputedStyle(sectionRef.current).height.split("px")[0])
      const title = Number(getComputedStyle(titleRef.current).height.split("px")[0])
      setSectionHeight(section - title)
    }
  }, [])

  useEffect(() => {
    if(inView){
      props.setCurrentSection(entry.target.id)
      setTimeout(() => {
        setShowCursor(true);
      }, 3000);
    } 
  }, [inView])

  useEffect(() => {
    if(props.currentSection === "about" && !inView) {
      console.log(entry.target.offsetTop - 70)
      window.scrollTo({
        top: entry.target.offsetTop - ((window.innerHeight - sectionHeight) / 2),
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [props.currentSection])


  return (
    <section id="about" className="about" ref={sectionRef}>
            <h2 className="section-title" ref={titleRef}>Full Transparency</h2>
            <div id="about" className="about__text" ref={ref}>
                <p className={`about__text-1 ${inView && !desktop ? "visible-text" : ""}`}>In programming, I have found my passion. I enjoy debugging code and finding a creative solution to make things work.</p>
                <p className={`about__text-2 ${inView && !desktop ? "visible-text" : ""}`}>I am a self taught web developer trying to get my foot through the  door and obtain my first web developer role. For the past two years, I've done freelance work for several clients and I’ve dedicated most of my free time to learning web development. From static to dynamic websites, frameworks and libraries, and even backend technologies.</p>
                <div onMouseEnter={handleMouseEnter} className={`glass-blur ${inView && !desktop ? "see-through" : ""}`}></div>
                <img className={`cursor--green ${hovered || !showCursor ? "invisible" : "cursor-move"}`} src="images/green_cursor.png"></img>
            </div>
        </section>
  )
}

export default About;