const resultados = JSON.parse(sessionStorage.getItem('resultados'));
document.getElementById('p1').value = resultados.pergunta1.texto;
document.getElementById('p2').value = resultados.pergunta2.texto;
document.getElementById('p3').value = resultados.pergunta3.texto;
document.getElementById('p4').value = resultados.pergunta4.texto;
document.getElementById('p5').value = resultados.pergunta5.texto;

let pontos = {
    fogo: 0,
    agua: 0,
    grama: 0,
    eletrico: 0
};

const pesos = {
    pergunta1: 1,
    pergunta2: 1,
    pergunta3: 2,
    pergunta4: 3,
    pergunta5: 3
};

for(let pergunta in resultados){
    let elemento = resultados[pergunta].elemento;
    pontos[elemento] += pesos[pergunta];
}

let vencedor = "";
let maiorPontuacao = 0;

for(let elemento in pontos){

    if(pontos[elemento] > maiorPontuacao){
        maiorPontuacao = pontos[elemento];
        vencedor = elemento;
    }
}

let btn = document.getElementById('botao-confirmacao')
btn.addEventListener('click',telaFinal)

function telaFinal(){
     if(vencedor == "fogo"){
         window.location.href = "../views/telaFogo.html"
     }
     if(vencedor == "agua"){
         window.location.href = "../views/telaAgua.html"
     }
     if(vencedor == "grama"){
         window.location.href = "../views/telaGrama.html"
     }
     if(vencedor == "eletrico"){
         window.location.href = "../views/telaEletrico.html"
     }
}
console.log(vencedor)