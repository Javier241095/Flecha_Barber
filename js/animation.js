let animado = d.querySelector('.animation');
/*
function mostrasScroll(){
    let scrollTop = d.documentElement.scrollTop;
    let alturaAnimado = animado.offsetTop; 
    if(alturaAnimado - 600 < scrollTop){
        animado.style.opacity = 1;
    }


}

addEventListener('scroll', mostrasScroll);*/

d.body.onscroll = function(){
    let pos = window.scrollY;
// console.log('pos y del scroll:', pos )
    let ini = animado.offsetTop;
    let fin = animado.offsetHeight + ini;

    if(pos >= ini - 460 && pos <= fin){
        animado.style.transform = 'translateX(0vh)';
        // animado.style.height = '200px'
    }
}