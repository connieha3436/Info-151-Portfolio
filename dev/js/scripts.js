const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav-bar-links');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

AOS.init({
    duration: 1000,
    once: true,

});