var get_temperatura = function(){
    let temperatura_fahrenheit = Number(prompt("Ingresa la temperatura en Fahrenheit"))
    let resultado_equivalente_celsius = (5/9) * (temperatura_fahrenheit-32)
    console.log(`Equivale a: ${resultado_equivalente_celsius}° Celsius`)
}

get_temperatura()