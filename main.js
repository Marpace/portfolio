const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);


//animation for about section
const glassPanel = qs(".glass-blur")
const aboutText = qs(".about__text");

let aboutObserverOptions = {
    rootMargin: "0px",
    threshold: 1
}

let showAbout = (entries, observer) => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            glassPanel.classList.add("see-through")
            console.log("intersected")
        }
        else {
            glassPanel.classList.remove("see-through");
        }
    })
}

const aboutObserver = new IntersectionObserver(showAbout, aboutObserverOptions);

aboutObserver.observe(aboutText);

// Animation for skills section
const skillLines = qsa(".column-left__line");
const skillsLeft = qsa(".column-left__item h3");
const skillsRight = qsa(".skills__column-right h3");
const skillsDiv = qs(".skills");

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
        }
    })
}

const skillsObserver = new IntersectionObserver(showSkill, skillObserverOptions)

skillsObserver.observe(skillsDiv);

