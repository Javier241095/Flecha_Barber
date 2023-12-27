let Horarios = [
    {
        hora: "10:00",
        reservado: false,
    },
    {
        hora: "10:30",
        reservado: false,
    },
    {
        hora: "11:00",
        reservado: false,
    },
    {
        hora: "11:30",
        reservado: false,
    },
    {
        hora: "12:00",
        reservado: false,
    },
    {
        hora: "12:30",
        reservado: false,
    },
    {
        hora: "13:00",
        tipo: "pm",
        reservado: false,
    },
    {
        hora: "13:30",
        reservado: false,
    },
    {
        hora: "16:00",
        reservado: false,
    },
    {
        hora: "16:30",
        reservado: false,
    },
    {
        hora: "17:00",
        reservado: false,
    },
]

if(localStorage.Horarios){
    Horarios = JSON.parse(localStorage.Horarios);
   if(Horarios.length <= 0){
        localStorage.clear();
        location.reload();
        //Esto en realidad esta parte del codigo tendria que mostrar que ya no hay mas hoararios disponibles y no eliminar el almacenamineto local que impide mostrar el msj de reserva exitosa
    }
}else{
    localStorage.Horarios = JSON.stringify(Horarios);
}
/*
for(let hs of Horarios){
    
//`${hs.hora} ${hs.tipo} Reservado` `${hs.hora} ${hs.tipo} Disponible`
    if(hs.reservado == false){
        let option = d.createElement('option');
        option.value = hs.hora;
        option.innerHTML =  `${hs.hora}`;
       // option.disabled = true
       horario.appendChild(option);
       
    } else if(hs.reservado == true){
        horario.disabled = true
    }
};*/
/*
for(let hs of Horarios){
    let option = d.createElement('option');
    option.value = hs.hora;
    option.innerHTML =  `${hs.hora}`;
    horario.appendChild(option);
};*/

for(let i = 0; i < Horarios.length; i++){
    console.log(i);
    let li = d.createElement('li');
    li.innerHTML =  `${Horarios[i].hora}`;
    li.dataset.id = `${i}`;
    ul.appendChild(li);

    let span = d.createElement('span');
    li.appendChild(span)
}
/*
for(let hs of Horarios){
    let li = d.createElement('li');
    li.innerHTML =  `${hs.hora}`;
    ul.appendChild(li);

    let span = d.createElement('span');
    li.appendChild(span)
}*/