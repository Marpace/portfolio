const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

const pageNumberSelector = qs(".page-number__selector")
const pageNumbers = Array.from(qsa(".page-number"));

pageNumbers.forEach(number => {
    number.addEventListener('click', () => {
        if(number.innerHTML === "1") {
            pageNumberSelector.style.left = "-7px"
        } else {
            pageNumberSelector.style.left = "35px"
        }
        pageNumbers.forEach(number => {
            number.classList.toggle("number-active")
        });
    });
});