
let btn = document.querySelector('.avancar')

btn.addEventListener('click',exibir)

function exibir(){
    let escolha = document.querySelector('input[name="escolha"]:checked')
    if(escolha === null){
        alert("Escolha uma alternativa!")
    }
    let alternativa = escolha.parentElement.querySelector('img')?.alt || escolha.parentElement.querySelector('h2')?.textContent;
    let resultados = JSON.parse(sessionStorage.getItem('resultados')) || {};
    resultados[nPergunta] = {
        texto: alternativa,
        elemento: escolha.value
    }
    sessionStorage.setItem('resultados', JSON.stringify(resultados))
    window.location.href = proximaPagina;                     
}



