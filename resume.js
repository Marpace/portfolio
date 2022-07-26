const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

const pageNumberSelector = qs(".page-number__selector")
const pageNumbers = Array.from(qsa(".page-number"));
const resumePage2 = qs(".resume-2");

pageNumbers.forEach(number => {
    number.addEventListener('click', () => {
        if(number.innerHTML === "1") {
            pageNumberSelector.style.left = "-7px";
            resumePage2.style.opacity = "0"
        } else {
            pageNumberSelector.style.left = "35px"
            resumePage2.style.opacity = "1"
        }
        pageNumbers.forEach(number => {
            number.classList.remove("number-active");
        });
        number.classList.add("number-active");
    });
});