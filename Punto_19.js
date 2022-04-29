var get_validar_letra = function(){
    let letra = prompt("Ingresa una letra para saber si es una vocal")
    if (letra.length > 1) { 
        console.log("No se puede procesar el dato ya que contiene más de 1 carácter")
    } else {
        switch (letra.toLowerCase()) {
            case "a":
                console.log('La letra ingresada es una vocal')
                break
            case "e":
                console.log('La letra ingresada es una vocal')
                break
            case "i":
                console.log('La letra ingresada es una vocal')
                break
            case "o":
                console.log('La letra ingresada es una vocal')
                break
            case "u":
                console.log('La letra ingresada es una vocal')
                break
            default:
                console.log('La letra ingresada es una consonante')
        }
    }
}

get_validar_letra()