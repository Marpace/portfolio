import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProjectsBlock from "../components/ProjectsSectionBlock";

function Projects(props) {

    const {ref, inView, entry} = useInView({
        threshold: 1
    });


    const [projects, setProjects] = useState([
        {
            src: "images/paint-paradise-full-page.png",
            projectName: "Paint Paradise",
            liveLink: "https://marpace.github.io/paint-paradise/",
            repoLink: "",
            frontendLink: "https://github.com/Marpace/paint-paradise",
            backendLink: "https://github.com/Marpace/paint-paradise-backend"
        },
        {
            src: "images/projects/projects-dt-7.png",
            alt: "Snake Race game screenshot",
            projectName: "Snake Race",
            liveLink: "https://marpace.github.io/snake-race-react/",
            repoLink: "",
            frontendLink: "https://github.com/Marpace/snake-race-react/tree/master",
            backendLink: "https://github.com/Marpace/snake-race-backend"
        },
        {
            src: "images/banking-full-page.png",
            alt: "Comments section project screenshot",
            projectName: "Banking solutions",
            liveLink: "https://marpace.github.io/easybank-landing-page/",
            repoLink: "https://github.com/Marpace/easybank-landing-page"
        }
])


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
        {projects.map(project => (
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