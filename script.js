const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click',function() {
    nav.classList.toggle('slide');
});

var navbar = document.querySelector(".header");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
})

