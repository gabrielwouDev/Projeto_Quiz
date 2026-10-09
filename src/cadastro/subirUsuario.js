let btn = document.querySelector('.avancar')
let modal = document.querySelector('dialog')
let spans = document.querySelectorAll('.dados-dialog')

btn.addEventListener('click', pegarDados)

function pegarDados(){
    let form = document.querySelector('form')
    let pessoa = {
        nome: form.nome.value,
        email: form.email.value,
        endereco: form.endereco.value,
        genero: form.genero.value,
        estado: form.estado.value
    }

    sessionStorage.pessoa = JSON.stringify(pessoa)

    spans[0].textContent = pessoa.nome
    spans[1].textContent = pessoa.email
    spans[2].textContent = pessoa.endereco
    spans[3].textContent = pessoa.estado
    spans[4].textContent = pessoa.genero

    modal.showModal();
    
}

let voltar = document.querySelector('.voltar')

voltar.addEventListener('click',()=>{
    modal.close()
})

let iniciar = document.querySelector('.iniciar')

iniciar.addEventListener('click',()=>{
    window.location.href = "../../views/fases/fase1.html"
})