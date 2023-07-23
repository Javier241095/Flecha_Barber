let Horarios = [
    {
        hora: "10:00",
        tipo: "am",
        reservado: false,
    },
    {
        hora: "10:30",
        tipo: "am",
        reservado: false,
    },
    {
        hora: "11:00",
        tipo: "am",
        reservado: false,
    },
    {
        hora: "11:30",
        tipo: "am",
        reservado: false,
    },
    {
        hora: "12:00",
        tipo: "pm",
        reservado: false,
    },
    {
        hora: "12:30",
        tipo: "pm",
        reservado: false,
    },
    {
        hora: "13:00",
        tipo: "pm",
        reservado: false,
    },
    {
        hora: "13:30",
        tipo: "pm",
        reservado: false,
    },
    {
        hora: "16:00",
        tipo: "pm",
        reservado: false,
    },
    {
        hora: "16:30",
        tipo: "pm",
        reservado: false,
    },
    {
        hora: "17:00",
        tipo: "pm",
        reservado: false,
    },
]

if(localStorage.Horarios){
    Horarios = JSON.parse(localStorage.Horarios);
   /* if(Horarios.length <= 0){
        horario.disabled = true
        option.innerHTML = 'No hay horarios disponibles'
    }*/
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

for(let hs of Horarios){
    let li = d.createElement('li');
    li.innerHTML =  `${hs.hora}`;
    ul.appendChild(li);

    let span = d.createElement('span');
    li.appendChild(span)
}