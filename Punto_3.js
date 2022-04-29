var get_dos_numeros = function(){
    let numero_uno = Number(prompt("Ingresa el primer número"))
    let numero_dos = Number(prompt("Ingresa el segundo número"))
    let suma_primeros_dos = numero_uno + numero_dos
    console.log(`Los primeros dos números suman: ${suma_primeros_dos}`)
    let numero_tres = Number(prompt("Ingresa el tercer número"))
    let resultado = suma_primeros_dos * numero_tres
    console.log(`El resultado de la suma de los 2 primeros números por el tercer número es: ${resultado}`)
}

get_dos_numeros()
