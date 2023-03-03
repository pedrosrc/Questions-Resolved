const array = [0,1];
let a, b
for( let indice = 2; indice < 20; indice++){
        a = array[indice - 1]
        b = array[indice - 2]
        array.push(a+b)

}

    //No indice limitei para o 20 pois se trata de um sistema infinito, e para impressão isso pesaria muito. 
    const numberr = 4
    //Nessa const define o numero no qual gostaria eu verificasse se existia no Finabocci
    if(array.includes(numberr)){
        console.log('------Questão-2--------')
        console.log('O valor está no fibonacci')
        console.log('Sequencia de Finabocci'+ array)
    }else{
        console.log('------Questão-2--------')
        console.log('O valor não esta')
        console.log(array)
    }
    




