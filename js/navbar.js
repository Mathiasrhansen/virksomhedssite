const burger = document.querySelector(".burger");
const menu = document.querySelector('#menu');
const main = document.querySelector(".main");
const footer = document.querySelector(".footer-flex");

burger.addEventListener("click", burgermenu);

function burgermenu() {
    console.log("trykket");
    menu.classList.toggle("visible");
    main.classList.toggle("visible");
    footer.classList.toggle("visible");
}