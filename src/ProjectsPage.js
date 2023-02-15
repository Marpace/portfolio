import { useEffect, useState } from "react";
import ProjectsBlock from "./components/projects page/ProjectsPageBlock";
import ProjectsModal from "./components/projects page/ProjectsModal";
import {projects} from "./Data"

function ProjectsPage() {

  const [modalImage, setModalImage] = useState({size: "", src: ""});

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <main className="projects-main">
      {projects.map(project => (
        <ProjectsBlock 
          key={project.projectTitle}
          desktopSrc={project.desktopSrc}
          mobileSrc={project.mobileSrc}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          builtWith={project.builtWith}
          projectLive={project.projectLive}
          projectRepo={project.projectRepo}
          frontendRepo={project.frontendRepo}
          backendRepo={project.backendRepo}
          setModalImage={setModalImage}
        />
      ))}
      <ProjectsModal 
        modalImage={modalImage}
        setModalImage={setModalImage}
      />
    </main>
  )
}


export default ProjectsPage;