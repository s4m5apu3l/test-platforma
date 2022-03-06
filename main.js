const burger = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header-nav__items');
let menuOpen = false;

burger.addEventListener('click', () => {
  if(!menuOpen) {
    burger.classList.add('is-active');
    menuOpen = true;
    menu.classList.add('nav-active');
  } else {
    burger.classList.remove('is-active');
    menuOpen = false;
    menu.classList.remove('nav-active');
  }
})

function closeMenu() {
  menu.classList.remove('nav-active');
  burger.classList.remove('is-active');
}