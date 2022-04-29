var get_menor_tres_numeros = function(){
    let list_numeros = []
    let numero_uno = Number(prompt("Ingresa el primer número"))
    list_numeros.push(numero_uno)
    let numero_dos = Number(prompt("Ingresa el segundo número"))
    list_numeros.push(numero_dos)
    let numero_tres = Number(prompt("Ingresa el tercer número"))
    list_numeros.push(numero_tres)
    list_numeros.sort((a, b) => a - b)
    console.log(`El menor de los 3 números es: ${list_numeros[0]}`)
}

get_menor_tres_numeros()
