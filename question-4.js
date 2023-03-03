let sp = 67.83643
let rj = 36.67866
let mg = 29.22988
let es = 27.16548
let outros = 19.84953

function porcentagem(estado){

let valorTotal = (sp + rj + mg+ es + outros).toFixed(2)
let Total = ((estado*100) / valorTotal).toFixed(1)

return Total;

}
console.log('------Questão-4--------')
console.log('Sao Paulo teve ' + porcentagem(sp) + ' % do valor total' )
console.log('Rio de JAneiro teve ' + porcentagem(rj) + ' % do valor total' )
console.log('Minas Gerais ' + porcentagem(mg) + ' % do valor total' )
console.log('Espirito Santo teve ' + porcentagem(es) + ' % do valor total' )
console.log('Outros teve ' + porcentagem(outros) + ' % do valor total' )


