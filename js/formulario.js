formulario.onsubmit = function(){
    enviar = true;

    Validacion(nombre, label[0], msj[0], 'Debe ingresar un nombre.', 'El nombre no debe tener numeros o caracteres especiales (#@!$&?).', 'El nombre debe tener como minimio 4 caracteres.');

    Validacion(apellido, label[1], msj[1], 'Debe ingresar un apellido.', 'El apellido no debe tener numeros o caracteres especiales (#@!$&?).', 'El apellido debe tener como minimio 4 caracteres.');
    
    ValidarEmail();

    Selected();

    EnviarReserva();
   
    return enviar;
}

/*if(enviar != false){
    let bodyDiv = d.querySelector('body');
        //div(1)
        let DivMjs = d.createElement('div');
        bodyDiv.appendChild(DivMjs);
        //div(2)
        let DivCaja = d.createElement('div');
        DivMjs.appendChild(DivCaja);
        //div(3)
        let DivX = d.createElement('div');
        DivCaja.appendChild(DivX);
        //H2
        let h2 = d.createElement('h2');
        h2.innerHTML = 'Turno reservado';
        DivCaja.appendChild(h2);
        //P1
        let p1 = d.createElement('p');
        p1.innerHTML = `Hola ${nombre.value.trim()} ${apellido.value.trim()} te esperamos hoy a las ${horario.value}hs en nuestro local ubicado en Domingo Salaberry 961, Claypole.`;
        DivCaja.appendChild(p1);
        //P2
        let p2 = d.createElement('p');
        p2.innerHTML = 'Recorda estar 15 minutos antes.';
        DivCaja.appendChild(p2);
}*/
