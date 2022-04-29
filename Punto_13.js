var get_edad_articulos = function(){
    let edad = Number(prompt("Ingrese su edad"))
    let cantidad_articulos = Number(prompt("Ingrese su edad"))
    if (edad > 18 & cantidad_articulos > 1){
        console.log(true)
    } else {
        console.log(false)
    }
}

get_edad_articulos()