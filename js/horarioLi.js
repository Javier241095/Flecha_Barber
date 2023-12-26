let divHs = d.querySelector('aside form div > div');
//let HorariosLi = d.querySelectorAll('aside form div ul li');
let body = d.querySelector("body");

h4.addEventListener('click', () => {
    ul.classList.add('HsActivo');
    divHs.classList.add('HsActivo');
    body.classList.add('scrollNull')
});

divHs.addEventListener('click', () => {
    divHs.classList.remove('HsActivo');
    ul.classList.remove('HsActivo');
    body.classList.remove('scrollNull')
});

/*
for(let li of HorariosLi){
    li.addEventListener('click', () => {
        divHs.classList.remove('HsActivo')
        ul.classList.remove('HsActivo')
        body.classList.remove('scrollNull')
        h4.innerHTML = li.innerHTML
    })
};*/

ul.addEventListener('click', (e)=> {
    
    if(e.target && e.target.tagName === 'LI'){
        divHs.classList.remove('HsActivo')
        ul.classList.remove('HsActivo')
        body.classList.remove('scrollNull')
        h4.innerHTML = e.target.innerHTML;
        horario.value = e.target.innerText;
    } 
    
})