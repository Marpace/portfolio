function ProjectsBlock(props) {

  const desktop = window.screen.width > 1440 ? true : false

  function handleRepoClick(e) {
    if(props.projectRepo === "") e.preventDefault();
  }

  function handleImageClick(e) {
    if(!desktop) return;
    props.setModalImage({size: e.target.id, src: e.target.src})
  }

  return (
    <div className="project">
        <div className="project__photo-desktop">
            <img onClick={handleImageClick} id="desktop" className="project-screenshot" src={props.desktopSrc} alt="project thumbnail"></img>
        </div>
        <div className="project__photo-mobile">
            <img onClick={handleImageClick} id="mobile" className="project-screenshot" src={props.mobileSrc} alt="project thumbnail"></img>
        </div>
        <div className="project__text">
            <p className="project-title">{props.projectTitle}</p>
            <p className="project-description">{props.projectDescription}</p>
            <p className="built-with">{`Built with: ${props.builtWith}`}</p> 
            <div className="project-links">
                <a className={`link ${props.projectLive === "n/a" ? "hidden" : ""}`} href={props.projectLive}>Live</a>
                <span className={props.projectRepo === "n/a" ? "hidden" : "link-separator"}>|</span>
                <div className="repo-links">
                  <a 
                    onClick={handleRepoClick}
                    className={`link repo-link ${props.projectRepo === "n/a" ? "hidden" : ""}`} 
                    href={props.projectRepo}>Repo</a>
                  <a className={`link invisible-link ${props.projectRepo === "" ? "" : "hidden"}`} href={props.frontendRepo}>Frontend</a>
                  <a className={`link invisible-link ${props.projectRepo === "" ? "" : "hidden"}`} href={props.backendRepo}>Backend</a>
                </div>
                <span className={props.projectDesign === "n/a" ? "hidden" : "link-separator"}>|</span>
                <span className={`link ${props.projectDesign === "n/a" ? "hidden" : ""}`}>Design</span>
            </div> 
        </div> 
    </div>
  )
}

export default ProjectsBlock;