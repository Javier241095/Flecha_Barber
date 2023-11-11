formulario.onsubmit = function(){
    enviar = true;

    Validacion(nombre, label[0], msj[0], 'Debe ingresar un nombre.', 'El nombre no debe tener numeros o caracteres especiales (#@!$&?).', 'El nombre debe tener como minimio 4 caracteres.');

    Validacion(apellido, label[1], msj[1], 'Debe ingresar un apellido.', 'El apellido no debe tener numeros o caracteres especiales (#@!$&?).', 'El apellido debe tener como minimio 4 caracteres.');
    
    ValidarEmail();

    Selected();

     
    EnviarReserva();
   
    return enviar;
}

