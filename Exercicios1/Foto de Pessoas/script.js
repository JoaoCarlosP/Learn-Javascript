function verificar(){
    var data = new Date()
    var ano = data.getFullYear()                    //ano atual
    var fano = document.getElementById('txtano')    //ano digitado no formulário
    var res = document.getElementById('resposta')   //resposta

    //================== Verificação das informações preenchidas ================
    if(fano.value == '' || Number(fano.value) > ano){
        window.alert('ERRO! Verifique se as informações estão preenchidas corretamente!')
    }
    else{
        var idade = ano - Number(fano.value)

        var fsex = document.getElementsByName('radsex')     //Sexo selecionado no formulário
        var genero = ''

        var foto = document.createElement('img')        //Variável irá receber a criação de um elemento do tipo 'img'
        foto.setAttribute('id', 'imagem')               //atribuindo um id nesse elemento

        if(fsex[0].checked){        //Verficação do sexo!
            genero = 'Homem'

            if(idade >= 0 && idade < 3){
                //bebe
                foto.setAttribute('src', 'images/homem-bebe.jpg')   //=== irá atribuir na variável foto uma imagem ===
            } else if(idade < 12){
                //criança
                foto.setAttribute('src', 'images/homem-crianca.jpg')
            } else if(idade < 21){
                //jovem
                foto.setAttribute('src', 'images/homem-jovem.jpg')
            } else if( idade < 50){
                //adulto
                foto.setAttribute('src', 'images/homem-adulto.jpg')
            }  else{
                //idoso
                foto.setAttribute('src', 'images/homem-idoso.jpg')
            }
        }
        else{
            genero = 'Mulher'

            if(idade >= 0 && idade < 3){
                //bebe
                foto.setAttribute('src', 'images/mulher-bebe.jpg')
            }
            else if(idade < 12){
                //criança
                foto.setAttribute('src', 'images/mulher-crianca.jpg')
            } 
            else if(idade < 21){
                //jovem
                foto.setAttribute('src', 'images/mulher-jovem.jpg')
            } 
            else if( idade < 50){
                //adulto
                foto.setAttribute('src', 'images/mulher-adulta.jpg')
            }  
            else{
                //idoso
                foto.setAttribute('src', 'images/mulher-idosa.jpg')
            }
        }

        res.style.textAlign = 'center'          
        var texto = document.getElementById('texto')
        texto.innerHTML = `Detectamos: ${genero} de ${idade} anos.<br>`
        texto.append(foto)          //inserindo o elemento criado => variavel 'foto'
        foto.style.marginTop = '20px'
    }
}