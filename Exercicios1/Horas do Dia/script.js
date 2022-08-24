var msg = document.getElementById('msg')
var imagem = document.getElementById('imagem')
var hora = new Date().getHours()
//var agora = new Date()
//var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if(hora < 12){
    msg.innerText = `Agora são ${hora} horas. Bom Dia!`
    imagem.innerHTML = '<img src="manha.png" alt="foto-do-dia">'
} 
else if (hora < 18){
    msg.innerText = `Agora são ${hora} horas. Boa Tarde!`
    imagem.innerHTML = '<img src="tarde.png" alt="foto-do-dia">'
    document.body.style.background = '#ff7b00'
}
else{
    msg.innerText = `Agora são ${hora} horas. Boa Noite!`
    imagem.innerHTML = '<img src="noite.png" alt="foto-do-dia">'
    document.body.style.background = 'rgb(35, 55, 77)'
}