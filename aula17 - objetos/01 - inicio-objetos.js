let amigo = {
    nome: 'João', 
    sexo: 'M', 
    idade: 19, 
    peso: 61.5,
    engordar(p){
        console.log('Engordou')
        this.peso = this.peso + p
    } 
}

console.log(`${amigo.nome} pesava ${amigo.peso} kg`)
amigo.engordar(3)
console.log(`Agora pesa ${amigo.peso} kg`)