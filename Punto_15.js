var get_comparacion_palabras = function(){
    let palabra_uno = prompt("Ingrese la primera palabra")
    let palabra_dos = prompt("Ingrese la segunda palabra")
    if (palabra_uno.length < palabra_dos.length){
        console.log(true)
    } else {
        console.log(false)
    }
}

get_comparacion_palabras()