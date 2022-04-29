var get_valor_absoluto = function(){
    let numero = Number(prompt("Ingresa el número a mostrar su valor absoluto"))
    if (numero < 0){
        numero = numero * (-1)
    }
    console.log(`Valor absoluto: ${numero}`)
}

get_valor_absoluto()