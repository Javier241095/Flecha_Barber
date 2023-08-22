let imgModal = [
    {
        img: "galeria/imgModal/288462491_436407614660557_4061630958711063188_n.jpg",
        Alt : " ",
    },
    {
        img: "galeria/imgModal/312645148_671840001166324_2100627630034627_n.jpg",
        Alt : " ",
    },
    {
        img: "galeria/imgModal/322671696_119200714213639_7781986510962650683_n.jpg",
        Alt : " ",
    },
    {
        img: "galeria/imgModal/122296400_1312124739126185_5194746244852246128_n.jpg",
        Alt : " ",
    },
    {
        img: "galeria/imgModal/330195960_587088249811299_2503661949690617732_n.jpg",
        Alt : " ",
    },
];

//Busqueda de la <seccion id="galeria"
let galeria = d.querySelector('#galeria');

//Busqueda del las imagenes miniatura
let imgGaleria = d.querySelectorAll('#galeria div figure img');

for(let i = 0; i < imgGaleria.length; i++){
    imgGaleria[i].dataset['pos'] = i;
    //console.log(imgGaleria[i])
}

let imgTarget = d.querySelector('#galeria div')

imgTarget.addEventListener('click', (e)=>{
    //console.log(e.target.dataset)
    if(e.target && e.target.tagName === 'IMG'){
        let i = parseInt(e.target.dataset.pos)
        //div(1)
        let div = d.createElement('div');
        galeria.appendChild(div);
        //div(2)
        let divX = d.createElement('div');
        divX.addEventListener('click', function(){
            this.parentNode.remove();
        });
        div.appendChild(divX);
        //<div>(1) figure
        let figure = d.createElement('figure');
        div.appendChild(figure);
        //<div>(1) figure img
        let img = d.createElement('img');
        img.src = imgModal[i].img
        figure.appendChild(img);
        
        //<div>(1) ul(1)
        let ulBtns = d.createElement('ul');
        div.appendChild(ulBtns);
        //<div>(1) ul(2)
        let ulIndicador = d.createElement('ul');
        div.appendChild(ulIndicador);
        //Se recorre el array imgModal para crear las misma cantidad de indicadores que de imagenes en el array.
        imgModal.forEach(function(nombre, i){
            //Se crea la atique li
            let liIndicador = d.createElement('li');
            ulIndicador.appendChild(liIndicador);
        })
        //Se busca los indicadores(li) creados
        let ulLiIndicadores = d.querySelectorAll('#galeria div ul:last-child li');
         
        let movimientoImg = 1;
        let posInicial = 0;
        let posicion = i;
        let posFinal = imgModal.length - 1;
        
        //Se le agrega la CLASE "active" para indicar la posicion de la imagen cliquiada en la modal
        ulLiIndicadores[posicion].classList.add('active');

        //Se crea el btn anterior(li)
        let liAnterior = d.createElement('li');
        liAnterior.innerHTML = "<";
        //Esta funcion sirve para cambiar el indice hacia atras en el array imgModal que muestra la imagen ampliada de la miniatura seleccionada
        liAnterior.addEventListener('click', function(){
            posicion -= movimientoImg;

            if(posicion < posInicial){
                posicion = posInicial;
            };
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores.forEach(function(nombre, j){
                ulLiIndicadores[j].classList.remove('active')
            })
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores[posicion].classList.add('active')
    
            //console.log(`btnAnterior ${posicion}`)
            //Se muestra la imagen GRANDE correspodiente a la miniatura que se le haya echo click
            img.src = imgModal[posicion].img;
        })
        ulBtns.appendChild(liAnterior);
        //Esta funcion sirve para cambiar el indice hacia adelante en el array imgModal que muestra la imagen ampliada de la miniatura seleccionada
        let liSiguiente = d.createElement('li');
        liSiguiente.innerHTML = ">";
        liSiguiente.addEventListener('click', function(){
            posicion += movimientoImg;
            if(posicion > posFinal){
                posicion = posFinal
            }
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores.forEach(function(nombre, j){
                    ulLiIndicadores[j].classList.remove('active')
            })
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores[posicion].classList.add('active')
            //console.log(`btnAnterior ${posicion}`)
            //Se muestra la imagen GRANDE correspodiente a la miniatura que se le haya echo click
            img.src = imgModal[posicion].img;
        })
        ulBtns.appendChild(liSiguiente);
    }
})


//Recorrido de "imGaleria" para obtener las imagenes miniatura para que cuando se haga ckick se vea su imagen grande carrespodiente a cada una. Esta recorrida se realiza con un forEach para obtener los INDICES numericos y las etiquetas ya que con un for comun lo q se obtiene son las etique HTML solamente y eso dificualta a la funcion de los botones "anterior y siguiente" para realizar los cambiambos de imagenes.
/*
imgGaleria.forEach(function(img, i){
    img.addEventListener('click', function(){ 
        //div(1)
        let div = d.createElement('div');
        galeria.appendChild(div);
        //div(2)
        let divX = d.createElement('div');
        divX.addEventListener('click', function(){
            this.parentNode.remove();
        });
        div.appendChild(divX);
        
        //<div>(1) figure
        let figure = d.createElement('figure');
        div.appendChild(figure);
        //<div>(1) figure img
        let img = d.createElement('img');
        img.src = imgModal[i].img;
        figure.appendChild(img); 

        //<div>(1) ul(1)
        let ulBtns = d.createElement('ul');
        div.appendChild(ulBtns);
        //<div>(1) ul(2)
        let ulIndicador = d.createElement('ul');
        div.appendChild(ulIndicador);
        //Se recorre el array imgModal para crear las misma cantidad de indicadores que de imagenes en el array.
        imgModal.forEach(function(nombre, i){
            //Se crea la atique li
            let liIndicador = d.createElement('li');
            ulIndicador.appendChild(liIndicador);
        })
        //Se busca los indicadores(li) creados
        let ulLiIndicadores = d.querySelectorAll('#galeria div ul:last-child li');
         
        let movimientoImg = 1;
        let posInicial = 0;
        let posicion = i;
        let posFinal = imgModal.length - 1;
        
        //Se le agrega la CLASE "active" para indicar la posicion de la imagen cliquiada en la modal
        ulLiIndicadores[posicion].classList.add('active');

        //Se crea el btn anterior(li)
        let liAnterior = d.createElement('li');
        liAnterior.innerHTML = "<";
        //Esta funcion sirve para cambiar el indice hacia atras en el array imgModal que muestra la imagen ampliada de la miniatura seleccionada
        liAnterior.addEventListener('click', function(){
            posicion -= movimientoImg;

            if(posicion < posInicial){
                posicion = posInicial;
            };
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores.forEach(function(nombre, i){
                ulLiIndicadores[i].classList.remove('active')
            })
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores[posicion].classList.add('active')
    
            //console.log(`btnAnterior ${posicion}`)
            //Se muestra la imagen GRANDE correspodiente a la miniatura que se le haya echo click
            img.src = imgModal[posicion].img;
        })
        ulBtns.appendChild(liAnterior);
        //Esta funcion sirve para cambiar el indice hacia adelante en el array imgModal que muestra la imagen ampliada de la miniatura seleccionada
        let liSiguiente = d.createElement('li');
        liSiguiente.innerHTML = ">";
        liSiguiente.addEventListener('click', function(){
            posicion += movimientoImg;
            if(posicion > posFinal){
                posicion = posFinal
            }
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores.forEach(function(nombre, i){
                    ulLiIndicadores[i].classList.remove('active')
            })
            //Se agrega al li la CLASE "active" de la imagen correspondiente
            ulLiIndicadores[posicion].classList.add('active')
            //console.log(`btnAnterior ${posicion}`)
            //Se muestra la imagen GRANDE correspodiente a la miniatura que se le haya echo click
            img.src = imgModal[posicion].img;
        })
        ulBtns.appendChild(liSiguiente);
    });
});
*/

/*
Esta es la estructura modal HTML que se crea apartir de hacer CLICK en una imagen de la seccion GALERIA 
<div>(1)
    <div></div>(2) Este se utiliza para cerrar la modal
    <figure>
        <img src="galeria/imgTable/288462491_436407614660557_4061630958711063188_n.jpg" alt="">
    </figure>
    <ul>(1) Extructura par los btn "anterior y siguiente"
        <li><</li> Btn anterior
        <li>></li> Btn siguiente
    </ul>
    <ul>(2) Extructura para los indicadores
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
*/