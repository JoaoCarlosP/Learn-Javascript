//Criando um vetor e inserindo elementos
let vetorA = [1,4,3]
console.log(vetorA)

//Posicionando os elementos em ordem crescente
vetorA.sort()
console.log('\nOrdem crescente: ' + vetorA +'\n')

//Incrementando mais um elemento
vetorA[3] = 7
console.log('Incrementando mais um elemento manualmente: ' + vetorA)


//Incrementando mais um elemento na última posição
vetorA.push(9)
console.log('Incrementando mais um elemento com push: ' + vetorA)


//Verificando o numero de elementos de um vetor
console.log('\nNúmero de elementos no vetor: ' + vetorA.length + '\n')
