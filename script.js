console.log("conntected");

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

const toggleNav = () => {
  navLinks.classList.toggle("translate");
};

menu.addEventListener("click", toggleNav);
