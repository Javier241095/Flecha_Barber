let Reservas = JSON.parse(localStorage.Reserva);
let reserva = Reservas[Reservas.length-1]

if(Reservas.length){
    let p = d.querySelectorAll('body > div div p')[0];
    p.innerHTML = `Hola ${reserva.Nombre} ${reserva.Apellido} te esperamos hoy a las ${reserva.Horario}hs en nuestro local ubicado en Domingo Salaberry 961, Claypole.`;

    let divX = d.querySelector('body > div');
    let clase = ' '
    clase = JSON.parse(localStorage.msjDiv)
    if(clase != ' '){
        divX.classList.add(clase)
    }

    divX.addEventListener('click', function(){
        this.parentNode.parentNode.remove();
        msjDiv = ' ';
        localStorage.msjDiv = JSON.stringify(msjDiv);
        location.reload();
    });
}