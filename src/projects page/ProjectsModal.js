
function ProjectsModal(props) {

  function closeModal() {
    props.setModalImage({size: "", src: ""})
  }

  return (
    <div id="close" className={`projects-modal ${!props.modalImage.src ? "" : "show-flex"}`}>
      <div className="projects-modal__inner">
        <div className="modal__body">
          <div className={`modal__body-mobile ${props.modalImage.size === "mobile" ? "show-block" : ""}`}>
            <img onClick={closeModal} className="close-modal" src="./images/close_modal_icon.png"></img>
            <img className="smartphone" src="images/projects/smartphone.png" alt="mobile phone"></img> 
            <div className="mobile-viewport">
              <img className="modal__image-mobile" src={props.modalImage.src}></img>
            </div>
          </div>
          <div className={`modal__body-desktop ${props.modalImage.size === "desktop" ? "show-block" : ""}`}>
            <img onClick={closeModal} className="close-modal" src="./images/close_modal_icon.png"></img>
            <img className="laptop" src="images/projects/laptop.png" alt="laptop"></img>
            <div className="desktop-viewport">
              <img className="modal__image-desktop" src={props.modalImage.src}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProjectsModal;