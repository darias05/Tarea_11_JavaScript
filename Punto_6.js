var get_promedio_tres_numeros = function(){
    let numero_uno = Number(prompt("Ingresa el primer número"))
    let numero_dos = Number(prompt("Ingresa el segundo número"))
    let numero_tres = Number(prompt("Ingresa el tercer número"))
    let resultado = (numero_uno + numero_dos + numero_tres) / 3
    console.log(`El promedio de los 3 números es: ${resultado}`)
}

get_promedio_tres_numeros()