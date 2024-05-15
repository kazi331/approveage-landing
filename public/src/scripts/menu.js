const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close-menu");

const openMenu = () => {
    menu.classList.remove("h-0");
    menu.classList.remove("h-full");
};
const closeMenu = () => {
    menu.classList.add("h-0");
    menu.classList.remove("h-full");
};
menuBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)