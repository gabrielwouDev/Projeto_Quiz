const resultados = JSON.parse(sessionStorage.getItem('resultados'));
const usuario = JSON.parse(sessionStorage.getItem('pessoa')) 

document.getElementById('p1').value = resultados.pergunta1.elemento;
document.getElementById('p2').value = resultados.pergunta2.elemento;
document.getElementById('p3').value = resultados.pergunta3.elemento;
document.getElementById('p4').value = resultados.pergunta4.elemento;
document.getElementById('p5').value = resultados.pergunta5.elemento;

let selects = document.querySelectorAll('select')
selects.forEach(select =>{
    const pergunta = 'pergunta' + select.id.replace('p', ''); 

    select.addEventListener('change', () => {
        const novoElemento = select.value; 
        const novoTexto = select.options[select.selectedIndex].text;

        resultados[pergunta] = {
            texto: novoTexto,
            elemento: novoElemento
        };

        sessionStorage.setItem('resultados', JSON.stringify(resultados));
    });
})

function calculaVencedor(){
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
    return vencedor;
}

let btn = document.getElementById('botao-confirmacao')
btn.addEventListener('click',telaFinal)

async function telaFinal(){
    let url = ("http://localhost:3000/InserirUsuario");

    let object = {
        'nome': usuario.nome,
        'email': usuario.email,
        'endereco': usuario.endereco,
        'genero': usuario.genero,
        'estado': usuario.estado,
        'resultado':  calculaVencedor()
    }
   
    const options = { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        method: "POST", 
        body: JSON.stringify(object) 
    }

    let resp = await fetch(url, options)
    let dados = await resp.json()
    
    if(calculaVencedor() == "fogo"){
        window.location.href = "../views/telaFogo.html"
    }
    if(calculaVencedor() == "agua"){
        window.location.href = "../views/telaAgua.html"
    }
    if(calculaVencedor() == "grama"){
        window.location.href = "../views/telaGrama.html"
    }
    if(calculaVencedor() == "eletrico"){
        window.location.href = "../views/telaEletrico.html"
    }

}

