var get_numeros_decimal_entero = function(){
    let numero_decimal = parseFloat(prompt("Ingresa un número con decimales"))
    let numero_entero = parseInt(prompt("Ingresa un número entero"))
    let suma_numeros = numero_decimal + numero_entero
    console.log(`El resultado de la suma es ${suma_numeros}`)
}
