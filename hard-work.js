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
