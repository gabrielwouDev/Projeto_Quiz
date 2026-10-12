let usuario = document.querySelector('#idUsuario')
let modal = document.querySelector('.editar-dialog')
let btnEditar = document.querySelector('.editar')
let btnCancelar = document.querySelector('.cancelar')
let btnConfirmar = document.querySelector('.confirmar')

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')
const p5 = document.getElementById('p5')

function calculaVencedor() {
    let pontos = { fogo: 0, agua: 0, grama: 0, eletrico: 0 }
    const pesos = { p1: 1, p2: 1, p3: 2, p4: 3, p5: 3 }

    for (let id in pesos) {
        let elemento = document.getElementById(id).value
        pontos[elemento] += pesos[id]
    }

    let vencedor = ""
    let maiorPontuacao = 0

    for (let elemento in pontos) {
        if (pontos[elemento] > maiorPontuacao) {
            maiorPontuacao = pontos[elemento]
            vencedor = elemento
        }
    }
    return vencedor
}

btnEditar.addEventListener('click', () => modal.showModal())
btnConfirmar.addEventListener('click', editarRespostas)


async function editarRespostas(){
    let url = ("http://localhost:3000/atualizarRespostas");

    let object = {
        'resposta1': p1.options[p1.selectedIndex].text,
        'resposta2': p2.options[p2.selectedIndex].text,
        'resposta3': p3.options[p3.selectedIndex].text,
        'resposta4': p4.options[p4.selectedIndex].text,
        'resposta5': p5.options[p5.selectedIndex].text,
        'resultado':  calculaVencedor(),
        'idUsuario': usuario.value
    }
   
    const options = { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        method: "PUT", 
        body: JSON.stringify(object) 
    }

    let resp = await fetch(url, options)
    let dados = await resp.json()

    alert('Respostas atualizadas com sucesso!')
    modal.close()
}


btnCancelar.addEventListener('click',()=>{
    modal.close()
})