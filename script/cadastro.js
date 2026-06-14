let btn = document.querySelector('.avancar')

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
    location.href = '../views/Confirmar-cadastro.html'
}