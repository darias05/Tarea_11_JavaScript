var get_posicion_texto = function(){
    let texto = prompt("Ingrese un texto")
    console.log(`El cáracter en primer lugar es: ${texto[0]}`)
    let segunda_posicion = parseInt(prompt(`Ingrese un numero positivo entre 0 y ${texto.length}`))
    console.log(`El cáracter esta posición es: ${texto[segunda_posicion]}`)
}

get_posicion_texto()