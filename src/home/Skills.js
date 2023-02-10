import { useEffect, useState } from "react";
import {useInView} from "react-intersection-observer"
import ProjectsPage from "../ProjectsPage";

function Skills(props) {

    const [currentAnimation, setCurrentAnimation] = useState();
    const [animationFired, setAnimationFired] = useState(false);

    const { ref, inView, entry } = useInView({
        threshold: 1,
    });

    useEffect(() => {
        if(inView) {
            let number = 0;
            props.setCurrentSection(entry.target.id)
            if(!animationFired) {
                setAnimationFired(true);
                const interval = setInterval(() => {
                    setCurrentAnimation(number)
                    number++
                    if(number === 13) clearInterval(interval);
                }, 300);
            }
        }
    },[inView])
   
    useEffect(() => {
        if(props.currentSection === "skills" && !inView) {
            window.scrollTo({
              top: entry.target.offsetTop,
              left: 0,
              behavior: 'smooth'
          });
          }
    },[props.currentSection])

  return (
    <section id="skills" className={`skills`} ref={ref}>
        <h1 className="section-title">Skills</h1>
        <div className="skills-block">
            <h2 className={`skills-block__line ${currentAnimation > 0 ? "" : "invisible"}`}>HTML</h2>
            <h2 className={`skills-block__line ${currentAnimation > 1 ? "" : "invisible"}`}>CSS</h2>
            <h2 className={`skills-block__line ${currentAnimation > 2 ? "" : "invisible"}`}>Javascript</h2>
            <h2 className={`skills-block__line ${currentAnimation > 3 ? "" : "invisible"}`}>Socket.io</h2>
        </div>
        <div className="skills-block">
            <div className="skills-block__line">
                <h2 className={`skills-block__line--green ${currentAnimation > 6 ? "" : "invisible"}`}>M</h2>
                <h2 className={`skills-block__line--white ${currentAnimation > 8 ? "" : "invisible"}`}>ongodb</h2>
            </div>
            <div className="skills-block__line">
                <h2 className={`skills-block__line--green ${currentAnimation > 6 ? "" : "invisible"}`}>E</h2>
                <h2 className={`skills-block__line--white ${currentAnimation > 9 ? "" : "invisible"}`}>xpress</h2>
            </div>
            <div className="skills-block__line">
                <h2 className={`skills-block__line--green ${currentAnimation > 6 ? "" : "invisible"}`}>R</h2>
                <h2 className={`skills-block__line--white ${currentAnimation > 10 ? "" : "invisible"}`}>eact</h2>
            </div>
            <div className="skills-block__line">
                <h2 className={`skills-block__line--green ${currentAnimation > 6 ? "" : "invisible"}`}>N</h2>
                <h2 className={`skills-block__line--white ${currentAnimation > 11 ? "" : "invisible"}`}>ode</h2>
            </div>
        </div>
    </section>
  )
}


export default Skills;