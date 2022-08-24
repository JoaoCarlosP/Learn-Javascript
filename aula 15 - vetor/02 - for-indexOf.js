//============== Vetor com estrutura de repetição =============

let vetorB = [10,30,50]

for(let i=0; i<vetorB.length; i++)
    console.log(`Posição ${i} do vetorB - valor = ${vetorB[i]}`)

console.log('\n')
//------ Outra forma de fazer o FOR

let vetorC = [3,6,80]

for(let j in vetorC)
    console.log(`Posição ${j} do vetorC - valor = ${vetorC[j]}`)



//=============== Buscando valores de um vetor ================

let pesquisa = vetorB.indexOf(30)   //Retorna o indice do valor!
console.log(`\nO valor 30 se encontra no indice ${pesquisa} do vetorB`)

console.log('\n')
pesquisa = vetorC.indexOf(75)   //Se não encontrar o valor, irá retornar -1
console.log(`Valor 75 não existe no vetorC, portanto é retornado o indice ${pesquisa}`)
console.log('\n')