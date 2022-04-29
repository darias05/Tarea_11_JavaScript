var get_cantidad_kilometros = function(){
    let kilometros_recorridos = Number(prompt("Ingresa los kilometros recorridos"))
    let combustible_gastado = Number(prompt("Ingresa la cantidad de combustible gastado"))
    let resultado = kilometros_recorridos / combustible_gastado
    console.log(`El consumo por kilometro es de: ${resultado}`)
}

get_cantidad_kilometros()