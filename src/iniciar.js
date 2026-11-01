function iniciar(){
    const resultados = JSON.parse(sessionStorage.getItem('resultados'));
    const usuario = JSON.parse(sessionStorage.getItem('pessoa'))

    if(nPergunta === "pergunta1" && usuario){
        return;
    } 

    if (!resultados || !usuario){
        alert("Você não passou pelo fluxo correto do site, tente novamente")
        window.location.href = '../../index.html'
    }
}

export{iniciar}