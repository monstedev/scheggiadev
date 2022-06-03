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

// const title = document.querySelector('#about-title')

// var x = window.matchMedia("(max-width: 1024px)")
// media(x)
// x.addListener(media) 

// function media(x) {
//     if (x.matches) { 
//         title.classList.remove('text-start')
//         title.classList.toggle('text-center')
//     }
//   }