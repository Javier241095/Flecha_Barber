let Reserva = [];

if(localStorage.Reserva){
    Reserva = JSON.parse(localStorage.Reserva);
}else{
    localStorage.Reserva = JSON.stringify(Reserva);
}

function EnviarReserva(){
    if(enviar){
        Reserva.push(
            {
                Nombre: nombre.value.trim(),
                Apellido: apellido.value.trim(),
                Email: email.value.trim(),
                Horario: horario.value,
            }
        )
        for(let hs of Horarios){
            if(hs.hora == horario.value){
                //hs.reservado = true;
                Horarios.splice(h4.innerHTML, 1)
            }
        }
        localStorage.Reserva = JSON.stringify(Reserva);
        localStorage.Horarios = JSON.stringify(Horarios);
        location.reload();
    }
}