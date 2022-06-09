const desktopScreenshots = [...qsa(".project__photo-desktop")];
const mobileScreenshots = [...qsa(".project__photo-mobile")];
const projectsModal = qs(".projects-modal");
const modalImageMobile = qs(".modal__image-mobile");
const modalImageDesktop = qs(".modal__image-desktop");
const modalClose = qs(".modal__close");
const modalBodyMobile = qs(".modal__body-mobile");
const modalBodyDesktop = qs(".modal__body-desktop");

// 992px or bigger
if(window.screen.width > 991){
    // When a mobile screenshot is clicked 
    mobileScreenshots.forEach(screenshot => {
        screenshot.addEventListener("click", function(){
            const index = mobileScreenshots.indexOf(screenshot) + 1;
            const attr = screenshot.children[0].getAttribute("src");
            projectsModal.classList.add("show-flex");
            modalImageMobile.setAttribute("src", attr);
            modalBodyMobile.classList.add("show-block")
        });
    });

    // When a desktop screenshot is clicked
    desktopScreenshots.forEach(screenshot => {
        screenshot.addEventListener("click", function(){
            const index = desktopScreenshots.indexOf(screenshot) + 1;
            const attr = screenshot.children[0].getAttribute("src");
            projectsModal.classList.add("show-flex");
            modalImageDesktop.setAttribute("src", attr);
            modalBodyDesktop.classList.add("show-block");
        });
    });
}


document.addEventListener("click", function(e){
  console.log(e.target)
});



// projectsModal.addEventListener("click", function(){
//     projectsModal.classList.remove("show-flex")
//     modalBodyMobile.classList.remove("show-block")
//     modalBodyDesktop.classList.remove("show-block")
// });

