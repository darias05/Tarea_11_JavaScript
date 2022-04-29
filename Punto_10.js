var get_cantidad_shows = function(){
    let numero_shows = parseInt(prompt("Ingresa el número de shows"))
    if (numero_shows > 3){
        console.log(true)
    } else {
        console.log(false)
    }
}

get_cantidad_shows()