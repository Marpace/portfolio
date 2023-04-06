import { useEffect} from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProjectsBlock from "../ProjectsSectionBlock";
import {homeProjects} from "../../Data"

function Projects(props) {

    const {ref, inView, entry} = useInView({
        threshold: 1
    });

    useEffect(() => {
        if(inView) props.setCurrentSection(entry.target.id);
    }, [inView])
    
    useEffect(() => {
        if(props.currentSection === "projects" && !inView) {
            window.scrollTo({
              top: entry.target.offsetTop,
              left: 0,
              behavior: 'smooth'
          });
          }
    }, [props.currentSection])


  return (
    <section id="projects" className="projects" ref={ref}>
        <h2 className="section-title">Projects</h2>
        {homeProjects.map(project => (
            <ProjectsBlock 
                key={project.projectName}
                src={project.src}
                alt={project.alt}
                projectName={project.projectName}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
                frontendLink={project.frontendLink}
                backendLink={project.backendLink}
            />
        ))}
        <div className="projects-see-more">
            <Link to="/projects">See more</Link>
            <img src="images/arrow-right.png" alt="arrow right icon"></img>
        </div>
    </section>
  )
}


export default Projects;