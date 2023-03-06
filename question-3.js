fetch('faturamento.json')
.then(response => response.json())
.then(data => {
    let menorValor = data.faturamento_diario[0].valor;
    let maiorValor = data.faturamento_diario[0].valor;
    let soma = 0


    data.faturamento_diario.forEach(faturamento => {
        if(faturamento.valor < menorValor){
            menorValor = faturamento.valor
        }
    })
    data.faturamento_diario.forEach(faturamento =>{
        if(faturamento.valor > maiorValor){
            maiorValor = faturamento.valor
        }
    })
    data.faturamento_diario.forEach(faturamento =>{
        soma += faturamento.valor
    })

    const mediaMensal = soma/ data.faturamento_diario.length;
    let diasAcimaMedia = 0
    data.faturamento_diario.forEach(faturamento => {
        if(faturamento.valor > mediaMensal){
            diasAcimaMedia ++
        }
    })
    console.log('------Questão-3--------')
    console.log(`O menor valor de faturamento ocorrido no mês foi de R$ ${menorValor}`)
    console.log(`O maior valorde faturamento ocorrido no mês foi de R$ ${maiorValor}`)
    console.log(`O número de dias acima da media do faturamento diário foi ${diasAcimaMedia}`)
    
})
.catch(error => console.log(error))


//no faturamento consta somente 22 dias, pois como estava na descrição os finais de semana e feriado não faria parte da conta



