let usuario = document.querySelector('#idUsuario-deletar')
let modal = document.querySelector('.deletar-dialog')
let btnDeletar = document.querySelector('.deletar')
let btnCancelar = document.querySelector('.cancelar-deletar')
let btnConfirmar = document.querySelector('.confirmar-deletar')


btnDeletar.addEventListener('click', () => modal.showModal())
btnConfirmar.addEventListener('click', confirmarExclusao)
btnCancelar.addEventListener('click', ()=>  modal.close())

async function confirmarExclusao(){
    let url = ("http://localhost:3000/deletarUsuario");

    let object = {
        'idUsuario': usuario.value
    }
   
    const options = { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        method: "DELETE", 
        body: JSON.stringify(object) 
    }

    let resp = await fetch(url, options)
    let dados = await resp.json()

    if (!resp.ok) {
        alert(dados.erro)
        return
    }
    
    alert(dados.mensagem)
    modal.close()
}