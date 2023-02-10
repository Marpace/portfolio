function ProjectsBlock(props) {

  function handleRepoClick(e) {
    if(props.repoLink === "") e.preventDefault();
  }

  return (
    <div className="projects-block">
      <div className="projects-block__img">
        <img className="project-screenshot" src={props.src} alt={props.alt}></img>
        <p className="project-name">{props.projectName}</p>
      </div>
      <div className="projects-block__links">
        <a className="project-link" href={props.liveLink}>Live</a>
        <span>|</span>
        <div className="repo-links">
          <a onClick={handleRepoClick} className="project-link" href={props.repoLink}>Repo</a>
          <a className={`link ${props.repoLink === "" ? "" : "hidden"}`} href={props.frontendLink}>Frontend</a>
          <a className={`link ${props.repoLink === "" ? "" : "hidden"}`} href={props.backendLink}>Backend</a>
        </div>
      </div>
    </div>
  )
}



export default ProjectsBlock;