import { useEffect } from "react";

function Navigation(props) {

  function handleArrowClick(e) {
    const direction = e.target.id;

    props.setCurrentSection( prev => {
      if(direction === "up") {
        switch (prev) {
          case "home":
            return "home"
          case "about":
            return "home"
          case "skills":
            return "about"
          case "projects":
            return "skills"
          case "contact":
            return "projects"
          default:
            break;
        }
      }
      if(direction === "down") {
        switch (prev) {
          case "home":
            return "about"
          case "about":
            return "skills"
          case "skills":
            return "projects"
          case "projects":
            return "contact"
          case "contact":
            return "contact"
          default:
            break;
        }
      }
    })
  }

  return (
    <aside className="navigation">
      <div className="navigation__line"></div>
      <h3 className={`navigation__section ${props.currentSection === "home" ? "section-active" : "hidden-below"}`}>
        Home</h3>
      <h3 className={`navigation__section ${props.currentSection === "about" ? "section-active" : "hidden-below"}`}>
        About</h3>
      <h3 className={`navigation__section ${props.currentSection === "skills" ? "section-active" : "hidden-below"}`}>
        Skills</h3>
      <h3 className={`navigation__section ${props.currentSection === "projects" ? "section-active" : "hidden-below"}`}>
        Projects</h3>
      <h3 className={`navigation__section ${props.currentSection === "contact" ? "section-active" : "hidden-below"}`}>
        Contact</h3>
      <div className="navigation__arrows">
        <img 
          id="up"
          onClick={handleArrowClick} 
          className="navigation__arrows-up js-nav-up" 
          src="images/arrow-up.png" 
          alt="arrow up icon"></img>
        <img 
          id="down"
          onClick={handleArrowClick} 
          className="navigation__arrows-down js-nav-down" 
          src="images/arrow-down.png" 
          alt="arrow down icon"></img>
      </div>
    </aside>



    // {/* <aside className="navigation">
    //   <div className="navigation__inner-wrap">
    //     <div className="navigation__inner">
    //       <div className="navigation__inner-line"></div>
    //       <div className="navigation__inner-section">
    //         <h3>Home</h3>
    //       </div>
    //       <div className="navigation__inner-section">
    //         <h3>About</h3>
    //       </div>
    //       <div className="navigation__inner-section">
    //         <h3>Skills</h3>
    //       </div>
    //       <div className="navigation__inner-section">
    //         <h3>Projects</h3>
    //       </div>
    //       <div className="navigation__inner-section">
    //         <h3>Contact</h3>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="navigation__arrows">
    //     <img className="navigation__arrows-up js-nav-up" src="images/arrow-up.png" alt="arrow up icon"></img>
    //     <img className="navigation__arrows-down js-nav-down" src="images/arrow-down.png" alt="arrow down icon"></img>
    //   </div>
    // </aside> */}
  )
}


export default Navigation;