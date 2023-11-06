let Inputs = [];
Inputs.push(nombre, apellido, email);

let seleccion = null;

nombre.addEventListener('click', Seleccion);
apellido.addEventListener('click', Seleccion);
email.addEventListener('click', Seleccion);

function Seleccion(){
    seleccion = this;
    for(let input of Inputs){
        if(seleccion != input || seleccion.className == "errorInput"){
            input.classList.remove("outLine");
        }else{
            seleccion.classList.add("outLine");
        };
    };
}