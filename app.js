});const menu = document.querySelector('#mobile-menu');
const menuLst = document.querySelector('.navbar__menu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLst.classList.toggle('active');