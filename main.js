const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);


// ********************  NAVIGATION  ********************

// animation when clicking up and down arrows 
const pageSections = Array.from(qsa("section"));
const navUp = qs(".js-nav-up");
const navDown = qs(".js-nav-down");
const navInner = qs(".navigation__inner");
const navSection = qs(".navigation__inner-section");
let sectionNumber = 0;
if(window.screen.width > 1439) {


    const scrollNavigation = (index) => {
        let scrollAmount = 0;
        titleHeight = parseInt(getComputedStyle(navSection).height.match(/\d+/)[0])
        switch (index) {
            case 0:
                scrollAmount = 0; 
                navUp.style.opacity = "0"
                navDown.style.opacity = "1"
                break;
            case 1:
                scrollAmount -= 190 + titleHeight;
                navUp.style.opacity = "1"
                navDown.style.opacity = "1"
                break;
            case 2: 
                scrollAmount -= 380 + (titleHeight * 2);
                navUp.style.opacity = "1"
                navDown.style.opacity = "1"
                break;
            case 3:
                scrollAmount -= 580 + (titleHeight * 3);
                navUp.style.opacity = "1"
                navDown.style.opacity = "0"
                break;
            default:
                break;
        }
        navInner.style.transform = `translateY(${scrollAmount}px)`
    }

    navUp.addEventListener("click", function() {
        sectionNumber -= 1;
        if(sectionNumber < 0 ) sectionNumber = 0
        
        scrollNavigation(sectionNumber)

        window.scrollTo({
            top: pageSections[sectionNumber].offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    });    

    navDown.addEventListener("click", function() {
        sectionNumber += 1; 
        if(sectionNumber > 3 ) sectionNumber = 3;

        scrollNavigation(sectionNumber);

        window.scrollTo({
            top: pageSections[sectionNumber].offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    });    


    // observer for page sections so that side navigation coincides with current visibile section 
    let sectionsObserverOptions = {
        rootMargin: "0px",
        threshold: .5
    }

    const updateNavigation = (entries, observer) => {
        entries.forEach( entry => {
            if(entry.isIntersecting) {
                scrollNavigation(pageSections.indexOf(entry.target))
                sectionNumber = pageSections.indexOf(entry.target);
            }
        });
    };

    const sectionsObserver = new IntersectionObserver(updateNavigation, sectionsObserverOptions);
    pageSections.forEach(section => {
        sectionsObserver.observe(section)
    })
}

// scroll to contact section when contact button is clicked 
const contactBtn = qs(".js-contact-btn");

contactBtn.addEventListener("click", function() {
    sectionNumber = 3;
    window.scrollTo({
        top: pageSections[3].offsetTop,
        left: 0,
        behavior: 'smooth'
    });
});

// make home arrow disappear when scrolling down
const arrowDown = qs(".arrow-down")
window.addEventListener("scroll", function() {
    this.scrollY > 50 ? arrowDown.style.opacity = "0" : arrowDown.style.opacity = "1";  
})




// ********************  ABOUT  ********************
//animation for about section
const glassPanel = qs(".glass-blur");
const aboutText = qs(".about__text");
const aboutSection = qs(".about");
const blurryTexts = qsa(".js-blurry-text");

let aboutObserverOptions = {
    rootMargin: "0px",
    threshold: .9
}

let showAbout = (entries, observer) => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            glassPanel.classList.add("see-through")
            blurryTexts.forEach(text => {
                text.classList.add("visible-text")
            });
        }
        else {
            glassPanel.classList.remove("see-through");
            blurryTexts.forEach(text => {
                text.classList.remove("visible-text")
            });
        }
    })
}

const aboutObserver = new IntersectionObserver(showAbout, aboutObserverOptions);

//observe only for mobile
if(window.screen.width < 1440) aboutObserver.observe(aboutSection);

// on desktop the animation is triggered by hovering mouse over element
//did it with javascript because I had to select the parent element
glassPanel.addEventListener("mouseenter", function() {
    blurryTexts.forEach( text => {
        text.classList.add("visible-text")
    });
});
glassPanel.addEventListener("mouseleave", function() {
    blurryTexts.forEach( text => {
        text.classList.remove("visible-text")
    });
});



// ********************  WORK  ********************
// Animation for skills section
// elements for mobile animation
const skillLines = qsa(".first-skills__line");
const skillsLeft = qsa(".first-skills__item h3");
const skillsRight = qsa(".skills__second-skills h3");
const skillsDiv = qs(".skills");

//elements for desktop animation
const desktopSkills = Array.from(qsa(".skills-dt__item"))


let skillObserverOptions = {
    rootMargin: '0px',
    threshold: 1
  }

let showSkill = (entries, observer) => {
    let skillTime = 0;
    let lineTime = 1000;
    let skillTime2 = 2000;
    entries.forEach(entry => {
        if(entry.isIntersecting){

            //mobile ---------------------
            skillsLeft.forEach( skill => {
                setTimeout(() => {
                    skill.style.opacity = "1";
                }, skillTime)
                skillTime += 200;
            })
            skillLines.forEach( line => {
                setTimeout(() => {
                    line.style.flexGrow = "1"
                }, lineTime)
                lineTime += 200;
            });
            skillsRight.forEach( skill => {
                setTimeout(() => {
                    skill.style.opacity = "1";
                }, skillTime2)
                skillTime2 += 200;
            })

            //desktop ---------------------
            desktopSkills.forEach( skill => {
                setTimeout(() => {
                    skill.children[0].style.opacity = "1";
                }, skillTime);
                setTimeout(() => {
                    skill.children[2].style.opacity = "1";
                }, skillTime2);
                setTimeout(() => {
                    skill.children[1].style.height = "70px"
                }, lineTime);
                skillTime2 += 200;
                skillTime += 200;
                lineTime += 200;
            })
        }
    })
}

const skillsObserver = new IntersectionObserver(showSkill, skillObserverOptions)

skillsObserver.observe(skillsDiv);

//animation for projects section 

const projectImages = Array.from(qsa(".projects__img"));

const imagesOptions = {
    root: null,
    rootMargin: "-30% 0px",
    threshold: 1
}
const showProjects = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.children[0].classList.add("project-scroll")
        } else {
            entry.target.children[0].classList.remove("project-scroll")
        }
    });
};

const projectObserver = new IntersectionObserver(showProjects, imagesOptions);

if(window.screen.width < 1440) {
    projectImages.forEach(image => {
        projectObserver.observe(image);
    });
};



//animation for back to top arrow 
const arrowUp = qs(".js-arrow-up");
const attribution = qs(".attribution")

let backToTopOptions = {
    rootMargin: "0px",
    threshold: 1
}

const animateBackToTop = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            arrowUp.classList.add("animate-back-to-top");
        }
    })
}

const backToTopObserver = new IntersectionObserver(animateBackToTop, backToTopOptions);

backToTopObserver.observe(attribution);

// event listener for back to top button 
const backToTopBtn = qs(".js-back-to-top-btn");

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});


