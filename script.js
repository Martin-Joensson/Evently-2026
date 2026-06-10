const btnNavOpen = document.querySelector("#btnNavOpen");
const btnNavClose = document.querySelector("#btnNavClose");
const media = window.matchMedia("(width < 50rem)");
const topNavMenu = document.querySelector(".topnav__menu");
const main = document.querySelector("main");
const hearts = document.querySelectorAll(".grid-section__heart");

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transition = "none";
  } else {
    // is tablet or larger
    topNavMenu.removeAttribute("inert");
    topNavMenu.classList.remove("is-open");
  }
}

function openMobileMenu() {
  btnNavOpen.setAttribute("aria-expanded", "true");
  topNavMenu.classList.add("is-open");
  topNavMenu.removeAttribute("inert");
  topNavMenu.removeAttribute("style");
  main.setAttribute("inert", "");
  btnNavClose.focus();
}

function closeMobileMenu() {
  btnNavOpen.setAttribute("aria-expanded", "false");
  topNavMenu.classList.remove("is-open");
  topNavMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  btnNavOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = "none";
  }, 500);
}

setupTopNav(media);

btnNavOpen.addEventListener("click", openMobileMenu);
btnNavClose.addEventListener("click", closeMobileMenu);

// Event listener for the ESC key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    closeMobileMenu();
  }
});

media.addEventListener("change", function (e) {
  setupTopNav(e);
});

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {

    heart.classList.toggle("heart-fill");
  });
});
