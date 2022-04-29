var get_frase_par = function(){
    let frase = prompt("Ingrese una frase para saber si es par o impar")
    if (frase.length % 2 == 0){
        console.log(true)
    } else {
        console.log(false)
    }
}

get_frase_par()