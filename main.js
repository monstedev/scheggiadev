// SHOW/HIDE NAV MENU ON MOBILES

const menu = document.querySelector('#ul');
const logo = document.querySelector('#logo')
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

}) 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// CHANGE NAVBAR ON SCROLL

// window.addEventListener('scroll', () => {
//     document.querySelector('#logo').classList.toggle('logo-scroll', window.scrollY > 600)
//     document.querySelector('#a1').classList.toggle('a-scroll', window.scrollY > 600)
//     document.querySelector('#a2').classList.toggle('a-scroll', window.scrollY > 600)
//     document.querySelector('#a3').classList.toggle('a-scroll', window.scrollY > 600)
// })