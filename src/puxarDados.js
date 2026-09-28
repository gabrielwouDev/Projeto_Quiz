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

    let url2 = ("http://localhost:3000/InserirRespostas");

    let Respostas = {
        'resposta1': resultados.pergunta1.texto,
        'resposta2': resultados.pergunta2.texto,
        'resposta3': resultados.pergunta3.texto,
        'resposta4': resultados.pergunta4.texto,
        'resposta5': resultados.pergunta5.texto,
        'idUsuario': ultimo_id,
    }
   
    const options2 = { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        method: "POST", 
        body: JSON.stringify(Respostas) 
    }

    let resp2 = await fetch(url2, options2)
    let dados2 = await resp2.json()


    if(calculaVencedor() == "fogo"){
        window.location.href = "../resultados/telaFogo.html"
    }
    if(calculaVencedor() == "agua"){
        window.location.href = "../resultados/telaAgua.html"
    }
    if(calculaVencedor() == "grama"){
        window.location.href = "../resultados/telaGrama.html"
    }
    if(calculaVencedor() == "eletrico"){
        window.location.href = "../resultados/telaEletrico.html"
    }

}

