var get_fecha = function(){
    let fecha_numero = parseInt(prompt("Ingresa una fecha formada por 8 numeros los primeros 2 son el día, los sigueintes 2 el mes y los ultimos 4 el año"))
    console.log(`Fecha con formato DD/MM/YYY: ${fecha_numero.toString().substr(0,2)}/${fecha_numero.toString().substr(2,2)}/${fecha_numero.toString().substr(4,4)}`)
}

get_fecha()
