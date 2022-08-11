//nav
const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');

nav.addEventListener('click',function(){
    nav.classList.toggle('nav-active');
    menu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll=function(){
    const header = document.querySelector('header');
    const fixedNavabar = header.offsetTop;
    if(window.pageYOffset > fixedNavabar){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}