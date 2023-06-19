'use strict';
const d = document;
let menu = d.querySelector('header div nav div');
let navUl = d.querySelector('header div nav ul');
let div = d.querySelector('header div > div');

menu.addEventListener('click', () => {
    navUl.classList.toggle('menuActive')
    div.classList.toggle('menuActive')
    if(navUl.className == 'menuActive'){
        menu.classList.add('menuX');
    }else{
        menu.classList.remove('menuX');
    };
});

navUl.addEventListener('click', (e)=>{
    if(e.target && e.target.tagName === 'A'){
        navUl.classList.remove('menuActive');
        div.classList.remove('menuActive');
        menu.classList.remove('menuX');
    }
})
/*
for(let a of d.querySelectorAll('header div nav ul li a')){
    a.addEventListener('click', () => {
        navUl.classList.remove('menuActive');
        div.classList.remove('menuActive');
        menu.classList.remove('menuX');
    })
};*/