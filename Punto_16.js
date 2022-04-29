var get_comparacion_inicio_final = function(){
    let nombre_uno = prompt("Ingrese su nombre")
    let nombre_dos = prompt(`Ingrese el nombre a comparar`)
    if(nombre_uno[0] == nombre_dos[0] || nombre_uno[nombre_uno.length-1] == nombre_dos[nombre_dos.length-1]){
        console.log(true)
    } else {
        console.log(false)
    }
}

get_comparacion_inicio_final()