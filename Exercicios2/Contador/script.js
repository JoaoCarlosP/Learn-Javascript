function verificar(){

    var inicio = document.getElementById('numInicio')
    var fim = document.getElementById('numFim')
    var passo = document.getElementById('numPasso')
    var resposta = document.getElementById('resposta')
    resposta.innerHTML = ''

    //================= Verificação e tratamento de erros! ===============
    
    if(inicio.value == '' || fim.value == '' || passo.value == '')
    window.alert('[ERRO] - Todos os campos devem ser preenchidos!')
    else
        if(Number(inicio.value) > Number(fim.value) && Number(passo.value) > 0)
            window.alert('Se o número inicial for MAIOR que o final, o Passo deve ser negativo!')
    else 
        if(Number(inicio.value) < Number(fim.value) && Number(passo.value) < 0)
            window.alert('Para número inicial MENOR que número final, o Passo deve ser positivo!')
    else{
        var contador = 0

        if(passo.value == 0){
            window.alert('O passo não pode ser zero! Foi considerado o Passo igual a 1.')
            passo.value = 1
        }

        if(Number(inicio.value) < Number(fim.value)){
            for(contador = Number(inicio.value); contador <= Number(fim.value); contador += Number(passo.value))
                resposta.innerHTML += `Contagem: ${contador}<br>`
        }
        
        if(Number(inicio.value) > Number(fim.value)){
            for(contador = Number(inicio.value); contador >= Number(fim.value); contador += Number(passo.value))
                resposta.innerHTML += `Contagem: ${contador}<br>`
        }
    }
}