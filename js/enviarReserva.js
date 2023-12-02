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
/*
<div>
    <div>
        <div></div>
        <h2>Turno reservado</h2>
        <p>Hola Javier Lescano te esperamos hoy a las 10:00hs en nuestro local ubicado en Domingo Salaberry 961, Claypole.</p>

        <p>Recorda estar 15 minutos antes.</p>
    </div>
</div>
*/