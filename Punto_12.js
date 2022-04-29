var get_numero_entero = function(){
    let numero = parseInt(prompt("Ingrese un numero para saber si es entero"))
    if (numero % 2 == 0){
        console.log(true)
    } else {
        console.log(false)
    }
}

get_numero_entero()