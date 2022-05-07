let mainLogo = document.querySelector('.main-logo');
let secondLogo = document.querySelector('.second-logo');
let labelLogo = document.getElementById('logo');

labelLogo.addEventListener('mouseenter', ()=>{
    mainLogo.classList.add('hide-logo');
    secondLogo.classList.remove('hide-logo');
});

labelLogo.addEventListener('mouseleave', ()=>{
    secondLogo.classList.add('hide-logo');
    mainLogo.classList.remove('hide-logo');
});


let bars_btn = document.querySelector('.bars-ico');
let ul = document.querySelector('.ul');

bars_btn.addEventListener('click', ()=>{
    ul.classList.toggle('ul-right');
});