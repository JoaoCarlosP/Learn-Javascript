function soma(n1=0, n2=0){  //caso não tenha passado um dos numeros, ele será considerado valor 0
    return n1+n2
}

let teste = soma(4)
console.log(teste)

//================== Variavel que recebe função ==========

let variavel = function(numero){
    return numero * 2
}

console.log(variavel(5))    //Variavel é passada junto com um parâmetro