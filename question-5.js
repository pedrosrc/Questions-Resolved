function inverter(str){
    
    var operador = '';

    for (var tamanho = str.length -1; tamanho >=0; tamanho--){
        operador += str[tamanho]
    }
    return operador;
}
console.log('------Questão-5--------')
console.log(inverter("Hello World"))