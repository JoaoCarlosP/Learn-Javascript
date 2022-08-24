function tabuada(){
    let numero = document.getElementById('numero')
    let tab = document.getElementById('tab')
    tab.innerHTML = ''

    if(numero.value.length == 0)
        window.alert('Por favor, digite um número!')
    else{
        let num = Number(numero.value)
        let c = 1;

        while(c<=10){
            let item = document.createElement('option')

            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`                  //Os itens devem ter value, outras linguag. fazem uso

            tab.appendChild(item)

            c++
        }
    }
}