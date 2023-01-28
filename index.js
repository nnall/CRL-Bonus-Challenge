const navBtn = document.querySelector('.nav__btn');
const nav = document.querySelector('nav');


navBtn.addEventListener('click', function(){
    nav.classList.contains('displayNav') ? 
    nav.classList.remove('displayNav') :
    nav.classList.add('displayNav');
})