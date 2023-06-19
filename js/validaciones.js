let enviar = true;

function Validacion(input, labelI, msjI, msjVacio = 'input vacio', msjNum = 'input isNaN', msjInvalido = 'input < 4'){
    input.classList.remove("errorInput");
    labelI.classList.remove("errorLabel");
    msjI.innerHTML = '';
    
    let inputTrim = input.value.trim();
    let expReg = /[^a-zA-Z]/;
    let inputValido = expReg.test(inputTrim);
    
    if(inputTrim == ""){
        input.classList.add("errorInput");
        labelI.classList.add("errorLabel");
        msjI.innerHTML = msjVacio;
        enviar = false;
    }else if(inputValido){
        input.classList.add("errorInput");
        labelI.classList.add("errorLabel");
        msjI.innerHTML = msjNum;
        enviar = false;
    }else if(inputTrim.length <= 4){
        input.classList.add("errorInput");
        labelI.classList.add("errorLabel");
        msjI.innerHTML = msjInvalido;
        enviar = false;
    }
}

function ValidarEmail(){
    email.classList.remove("errorInput");
    label[2].classList.remove("errorLabel");
    msj[2].innerHTML = '';

    let Email = email.value.trim();
    let expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    ///^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validoEmail = expReg.test(Email);
    
    if(Email == ""){
        email.classList.add("errorInput");
        label[2].classList.add("errorLabel");
        msj[2].innerHTML = 'Debe ingresar un email.';
        enviar = false;
    }
    else if(!isNaN(Email)){
        email.classList.add("errorInput");
        label[2].classList.add("errorLabel");
        msj[2].innerHTML = 'El email no debe ser numerico';
        enviar = false;
    }else if(!(validoEmail)){
        email.classList.add("errorInput");
        label[2].classList.add("errorLabel");
        msj[2].innerHTML = 'El email no es valido';
        enviar = false;
    }
}

function Selected(){
    let h3 = d.querySelector('aside form div h3');
    
    h4.classList.remove("errorInput");
    h3.classList.remove("errorLabel");
    msj[3].innerHTML = '';

    if (h4.innerHTML == 'Horarios disponibles') {
        h4.classList.add("errorInput");
        h3.classList.add("errorLabel");
        msj[3].innerHTML = 'Debe seleccionar un horario';
        enviar = false;
    }
}