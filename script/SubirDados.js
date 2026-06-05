
let btn = document.querySelector('.avancar')

btn.addEventListener('click',exibir)

function exibir(){
    let escolha = document.querySelector('input[name="escolha"]:checked')
    let alternativa = escolha.parentElement.querySelector('h2').textContent;
    let resultados = JSON.parse(sessionStorage.getItem('resultados')) || {};
    resultados[nPergunta] = {
        texto: alternativa,
        elemento: escolha.value
    }
    sessionStorage.setItem('resultados', JSON.stringify(resultados))
    window.location.href = proximaPagina;                     
}



