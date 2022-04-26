let nav, navLinksWrapper, navLinks;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  nav = document.querySelector('.navbar-collapse');
  navLinksWrapper = document.querySelector('.nav-desktop-links');
  navLinks = document.querySelectorAll('.nav-desktop-link');
};

const prepareDOMEvents = () => {
  document.addEventListener('click', closeNav);
  navLinksWrapper.addEventListener('click', checkActive);
};

const closeNav = () => {
  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
  }
};

const checkActive = e => {
  if (!e.target.closest('.nav-desktop-link').classList.contains('active')) {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    e.target.classList.add('active');
  }
};

document.addEventListener('DOMContentLoaded', main);
