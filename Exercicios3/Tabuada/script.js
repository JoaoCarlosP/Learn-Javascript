let txtValor = document.getElementById('numero')
let tab = document.getElementById('tab')
let valores = []
let res = document.getElementById('res')

function verifNumero(num){
    if(Number(txtValor.value) < 1 || Number(txtValor.value) > 100)
        return true
    else
        return false
}

function verifValores(n, list){
    if(valores.indexOf(Number(txtValor.value)) != -1)
        return true
    else
        return false
}

function adicionar(){
    if(txtValor.value.length == 0){
        window.alert('Por favor, digite um número')
    } 
    else if(verifNumero(txtValor.value)){             //Verifica se é número
        window.alert('Só pode adicionar valores de 1 a 100')
    } 
    else if(verifLista(txtValor.value, valores)){     //Verifica se está na lista
        window.alert('Este número já foi adicionado')
    } 
    else{
        valores.push(Number(txtValor.value))    //adiciona o novo elemento no vetor
        
        let item = document.createElement('option') //cria item
        item.text = `Valor ${txtValor.value} adicionado`  //item recebe valor digitado
        tab.appendChild(item)                       //adiciona item na lista/tabela
        res.innerHTML = ''          //Limpa a resposta quando outro valor adicionado
    }
    txtValor.value = ''
    txtValor.focus()
}

function maior(vetor){
    let maiorvalor = vetor[0]

    for(let i in vetor){
        if(vetor[i] >= maiorvalor)
            maiorvalor = vetor[i]
    }
    return maiorvalor
}

function menor(vetor){
    let menorvalor = vetor[0]

    for(let i in vetor){
        if(vetor[i] <= menorvalor)
            menorvalor = vetor[i]
    }
    return menorvalor
}

function soma(vetor){
    let add = 0
    for(let i=0; i<vetor.length;i++)
        add += vetor[i]

    return add
}
    
function finalizar(){
    let tamanho = valores.length
    if(tamanho == 0)
        window.alert('Por favor, insira valores para a tabela!')
    else{
        res.innerHTML = ''
        res.innerHTML += `<p>Quantidade de itens: ${valores.length}</p>`
        res.innerHTML += `<p>O valor do maior item é: ${maior(valores)}</p>`
        res.innerHTML += `<p>O valor do menor item é: ${menor(valores)}</p>`
        res.innerHTML += `<p>O soma dos valores é: ${soma(valores)}</p>`
        res.innerHTML += `<p>O média de todos os valores é: ${soma(valores) / tamanho}</p>`
    }
}