var get_numero_mayor = function(){
    let numero_uno = Number(prompt("Ingresa el primer número"))
    let numero_dos = Number(prompt("Ingresa el segundo número"))
    if (numero_uno > numero_dos){
        console.log(`El número mayor es: ${numero_uno}`)
    } else if (numero_uno < numero_dos){
        console.log(`El número mayor es: ${numero_dos}`)
    } else {
        console.log(`El número 1 =  ${numero_uno} es igual al número 2 = ${numero_dos}`)
    }
}

get_numero_mayor()