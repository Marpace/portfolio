import { useEffect, useState } from "react";
import ProjectsBlock from "./projects page/ProjectsPageBlock";
import ProjectsModal from "./projects page/ProjectsModal";

function ProjectsPage() {

  const [modalImage, setModalImage] = useState({size: "", src: ""});
  const [projects, setProjects] = useState([
    {
      desktopSrc: "./images/projects/projects-dt-3.jpg",
      mobileSrc: "images/projects/projects-m-3.jpg",
      projectTitle: "Paint Paradise (version 2)",
      projectDescription: "Multi-page website for a paint party business. Text and Image content is fetched from a database and client can edit content via a backend CMS",
      builtWith: "MongoDB / Express / React / Node",
      projectLive: "https://marpace.github.io/paint-paradise/",
      projectRepo: "",
      frontendRepo: "https://github.com/Marpace/paint-paradise",
      backendRepo: "https://github.com/Marpace/paint-paradise-backend"
    },
    {
      desktopSrc: "images/projects/projects-dt-7.png",
      mobileSrc: "images/projects/projects-m-7.jpg",
      projectTitle: "Snake Race",
      projectDescription: "Classic snake game with online multiplayer. Features four diferent game types and chat.",
      builtWith: "React / Node / Socket.io",
      projectLive: "https://marpace.github.io/snake-race-react/",
      projectRepo: "",
      frontendRepo: "https://github.com/Marpace/snake-race-react/tree/master",
      backendRepo: "https://github.com/Marpace/snake-race-backend"
    },
    {
      desktopSrc: "images/projects/projects-dt-1.jpg",
      mobileSrc: "images/projects/projects-m-1.jpg",
      projectTitle: "Todo app",
      projectDescription: "Features include dark/light mode and drag and drop to reorder lists. I built an API for the backend and implemented user login and signup.",
      builtWith: "MongoDB / Express / React / Node",
      projectLive: "https://marpace.github.io/todo-app-react/",
      projectRepo: "",
      frontendRepo: "https://github.com/Marpace/todo-app-react",
      backendRepo: "https://github.com/Marpace/todo-app-API"
    },
    {
      desktopSrc: "images/projects/projects-dt-4.jpg",
      mobileSrc: "images/projects/projects-m-4.jpg",
      projectTitle: "Interactive comments section",
      projectDescription: "Features include adding new comments and replying to other users. It is connected to a database so new comments and replies persist after refreshing.",
      builtWith: "MongoDB / Node / Express / EJS",
      projectLive: "https://comments-page.herokuapp.com/",
      projectRepo: "https://github.com/Marpace/interactive-comments-section"
    },
    {
      desktopSrc: "images/projects/projects-dt-2.jpg",
      mobileSrc: "images/projects/projects-m-2.jpg",
      projectTitle: "Ecommerce product page",
      projectDescription: "Features include a carousel component for product images and add-to-cart functionality. Items can be viewed and deleted from cart.",
      builtWith: "HTML / SASS / Jquery",
      projectLive: "https://marpace.github.io/ecommerce-product-page-main/",
      projectRepo: "https://github.com/Marpace/ecommerce-product-page-main"
    },
    {
      desktopSrc: "images/projects/projects-dt-5.jpg",
      mobileSrc: "images/projects/projects-m-5.jpg",
      projectTitle: "Banking app home page",
      projectDescription: "Responsive home page using CSS Flexbox for layout and collapsable menu on mobile version",
      builtWith: "HTML / SASS / Jquery",
      projectLive: "https://marpace.github.io/easybank-landing-page/",
      projectRepo: "https://github.com/Marpace/easybank-landing-page"
    },
    {
      desktopSrc: "images/projects/projects-dt-6.jpg",
      mobileSrc: "images/projects/projects-m-6.jpg",
      projectTitle: "Caspian Painting & Design",
      projectDescription: "Landing page for painting business. Features a paralax background and lighbox gallery",
      builtWith: "HTML / CSS / Javascript",
      projectLive: "https://www.caspianpaintingdesign.com",
      projectRepo: "n/a"
    },
    {
      desktopSrc: "images/projects/projects-dt-8.png",
      mobileSrc: "images/projects/projects-m-8.png",
      projectTitle: "Paint Paradise",
      projectDescription: "My first website. Includes features such as carousels, accordions and lightbox gallery",
      builtWith: "HTML / CSS / Javascript / Bootstrap",
      projectLive: "https://www.paintparadise.ca",
      projectRepo: "n/a"
    },
  ])

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